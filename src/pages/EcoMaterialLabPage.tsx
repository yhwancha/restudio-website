import { Fragment } from "react";
import {
  ArrowDown,
  ArrowRight,
  Certificate,
  CheckCircle,
  Drop,
  GlobeHemisphereEast,
  Leaf,
  ListChecks,
  Mountains,
  Palette,
  Recycle,
  ShieldCheck,
  Tree,
} from "@phosphor-icons/react";

const materialCards = [
  {
    category: "종이 기반 소재",
    title: "페이퍼몰드 (PAPERMOLD)",
    description: "100% 종이 기반, 완전한 플라스틱 대체 친환경 소재",
    image: "/assets/eco-material-lab/papermold-optimized.jpg",
    alt: "곡선형 종이 구조물과 페이퍼몰드 패키지 샘플",
    tone: "paper",
    Icon: Leaf,
  },
  {
    category: "바이오플라스틱 기반 소재",
    title: "리플랙스우드 (REPLAX WOOD)",
    description: "목분 복합 소재, CO₂ 배출량 최대 60-80% 저감",
    image: "/assets/eco-material-lab/replax-wood-optimized.jpg",
    alt: "목분 복합 펠릿 위에 놓인 리플랙스우드 소재 샘플",
    tone: "wood",
    Icon: Tree,
  },
  {
    category: "바이오플라스틱 기반 소재",
    title: "리플랙스라임스톤 (LIMESTONE)",
    description: "석회석 기반, 플라스틱 사용량 최대 75-78% 절감",
    image: "/assets/eco-material-lab/replax-limestone-optimized.jpg",
    alt: "석회석 사이에 놓인 리플랙스라임스톤 소재 샘플",
    tone: "limestone",
    Icon: Mountains,
  },
  {
    category: "바이오플라스틱 기반 소재",
    title: "리플랙스마블 (REPLAX MARBLE)",
    description: "PCR 재활용 플라스틱 기반, 자원순환 체계 실현",
    image: "/assets/eco-material-lab/replax-marble-optimized.jpg",
    alt: "푸른 재생 소재 조각 위에 놓인 리플랙스마블 소재 샘플",
    tone: "marble",
    Icon: GlobeHemisphereEast,
  },
] as const;

const papermoldProcess = [
  { step: "1", title: "BLEND", description: "원료\n혼합" },
  { step: "2", title: "MOLD", description: "진공 습식\n성형" },
  { step: "3", title: "PRESS", description: "고온 열압\n매끄러움" },
  { step: "4", title: "DRY", description: "최종 정밀\n건조" },
] as const;

const papermoldBenefits = [
  {
    title: "완전한 플라스틱 대체",
    description: "100% 생분해성 천연 종이 펄프로 플라스틱 트레이를 전면 대체합니다.",
    Icon: CheckCircle,
  },
  {
    title: "우수한 완충 능력 및 강도",
    description: "정밀 프레스 성형을 거쳐 기존 펄프보다 월등한 내구성과 치수 안정성을 보장합니다.",
    Icon: ShieldCheck,
  },
  {
    title: "정교한 맞춤형 디자인",
    description: "다양한 두께와 입체 형태 성형이 가능하여 제품에 최적화된 패키징을 만듭니다.",
    Icon: Palette,
  },
] as const;

const papermoldBadges = [
  { label: "FSC 인증 펄프", Icon: Certificate },
  { label: "100% 재활용성", Icon: Recycle },
  { label: "자연 생분해", Icon: Leaf },
] as const;

const papermoldCases = [
  {
    category: "COSMETICS",
    title: "뷰티 패키지",
    description: "기존 플라스틱 트레이를 대체해 제품 보호와 프리미엄 브랜드 이미지를 동시에 구현",
    tags: ["#충격흡수", "#고급질감"],
    image: "/assets/eco-material-lab/case-cosmetics-papermold.jpg",
    alt: "바다 배경 앞에 놓인 뷰티 제품용 페이퍼몰드 패키지",
    imageClassName: "eco-papermold-case-card__image--cosmetics",
  },
  {
    category: "FOOD & BEVERAGE",
    title: "식품 트레이 패키지",
    description: "신선식품 및 간편식 용기에 적용 가능한 트레이로 포장 안정성과 플라스틱 사용량 절감에 기여",
    tags: ["#식품안전", "#방수코팅"],
    image: "/assets/eco-material-lab/case-food-tray.jpg",
    alt: "기내 좌석에서 식품 트레이를 들고 있는 모습",
    imageClassName: "eco-papermold-case-card__image--food",
  },
  {
    category: "FRAGILE PRODUCT",
    title: "완충형 패키지",
    description: "유리와 전자제품 등 파손 우려가 있는 제품을 위한 고강도 완충 구조로 충격을 흡수하고 제품을 안전하게 보호",
    tags: ["#고강도", "#맞춤설계"],
    image: "/assets/eco-material-lab/case-fragile-product.jpg",
    alt: "전자제품과 페이퍼몰드 완충재가 분리된 패키지 구조",
    imageClassName: "eco-papermold-case-card__image--fragile",
  },
] as const;

