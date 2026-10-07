import {
  ArrowRight,
  ArrowUpRight,
  ChartLineUp,
  ClipboardText,
  Cube,
  FileText,
  GearSix,
  Globe,
  Info,
  Leaf,
  LinkSimple,
  ListBullets,
  MagnifyingGlass,
  MapTrifold,
  Package,
  ShieldCheck,
  UploadSimple,
} from "@phosphor-icons/react";

const productDevelopmentItems = [
  { label: "제품 기획", Icon: ListBullets },
  { label: "패키지 설계", Icon: Cube },
  { label: "소재 개발", Icon: Leaf },
  { label: "시제품·양산 준비", Icon: GearSix },
] as const;

const masterSolutionSteps = [
  {
    number: "1",
    title: "심층 진단",
    description: "AI Agent 1차 진단 +\n전문가 2차 정밀 검토",
    Icon: MagnifyingGlass,
  },
  {
    number: "2",
    title: "TD·DoC 작성",
    description: "핵심 규제 문서\n자동 작성 지원",
    Icon: FileText,
  },
  {
    number: "3",
    title: "제출 대응",
    description: "실제 제출 가능한\n형태로 정리 / 발급",
    Icon: ArrowUpRight,
  },
  {
    number: "4",
    title: "후속 관리",
    description: "규제 변동 모니터링 /\n문서 업데이트 / 추가 컨설팅",
    Icon: GearSix,
  },
] as const;

const exportResultItems = [
  { label: "글로벌 수출 대응 완료", Icon: Globe },
  { label: "더 빠른 출시", Icon: ListBullets },
  { label: "비용 절감", Icon: LinkSimple },
  { label: "지속 가능한 수출 인프라", Icon: ShieldCheck },
] as const;

const accumulatedDataItems = [
  { label: "제품 정보", Icon: Cube },
  { label: "패키지 사양", Icon: Package },
  { label: "소재 정보", Icon: Info },
  { label: "BOM / 도면", Icon: MapTrifold },
  { label: "시험성적서", Icon: ClipboardText },
] as const;

const regulatoryEngineItems = [
  { label: "현황 진단", Icon: MagnifyingGlass },
  { label: "리포트", Icon: ChartLineUp },
  { label: "문서화", Icon: ClipboardText },
  { label: "발급·제출", Icon: UploadSimple },
  { label: "후속 관리", Icon: GearSix },
] as const;

const onestopBenefitCards = [
  {
    title: "더 빠른 출시",
    description: "개발과 규제를 따로 관리하지 않아 대응 기간을 획기적으로 단축합니다.",
    Icon: Leaf,
    tone: "green",
  },
  {
    title: "중복 비용 절감",
    description: "재작업과 분절된 외부 대응 비용을 줄이고 자산화합니다.",
    Icon: LinkSimple,
    tone: "yellow",
  },
  {
    title: "지속 가능한 대응 체계",
    description: "한 번 구축한 데이터와 서류를 기반으로 반복 대응 및 규제 모니터링이 가능합니다.",
    Icon: ShieldCheck,
    tone: "mint",
  },
  {
    title: "더 큰 시장 기회",
    description: "EU PPWR 대응을 시작으로 미국 등 타 국가 확장 기반을 선제적으로 만듭니다.",
    Icon: Globe,
    tone: "blue",
  },
] as const;

