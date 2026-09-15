import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { AnimatedTitle, useTitleReveal } from "./AnimatedTitle";

const caseStudies = [
  {
    category: "Cosmetics",
    services: "PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "D:Weather 선코타 선블록 패키지",
    description:
      "해를 연상시키는 제품 외곽을 그대로 담아내고, 상단 양측의 고정부를 통해 제품을 안정적으로 고정하도록 설계했습니다.",
    tags: ["화장품", "디웨더", "심미성+기능성"],
    feature:
      "해를 연상시키는 제품 외곽을 그대로 담아내고, 상단 양측의 고정부를 통해 제품을 안정적으로 고정하도록 설계",
    material:
      "페이퍼 몰드 제작, 전면의 입체감과 후면의 평면성이 대비를 이루면서도 하나의 구조 안에서 자연스럽게 연결",
    image: "/assets/cases/featured/dweather-01.jpg",
    images: [
      "/assets/cases/featured/dweather-01.jpg",
      "/assets/cases/featured/dweather-02.jpg",
    ],
    alt: "D:Weather sunblock paper mold package",
  },
  {
    category: "Food",
    services: "NEW MATERIALS R&D / CMF DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "노스텔지어 북촌소주 주류 패키지",
    description:
      "한국 전통미의 현대화와 서울 북촌의 헤리티지를 담은 핸디한 소주 패키지입니다.",
    tags: ["F&B", "북촌소주", "심미성+기능성", "2026 iF어워드 수상"],
    feature:
      "한국 전통미의 현대화와 서울 북촌의 헤리티지를 담은 핸디한 소주 패키지",
    material:
      "페이퍼 몰드 제작, 조선백자에서 영감받은 부드러운 곡선 실루엣과 매트한 백자 질감은 현대적 감각을 더해 완성",
    image: "/assets/cases/featured/bukchon-01.jpg",
    images: [
      "/assets/cases/featured/bukchon-01.jpg",
      "/assets/cases/featured/bukchon-02.jpg",
    ],
    alt: "Nostalgia Bukchon Soju paper mold package",
  },
  {
    category: "Food",
    services: "STRATEGY / PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "티웨이 항공 기내식 트레이 용기 패키지",
    description:
      "국내 항공업계 최초 페이퍼 몰드 소재로 제작된 친환경 기내식 용기로 기존 알루미늄, 플라스틱 용기를 대체했습니다.",
    tags: ["F&B", "티웨이항공", "내수·내열·내습인증"],
    feature:
      "국내 항공업계 최초 페이퍼 몰드 소재로 제작된 친환경 기내식 용기로 기존 알루미늄, 플라스틱 용기를 대체",
    material:
      "페이퍼 몰드 제작, 국제산림관리협의회(FSC) 인증을 받은 지속가능 산림자원을 기반으로 개발",
    image: "/assets/cases/featured/tway-01.jpg",
    images: [
      "/assets/cases/featured/tway-01.jpg",
      "/assets/cases/featured/tway-02.jpg",
    ],
    alt: "T'way Air in-flight meal tray paper mold package",
  },
  {
    category: "Cosmetics",
    services: "PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "GBH 멀티밤 패키지",
    description:
      "구형의 본품이 지닌 부드러운 조형성이 하나의 정돈된 오브제처럼 인식될 수 있도록 형태와 배열을 함께 설계했습니다.",
    tags: ["화장품", "GBH 멀티밤", "화장품패키지+브랜딩"],
    feature:
      "구형의 본품이 지닌 부드러운 조형성. 단순한 보호재를 넘어 하나의 정돈된 오브제처럼 인식될 수 있도록 형태와 배열을 함께 설계",
    material:
      "페이퍼몰드 제작, 원형 볼륨을 수용하는 반구형 수납부와 이를 감싸는 평면형 프레임의 대비를 중심으로 구성되며 둥근 본품이 구조 안에 안정적으로 안착되도록 내부 곡면의 흐름을 정리",
    image: "/assets/cases/featured/ppt-image-1.png",
    images: [
      "/assets/cases/featured/ppt-image-1.png",
      "/assets/cases/featured/ppt-image-2.png",
    ],
    alt: "GBH multi balm paper mold package",
  },
  {
    category: "Cosmetics",
    services: "PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "아이홉 클렌징 건식 패드 패키지",
    description:
      "LEAF + BLENDS + BIODEGRADABLE 세 가지의 컨셉을 담아 제작한 프리미엄 친환경 패키지입니다.",
    tags: ["화장품", "아이홉 클렌징", "화장품패키지+브랜딩", "2024 Red Dot 수상"],
    feature:
      "[2024 Germany Red Dot Design Award 수상] LEAF + BLENDS + BIODEGRADABLE 세 가지의 컨셉을 담아 제작",
    material:
      "페이퍼몰드 제작, 건식 패드 제품의 특성을 살려 페이퍼몰드의 차별화된 형상화와 친환경 소재를 통해 브랜드사의 이념을 담은 프리미엄 패키지로 완성",
    image: "/assets/cases/featured/ppt-image-3.png",
    images: [
      "/assets/cases/featured/ppt-image-3.png",
      "/assets/cases/featured/ppt-image-4.png",
    ],
    alt: "iHOP cleansing dry pad paper mold package",
  },
  {
    category: "Healthcare",
    services: "STRATEGY / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "삼양 스핀들 건기식 패키지",
    description:
      "라운드 코너의 직사각형 판형과 원통형 용기를 결합해 중심성과 순환의 이미지를 직관적으로 드러냈습니다.",
    tags: ["헬스케어", "삼양 스핀들", "건기식+편리성"],
    feature:
      "라운드 코너의 직사각형 판형과 원통형 용기를 결합해 중심성과 순환의 이미지를 직관적으로 드러내고, 전면의 돌출 반원형 고정부가 제품을 안정적으로 수용",
    material:
      "페이퍼몰드 제작, 원통형 본품이 자연스럽게 안착하는 보관·개봉·분리 흐름 설계",
    image: "/assets/cases/featured/ppt-image-5.png",
    alt: "Samyang spindle health supplement paper mold package",
  },
  {
    category: "Fashion",
    services: "STRATEGY / CMF DEVELOPMENT & COMMERCIALIZATION / PACKAGING DESIGN / MANUFACTURE",
    title: "뮤어하이크 리유저블 카고 박스",
    description:
      "아웃도어의 거친 매력과 탐험의 여정을 담아낸 신발 패키지입니다.",
    tags: ["패션", "시에라디자인", "신발패키지+브랜딩"],
    feature:
      "아웃도어의 거친 매력과 탐험의 여정을 담아낸 신발 패키지. 대자연을 연상시키는 요소들을 시각적, 촉각적으로 구현하여 브랜드가 지향하는 아웃도어의 정체성을 패키지 전반에 반영",
    material:
      "페이퍼몰드 제작, 등고선을 모티브로 한 음각 디자인을 적용하여 입체적인 깊이감을 더하고, 하이킹의 여정을 상징적으로 표현. 실용성과 브랜딩 요소 모두 충족",
    image: "/assets/cases/featured/ppt-image-6.png",
    images: [
      "/assets/cases/featured/ppt-image-6.png",
      "/assets/cases/featured/ppt-image-7.png",
    ],
    alt: "Muirhike reusable cargo shoe box package",
  },
];

