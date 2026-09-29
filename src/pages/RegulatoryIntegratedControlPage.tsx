import {
  ArrowRight,
  ArrowsDownUp,
  Cube,
  Database,
  Eye,
  FilePlus,
  FileText,
  Flask,
  Globe,
  GlobeHemisphereWest,
  Lightbulb,
  Notebook,
  PaperPlaneTilt,
  Pulse,
  SealCheck,
  ShieldCheck,
  UserCircleGear,
  WarningCircle,
  XCircle,
} from "@phosphor-icons/react";

const euControlSteps = [
  { label: "규제 핵심·트렌드 파악", Icon: Eye },
  { label: "필수 소재·구성 요건 확인", Icon: Cube },
  { label: "TD·DoC·증빙서류 정리", Icon: FileText },
  { label: "제출 대응 및 바이어 대응", Icon: XCircle },
  { label: "사후 관리·업데이트", Icon: ArrowsDownUp },
] as const;

const usControlSteps = [
  { label: "시장별 요구사항 파악", Icon: Eye },
  { label: "소재·성분·패키지 요건 확인", Icon: Flask },
  { label: "필수 문서·증빙 준비", Icon: Notebook },
  { label: "등록/제출 대응", Icon: PaperPlaneTilt },
  { label: "변경 사항 모니터링", Icon: Pulse },
] as const;

const globalControlSteps = [
  { label: "국가별 기준 파악", Icon: GlobeHemisphereWest },
  { label: "기존 데이터 재활용", Icon: Database },
  { label: "추가 서류 보완", Icon: FilePlus },
  { label: "확장 제출 대응", Icon: PaperPlaneTilt },
  { label: "지속 대응 체계화", Icon: ShieldCheck },
] as const;

const ppwrProcessCards = [
  {
    title: "핵심 인사이트 빠른 정리",
    Icon: Lightbulb,
    items: [
      "PPWR 핵심 요구사항과 최신 트렌드 정리",
      "재활용성·재사용성·라벨링·재생원료 관련 체크",
      "실무자가 바로 이해할 수 있는 우선순위 정리",
    ],
  },
  {
    title: "필수 소재·제반 사항 파악",
    Icon: Cube,
    items: [
      "포장 구성, 소재, 중량, BOM, 도면 확인",
      "시험성적서·공급사 증빙·사양서 점검",
      "부족한 항목과 추가 확보 필요 사항 진단",
    ],
  },
  {
    title: "필수 서류 및 제출 준비",
    Icon: FileText,
    items: ["TD 작성 및 정리", "DoC 작성 및 발급 지원", "제출용 증빙 패키지 구성", "실제 제출 대응 흐름 연결"],
  },
  {
    title: "제출 이후 사후 관리까지",
    Icon: ShieldCheck,
    items: ["규제 변경 모니터링", "문서 수정·보완 관리", "추가 대응 컨설팅", "지속 가능한 수출 인프라 운영"],
  },
] as const;

const controlDifferenceCards = [
  {
    title: "규제 마스터 전문가",
    description: "지역별 규제 이슈를 통합적으로 해석",
    Icon: UserCircleGear,
  },
  {
    title: "문서와 데이터의 연결",
    description: "서류 발급이 끝이 아니라 데이터 자산화",
    Icon: Database,
  },
  {
    title: "실행 중심 대응",
    description: "필수 서류부터 제출 이후 관리까지",
    Icon: SealCheck,
  },
  {
    title: "글로벌 확장 기반",
    description: "EU 대응을 시작으로 미국·타 국가까지 확장",
    Icon: Globe,
  },
] as const;