const bioplasticMaterials = [
  {
    title: "리플렉스우드 (REPLAX WOOD)",
    description:
      "실제 목재 가공 과정에서 버려지는 폐목분을 고분자 수지와 고르게 복합화한 바이오 소재입니다. 산림 훼손을 최소화하며, 성형성이 우수해 가구 내장재 및 패키징 캡 등에 적용됩니다.",
    tone: "wood",
    Icon: Tree,
  },
  {
    title: "리플렉스라임스톤 (REPLAX LIMESTONE)",
    description:
      "풍부한 비식량계 천연 석회석 광물을 미세 분말화하여 바이오 폴리머와 융합한 저탄소 혁신 신소재입니다. 기존 플라스틱 대비 석유 화학 원료 배출을 획기적으로 줄여줍니다.",
    tone: "limestone",
    Icon: Mountains,
  },
  {
    title: "리플렉스마블 (REPLAX MARBLE)",
    description:
      "PCR(Post-Consumer Recycled) 재활용 원료를 정밀 가공하여 대리석과 같은 독창적인 유려한 패턴을 구현한 고강도 감성 친환경 플라스틱 소재입니다.",
    tone: "marble",
    Icon: GlobeHemisphereEast,
  },
] as const;

const bioplasticProcess = [
  { step: "1", title: "MIXING", description: "원료 배합" },
  { step: "2", title: "COMPOUND", description: "컴파운딩 펠렛화" },
  { step: "3", title: "INJECT", description: "정밀 사출 성형" },
  { step: "4", title: "MOLDING", description: "최종 검수 및 가공" },
] as const;

const bioplasticCertifications = [
  {
    title: "GRS 국제 재생 인증",
    description: "Global Recycled\nStandard",
    image: "/assets/certifications/grs.png",
    imageClassName: "eco-bioplastic-certification-card__logo--grs",
  },
  {
    title: "OK-biobased 인증",
    description: "유럽 친환경 바이오\n표준 원료",
    image: "/assets/certifications/ok-biobased-no-new.png",
    imageClassName: "eco-bioplastic-certification-card__logo--ok-biobased",
  },
  {
    title: "SGS 유해성 보증",
    description: "RoHS 유해물질\n불검출 테스트",
    image: "/assets/certifications/sgs.svg",
    imageClassName: "eco-bioplastic-certification-card__logo--sgs",
  },
] as const;

const bioplasticCaseGroups = [
  {
    label: "REPLAX WOOD",
    cases: [
      {
        title: "기업은행 현금트레이",
        description:
          "목재 복합 바이오플라스틱 소재를 적용하여 내구성과 브랜드 컬러를 구현한 현금트레이",
        image: "/assets/eco-material-lab/case-replax-wood-cash-tray.jpg",
        alt: "파란 현금 트레이와 원료 펠릿이 놓인 제품 사례",
      },
      {
        title: "유리아쥬 스킨토너 캡",
        description:
          "목재 복합 바이오플라스틱 소재를 적용하여 내구성과 브랜드 컬러를 구현한 토너 캡",
        image: "/assets/eco-material-lab/case-replax-wood-uriage-cap.jpg",
        alt: "파란 배경 위 스킨케어 튜브와 토너 캡 제품 사례",
      },
    ],
  },
  {
    label: "REPLAX LIMESTONE",
    cases: [
      {
        title: "골드프레임 주얼리 패키지",
        description: "‘라임스톤’을 적용하여 고밀도의 고급스러움을 구현한 바이얼 박스 세트",
        image: "/assets/eco-material-lab/case-replax-limestone-goldframe.jpg",
        alt: "검은 배경 위 골드프레임 주얼리 패키지",
      },
      {
        title: "혁오 바이닐 박스셋",
        description: "‘라임스톤’을 적용하여, 고밀도의 고급스러움을 구현한 바이닐 박스 세트",
        image: "/assets/eco-material-lab/case-replax-limestone-hyukoh.jpg",
        alt: "흰색 오브제와 컬러풀한 바이닐 박스셋",
      },
    ],
  },
  {
    label: "REPLAX PCR",
    cases: [
      {
        title: "Ent. 디지털 코드 칩(앨범)",
        description: "리사이클 마블 소재를 통한 20배 이상 제작 가능한 시스템과 가격 경쟁력 확보",
        image: "/assets/eco-material-lab/case-replax-pcr-ent-album.jpg",
        alt: "리사이클 마블 소재 샘플과 컬러 칩 제품",
      },
      {
        title: "바이오플러스 크림 스파출라",
        description:
          "PCR,PP를 기반으로 제작된 뷰티 도구로, ‘포장재를 하나의 오브제로’ 탈바꿈한 사례",
        image: "/assets/eco-material-lab/case-replax-pcr-bioplus-spatula.jpg",
        alt: "바이오플러스 크림 스파출라와 패키지 박스",
      },
    ],
  },
] as const;