const adBanners = [
  {
    theme: "manufacture",
    title: "제품 제조를 빠르게",
    description: "소재 검토부터 샘플, 양산 연결까지 한 번에 준비합니다.",
    image: "/assets/ads/manufacture-banner.png",
    alt: "Eco-friendly molded packaging prototypes in a studio",
  },
  {
    theme: "discount",
    title: "첫 생산 부담 낮추기",
    description: "런칭 제품을 위한 샘플 검토와 견적 비교를 함께 지원합니다.",
    image: "/assets/ads/discount-banner.png",
    alt: "Sustainable packaging samples arranged for production support",
  },
  {
    theme: "environment",
    title: "환경 기준에 맞춘 패키지",
    description: "재생 소재와 규제 대응 기준을 함께 확인해 제품 방향을 잡습니다.",
    image: "/assets/ads/environment-banner.png",
    alt: "Recycled and paper-based packaging materials with green leaves",
  },
];

type ServiceDetailAdBannerItem = (typeof adBanners)[number];

const faqs = [
  {
    question: "리스튜디오는 왜 만들어졌나요?",
    answer:
      "해외 수출에 필수적인 글로벌 규제 대응의 파고 속에서 고객사들의 빠른 친환경 전환을 도와드리기 위해 탄생했습니다. 글로벌 스탠다드에 맞춘 패키징 전환, 지금 바로 리스튜디오 전문가와 1:1로 상담해 보세요. 개발 비용과 시간을 아껴드립니다. 제품 기획부터 소재 선정, 디자인, 생산에 이르는 전 과정을 담은 원스톱 솔루션, 리스튜디오와 함께하세요.",
  },
  {
    question: "리스튜디오의 차별점은 무엇인가요?",
    answer:
      "단순 제조사, 소재 개발사, 디자인 에이전시가 아닙니다. 친환경 규제 대응 컨설팅, 친환경 소재 개발 역량부터 패키지 디자인, 생산, ESG 리포트까지 친환경 패키징의 전 과정을 통합 제공 가능한 원스톱 솔루션입니다. 원스톱 프로세스를 통해 개발 비용 절감, 개발 시간 단축이 가능합니다.",
  },
  {
    question: "친환경 패키지로 바꾸면 원가가 무조건 올라가나요?",
    answer:
      "그렇지 않습니다. 오히려 원스톱 시스템으로 제작되기 때문에 개발 비용과 개발 기간을 획기적으로 줄이실 수 있습니다. 즉 설계 방식과 소재, 구조 최적화에 따라 비용 경쟁력까지 함께 확보할 수 있기 때문에 1석 2조의 효과를 거두실 수 있습니다.",
  },
  {
    question: "친환경 패키지로 바꾸면 디자인 자유도가 떨어지지 않나요?",
    answer:
      "오히려 그렇지 않습니다. 리스튜디오는 세계 3대 디자인 어워드인 red dot Design Award, iF Design Award에서 입상한 사례가 있어 글로벌에서 인정받는 수준의 친환경 패키지 디자인을 제공드리고 있습니다. SSOULSSEOUL 사례는 브랜드 정체성을 담은 조형적 패키지를, 노스텔지어 북촌 소주 사례는 전통적 미감을 담은 프리미엄 주류 패키지를 보여줍니다. 친환경 패키지에서도 충분히 차별화된 브랜딩과 고급스러운 심미성을 구현할 수 있습니다.",
  },
  {
    question: "규제 시행까지 시간이 있는데, 지금 당장 움직여야 할 이유가 있나요?",
    answer:
      "있습니다. 그것도 아주 급하게요. PPWR 대응은 소재 선정 -> 설계 -> R&D -> 양산 안정화까지 평균 3~6개월 이상 소요됩니다. 게다가 PFAS 규제는 이미 2026년 8월 12일부터 시행됩니다. 식품 접촉 포장재를 쓰고 있다면 사실상 '지금이 마감'입니다. 2027년 전체 PPWR 시행 기준으로도, 양산 안정화와 DoC/TD 서류 준비를 역산하면 늦어도 2026년 하반기 안에 소재 전환 결정이 완료되어야 합니다. 지금 시작하는 기업이 선제적으로 바이어 신뢰를 확보하고, 경쟁사보다 먼저 시장을 지킬 수 있습니다.",
  },
  {
    question: "아직 구체적인 사양이 없어도 상담 가능한가요?",
    answer:
      "네, 가능합니다. 대부분의 프로젝트가 초기 구상 단계에서 시작됩니다. 제품 특성과 목표만 공유해 주시면, 소재 추천부터 구조 설계까지 단계별로 안내해 드립니다.",
  },
  {
    question: "업종에 상관없이 제작 가능한가요?",
    answer:
      "네, 가능합니다. 제품의 업종과 대략적인 수량, 목표만 알려주시면 기획 단계부터 함께 구조와 소재를 설계해 드립니다. 도면이 없어도 시작할 수 있습니다.",
  },
  {
    question: "친환경 검증이나 규제 대응 관련 상담도 가능한가요?",
    answer:
      "GRS, FSC 등 주요 친환경 인증 대응과 함께 객관적인 친환경성 데이터 및 검증 리포트를 발행합니다. EU PPWR 등 수출용 규제 대응 자료도 함께 준비해 드립니다.",
  },
  {
    question: "예상 견적은 얼마나 빨리 받을 수 있나요?",
    answer:
      "문의 내용을 검토한 뒤 예상 견적을 빠르게 회신하며, 구조 확정 후 샘플 제작 일정을 별도로 안내합니다. 개발 기간을 단축하는 통합 파이프라인으로 빠른 시장 검증을 지원합니다.",
  },
  {
    question: "최소 제작 수량은 어느 정도인가요?",
    answer:
      "품목과 공정에 따라 다르지만, 성장 단계 브랜드를 위한 소량 생산부터 대량 운영까지 폭넓게 대응합니다. 정확한 기준은 상담 시 품목 기준으로 안내해 드립니다.",
  },
];