export function RegulatoryIntegratedControlPage() {
  return (
    <main className="regulatory-control-page">
      <section className="regulatory-control-hero" aria-labelledby="regulatory-control-title">
        <div className="regulatory-control-hero__copy">
          <span className="regulatory-control-kicker">규제 마스터 솔루션</span>
          <h1 id="regulatory-control-title">
            EU PPWR부터 미국 규제까지,
            <br />
            <span>글로벌 규제 대응을</span>
            <br />
            <span>하나의 컨트롤 타워로 관리합니다.</span>
          </h1>
          <p>
            리스튜디오 규제 마스터 솔루션은 지역별 규제 흐름을 읽고,
            <br />
            필수 서류·소재·증빙·사후 관리까지 연결하여 실제 수출 가능한 상태로 완성합니다.
          </p>
        </div>

        <figure className="regulatory-control-hero__media">
          <img
            src="/assets/services/regulatory-control-hero-generated.png"
            alt="글로벌 지역별 규제 대응을 하나의 컨트롤 타워로 관리하는 비주얼"
            width={1680}
            height={960}
            loading="eager"
          />
        </figure>
      </section>

      <section className="regulatory-control-stage-section" aria-labelledby="regulatory-control-stage-title">
        <div className="regulatory-control-stage-section__inner">
          <span className="regulatory-control-stage-section__eyebrow">
            하나의 데이터 자산으로 글로벌 규제 대응 확장
          </span>
          <h2 id="regulatory-control-stage-title">글로벌 지역별 규제 대응 스테이지</h2>

          <div className="regulatory-control-stage-grid">
            <article className="regulatory-control-stage-card regulatory-control-stage-card--eu">
              <div className="regulatory-control-stage-card__head">
                <span className="regulatory-control-region-mark" aria-hidden="true">
                  <img src="/assets/flags/eu.svg" alt="" width={55} height={55} loading="lazy" />
                </span>
                <div>
                  <h3>EU 지역 | Priority NOW</h3>
                  <p>PPWR 중심 대응</p>
                </div>
              </div>

              <ol>
                {euControlSteps.map(({ label, Icon }, index) => (
                  <li key={label}>
                    <span className="regulatory-control-stage-card__number">{index + 1}</span>
                    <Icon size={21} weight="regular" aria-hidden="true" />
                    <strong>{label}</strong>
                  </li>
                ))}
              </ol>

              <p className="regulatory-control-stage-card__alert">
                <WarningCircle size={23} weight="regular" aria-hidden="true" />
                가장 시급한 대응 지역
              </p>
            </article>

            <ArrowRight className="regulatory-control-stage-grid__arrow" size={28} weight="bold" aria-hidden="true" />

            <article className="regulatory-control-stage-card">
              <div className="regulatory-control-stage-card__head">
                <span className="regulatory-control-region-mark" aria-hidden="true">
                  <img src="/assets/flags/us.svg" alt="" width={55} height={55} loading="lazy" />
                </span>
                <div>
                  <h3>미국 지역 | Next Priority</h3>
                  <p>MoCRA · FDA · 주별 규제 대응</p>
                </div>
              </div>

              <ol>
                {usControlSteps.map(({ label, Icon }, index) => (
                  <li key={label}>
                    <span className="regulatory-control-stage-card__number">{index + 1}</span>
                    <Icon size={21} weight="regular" aria-hidden="true" />
                    <strong>{label}</strong>
                  </li>
                ))}
              </ol>
            </article>

            <ArrowRight className="regulatory-control-stage-grid__arrow" size={28} weight="bold" aria-hidden="true" />

            <article className="regulatory-control-stage-card">
              <div className="regulatory-control-stage-card__head">
                <span className="regulatory-control-region-mark regulatory-control-region-mark--global">
                  <Globe size={28} weight="regular" aria-hidden="true" />
                </span>
                <div>
                  <h3>기타 글로벌 확장</h3>
                  <p>국가별 규제 확장 대응</p>
                </div>
              </div>

              <ol>
                {globalControlSteps.map(({ label, Icon }, index) => (
                  <li key={label}>
                    <span className="regulatory-control-stage-card__number">{index + 1}</span>
                    <Icon size={21} weight="regular" aria-hidden="true" />
                    <strong>{label}</strong>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section className="regulatory-control-ppwr-section" aria-labelledby="regulatory-control-ppwr-title">
        <div className="regulatory-control-ppwr-section__inner">
          <p className="regulatory-control-section-lead">
            EU PPWR를 시작으로, 복잡한 규제를 체계적인 프로세스로 단순하게
          </p>
          <h2 id="regulatory-control-ppwr-title">PPWR 규제 대응, 이렇게 관리합니다.</h2>

          <div className="regulatory-control-ppwr-headline">
            <div>
              <Database size={34} weight="regular" aria-hidden="true" />
              <h3>제품·패키지 데이터가 규제 대응의 입력값이 됩니다.</h3>
            </div>
            <ol aria-label="PPWR 규제 대응 프로세스">
              {["인사이트", "점검", "문서화", "제출", "사후 관리"].map((label, index) => (
                <li key={label}>
                  {label}
                  {index < 4 ? <ArrowRight size={18} weight="bold" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="regulatory-control-ppwr-grid">
            {ppwrProcessCards.map(({ title, Icon, items }, index) => (
              <article key={title} className="regulatory-control-ppwr-card">
                <div className="regulatory-control-ppwr-card__head">
                  <h3>{title}</h3>
                  <span>
                    <Icon size={25} weight="regular" aria-hidden="true" />
                  </span>
                </div>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {index < ppwrProcessCards.length - 1 ? (
                  <ArrowRight className="regulatory-control-ppwr-card__arrow" size={27} weight="bold" aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="regulatory-control-difference-section" aria-labelledby="regulatory-control-difference-title">
        <div className="regulatory-control-difference-section__inner">
          <h2 id="regulatory-control-difference-title">왜 리스튜디오의 규제 대응 컨트롤은 다른가요?</h2>

          <div className="regulatory-control-difference-grid">
            {controlDifferenceCards.map(({ title, description, Icon }) => (
              <article key={title}>
                <Icon size={45} weight="regular" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
