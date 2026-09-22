import {
  ArrowRight,
  AirplaneTilt,
  CaretDown,
  CheckCircle,
  Cube,
  FileText,
  Flask,
  GearSix,
  Leaf,
  ShieldCheck,
  Target,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const solutionCards = [
  {
    intent: "친환경 제품&패키지를 만들고 싶어요.",
    badge: "Solution 01",
    Icon: Cube,
    title: "친환경 패키지 개발 원스톱 솔루션",
    description:
      "친환경 패키지 소재 개발, 디자인, 대량 양산, 품질검증, ESG 증빙 리포트까지 전 과정을 하나의 시스템으로 해결.",
    image: "/assets/services/eco-product-development.png",
    to: "/services/product-development",
  },
  {
    intent: "EU PPWR 같은 친환경 규제 준비가 필요해요.",
    badge: "Solution 02",
    Icon: Leaf,
    title: "친환경 글로벌 규제 대응 솔루션",
    description:
      "유럽 PPWR / 미국 등 글로벌 친환경 규제에 맞춰 진단부터 적합성 선언서(DoC) / 기술문서(TD) 작성까지 지원.",
    image: "/assets/services/regulatory-consulting-clean-white.png",
    to: "/services/regulatory-response",
  },
];

const dashboardItems = [
  {
    number: "01",
    title: "전략 진단",
    bullets: ["제품 패키지 목표 설정", "수출시장 / 규제 범위 정의"],
    Icon: Target,
    tone: "green",
  },
  {
    number: "02",
    title: "설계 / 개발",
    bullets: ["디자인 / R&D", "친환경 소재 적용"],
    Icon: Flask,
    tone: "green",
  },
  {
    number: "03",
    title: "생산 / 검증",
    bullets: ["양산 / QC", "시험 / 증빙 확보"],
    Icon: GearSix,
    tone: "green",
  },
  {
    number: "04",
    title: "규제 문서화",
    bullets: ["DoC / TD 정리", "적합성 근거 체계화"],
    Icon: FileText,
    tone: "blue",
  },
  {
    number: "05",
    title: "출시 / 수출 대응",
    bullets: ["고객 / 바이어 대응", "제출 문서 준비"],
    Icon: AirplaneTilt,
    tone: "blue",
  },
  {
    number: "06",
    title: "사후 관리",
    bullets: ["규제 업데이트", "추가 시험 / 개선 지원"],
    Icon: ShieldCheck,
    tone: "blue",
  },
];

const dashboardSynergies = [
  "개발 단계에서 규제 요건 선반영",
  "시험 / 증빙 제작업 최소화",
  "생산 데이터와 규제 문서의 연결",
  "출시 후 변경사항까지 지속 관리",
];

const developmentProcessSteps = [
  ["솔루션 컨설팅", "기획 단계 구축, 소재 / 구조 기술 검토"],
  ["디자인 제작", "CMF 기반 차별화 디자인, 상품성 극대화"],
  ["소재 R&D", "CCR / MCTP 특허 공정으로 소재 개발 / 공급"],
  ["대량 양산", "13개 제조 네트워크 생산 / 품질 관리"],
  ["검증 / ESG 증빙", "품질 검수, LCA 기반 ESG 리포트 발행"],
];

const materialLineup = [
  {
    title: "페이퍼 몰드",
    description:
      "PS/PET/PP 플라스틱 패키지를 종이 소재로 대체하는 주력 소재. 독자 셀룰로오스 배합 공정으로 기존 펄프 대비 강도 2.5배.",
    bullets: [
      "100% 분리배출 / 완전 재활용 가능",
      "재활용 분담금 감면 / 소비자 분리 편의",
      "기존 펄프몰드 대비 금형비 60% / 제품가 30% 절감",
      "강도 2.5배 / 재활용성 99% 이상",
    ],
    image: "/assets/services/paper-mold-lineup.png",
  },
  {
    title: "REPLAX",
    subtitle: "바이오 / 재생 플라스틱",
    description:
      "기존 1세대 바이오플라스틱의 약한 물성을 극복한 소재. 일반 사출 금형과 호환되며 버진 플라스틱 수준의 가격 경쟁력.",
    bullets: [
      "일반 사출 금형 그대로 사용 가능",
      "버진 플라스틱 수준의 가격 경쟁력",
      "라인업: Limestone / Wood / Marble",
      "탄소 저감 인증 / OK Biobased 등 친환경 인증",
    ],
    image: "/assets/services/replax-lineup.png",
  },
];

const whyRestudio = [
  ["CMF R&D + 부설연구소", "대기업 수준 CMF 인프라와 사내 부설연구소로 물성 / 단가 문제 자체 해결"],
  ["핵심 특허 기술", "CCR / MCTP 등 독자 IP, 강도 2.5배 / 재활용성 99%+"],
  ["레시피 데이터 자산화", "누적 249건 소재 데이터와 13개 생산 네트워크 표준화"],
  ["120여 개사 경험", "전문 PM이 기업 내부 5명 이상 역할을 대신 수행"],
  ["품질 보장", "양산 전 과정 체크리스트 / 품질 불안정 / 부적합 보고서 관리"],
];

const locationSlides = [
  {
    label: "본사",
    image: "/assets/company-location-hq.png",
    alt: "리스튜디오 본사 건물",
  },
  {
    label: "R&D센터",
    image: "/assets/company-location-rnd.png",
    alt: "리스튜디오 R&D센터",
  },
];

const regulationSteps = [
  {
    title: "진단 & 대응 리포트",
    summary: "보유 자료 검토 후 PPWR 대응 준비 수준과 실대응 필요 항목 컨설팅",
    bullets: [
      "보유 자료 검토 결과 분석",
      "시험성적서 / 사양서 활용 가능성 점검",
      "미흡 자료 리스트 정의",
      "공급사 요청 자료 분석",
    ],
  },
  {
    title: "DoC 문서 컨설팅",
    summary: "제품 / 포장재 정보와 증빙자료 기반 EU 적합성 선언서(DoC) 초안 작성 지원",
    bullets: [
      "PPWR 적용 요구사항 검토",
      "EU 적합성 선언서(DoC) 초안 작성",
      "규제 조항별 증빙자료 연결",
      "미비 자료 / 보완사항 안내",
    ],
  },
  {
    title: "TD 문서 컨설팅",
    summary: "포장재 구성 / 시험성적서 / 공급망 증빙을 체계화해 기술문서(TD) 작성 지원",
    bullets: [
      "사양 / BOM / 소재 / 중량 / 재생원료 정보 정리",
      "시험성적서 / 인증서 / 공급사 자료 정리",
      "규제 요건별 적합성 근거 구성",
      "추가 시험 필요사항 안내",
    ],
  },
  {
    title: "후속 관리 프로세스",
    summary: "진단 / 문서 작성에서 확인된 이슈 기반 기업별 후속 대응 방안 제안",
    bullets: [
      "추가 시험성적서 확보 방향",
      "공급사 자료 요청 방향",
      "포장재 구조 개선 필요 여부 판단",
      "개선 실행 지원 (Solution 01 연결)",
    ],
  },
];

const vennDevelopmentSteps = ["큐레이션", "자동 견적", "실시간 프로젝트 관리", "ESG 리포팅"];

const vennRegulationSteps = [
  "진단",
  "컨설팅",
  "핵심 서류 작성 지원",
  "제출용 증빙 문서 발급",
  "후속 관리",
];

const leaders = [
  {
    name: "이승건 | CEO",
    role: "토스는 '마침표'를 찍는 조직이 아니라, 영원히 '물음표'를 던지는 조직입니다.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "김규하 | CBO&COO",
    role: "우리는 상품을 팔지 않습니다. 토스와 함께하는 '성공'을 팝니다.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "서현우 | CFO",
    role: "회사가 성장할수록, 빠른 실행만큼 지속 가능성도 중요합니다.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90",
  },
];

const jobs = [
  {
    title: "일하는 방식",
    bullets: [
      "우리는 스스로 몰입하고 자기 주도적으로 일해요.",
      "우리는 수평 커뮤니케이션을 지향해요.",
      "우리는 최소한의 원칙으로 최대한의 자율성을 가져가고자 해요.",
    ],
  },
  {
    title: "인재상",
    bullets: [
      "탁월한 커뮤니케이션 능력 보유.",
      "제품 개발 경험자.",
      "새로운 도전과 변화에 즐거움을 느끼는 분.",
      "자신의 아이디어를 적극적으로 제안하는 분.",
    ],
  },
  {
    title: "지원 서류",
    bullets: ["자기소개서", "이력서", "포트폴리오(선택)"],
    emphasized: true,
  },
];

const markerStroke = (
  <svg
    className="marker-scribble__stroke"
    viewBox="0 0 320 62"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      className="marker-scribble__path marker-scribble__path--base"
      pathLength={1}
      d="M28 34 C42 16 58 16 72 25 C88 35 96 19 112 18 C129 16 140 32 156 24 C173 16 186 14 202 29 C220 46 230 12 250 17 C266 21 276 13 292 18 C294 19 294 20 294 21"
    />
    <path
      className="marker-scribble__path marker-scribble__path--middle"
      pathLength={1}
      d="M20 38 C38 47 49 8 68 16 C86 24 90 44 108 36 C126 28 134 8 151 19 C168 30 170 45 188 35 C206 25 212 23 229 31 C247 39 252 16 269 22 C286 28 294 33 302 24"
    />
  </svg>
);

export function CompanyPage() {
  const [activeLocationSlide, setActiveLocationSlide] = useState(0);
  const [isLocationPaused, setIsLocationPaused] = useState(false);

  useEffect(() => {
    if (isLocationPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveLocationSlide((current) => (current + 1) % locationSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isLocationPaused]);

  return (
    <main className="company-page">
      <section className="company-hero">
        <h1>
          클린테크 기업 리베이션의 기술력이 만든,
          <br />
          <span className="marker-scribble company-hero__highlight">
            {markerStroke}
            <span>원스톱 친환경 패키지 솔루션</span>
          </span>{" "}
          리스튜디오
        </h1>
        <div className="company-hero__relation" aria-label="리베이션과 리스튜디오 관계">
          <svg
            className="company-hero__relation-graphic"
            viewBox="0 0 1120 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse cx="560" cy="246" rx="490" ry="231" fill="#ffffff" />
            <ellipse cx="560" cy="355" rx="355" ry="122" fill="#edf0ef" />
          </svg>
          <div className="company-hero__relation-copy company-hero__relation-copy--revation">
            <img src="/assets/company-revation-logo.svg" alt="REVATION" />
            <p>
              친환경 패키지 솔루션 기업 리베이션은 혁신적인 디자인과 R&D 기술 역량의
              융합으로 환경이슈를 개선하는 '클린테크' 기업입니다.
            </p>
          </div>
          <div className="company-hero__relation-copy company-hero__relation-copy--restudio">
            <img src="/assets/company-restudio-logo.svg" alt="RESTUDIO" />
            <p>
              리베이션의 기술력을 바탕으로 탄생한 리스튜디오는 친환경 소재 개발, 패키지
              디자인, 대량 양산, 품질검증, ESG 리포트 발행까지 친환경 패키징 전 과정을
              지원하는 '원스톱 솔루션'입니다.
            </p>
          </div>
        </div>
        <p className="company-hero__caption">
          친환경 패키징 전과정을 <span>2가지 솔루션</span>으로 제공합니다.
        </p>
      </section>

      <section className="company-solution-cards" aria-label="대표 솔루션">
        {solutionCards.map((card) => (
          <article className="company-solution-block" key={card.title}>
            <div className="company-solution-block__header">
              <span>
                <card.Icon size={24} weight="fill" aria-hidden="true" />
                {card.intent}
              </span>
              <em>{card.badge}</em>
            </div>
            <Link className="company-solution-card" to={card.to}>
              <img src={card.image} alt="" aria-hidden="true" />
              <div>
                <span className="company-solution-card__copy">
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </span>
                <span className="company-solution-card__arrow">
                  <ArrowRight size={30} weight="regular" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <section className="company-venn">
        <h2>
          제품 개발부터 글로벌 규제 대응까지
          <br />
          <span>하나의 통합 솔루션</span>으로 관리합니다.
        </h2>
        <div className="company-venn__diagram" aria-label="제품 개발과 규제 대응 통합 다이어그램">
          <svg
            className="company-venn__ellipses"
            viewBox="0 0 1760 640"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="company-venn-left-ellipse">
                <ellipse cx="570" cy="320" rx="560" ry="300" />
              </clipPath>
            </defs>
            <ellipse cx="570" cy="320" rx="560" ry="300" fill="#e9eceb" opacity="0.58" />
            <ellipse cx="1190" cy="320" rx="560" ry="300" fill="#e9eceb" opacity="0.58" />
            <ellipse
              cx="1190"
              cy="320"
              rx="560"
              ry="300"
              fill="#159557"
              opacity="0.94"
              clipPath="url(#company-venn-left-ellipse)"
            />
          </svg>
          <div className="company-venn__panel company-venn__panel--left">
            <h3>친환경 제품 / 패키지 개발 솔루션</h3>
            <p>
              컨설팅부터 생산, ESG 리포팅까지
              <br />
              전 과정을 지원하는 원스톱 개발 솔루션
            </p>
            <ul className="company-venn__steps">
              {vennDevelopmentSteps.map((step, index) => (
                <li key={step}>
                  <span>{step}</span>
                  {index < vennDevelopmentSteps.length - 1 ? (
                    <CaretDown size={18} weight="regular" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="company-venn__center">
            <img src="/assets/company-restudio-logo.svg" alt="RESTUDIO" />
            <strong>제품 개발&nbsp;&nbsp;×&nbsp;&nbsp;규제 대응</strong>
            <p>단 하나의 원스톱 통합 솔루션</p>
          </div>
          <div className="company-venn__panel company-venn__panel--right">
            <h3>규제 대응 솔루션</h3>
            <p>
              진단부터 핵심 문서 작성 지원, 제출용 증빙 발급과
              <br />
              후속 관리까지 지원하는 전문 규제 대응 솔루션
            </p>
            <ul className="company-venn__steps">
              {vennRegulationSteps.map((step, index) => (
                <li key={step}>
                  <span>{step}</span>
                  {index < vennRegulationSteps.length - 1 ? (
                    <CaretDown size={18} weight="regular" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="company-venn__note">
          개발 단계에서 규제 요건을 선반영해 제작업과 리스크를 줄이고,
          <br />
          생산 / 검증 데이터가 문서화돼 제출 대응까지 자연스럽게 연결됩니다.
        </p>
      </section>

      <section className="company-dashboard">
        <div className="company-dashboard__header">
          <h2>기획부터 출시, 수출, 사후 대응까지</h2>
          <p>하나의 흐름으로, 더 빠르고 안전한 글로벌 시장 진출</p>
        </div>
        <div className="company-dashboard__body">
          <div className="company-dashboard__flow" aria-label="통합 진행 단계">
            <strong className="company-dashboard__label company-dashboard__label--product">제품 개발</strong>
            <strong className="company-dashboard__label company-dashboard__label--regulation">규제 대응</strong>
            {dashboardItems.map((item) => (
              <article
                className={`company-dashboard-card company-dashboard-card--${item.tone}`}
                key={item.number}
              >
                <span>{item.number}</span>
                <item.Icon size={28} weight="fill" aria-hidden="true" />
                <h3>{item.title}</h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="company-dashboard__synergy">
            <h3>두 서비스의 시너지</h3>
            <ul>
              {dashboardSynergies.map((item) => (
                <li key={item}>
                  <CheckCircle size={24} weight="fill" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="company-process company-process--development">
        <aside>
          <span>Solution 01</span>
          <h2>
            친환경 패키지 개발
            <br />
            원스톱 솔루션
          </h2>
          <p>
            파편화된 개발 구조를 없앴습니다.
            <br />
            소재 / 디자인 / 양산 / 검증 / 증빙까지 한 곳에서 함께 진행합니다.
          </p>
        </aside>
        <div className="company-development">
          <section className="company-development__block">
            <h3>원스톱 개발 과정</h3>
            <div className="company-development__table">
              {developmentProcessSteps.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="company-development__block">
            <h3>주력 소재 라인업</h3>
            <div className="company-materials">
              {materialLineup.map((item) => (
                <article className="company-materials__item" key={item.title}>
                  <div className="company-materials__title">
                    <strong>{item.title}</strong>
                    {item.subtitle ? <span>{item.subtitle}</span> : null}
                  </div>
                  <div className="company-materials__copy">
                    <p>{item.description}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <img src={item.image} alt="" aria-hidden="true" />
                </article>
              ))}
            </div>
          </section>

          <section className="company-development__block">
            <h3>WHY RESTUDIO</h3>
            <div className="company-development__table company-development__table--why">
              {whyRestudio.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="company-process company-process--regulation">
        <aside>
          <span>Solution 02</span>
          <h2>
            친환경 글로벌
            <br />
            규제 대응 솔루션
          </h2>
          <p>
            EU PPWR 시행으로 포장재 규제는 선택이 아닙니다.
            <br />
            진단부터 필수 서류 완성까지, 해외 수출 기업의 규제 대응을 원스톱으로
            지원합니다.
          </p>
        </aside>
        <div className="company-regulation">
          <h3>규제 대응 과정</h3>
          <div className="company-regulation__table">
            {regulationSteps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <div>
                  <p>{step.summary}</p>
                  <ul>
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-leaders">
        <div className="company-section-heading">
          <h2>리스튜디오를 지탱하는 사람들</h2>
          <span>Leaders</span>
        </div>
        <div className="company-leaders__grid">
          {leaders.map((leader) => (
            <article key={leader.name}>
              <div className="company-leaders__photo">
                <img src={leader.image} alt={leader.name} />
              </div>
              <strong>{leader.name}</strong>
              <p>{leader.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company-contact">
        <div className="company-recruit">
          <h2>채용</h2>
          <div className="company-recruit__list">
            {jobs.map((job) => (
              <article key={job.title}>
                <strong>{job.title}</strong>
                <ul className={job.emphasized ? "company-recruit__bullets--strong" : undefined}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="company-recruit__mail">
            <span>리스튜디오 지원문의는 여기로!</span>
            <a href="mailto:info@revation.co.kr">info@revation.co.kr</a>
          </div>
        </div>
        <form className="company-partner-form">
          <h2>기업 협력 / 투자 문의</h2>
          <div className="company-partner-form__grid">
            <label>
              회사명
              <input type="text" placeholder="회사명" />
            </label>
            <label>
              담당자 성함
              <input type="text" placeholder="홍길동" />
            </label>
            <label>
              연락처
              <input type="tel" placeholder="01012341234" />
            </label>
            <label>
              이메일
              <input type="email" placeholder="example@example.com" />
            </label>
            <label className="company-partner-form__wide">
              문의 내용
              <textarea placeholder="친환경 제품 개발을 문의하고 싶어요." />
            </label>
          </div>
          <div className="company-partner-form__captcha" aria-hidden="true">
            <span>46&nbsp;&nbsp;K6</span>
            <button type="button" aria-label="캡차 새로고침">
              ↻
            </button>
            <input type="text" tabIndex={-1} placeholder="코드를 입력하세요" />
          </div>
          <label className="company-partner-form__privacy">
            <input type="checkbox" />
            <span>
              <em>(필수)</em> 개인정보처리방침에 동의합니다.
            </span>
            <a
              href="https://material-beam-ed6.notion.site/20224acd6ea980ee90cae0df5e5cc6af"
              target="_blank"
              rel="noreferrer"
            >
              보기
            </a>
          </label>
          <button type="button">문의하기</button>
        </form>
      </section>

      <section
        className="company-location"
        onMouseEnter={() => setIsLocationPaused(true)}
        onMouseLeave={() => setIsLocationPaused(false)}
        aria-label="리스튜디오 위치"
      >
        <div className="company-location__media">
          {locationSlides.map((slide, index) => (
            <img
              className={index === activeLocationSlide ? "is-active" : undefined}
              key={slide.label}
              src={slide.image}
              alt={slide.alt}
              aria-hidden={index !== activeLocationSlide}
            />
          ))}
        </div>
        <div className="company-location__info">
          <img src="/assets/company-restudio-logo.svg" alt="RESTUDIO" />
          <dl>
            <div>
              <dt>설립연도</dt>
              <dd>20nn n월</dd>
            </div>
            <div className="company-location__address">
              <dt>주소</dt>
              <dd>
                <span>본사</span>
                <strong>서울 강서구 마곡중앙로 143, 타워B 3층</strong>
              </dd>
              <dd>
                <span>R&D센터</span>
                <strong>서울특별시 강서구 마곡중앙8로 7길 57, 3층</strong>
              </dd>
            </div>
            <div>
              <dt>본사 연락처</dt>
              <dd>02-6959-7260 | info@revation.co.kr</dd>
            </div>
            <div>
              <dt>제품 문의</dt>
              <dd>02-6489-7080 | sales@revation.co.kr</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