const newsItems = [
  {
    title: "EU PPWR 규제 대응, 대기업은 어떻게 준비할까?",
    description:
      "산업군별 포장 데이터와 재활용 기준을 정리해 수출 리스크를 줄이는 준비 방법을 소개합니다.",
    date: "2026.09.04",
    categories: ["규제", "PPWR"],
    image: "/assets/news/news-ppwr.webp",
    alt: "EU PPWR regulatory response article thumbnail",
  },
  {
    title: "친환경 패키지 원스톱 솔루션, 리스튜디오란?",
    description:
      "소재 선정부터 디자인, 제조, 규제 대응까지 한 번에 연결하는 리스튜디오의 방식을 정리했습니다.",
    date: "2026.08.28",
    categories: ["서비스", "브랜드"],
    image: "/assets/news/news-restudio.webp",
    alt: "RESTUDIO one-stop solution article thumbnail",
  },
  {
    title: "레베이션이 말하는 친환경 패키지 전환의 기준",
    description:
      "친환경 원스톱 솔루션을 운영하며 쌓은 제품 개발과 제조 현장의 관점을 전합니다.",
    date: "2026.08.21",
    categories: ["인터뷰", "인사이트"],
    image: "/assets/news/news-revation.webp",
    alt: "REVATION interview article thumbnail",
  },
];