export function RegulatoryOnestopSystemPage() {
  return (
    <main className="regulatory-onestop-page">
      <section className="regulatory-onestop-hero" aria-labelledby="regulatory-onestop-title">
        <div className="regulatory-onestop-hero__copy">
          <h1 id="regulatory-onestop-title">
            제품 개발부터 규제 대응까지,
            <br />
            수출을 완성하는 <span className="regulatory-onestop-hero__highlight">원스톱 대응 시스템</span>
          </h1>
          <p>
            제품을 만드는 것에서 끝나지 않고, 수출 가능한 상태까지 연결하는 것이
            리스튜디오의 강점입니다. 특히 규제 마스터 솔루션은 제품과 패키지 정보를 실제
            수출 가능한 규제 대응 자산으로 전환하는 핵심 단계입니다.
          </p>
        </div>

        <figure className="regulatory-onestop-hero__media">
          <img
            src="/assets/services/regulatory-onestop-hero-generated.png"
            alt="원스톱 규제 대응 시스템을 상징하는 글로벌 수출 네트워크 비주얼"
            width={1680}
            height={960}
            loading="eager"
          />
        </figure>
      </section>

      <section className="regulatory-onestop-flow-section" aria-labelledby="regulatory-onestop-flow-title">
        <div className="regulatory-onestop-flow-section__inner">
          <h2 id="regulatory-onestop-flow-title">
            리스튜디오 원스톱 대응
            <br className="regulatory-onestop-mobile-break" />시스템 전체 흐름
          </h2>

          <div className="regulatory-onestop-flow">
            <aside className="regulatory-onestop-flow-side">
              <div className="regulatory-onestop-flow-side__head">
                <h3>제품 개발 솔루션</h3>
                <span>STEP 1</span>
              </div>
              <ul>
                {productDevelopmentItems.map(({ label, Icon }) => (
                  <li key={label}>
                    <Icon size={23} weight="regular" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
              <p>수출의 출발점</p>
            </aside>

            <ArrowRight className="regulatory-onestop-flow__connector" size={27} weight="bold" aria-hidden="true" />

            <article className="regulatory-onestop-master-card">
              <div className="regulatory-onestop-master-card__head">
                <div>
                  <h3>규제 마스터 솔루션</h3>
                  <p>실제 수출 가능한 상태로 완성하는 단계</p>
                </div>
                <span>STEP 2 | 핵심</span>
              </div>

              <ol>
                {masterSolutionSteps.map(({ number, title, description, Icon }, index) => (
                  <li key={title}>
                    <div className="regulatory-onestop-master-step">
                      <span className="regulatory-onestop-master-step__icon">
                        <Icon size={32} weight="regular" aria-hidden="true" />
                      </span>
                      <span className="regulatory-onestop-master-step__number">{number}</span>
                      <strong>{title}</strong>
                      <small>{description}</small>
                    </div>
                    {index < masterSolutionSteps.length - 1 ? (
                      <ArrowRight size={28} weight="bold" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ol>

              <p className="regulatory-onestop-master-card__summary">
                진단 → 문서화 → 발급 → 후속 관리까지 하나의 흐름으로 연결
              </p>
            </article>

            <ArrowRight className="regulatory-onestop-flow__connector" size={27} weight="bold" aria-hidden="true" />

            <aside className="regulatory-onestop-flow-side regulatory-onestop-flow-side--result">
              <div className="regulatory-onestop-flow-side__head">
                <h3>수출 완성</h3>
                <span>STEP 3</span>
              </div>
              <ul>
                {exportResultItems.map(({ label, Icon }) => (
                  <li key={label}>
                    <Icon size={23} weight="regular" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
              <p>실행 가능한 결과</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="regulatory-onestop-why-section" aria-labelledby="regulatory-onestop-why-title">
        <div className="regulatory-onestop-why-section__inner">
          <h2 id="regulatory-onestop-why-title">왜 규제 마스터 솔루션이 핵심인가요?</h2>

          <div className="regulatory-onestop-why-layout">
            <div className="regulatory-onestop-data-system" aria-label="규제 마스터 솔루션 데이터 연결 구조">
              <article className="regulatory-onestop-data-card">
                <h3>솔루션에서 축적되는 데이터</h3>
                <ul>
                  {accumulatedDataItems.map(({ label, Icon }) => (
                    <li key={label}>
                      <Icon size={30} weight="regular" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="regulatory-onestop-data-link">
                <LinkSimple size={20} weight="bold" aria-hidden="true" />
                <span>데이터 연결</span>
              </div>

              <article className="regulatory-onestop-engine-card">
                <h3>규제 마스터 솔루션 엔진</h3>
                <ol>
                  {regulatoryEngineItems.map(({ label, Icon }, index) => (
                    <li key={label}>
                      <div className="regulatory-onestop-engine-step">
                        <Icon size={30} weight="regular" aria-hidden="true" />
                        <span>{label}</span>
                      </div>
                      {index < regulatoryEngineItems.length - 1 ? (
                        <ArrowRight size={22} weight="bold" aria-hidden="true" />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </article>
            </div>

            <div className="regulatory-onestop-why-copy">
              <article>
                <h3>문서 몇 장이 아니라, 수출 가능한 시스템을 구축합니다</h3>
                <ul>
                  <li>단순 규제 이론 컨설팅 NO</li>
                  <li>단순 서류 작성 대행 NO</li>
                </ul>
                <p>
                  제품 데이터와 대응 서류를 자산화하여 규제가 바뀌어도 다시 처음부터 시작하지 않도록
                  만듭니다.
                </p>
              </article>
              <p className="regulatory-onestop-why-copy__highlight">
                제품 개발 단계에서 쌓인 데이터를 규제 대응 자산으로 전환합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="regulatory-onestop-benefit-section" aria-labelledby="regulatory-onestop-benefit-title">
        <div className="regulatory-onestop-benefit-section__inner">
          <h2 id="regulatory-onestop-benefit-title">원스톱 대응 시스템으로 얻게 되는 것</h2>

          <div className="regulatory-onestop-benefit-grid">
            {onestopBenefitCards.map(({ title, description, Icon, tone }) => (
              <article key={title} className={`regulatory-onestop-benefit-card regulatory-onestop-benefit-card--${tone}`}>
                <div className="regulatory-onestop-benefit-card__head">
                  <span className="regulatory-onestop-benefit-card__icon">
                    <Icon size={24} weight="regular" aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
