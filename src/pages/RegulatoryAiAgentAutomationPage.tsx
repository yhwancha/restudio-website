import {
  ArrowRight,
  CheckCircle,
  ClockCounterClockwise,
  CloudArrowUp,
  ClipboardText,
  Database,
  FileText,
  GearSix,
  Leaf,
  Lightbulb,
  MagnifyingGlass,
  Robot,
  ShieldCheck,
  SlidersHorizontal,
  Sparkle,
  Users,
  XCircle,
} from "@phosphor-icons/react";

const aiAgentFeatures = [
  {
    title: "규제 특화 AI",
    description: "친환경 규제와 제출 실무 중심으로 특화 학습",
    Icon: ShieldCheck,
  },
  {
    title: "데이터 자산화",
    description: "등록 정보와 문서를 재사용 가능한 자산으로 축적",
    Icon: Database,
  },
  {
    title: "자동 문서 작성",
    description: "TD·DoC 등 필수 서류를 상황별 맞춤 자동 작성",
    Icon: FileText,
  },
  {
    title: "업종별 맞춤화",
    description: "기업·브랜드·업종별 규제 맥락에 맞춰 개별 설계",
    Icon: SlidersHorizontal,
  },
  {
    title: "반복 입력 최소화",
    description: "한 번 등록한 정보로 후속 작업까지 스마트 연결",
    Icon: XCircle,
  },
  {
    title: "전문가 교차 검증",
    description: "휴먼 규제 전문가와 함께 더 정밀한 최종 검토",
    Icon: Users,
  },
] as const;

const aiAgentComparison = [
  {
    title: "리스튜디오 AI 에이전트",
    Icon: Sparkle,
    tone: "positive",
    items: [
      "친환경 규제 전문 지식",
      "제품개발 히스토리 기반 학습",
      "브랜드/기업별 맞춤 대응",
      "제출 서류 자동 작성",
      "후속 업무 자동화",
    ],
  },
  {
    title: "범용 AI",
    Icon: Robot,
    tone: "negative",
    items: [
      "일반적인 정보 검색 수준",
      "구조화된 문서 작성 불가",
      "브랜드·기업별 특화 기억 없음",
      "규제 전문성 부족",
      "후속 업무 연계 한계",
    ],
  },
] as const;

const aiAgentWorkSteps = [
  {
    step: "STEP 1",
    title: "정보 등록",
    Icon: ClipboardText,
    items: ["기업 정보", "제품 / SKU 정보", "패키지 소재 정보", "BOM / 도면", "시험성적서"],
  },
  {
    step: "STEP 2",
    title: "AI 심층 분석",
    Icon: MagnifyingGlass,
    items: ["규제 인사이트 분석", "핵심 체크포인트 도출", "필요 항목 확인", "누락 데이터 탐지"],
  },
  {
    step: "STEP 3",
    title: "필수 가이드 제시",
    Icon: Lightbulb,
    items: ["준비해야 할 사항 안내", "중요 소재·조건 제시", "우선순위 액션 제안", "맞춤 가이드 제공"],
  },
  {
    step: "STEP 4",
    title: "TD·DoC 자동 작성",
    Icon: FileText,
    items: ["기업·브랜드·업종별 맞춤 문서 생성", "TD·DoC 자동 작성", "제출 서류 세트 구성"],
  },
  {
    step: "STEP 5",
    title: "제출 대응 지원",
    Icon: CloudArrowUp,
    items: ["제출 패키지 정리", "필수 문서 세트 구성", "제출 요건 체크", "제출 전 최종 점검"],
  },
  {
    step: "STEP 6",
    title: "후속 작업 자동화",
    Icon: GearSix,
    items: ["수정 요청 대응", "업데이트 및 버전 관리", "추가 질의 대응", "규제 변경 모니터링"],
  },
] as const;