interface ServiceDetailAdBannerProps {
  banners?: ServiceDetailAdBannerItem[];
  embedded?: boolean;
}

export function ServiceDetailAdBanner({
  banners = adBanners,
  embedded = false,
}: ServiceDetailAdBannerProps) {
  const [activeAdBanner, setActiveAdBanner] = useState(0);
  const currentAdBanner = banners[activeAdBanner];
  const bannerClassName = `ad-banner-section${
    embedded ? " ad-banner-section--embedded" : ""
  }`;
  const bannerContent = (
    <div className="ad-banner">
      <div
        className="ad-banner__track"
        style={{ transform: `translateX(-${activeAdBanner * 100}%)` }}
      >
        {banners.map(({ alt, description, image, theme, title }) => (
          <article
            key={theme}
            className={`ad-banner__slide ad-banner__slide--${theme}`}
          >
            <img className="ad-banner__image" src={image} alt={alt} />
            <span className="sr-only">
              {title}. {description}
            </span>
          </article>
        ))}
      </div>

      <div className="ad-banner__controls">
        <button
          type="button"
          aria-label="이전 광고 배너 보기"
          onClick={() =>
            setActiveAdBanner((current) =>
              current === 0 ? banners.length - 1 : current - 1,
            )
          }
        >
          <CaretLeft size={19} weight="bold" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="다음 광고 배너 보기"
          onClick={() =>
            setActiveAdBanner((current) =>
              current === banners.length - 1 ? 0 : current + 1,
            )
          }
        >
          <CaretRight size={19} weight="bold" aria-hidden="true" />
        </button>
        <div className="ad-banner__indicator" aria-hidden="true">
          <span
            style={{
              transform: `translateX(${activeAdBanner * 100}%)`,
              width: `${100 / banners.length}%`,
            }}
          />
        </div>
        <span className="ad-banner__count">
          {activeAdBanner + 1}/{banners.length}
        </span>
      </div>

      <span className="sr-only">
        현재 배너: {currentAdBanner.title}
      </span>
    </div>
  );

  if (embedded) {
    return (
      <div className={bannerClassName} aria-label="프로모션 배너">
        {bannerContent}
      </div>
    );
  }

  return (
    <section className={bannerClassName} aria-label="프로모션 배너">
      {bannerContent}
    </section>
  );
}