const ecoValueCards = [
  {
    title: "바이오플라스틱 CO₂ 감축 성과",
    value: "60 ~ 80%",
    suffix: "감소",
    Icon: ArrowDown,
  },
  {
    title: "기존 플라스틱 사용량 원천 저감",
    value: "30% +",
    suffix: "감소",
    Icon: Drop,
  },
  {
    title: "LCO2 전과정(LCA) 전반 관리",
    value: "탄소 발자국 정밀 산출",
    Icon: ListChecks,
  },
] as const;

const materialComparisonColumns = [
  { key: "papermold", label: "PAPERMOLD", tone: "paper", Icon: Leaf },
  { key: "wood", label: "WOOD", tone: "wood", Icon: Tree },
  { key: "limestone", label: "LIMESTONE", tone: "limestone", Icon: Mountains },
  { key: "marble", label: "MARBLE", tone: "marble", Icon: Recycle },
] as const;

const materialComparisonRows = [
  {
    label: "소재 분류",
    toneText: true,
    cells: [
      { text: "종이 기반" },
      { text: "바이오플라스틱" },
      { text: "바이오플라스틱" },
      { text: "재활용 플라스틱" },
    ],
  },
  {
    label: "주요 원료",
    cells: [
      { text: "천연 펄프 (100%)" },
      { text: "북유럽 목분 + 바이오수지" },
      { text: "석회석 (CaCO3 50%+)" },
      { text: "PCR (Post-Consumer) 재활용" },
    ],
  },
  {
    label: "핵심 장점",
    cells: [
      { text: "플라스틱 0% 완전 대체" },
      { text: "자연스러운 목재 질감" },
      { text: "고밀도 / 우수한 내열성" },
      { text: "버진 플라스틱과 동일 물성" },
    ],
  },
  {
    label: "환경 효과",
    toneText: true,
    cells: [
      { text: "플라스틱 100% 대체" },
      { text: "CO₂ 배출량 80% 감축" },
      { text: "플라스틱 사용량 78% 절감" },
      { text: "탄소 발자국 50% 절감" },
    ],
  },
  {
    label: "적합 산업",
    cells: [
      { text: "화장품 / 식품 포장" },
      { text: "사무용품 / 소형 가전" },
      { text: "프리미엄 패키징" },
      { text: "범용 산업재 / 생활용품" },
    ],
  },
  {
    label: "주요 인증",
    cells: [
      { badges: ["FSC", "GRS"] },
      { badges: ["GRS", "FSC", "Vegan"] },
      { badges: ["GRS", "OK-BIOBASED"] },
      { badges: ["GRS", "RCS"] },
    ],
  },
] as const;