export function RegulatoryAiAgentAutomationPage() {
  return (
    <main className="regulatory-ai-agent-page">
      <section className="regulatory-ai-agent-hero" aria-labelledby="regulatory-ai-agent-title">
        <div className="regulatory-ai-agent-hero__copy">
          <p className="regulatory-ai-agent-hero__eyebrow">AI 에이전트 자동화</p>
          <h1 id="regulatory-ai-agent-title">
            범용 AI가 아닌, 규제 대응에 최적화된
            <br />
            <span>리스튜디오 AI 에이전트</span>
          </h1>
          <p className="regulatory-ai-agent-hero__description">
            리스튜디오의 AI 에이전트는 단순 검색형 AI가 아닙니다.
            <br />
            친환경 제품·패키지 개발 프로젝트에서 축적된 독보적인 히스토리, 인사이트, 데이터까지
            심층적으로 학습한 친환경 규제 전문 AI 시스템으로, 규제 대응 인사이트부터 필수 가이드,
            핵심 제출 서류 작성과 후속 업무까지 빠르고 체계적으로 지원합니다.
          </p>
          <div className="regulatory-ai-agent-hero__note">
            한 번 등록한 정보로, 이후 규제 대응의 모든 후속 작업까지 더 빠르고 더 편리하게.
          </div>
        </div>

        <div className="regulatory-ai-agent-browser" aria-label="리스튜디오 AI 에이전트 대시보드 예시">
          <div className="regulatory-ai-agent-browser__topbar">
            <div className="regulatory-ai-agent-browser__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <strong>SUSTAINABLE COMPLIANCE AI</strong>
          </div>

          <div className="regulatory-ai-agent-browser__body">
            <aside className="regulatory-ai-agent-browser__nav" aria-label="AI 에이전트 메뉴">
              {[
                { label: "친환경 규제 대응", active: true, Icon: Leaf },
                { label: "제품 정보", active: false, Icon: FileText },
                { label: "규제 분석", active: false, Icon: ClockCounterClockwise },
                { label: "문서 생성", active: false, Icon: Database },
                { label: "후속 모니터링", active: false, Icon: SlidersHorizontal },
              ].map(({ label, active, Icon }) => (
                <span className={active ? "is-active" : ""} key={label}>
                  <Icon size={17} weight="regular" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </aside>

            <section className="regulatory-ai-agent-browser__panel" aria-label="유럽 PPWR 대응 진단 결과">
              <div className="regulatory-ai-agent-browser__panel-head">
                <h2>AI 규제 자동화 워크스페이스</h2>
                <span>분석 완료</span>
              </div>
              <div className="regulatory-ai-agent-browser__result">
                <div className="regulatory-ai-agent-browser__score-card" aria-hidden="true">
                  <strong>98%</strong>
                  <span>PPWR 적합도</span>
                </div>
                <div>
                  <p>제품·패키지 데이터 자동 분석</p>
                  <strong>EU PPWR</strong>
                  <em>제출 기준 충족 가능성 높음</em>
                </div>
              </div>
              <div className="regulatory-ai-agent-browser__automation">
                <article>
                  <span>01</span>
                  <strong>누락 데이터 탐지</strong>
                  <p>BOM·소재·시험성적서 체크</p>
                </article>
                <article>
                  <span>02</span>
                  <strong>TD·DoC 초안 생성</strong>
                  <p>제출 문서 자동 구성</p>
                </article>
                <article>
                  <span>03</span>
                  <strong>후속 변경 추적</strong>
                  <p>규제 업데이트 모니터링</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="regulatory-ai-agent-feature-section" aria-label="AI 에이전트 자동화 핵심 기능">
        <div className="regulatory-ai-agent-feature-grid">
          {aiAgentFeatures.map(({ title, description, Icon }) => (
            <article key={title}>
              <span>
                <Icon size={34} weight="regular" aria-hidden="true" />
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="regulatory-ai-agent-compare-section" aria-labelledby="regulatory-ai-agent-compare-title">
        <div className="regulatory-ai-agent-compare-section__inner">
          <div className="regulatory-ai-agent-compare-section__copy">
            <h2 id="regulatory-ai-agent-compare-title">
              왜 리스튜디오 AI 에이전트는
              <br />
              다를까요?
            </h2>
            <p>
              친환경 제품·패키지 개발 데이터와 규제 대응 인사이트가 축적된,
              <br />
              리스튜디오만의 규제 특화 AI 에이전트입니다.
            </p>
          </div>

          <div className="regulatory-ai-agent-compare-grid">
            {aiAgentComparison.map(({ title, Icon, tone, items }) => (
              <article className={`is-${tone}`} key={title}>
                <div className="regulatory-ai-agent-compare-card__head">
                  <Icon size={25} weight="regular" aria-hidden="true" />
                  <h3>{title}</h3>
                </div>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      {tone === "positive" ? (
                        <CheckCircle size={21} weight="bold" aria-hidden="true" />
                      ) : (
                        <XCircle size={21} weight="bold" aria-hidden="true" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="regulatory-ai-agent-work-section" aria-labelledby="regulatory-ai-agent-work-title">
        <div className="regulatory-ai-agent-work-section__inner">
          <div className="regulatory-ai-agent-work-section__head">
            <h2 id="regulatory-ai-agent-work-title">규제 마스터 솔루션에서 AI 에이전트가 하는 일</h2>
            <p>제품 개발부터 수출까지, AI 에이전트가 전 과정을 함께합니다.</p>
          </div>

          <ol className="regulatory-ai-agent-work-grid">
            {aiAgentWorkSteps.map(({ step, title, Icon, items }) => (
              <li key={step}>
                <article>
                  <div className="regulatory-ai-agent-work-card__head">
                    <div>
                      <span>{step}</span>
                      <h3>{title}</h3>
                    </div>
                    <Icon size={27} weight="regular" aria-hidden="true" />
                  </div>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>

          <div className="regulatory-ai-agent-work-flow" aria-label="AI 에이전트 지원 흐름">
            <strong>심층 진단 리포팅</strong>
            <ArrowRight size={22} weight="bold" aria-hidden="true" />
            <strong>TD·DoC 작성 및 발급</strong>
            <ArrowRight size={22} weight="bold" aria-hidden="true" />
            <strong>후속 관리</strong>
            <span>AI 에이전트가 처음부터 끝까지 지원합니다.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