interface ServiceDetailSharedSectionsProps {
  showAdBanner?: boolean;
  showCaseStudies?: boolean;
}

interface CaseStudiesSectionProps {
  className?: string;
}

function CaseStudiesSection({ className = "" }: CaseStudiesSectionProps) {
  return (
    <section className={`case-studies-section ${className}`.trim()} id="customer-cases">
      <div className="case-studies">
        <div>
          <h2 className="title-reveal case-studies__title">
            <AnimatedTitle parts="고객 사례" />
          </h2>
          <p className="case-studies__description">
            산업별 특징과 고객의 니즈를 분석하여 지속가능한 패키지 솔루션을 개발합니다.
          </p>
        </div>

        <div className="case-study-carousel">
          <div className="case-study-track">
            {[...caseStudies, ...caseStudies].map((caseStudy, index) => (
              <article
                key={`${caseStudy.title}-${index}`}
                className="case-study-card"
                aria-hidden={index >= caseStudies.length}
              >
                <div className="case-study-card__media">
                  {caseStudy.images?.length ? (
                    <div className="case-study-card__image-track">
                      {[...caseStudy.images, caseStudy.images[0]].map(
                        (image, imageIndex) => (
                          <img
                            key={`${image}-${imageIndex}`}
                            src={image}
                            alt={imageIndex === 0 ? caseStudy.alt : ""}
                            aria-hidden={imageIndex !== 0}
                          />
                        ),
                      )}
                    </div>
                  ) : (
                    <img src={caseStudy.image} alt={caseStudy.alt} />
                  )}
                </div>
                <div className="case-study-card__content">
                  <div
                    className="case-study-card__tags"
                    aria-label="사례 태그"
                  >
                    {caseStudy.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{caseStudy.title}</h3>
                  <dl className="case-study-card__details">
                    <div>
                      <dt>특징</dt>
                      <dd>{caseStudy.feature}</dd>
                    </div>
                    <div>
                      <dt>소재</dt>
                      <dd>{caseStudy.material}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CustomerCaseStudiesSection({ className = "" }: CaseStudiesSectionProps) {
  useTitleReveal();

  return <CaseStudiesSection className={className} />;
}

export function ServiceDetailSharedSections({
  showAdBanner = true,
  showCaseStudies = true,
}: ServiceDetailSharedSectionsProps) {
  const [activeFaq, setActiveFaq] = useState(-1);
  useTitleReveal();

  return (
    <>
      {showCaseStudies && <CaseStudiesSection />}

      {showAdBanner && <ServiceDetailAdBanner />}

      <section className="faq-section" id="faq">
        <div className="faq-section__inner">
          <h2 className="title-reveal section-title">
            <AnimatedTitle parts="FAQ" />
          </h2>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <button
                  key={faq.question}
                  type="button"
                  className={`faq-item ${isOpen ? "is-open" : ""}`}
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__question">
                    {faq.question}
                    <span className="faq-item__icon" aria-hidden="true">
                      {isOpen ? "-" : "+"}
                    </span>
                  </span>
                  <span className="faq-item__answer">
                    {faq.answer}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="news-section" id="news">
        <div className="news-section__header">
          <h2 className="title-reveal section-title">
            <AnimatedTitle parts="새로운 소식" />
          </h2>
          <Link to="/news" className="news-section__more">
            더 보기
            <ArrowRight size={24} weight="regular" aria-hidden="true" />
          </Link>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article className="news-card" key={item.title}>
              <div className={`news-card__image news-card__image--${index + 1}`}>
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="news-card__meta">
                {item.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <time dateTime={item.date.replaceAll(".", "-")}>{item.date}</time>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
