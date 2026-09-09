---
description: "환경별 설정·시크릿 관리 패턴 — 계층형 우선순위, ENV 스위치, 클라우드 시크릿 매니저, 로컬 오프라인 실행"
paths:
  - "**/config*.py"
  - "**/configs/**"
  - "**/settings*.py"
---

# 환경 설정 & 시크릿 관리

여러 환경(로컬·dev·prod)의 설정과 비밀값을 **한 코드로** 다루는 패턴.
핵심 아이디어 두 가지:

1. **계층형 우선순위** — 값을 여러 소스에서 순서대로 찾는다. 위 계층이 아래를 덮어쓴다.
2. **비밀값은 코드/레포에 두지 않는다** — dev·prod 시크릿은 클라우드 시크릿 매니저에, 로컬만 파일에.

> 이 문서는 특정 클라우드에 종속되지 않는다. 예시는 AWS Secrets Manager + ECS 기준이지만,
> GCP Secret Manager · Vault · Doppler 등으로 치환해도 구조는 동일하다.

---

## 1. 계층형 설정 우선순위

설정 조회는 단일 `Config` 객체를 통하고, 아래 순서로 값을 해석한다.

```
① 환경변수 (process env)          ← 최우선. 일회성 override·CI 주입
   ↓ 없으면
② 클라우드 시크릿 매니저            ← dev·prod 비밀값 (DB 접속·서명키 등)
   ↓ 없으면
③ configs/{ENV}.json              ← 환경별 파일
   ↓ 없으면
④ configs/base.json               ← 전 환경 공통 기본값
```

- 위 계층에서 값을 찾으면 즉시 반환, 아래는 보지 않는다.
- 환경변수에서 읽은 값은 항상 문자열 — 숫자·불리언은 호출부에서 변환한다.
- 마이그레이션 툴(alembic 등)도 **같은 `Config` 로더**를 쓴다. 설정 경로를 하나로 유지해 앱과 마이그레이션의 DB 주소가 갈라지지 않게 한다.

```python
class Config:
    def get(self, key, default=None):
        if (v := os.environ.get(key)) is not None:  # ① 환경변수
            return v
        if key in self._secret_values:               # ② 시크릿 매니저
            return self._secret_values[key]
        return self._file_values.get(key, default)   # ③④ 파일(base→{ENV} 병합)
```

## 2. ENV 스위치 — "지금 어느 환경이냐"

환경 선택은 **`ENV` 환경변수 하나**로 한다. 안전한 기본값을 코드에 둔다.

```python
config = load_config(os.environ.get("ENV", "dev"))  # 미지정 시 dev
```

| ENV | 의미 | 클라우드 계정 |
|-----|------|--------------|
| `local` | 완전 오프라인 개발 | ❌ 불필요 |
| `dev` | 공유 개발 환경 | ✅ dev 시크릿 |
| `prod` | 운영 | ✅ prod 시크릿 |

`ENV` 를 어디서 세팅하나:
- **로컬**: 실행 시 `ENV=local` 또는 미지정(기본 dev)
- **프로덕션 컨테이너**: 오케스트레이터(ECS task definition 등)의 환경변수에 `ENV=prod`

## 3. configs 파일 배치 — local vs dev/prod의 결정적 차이

핵심 규칙: **`local` 만 값을 파일에 담고, `dev`/`prod` 는 "시크릿 어디서 읽어라"만 담는다.**

```jsonc
// configs/base.json — 전 환경 공통·비밀 아님
{ "ACCESS_CONTROL_ALLOW_ORIGINS": "http://localhost:3000" }

// configs/local.json — 실제 값 그대로 (비밀 아닌 로컬 전용) → 오프라인 실행 가능
{ "SECRET_KEY": "test",
  "DATABASE_URL": "postgresql+asyncpg://user:pass@localhost:5432/app" }

// configs/dev.json / prod.json — 시크릿 "포인터"만. 실제 값 없음
{ "CLOUD_SECRET_NAME": "dev/app", "CLOUD_REGION": "ap-northeast-2" }
```

→ dev·prod 의 `SECRET_KEY`·`DATABASE_URL` 은 파일이 아니라 **클라우드 시크릿 매니저 안**에 있다.
그래서 **dev/prod 설정 변경은 코드가 아니라 클라우드 콘솔에서** 한다.

## 4. 클라우드 시크릿 매니저 연동 — graceful degradation

시크릿은 `{"KEY": "value", ...}` JSON 객체로 저장하고, 통째로 한 계층으로 병합한다.

```python
def load_config(env, ...):
    file_values = merge(base_json, env_json)          # ④③
    secret_name = env_or_file("CLOUD_SECRET_NAME")    # 시크릿 이름 해석
    secret_values = fetch_secret(secret_name) if secret_name else {}  # ②
    return Config(file_values, secret_values)
```