export function EcoMaterialLabPage() {
  return (
    <main className="eco-material-lab-page">
      <section className="eco-material-lab-hero" aria-labelledby="eco-material-lab-title">
        <div className="eco-material-lab-hero__copy">
          <div>
            <h1 id="eco-material-lab-title">리스튜디오 친환경 소재 연구 R&amp;D</h1>
            <p className="eco-material-lab-hero__eyebrow">
              ECO-MATERIAL RESEARCH &amp; DEVELOPMENT
            </p>
          </div>

          <p className="eco-material-lab-hero__description">
            리스튜디오는 친환경 소재 연구와 소재 기술 고도화를 통해 패키지 솔루션의 시장적인
            소재 경쟁력을 강화하고, 실제 제품과 포장재 상용화를 위한 독자적인 친환경 소재를
            연구·개발합니다.
          </p>

          <nav className="eco-material-lab-hero__links" aria-label="소재 종류 바로가기">
            <a href="#eco-materials">
              <Leaf size={21} weight="bold" aria-hidden="true" />
              종이 기반 소재
            </a>
            <a href="#eco-materials">
              <Tree size={21} weight="bold" aria-hidden="true" />
              바이오플라스틱 기반 소재
            </a>
          </nav>
        </div>

        <figure className="eco-material-lab-hero__media">
          <img
            src="/assets/eco-material-lab/hero-eco-packaging.jpg"
            alt="종이 펄프와 바이오 복합 소재로 만든 친환경 패키지 제품군"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
        </figure>
      </section>

      <section
        className="eco-material-lab-materials"
        id="eco-materials"
        aria-labelledby="eco-materials-title"
      >
        <header className="eco-material-lab-materials__header">
          <h2 id="eco-materials-title">페이퍼몰드와 바이오플라스틱 친환경 소재</h2>
          <p>
            리스튜디오는 페이퍼몰드와 바이오플라스틱을 중심으로 다양한 산업에 적용 가능한
            친환경 포장 소재를 연구하고 개발합니다.
          </p>
        </header>

        <ul className="eco-material-lab-grid">
          {materialCards.map(({ category, title, description, image, alt, tone, Icon }) => (
            <li key={title}>
              <article className={`eco-material-card eco-material-card--${tone}`}>
                <figure className="eco-material-card__media">
                  <img src={image} alt={alt} width={2000} height={1250} loading="lazy" />
                </figure>
                <div className="eco-material-card__content">
                  <p className="eco-material-card__category">
                    <Icon size={18} weight="bold" aria-hidden="true" />
                    {category}
                  </p>
                  <h3>{title}</h3>
                  <p className="eco-material-card__description">{description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="eco-papermold-section" aria-labelledby="eco-papermold-title">
        <div className="eco-papermold-section__inner">
          <div className="eco-papermold-section__overview">
            <header className="eco-papermold-section__header">
              <h2 id="eco-papermold-title">페이퍼몰드 (PAPERMOLD)</h2>
              <p>100% PLASTIC FREE NATURAL PULP SOLUTION</p>
            </header>

            <p className="eco-papermold-section__lead">
              플라스틱 포장재를 천연 자원 기반 펄프로 완벽하게 대체하는 친환경 종이
              소재입니다. 우수한 강도와 성형성으로 다양한 형상의 친환경 패키징 제작이
              가능합니다.
            </p>

            <article className="eco-papermold-process-card">
              <h3>페이퍼몰드 정밀 제조 공정</h3>
              <ol>
                {papermoldProcess.map(({ step, title, description }, index) => (
                  <li key={title}>
                    <span>{step}</span>
                    <strong>{title}</strong>
                    <small>{description}</small>
                    {index < papermoldProcess.length - 1 ? (
                      <ArrowRight size={18} weight="bold" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </article>

            <article className="eco-papermold-benefits-card">
              <ul>
                {papermoldBenefits.map(({ title, description, Icon }) => (
                  <li key={title}>
                    <Icon size={27} weight="bold" aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <ul className="eco-papermold-badge-list" aria-label="페이퍼몰드 특장점">
              {papermoldBadges.map(({ label, Icon }) => (
                <li key={label}>
                  <Icon size={22} weight="bold" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="eco-papermold-section__proof">
            <div className="eco-papermold-proof-header">
              <h2>검증된 페이퍼몰드 인증 및 주요 적용 사례</h2>
            </div>

            <div className="eco-papermold-certification">
              <h3>글로벌 인증</h3>
              <article>
                <img src="/assets/certifications/fsc.png" alt="FSC 인증 로고" loading="lazy" />
                <strong>FSC 인증</strong>
                <p>지속 가능한 산림 경영을 통해 생산된 목재 및 펄프 사용을 보증하는 국제 인증</p>
              </article>
            </div>

            <div className="eco-papermold-cases">
              <h3>고객 사례</h3>
              <ul>
                {papermoldCases.map(
                  ({ category, title, description, tags, image, alt, imageClassName }) => (
                    <li key={title}>
                      <article className="eco-papermold-case-card">
                        <figure>
                          <img
                            className={imageClassName}
                            src={image}
                            alt={alt}
                            width={1200}
                            height={900}
                            loading="lazy"
                          />
                        </figure>
                        <div>
                          <span>{category}</span>
                          <h4>{title}</h4>
                          <p>{description}</p>
                          <ul aria-label={`${title} 특징`}>
                            {tags.map((tag) => (
                              <li key={tag}>{tag}</li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="eco-bioplastic-section" aria-labelledby="eco-bioplastic-title">
        <div className="eco-bioplastic-section__inner">
          <div className="eco-bioplastic-section__overview">
            <header className="eco-bioplastic-section__header">
              <h2 id="eco-bioplastic-title">바이오플라스틱 기반 소재 그룹</h2>
              <p>BIO-COMPOSITE &amp; RECYCLED PLASTIC PORTFOLIO</p>
            </header>

            <ul className="eco-bioplastic-material-list">
              {bioplasticMaterials.map(({ title, description, tone, Icon }) => (
                <li key={title}>
                  <article className={`eco-bioplastic-material-card eco-bioplastic-material-card--${tone}`}>
                    <h3>
                      <Icon size={21} weight="bold" aria-hidden="true" />
                      {title}
                    </h3>
                    <p>{description}</p>
                  </article>
                </li>
              ))}
            </ul>

            <article className="eco-bioplastic-process-card">
              <h3>바이오플라스틱 친환경 컴파운딩 공정</h3>
              <ol>
                {bioplasticProcess.map(({ step, title, description }, index) => (
                  <Fragment key={title}>
                    <li>
                      <span>{step}</span>
                      <strong>{title}</strong>
                      <small>{description}</small>
                    </li>
                    {index < bioplasticProcess.length - 1 ? (
                      <li className="eco-bioplastic-process-card__arrow" aria-hidden="true">
                        <ArrowRight size={18} weight="bold" />
                      </li>
                    ) : null}
                  </Fragment>
                ))}
              </ol>
            </article>

            <article className="eco-bioplastic-certification-card">
              <h3>친환경 글로벌 인증 규격</h3>
              <ul>
                {bioplasticCertifications.map(({ title, description, image, imageClassName }) => (
                  <li key={title}>
                    <img className={imageClassName} src={image} alt={`${title} 로고`} loading="lazy" />
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="eco-bioplastic-section__cases">
            <h2>주요 적용 사례</h2>
            {bioplasticCaseGroups.map(({ label, cases }) => (
              <section key={label} className="eco-bioplastic-case-group" aria-label={label}>
                <ul>
                  {cases.map(({ title, description, image, alt }) => (
                    <li key={title}>
                      <article className="eco-bioplastic-case-card">
                        <span>{label}</span>
                        <figure>
                          <img src={image} alt={alt} width={1400} height={900} loading="lazy" />
                        </figure>
                        <div>
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="eco-value-section" aria-labelledby="eco-value-title">
        <div className="eco-value-section__inner">
          <header className="eco-value-section__header">
            <h2 id="eco-value-title">친환경 소재 핵심 가치 데이터</h2>
            <p>리스튜디오 친환경 패키징 포트폴리오가 창출하는 실질적인 탄소 저감 성과입니다.</p>
          </header>

          <ul className="eco-value-card-list">
            {ecoValueCards.map((card) => (
              <li key={card.title}>
                <article>
                  <span>
                    <card.Icon size={31} weight="bold" aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>
                      <strong>{card.value}</strong>
                      {"suffix" in card ? <em>{card.suffix}</em> : null}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="eco-comparison-section" aria-labelledby="eco-comparison-title">
        <div className="eco-comparison-section__inner">
          <header className="eco-comparison-section__header">
            <h2 id="eco-comparison-title">4가지 친환경 패키징 소재 전과정 비교</h2>
            <p>
              각 소재의 주요 원료 원천, 구조적 강도, 친환경 탄소 저감 효율성 및 적합한 산업군
              비교입니다.
            </p>
          </header>

          <div className="eco-comparison-table-wrap">
            <table className="eco-comparison-table">
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  {materialComparisonColumns.map(({ label, tone, Icon }) => (
                    <th key={label} scope="col" className={`eco-comparison-table__column--${tone}`}>
                      <span>
                        <Icon size={25} weight="bold" aria-hidden="true" />
                      </span>
                      <strong>{label}</strong>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materialComparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.cells.map((cell, index) => {
                      const tone = materialComparisonColumns[index].tone;

                      return (
                        <td
                          key={`${row.label}-${tone}`}
                          className={
                            "toneText" in row ? `eco-comparison-table__text--${tone}` : undefined
                          }
                        >
                          {"badges" in cell ? (
                            <div className="eco-comparison-table__badges">
                              {cell.badges.map((badge) => (
                                <span key={badge}>{badge}</span>
                              ))}
                            </div>
                          ) : (
                            cell.text
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
