import { type CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

const caseStudies = [
  {
    category: "Cosmetics",
    services: "PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "아이홉 클렌징 건식 패드 패키지",
    description:
      "LEAF, BLENDS, BIODEGRADABLE 세 가지 콘셉트를 담아 건식 패드 제품을 위한 친환경 패키지를 개발했습니다. 페이퍼몰드와 단상자는 디자인 완성도와 창의성을 인정받아 2024 레드닷 어워드 Winner로 선정되었습니다.",
    tags: ["화장품", "건식 패드", "어워드"],
    feature:
      "세 가지 콘셉트를 제품 경험에 맞춰 나누고, 패드 사용성을 고려한 고정 구조와 개봉 경험을 설계",
    material: "페이퍼몰드와 단상자를 활용해 플라스틱 사용을 줄인 친환경 패키지",
    image: "/assets/cases/Work1.webp",
    alt: "Curved white paper mold package for cosmetics",
  },
  {
    category: "Food",
    services: "NEW MATERIALS R&D / CMF DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "SK텔레콤 행복나래 친환경 도시락 패키지",
    description:
      "기존 종이몰드의 한계를 보완하기 위해 내구성과 충격 저항성을 높인 필름 라미네이팅 기술을 적용했습니다. 식품 트레이 사용성을 개선하며 지속 가능한 도시락 패키지 방향을 제안했습니다.",
    tags: ["식품", "도시락", "내구성"],
    feature:
      "식품 트레이의 충격 저항성과 사용성을 높여 유통 과정에서 안정적으로 보호되도록 설계",
    material: "필름 라미네이팅을 적용한 종이몰드 기반 친환경 도시락 패키지",
    image: "/assets/cases/Work2.webp",
    alt: "Paper molded food package with bottles",
  },
  {
    category: "Medical",
    services: "STRATEGY / PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "비올 셀리뉴 페이스 팁 패키징",
    description:
      "의료·뷰티 디바이스 제품을 위해 플라스틱 사용량을 줄이면서도 구조 안정성을 유지하는 페이퍼몰드 패키지를 설계했습니다. 제품 보호와 사용성을 함께 고려한 지속 가능한 솔루션입니다.",
    tags: ["메디컬", "뷰티 디바이스", "보호 구조"],
    feature:
      "의료·뷰티 디바이스를 안정적으로 고정하고 제품 보호와 사용성을 함께 고려한 구조",
    material: "구조 안정성을 확보한 페이퍼몰드 패키지로 플라스틱 사용량 절감",
    image: "/assets/cases/Work3.webp",
    alt: "Medical beauty product displayed with blue holder",
  },
  {
    category: "Electronics",
    services: "PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "원콤 핀틴 V1 패키징",
    description:
      "시각장애인용 미니 쿼티 커뮤니케이터를 위한 제품 고정 구조를 페이퍼몰드로 개발했습니다. 점자 요소를 패키지에 반영해 지속 가능한 소재와 포용적 디자인을 함께 담았습니다.",
    tags: ["전자기기", "접근성", "점자"],
    feature:
      "미니 쿼티 커뮤니케이터를 고정하는 구조와 점자 요소를 함께 반영한 포용적 패키지",
    material: "제품 고정 구조를 페이퍼몰드로 전환해 지속 가능한 소재 경험 구현",
    image: "/assets/cases/Work4.webp",
    alt: "Fintin electronics package case study",
  },
  {
    category: "Fashion",
    services: "STRATEGY / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "퍼센트오브 아이웨어 패키지",
    description:
      "무겁고 재활용이 어려운 기존 아이웨어 케이스를 종이 기반 구조로 전환했습니다. 자석을 적용해 재사용성을 높이고, 독창적인 몰드 형태로 패션 카테고리에 맞는 새로운 패키지 경험을 만들었습니다.",
    tags: ["패션", "아이웨어", "재사용"],
    feature:
      "자석 여닫이 구조로 재사용성을 높이고 패션 제품에 맞는 독창적인 몰드 형태를 개발",
    material: "재활용이 어려운 기존 케이스를 종이 기반 구조로 대체",
    image: "/assets/cases/Work_6.webp",
    alt: "Fashion package case study",
  },
  {
    category: "Healthcare",
    services: "STRATEGY / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "트루엔뉴트리션 트루엔키즈 팡팡 쾌변젤리",
    description:
      "아이들의 표정에서 착안한 스마일 텍스처와 휴대 가능한 스트링 구조를 적용했습니다. 종이에 직접 그림을 그릴 수 있는 여백을 더해 창의성과 사용성을 함께 높였습니다.",
    tags: ["헬스케어", "키즈", "휴대성"],
    feature:
      "스마일 텍스처와 휴대 가능한 스트링 구조로 아이들이 쓰기 쉬운 패키지 경험 설계",
    material: "그림을 그릴 수 있는 종이 표면을 활용해 창의성과 친환경성을 함께 강화",
    image: "/assets/cases/Work6.webp",
    alt: "Healthcare product package case study",
  },
  {
    category: "Entertainment",
    services: "STRATEGY / CMF DEVELOPMENT & COMMERCIALIZATION / PACKAGING DESIGN / MANUFACTURE",
    title: "두루두루 혁오 바이닐 박스셋",
    description:
      "탄소 저감 효과가 검증된 라임스톤 소재를 적용해 고밀도 질감과 묵직한 완성도를 구현했습니다. 기존 바이닐 패키지에서 보기 어려웠던 새로운 소재 경험을 제안했습니다.",
    tags: ["엔터테인먼트", "바이닐", "탄소저감"],
    feature:
      "바이닐 박스셋에 어울리는 고밀도 질감과 묵직한 제품 경험을 완성",
    material: "탄소 저감 효과가 검증된 라임스톤 소재 적용",
    image: "/assets/cases/Work7.webp",
    alt: "Minimal molded object for entertainment package",
  },
  {
    category: "Other",
    services: "CMF DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "희녹 더 스프레이 세트 패키징",
    description:
      "재활용 박스지를 기반으로 반건식 공정 방식을 도입해 브랜드의 시그니처 형상을 구현했습니다. 자연스러운 텍스처와 구조감을 살린 페이퍼몰드 패키지입니다.",
    tags: ["라이프스타일", "리필", "텍스처"],
    feature:
      "브랜드의 시그니처 형상을 자연스러운 텍스처와 구조감으로 구현",
    material: "재활용 박스지 기반 반건식 공정으로 제작한 페이퍼몰드 패키지",
    image: "/assets/cases/Work8.webp",
    alt: "Paper mold package case study",
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

const faqs = [
  {
    question: "친환경 패키지 개발은 어디서부터 시작하나요?",
    answer:
      "제품 용도, 유통 환경, 목표 단가를 먼저 확인한 뒤 적합한 소재와 구조 방향을 함께 정리합니다.",
  },
  {
    question: "아직 제품 사양이 확정되지 않아도 상담할 수 있나요?",
    answer:
      "가능합니다. 초기 아이디어 단계에서도 소재 후보, 제작 방식, 예상 리스크를 먼저 검토해 드립니다.",
  },
  {
    question: "샘플 제작까지 얼마나 걸리나요?",
    answer:
      "제품 구조와 소재 난이도에 따라 다르지만, 기본 방향 확정 후 샘플 제작 일정과 검증 항목을 안내합니다.",
  },
  {
    question: "소량 생산도 가능한가요?",
    answer:
      "가능한 제작 방식과 최소 수량을 함께 검토합니다. 양산 전 테스트 목적의 제작도 상담할 수 있습니다.",
  },
  {
    question: "EU PPWR 같은 해외 규제도 함께 확인하나요?",
    answer:
      "네. 포장재 구성, 재활용성, 문서화 기준을 제품 개발 단계에서 함께 검토합니다.",
  },
  {
    question: "기존 패키지를 친환경 소재로 바꿀 수 있나요?",
    answer:
      "기존 구조를 분석한 뒤 대체 가능한 소재, 내구성, 생산성, 비용 변화를 비교해 제안합니다.",
  },
  {
    question: "견적을 받으려면 어떤 자료가 필요한가요?",
    answer:
      "제품 크기, 예상 수량, 현재 패키지 사진이나 도면이 있으면 좋습니다. 자료가 부족해도 기본 상담은 가능합니다.",
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

const renderAnimatedTitle = (text: string) => {
  let characterIndex = 0;

  return text.split(/(\s+)/).map((word, wordIndex) => {
    if (/^\s+$/.test(word)) {
      return (
        <span className="title-reveal__space" key={`space-${wordIndex}`}>
          {word}
        </span>
      );
    }

    return (
      <span className="title-reveal__word" key={`word-${wordIndex}`}>
        {Array.from(word).map((character) => {
          const currentIndex = characterIndex;
          characterIndex += 1;

          return (
            <span
              className="title-reveal__char"
              key={`${character}-${currentIndex}`}
              style={{ "--char-index": currentIndex } as CSSProperties}
            >
              {character}
            </span>
          );
        })}
      </span>
    );
  });
};

interface ServiceDetailAdBannerProps {
  embedded?: boolean;
}

export function ServiceDetailAdBanner({
  embedded = false,
}: ServiceDetailAdBannerProps) {
  const [activeAdBanner, setActiveAdBanner] = useState(0);
  const currentAdBanner = adBanners[activeAdBanner];
  const bannerClassName = `ad-banner-section${
    embedded ? " ad-banner-section--embedded" : ""
  }`;
  const bannerContent = (
    <div className="ad-banner">
      <div
        className="ad-banner__track"
        style={{ transform: `translateX(-${activeAdBanner * 100}%)` }}
      >
        {adBanners.map(({ alt, description, image, theme, title }) => (
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
              current === 0 ? adBanners.length - 1 : current - 1,
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
              current === adBanners.length - 1 ? 0 : current + 1,
            )
          }
        >
          <CaretRight size={19} weight="bold" aria-hidden="true" />
        </button>
        <div className="ad-banner__indicator" aria-hidden="true">
          <span
            style={{
              transform: `translateX(${activeAdBanner * 100}%)`,
              width: `${100 / adBanners.length}%`,
            }}
          />
        </div>
        <span className="ad-banner__count">
          {activeAdBanner + 1}/{adBanners.length}
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
}

export function ServiceDetailSharedSections({
  showAdBanner = true,
}: ServiceDetailSharedSectionsProps) {
  const [activeFaq, setActiveFaq] = useState(-1);

  useEffect(() => {
    const revealTitles = document.querySelectorAll(".title-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.24,
      },
    );

    revealTitles.forEach((title) => observer.observe(title));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="case-studies-section" id="customer-cases">
        <div className="case-studies">
          <div>
            <h2 className="title-reveal case-studies__title">
              {renderAnimatedTitle("고객 사례")}
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
                    <img src={caseStudy.image} alt={caseStudy.alt} />
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

      {showAdBanner && <ServiceDetailAdBanner />}

      <section className="faq-section" id="faq">
        <div className="faq-section__inner">
          <h2 className="title-reveal section-title">
            {renderAnimatedTitle("FAQ")}
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
            {renderAnimatedTitle("새로운 소식")}
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