- **이름이 비어있으면 시크릿 계층을 건너뛴다** (로컬 기본 동작).
- **조회가 실패해도(자격증명·네트워크) 빈 dict + 경고만** 남긴다. 오프라인에서도 파일값만으로 기동하게 하려는 의도.

```python
def fetch_secret(name, region=None):
    try:
        return json.loads(client.get_secret_value(SecretId=name)["SecretString"])
    except (BotoCoreError, ClientError) as e:
        print(f"[config] secret 조회 실패 ({name}): {e}", file=sys.stderr)
        return {}   # 죽지 않고 빈 계층으로
```

> ⚠️ graceful degradation 의 함정: dev/prod 에서 시크릿 조회가 조용히 실패하면,
> 필수값이 비어 **부팅 시점**에 터진다(§5). 이건 의도된 것 — 런타임 중간이 아니라
> 시작할 때 실패를 드러낸다.

## 5. `get` vs `must_get` — 필수값은 부팅 때 터뜨린다

```python
config.get("SERVICE_DOMAIN")            # 선택값 — 없으면 None/default
config.must_get("DATABASE_URL")         # 필수값 — 없으면 즉시 KeyError
```

`must_get` 은 어디에도 값이 없으면 **부팅 즉시 예외**를 던져, 설정 누락을 배포 시점에 드러낸다.
런타임 한참 뒤 첫 요청에서 터지는 것보다 훨씬 낫다. DB 주소·서명키 등 없으면 못 도는 값에 쓴다.

## 6. 로컬 개발 — 클라우드 계정 없이 (온보딩 핵심)

**클라우드 계정이 없어도 개발 가능해야 한다.** `ENV=local` 이 그 경로다.

```bash
docker compose up -d db                          # 로컬 DB
ENV=local <migrate>                              # 스키마
ENV=local <seed>                                 # 데모 데이터 (공유 DB 대체)
ENV=local <run server>                           # 실행
```

`local.json` 에 필수값이 다 있어 시크릿 조회를 아예 안 한다. 새 팀원 온보딩의 기본 경로.

| 하는 일 | 클라우드 필요? |
|---------|--------------|
| 로컬 기능 개발·테스트 | ❌ `ENV=local` |
| 공유 dev DB 실데이터 조회 | ✅ (또는 DATABASE_URL 직접 주입) |
| 배포 | ❌ 배포는 CI의 권한으로 (개발자 개인 계정 아님, §7) |

클라우드 없이 dev/prod "처럼" 돌리려면 시크릿 값을 환경변수로 직접 주입한다(①이 최우선):
```bash
ENV=dev SECRET_KEY=... DATABASE_URL=... <run>   # 시크릿 매니저 건너뜀
```

## 7. 배포 시 시크릿 흐름 — 개발자 계정을 태우지 않는다

컨테이너 배포 파이프라인. **정적 키를 CI에 두지 않고** OIDC 역할 위임을 쓴다.

```
git tag <deploy-tag>  →  push
   → CI (OIDC로 배포 역할 assume — 정적 액세스키 없음)
   → 이미지 빌드 → 컨테이너 레지스트리 push
   → 오케스트레이터(ECS 등) 서비스 배포 (기존 task def의 image만 교체)
```

- **트리거는 태그**(예: `be-prod-*`) — 브랜치 push 아님. 배포를 명시적 행위로 만든다.
- 런타임 `ENV=prod` 와 시크릿 접근 권한은 **오케스트레이터의 task role** 에 있다.
  CI는 이미지만 갈아끼우고, 컨테이너가 실행 중 자기 role 로 prod 시크릿을 읽는다.
- 즉 **비밀값은 CI 로그·이미지·레포 어디에도 안 남는다.**

## 8. 원칙 · 금지

- **시크릿을 레포에 커밋 금지.** dev/prod 비밀값은 시크릿 매니저에만. `local.json` 의 값은
  비밀이 아닌 로컬 더미여야 한다(`SECRET_KEY: "test"` 처럼).
- **환경별 서명키(SECRET_KEY 등)는 다르게.** 한 환경 쿠키/토큰이 다른 환경에서 안 먹혀야 한다.
  운영 서명키를 바꾸면 전 유저 세션이 무효화됨을 인지.
- **필수값은 `must_get`** 으로 부팅 때 검증. 선택값만 `get` + 기본값.
- **CI에 정적 클라우드 키 두지 말 것.** OIDC 역할 위임 사용.
- **앱과 마이그레이션은 같은 설정 로더** 를 공유해 DB 주소가 갈라지지 않게.
