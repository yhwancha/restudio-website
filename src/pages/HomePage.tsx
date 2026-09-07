import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  CaretLeft,
  CaretRight,
  Paperclip,
  Plus,
} from "@phosphor-icons/react";

const showcaseCategories = [
  {
    title: "PAPERMOLD",
    images: [
      {
        src: "/assets/showcase/papermold1.png",
        alt: "PAPERMOLD molded package with sesame oil bottles",
      },
      {
        src: "/assets/showcase/papermold2.png",
        alt: "PAPERMOLD curved paper packaging forms",
      },
      {
        src: "/assets/showcase/papermold3.png",
        alt: "PAPERMOLD wine bottle package on a dark background",
      },
    ],
  },
  {
    title: "BIOPLASTIC",
    images: [
      {
        src: "/assets/showcase/bioplastic1.png",
        alt: "Bioplastic cosmetic tube holder display",
      },
      {
        src: "/assets/showcase/bioplastic2.png",
        alt: "Blue bioplastic tray with resin pellets",
      },
      {
        src: "/assets/showcase/bioplastic3.png",
        alt: "Bioplastic display plaque",
      },
    ],
  },
  {
    title: "PCR/PIR",
    images: [
      {
        src: "/assets/showcase/pcr-pir.png",
        alt: "PCR/PIR recycled plastic cosmetic packaging with pink pellets",
      },
      {
        src: "/assets/showcase/pcr-pir2.png",
        alt: "PCR/PIR package surrounded by blue-gray recycled pellets",
      },
      {
        src: "/assets/showcase/pcr-pir3.png",
        alt: "PCR/PIR translucent cosmetic cream jar",
      },
    ],
  },
  {
    title: "UPCYCLE",
    images: [
      {
        src: "/assets/showcase/upcycle.png",
        alt: "Upcycled coffee ground hair clips",
      },
      {
        src: "/assets/showcase/upcycle2.png",
        alt: "Upcycled dark cosmetic jar",
      },
      {
        src: "/assets/showcase/upcycle3.png",
        alt: "Upcycled coffee ground toothpaste squeezer in use",
      },
    ],
  },
];

const serviceMetrics = [
  {
    title: "평균 개발 기간 단축",
    description: "AI 기반 검증 프로세스로 제품 출시까지 빠르게 연결합니다.",
    value: "50%",
  },
  {
    title: "개발비용 최대 절감",
    description:
      "소재, 금형, 생산 조건을 초기에 비교해 불필요한 샘플링과 재작업 비용을 낮춥니다.",
    value: "30%",
  },
  {
    title: "소재 선정부터 양산까지",
    description:
      "친환경 소재 검토, 구조 설계, 샘플 제작, 양산 연결까지 한 흐름으로 관리합니다.",
    value: "원스톱",
  },
  {
    title: "해외 수출 규제 대응",
    description:
      "EU 포장폐기물 규정과 글로벌 인증 요구사항을 제품 개발 단계부터 함께 반영합니다.",
    value: "PPWR",
  },
];

const coreServices = [
  {
    title: "친환경 제품 개발 지원",
    description:
      "친환경 소재 검토부터 설계, 성능 평가까지 제품개발 전 과정을 도와드려요.",
    image: "/assets/services/eco-product-development.png",
    alt: "Recycled material package surrounded by blue-green pellets",
    to: "/services/product-development",
  },
  {
    title: "규제 대응 컨설팅",
    description:
      "국내외 규제 동향 분석과 대응 전략 수립으로 비즈니스 리스크를 최소화하고 해외 수출까지 도와드려요.",
    image: "/assets/services/regulatory-consulting.png",
    alt: "PPWR regulatory consulting dashboard preview",
    to: "/services/regulatory-response",
  },
];

const testimonialSlides = [
  {
    quote:
      "소재 후보를 정리하고 샘플 방향을 잡는 시간이 줄어 내부 의사결정이 훨씬 빨라졌습니다.",
    author: "생활용품 브랜드 제품개발팀",
    role: "패키지 개발 담당",
    logo: "/assets/clients/client-logo-01.svg",
    logoLabel: "Client logo",
  },
  {
    quote:
      "규제 자료를 흩어진 문서로 관리하지 않아도 되어, 신청서와 증빙 업데이트를 한눈에 확인할 수 있었습니다.",
    author: "뷰티 브랜드 운영팀",
    role: "해외 인증 담당",
    image: "/assets/showcase/pcr-pir2.png",
    imageLabel: "Recycled package material sample",
  },
  {
    quote:
      "아이디어 단계에서 바로 생산 가능성과 소재 리스크를 함께 검토할 수 있어 재작업 부담이 줄었습니다.",
    author: "식품 브랜드 운영팀",
    role: "신제품 PM",
    logo: "/assets/clients/client-logo-06.svg",
    logoLabel: "Client logo",
  },
  {
    quote:
      "친환경 패키지 콘셉트를 실제 양산 사양까지 연결하는 과정이 명확해서 협력사 커뮤니케이션이 쉬웠습니다.",
    author: "커머스 브랜드 개발팀",
    role: "브랜드 매니저",
    image: "/assets/showcase/papermold1.png",
    imageLabel: "Paper molded package sample",
  },
  {
    quote:
      "PPWR 대응에 필요한 항목을 제품별로 정리해주니, 수출 준비 과정에서 놓치는 부분을 줄일 수 있었습니다.",
    author: "제조사 수출지원팀",
    role: "규제 대응 담당",
    logo: "/assets/clients/client-logo-10.svg",
    logoLabel: "Client logo",
  },
  {
    quote:
      "소재 선정, 구조 검토, 인증 자료 준비가 한 흐름으로 이어져 출시 일정 관리가 훨씬 편해졌습니다.",
    author: "라이프스타일 브랜드",
    role: "프로덕트 디렉터",
    image: "/assets/showcase/upcycle3.png",
    imageLabel: "Upcycled product usage sample",
  },
];

const caseStudies = [
  {
    category: "Cosmetics",
    services: "PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "아이홉 클렌징 건식 패드 패키지",
    description:
      "LEAF, BLENDS, BIODEGRADABLE 세 가지 콘셉트를 담아 건식 패드 제품을 위한 친환경 패키지를 개발했습니다. 페이퍼몰드와 단상자는 디자인 완성도와 창의성을 인정받아 2024 레드닷 어워드 Winner로 선정되었습니다.",
    image: "/assets/cases/Work1.webp",
    alt: "Curved white paper mold package for cosmetics",
  },
  {
    category: "Food",
    services: "NEW MATERIALS R&D / CMF DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "SK텔레콤 행복나래 친환경 도시락 패키지",
    description:
      "기존 종이몰드의 한계를 보완하기 위해 내구성과 충격 저항성을 높인 필름 라미네이팅 기술을 적용했습니다. 식품 트레이 사용성을 개선하며 지속 가능한 도시락 패키지 방향을 제안했습니다.",
    image: "/assets/cases/Work2.webp",
    alt: "Paper molded food package with bottles",
  },
  {
    category: "Medical",
    services: "STRATEGY / PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "비올 셀리뉴 페이스 팁 패키징",
    description:
      "의료·뷰티 디바이스 제품을 위해 플라스틱 사용량을 줄이면서도 구조 안정성을 유지하는 페이퍼몰드 패키지를 설계했습니다. 제품 보호와 사용성을 함께 고려한 지속 가능한 솔루션입니다.",
    image: "/assets/cases/Work3.webp",
    alt: "Medical beauty product displayed with blue holder",
  },
  {
    category: "Electronics",
    services: "PACKAGING DESIGN / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "원콤 핀틴 V1 패키징",
    description:
      "시각장애인용 미니 쿼티 커뮤니케이터를 위한 제품 고정 구조를 페이퍼몰드로 개발했습니다. 점자 요소를 패키지에 반영해 지속 가능한 소재와 포용적 디자인을 함께 담았습니다.",
    image: "/assets/cases/Work4.webp",
    alt: "Fintin electronics package case study",
  },
  {
    category: "Fashion",
    services: "STRATEGY / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "퍼센트오브 아이웨어 패키지",
    description:
      "무겁고 재활용이 어려운 기존 아이웨어 케이스를 종이 기반 구조로 전환했습니다. 자석을 적용해 재사용성을 높이고, 독창적인 몰드 형태로 패션 카테고리에 맞는 새로운 패키지 경험을 만들었습니다.",
    image: "/assets/cases/Work_6.webp",
    alt: "Fashion package case study",
  },
  {
    category: "Healthcare",
    services: "STRATEGY / PRODUCT DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "트루엔뉴트리션 트루엔키즈 팡팡 쾌변젤리",
    description:
      "아이들의 표정에서 착안한 스마일 텍스처와 휴대 가능한 스트링 구조를 적용했습니다. 종이에 직접 그림을 그릴 수 있는 여백을 더해 창의성과 사용성을 함께 높였습니다.",
    image: "/assets/cases/Work6.webp",
    alt: "Healthcare product package case study",
  },
  {
    category: "Entertainment",
    services: "STRATEGY / CMF DEVELOPMENT & COMMERCIALIZATION / PACKAGING DESIGN / MANUFACTURE",
    title: "두루두루 혁오 바이닐 박스셋",
    description:
      "탄소 저감 효과가 검증된 라임스톤 소재를 적용해 고밀도 질감과 묵직한 완성도를 구현했습니다. 기존 바이닐 패키지에서 보기 어려웠던 새로운 소재 경험을 제안했습니다.",
    image: "/assets/cases/Work7.webp",
    alt: "Minimal molded object for entertainment package",
  },
  {
    category: "Other",
    services: "CMF DESIGN / 3D MODELING & RENDERING / MANUFACTURE",
    title: "희녹 더 스프레이 세트 패키징",
    description:
      "재활용 박스지를 기반으로 반건식 공정 방식을 도입해 브랜드의 시그니처 형상을 구현했습니다. 자연스러운 텍스처와 구조감을 살린 페이퍼몰드 패키지입니다.",
    image: "/assets/cases/Work8.webp",
    alt: "Paper mold package case study",
  },
];

const adBanners = [
  {
    theme: "manufacture",
    title: "제품 제조를 빠르게",
    description: "소재 검토부터 샘플, 양산 연결까지 한 번에 준비합니다.",
    action: "제조 상담 시작하기",
    image: "/assets/ads/manufacture-banner.png",
    alt: "Eco-friendly molded packaging prototypes in a studio",
  },
  {
    theme: "discount",
    title: "첫 생산 부담 낮추기",
    description: "런칭 제품을 위한 샘플 검토와 견적 비교를 함께 지원합니다.",
    action: "혜택 확인하기",
    image: "/assets/ads/discount-banner.png",
    alt: "Sustainable packaging samples arranged for production support",
  },
  {
    theme: "environment",
    title: "환경 기준에 맞춘 패키지",
    description: "재생 소재와 규제 대응 기준을 함께 확인해 제품 방향을 잡습니다.",
    action: "친환경 소재 문의",
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

const footerSocialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/revation.co.kr/",
    icon: "/assets/social/instagram.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/revation.co.kr",
    icon: "/assets/social/facebook-fill.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/revation21/?originalSubdomain=kr",
    icon: "/assets/social/linkedin-original.svg",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/revation?tracking_source=search_projects|bioplastic",
    icon: "/assets/social/behance-original.svg",
  },
];

const clientLogos = Array.from({ length: 40 }, (_, index) => ({
  src: `/assets/clients/client-logo-${String(index + 1).padStart(2, "0")}.svg`,
}));

const visibleClientLogoCount = 10;
const clientLogoFadeDuration = 620;
const testimonialPageCount = Math.ceil(testimonialSlides.length / 2);

const testimonialPages = Array.from(
  { length: testimonialPageCount },
  (_, pageIndex) =>
    testimonialSlides.slice(pageIndex * 2, pageIndex * 2 + 2),
);

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getInitialClientLogos = () =>
  clientLogos.slice(0, visibleClientLogoCount).map((_, index) => index);

const getNextClientLogoIndex = (visibleLogos: number[], slotIndex: number) => {
  const otherVisibleLogos = new Set(
    visibleLogos.filter((_, index) => index !== slotIndex),
  );
  const candidates = clientLogos
    .map((_, index) => index)
    .filter(
      (logoIndex) =>
        !otherVisibleLogos.has(logoIndex) &&
        logoIndex !== visibleLogos[slotIndex],
    );

  return (
    candidates[Math.floor(Math.random() * candidates.length)] ??
    visibleLogos[slotIndex]
  );
};

type AnimatedTitlePart =
  | string
  | {
      type: "break";
    }
  | {
      text: string;
      wrapperClassName: string;
      charClassName?: string;
      withMarker?: boolean;
    };

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
      d="M34 33 C48 15 63 16 76 24 C91 34 99 20 115 18 C133 16 144 31 160 24 C177 17 191 14 206 29 C223 46 235 12 255 17 C272 21 282 14 293 18"
    />
    <path
      className="marker-scribble__path marker-scribble__path--middle"
      pathLength={1}
      d="M31 37 C47 46 57 8 75 16 C92 24 96 43 113 36 C132 29 139 9 155 19 C170 29 171 45 189 35 C206 26 211 23 227 30 C244 38 246 17 263 22 C279 27 286 32 296 24"
    />
  </svg>
);

const renderAnimatedTitle = (parts: AnimatedTitlePart[]) => {
  let characterIndex = 0;

  const renderText = (text: string, charClassName = "") =>
    text.split(/(\s+)/).map((word, wordIndex) => {
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
                className={`title-reveal__char ${charClassName}`.trim()}
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

  return parts.map((part, partIndex) => {
    if (typeof part === "string") {
      return (
        <span key={`text-${partIndex}`}>{renderText(part)}</span>
      );
    }

    if (!("text" in part)) {
      return <br key={`break-${partIndex}`} />;
    }

    return (
      <span className={part.wrapperClassName} key={`part-${partIndex}`}>
        {part.withMarker && markerStroke}
        <span className={part.charClassName ? "relative z-10" : undefined}>
          {renderText(part.text, part.charClassName)}
        </span>
      </span>
    );
  });
};

export function HomePage() {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [visibleClientLogos, setVisibleClientLogos] =
    useState(getInitialClientLogos);
  const [fadingClientSlots, setFadingClientSlots] = useState<number[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [activeAdBanner, setActiveAdBanner] = useState(0);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [testimonialSlideWidth, setTestimonialSlideWidth] = useState(0);
  const clientSectionRef = useRef<HTMLElement | null>(null);
  const clientSceneRef = useRef<HTMLDivElement | null>(null);
  const activeCategory = showcaseCategories[activeShowcase];
  const currentCaseStudy = caseStudies[activeCaseStudy];
  const currentAdBanner = adBanners[activeAdBanner];

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

  useEffect(() => {
    const revealItems = document.querySelectorAll(".service-excellence__item");

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
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = clientSectionRef.current;
    const scene = clientSceneRef.current;

    if (!section || !scene) {
      return;
    }

    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const updateClientScene = () => {
      if (window.innerWidth < 768) {
        scene.style.setProperty("--client-panel-width", "100%");
        scene.style.setProperty("--client-panel-height", "280px");
        scene.style.setProperty("--client-logo-opacity", "1");
        scene.style.setProperty("--client-logo-y", "0px");
        scene.style.setProperty("--client-label-opacity", "1");
        scene.style.setProperty("--client-scene-y", "0px");
        section.style.setProperty("--client-testimonials-opacity", "1");
        section.style.setProperty("--client-testimonials-y", "0px");
        frame = 0;
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollRange = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / scrollRange);
      const verticalProgress = clamp(progress / 0.34);
      const horizontalProgress = clamp((progress - 0.34) / 0.42);
      const logoProgress = clamp((progress - 0.64) / 0.24);
      const testimonialProgress = clamp((progress - 0.78) / 0.18);
      const availableWidth = Math.min(1120, Math.max(260, window.innerWidth - 360));
      const panelWidth = 4 + (availableWidth - 4) * horizontalProgress;
      const panelHeight = 72 + 250 * verticalProgress;

      scene.style.setProperty("--client-panel-width", `${panelWidth}px`);
      scene.style.setProperty("--client-panel-height", `${panelHeight}px`);
      scene.style.setProperty("--client-logo-opacity", `${logoProgress}`);
      scene.style.setProperty("--client-logo-y", `${(1 - logoProgress) * 18}px`);
      scene.style.setProperty("--client-label-opacity", `${1 - horizontalProgress * 0.55}`);
      scene.style.setProperty("--client-scene-y", `${testimonialProgress * -190}px`);
      section.style.setProperty("--client-testimonials-opacity", `${testimonialProgress}`);
      section.style.setProperty("--client-testimonials-y", `${(1 - testimonialProgress) * 28}px`);

      frame = 0;
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateClientScene);
    };

    updateClientScene();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    const timeouts: number[] = [];
    const activeSlots = new Set<number>();

    const removeActiveSlot = (slotIndex: number) => {
      activeSlots.delete(slotIndex);
      setFadingClientSlots((currentSlots) =>
        currentSlots.filter((currentSlot) => currentSlot !== slotIndex),
      );
    };

    const swapRandomLogo = () => {
      const availableSlots = Array.from(
        { length: visibleClientLogoCount },
        (_, slotIndex) => slotIndex,
      ).filter((slotIndex) => !activeSlots.has(slotIndex));

      if (availableSlots.length === 0) {
        return;
      }

      const slotIndex =
        availableSlots[Math.floor(Math.random() * availableSlots.length)];

      activeSlots.add(slotIndex);
      setFadingClientSlots((currentSlots) => [...currentSlots, slotIndex]);

      const swapTimeout = window.setTimeout(() => {
        setVisibleClientLogos((currentLogos) => {
          const nextLogos = [...currentLogos];
          nextLogos[slotIndex] = getNextClientLogoIndex(currentLogos, slotIndex);

          return nextLogos;
        });
      }, 260);

      const clearTimeoutId = window.setTimeout(() => {
        removeActiveSlot(slotIndex);
      }, clientLogoFadeDuration);

      timeouts.push(swapTimeout, clearTimeoutId);
    };

    const scheduleNextSwap = () => {
      const timeout = window.setTimeout(() => {
        swapRandomLogo();

        if (Math.random() > 0.68) {
          const burstTimeout = window.setTimeout(
            swapRandomLogo,
            getRandomNumber(120, 340),
          );
          timeouts.push(burstTimeout);
        }

        scheduleNextSwap();
      }, getRandomNumber(720, 2200));

      timeouts.push(timeout);
    };

    const initialTimeout = window.setTimeout(swapRandomLogo, 520);
    timeouts.push(initialTimeout);
    scheduleNextSwap();

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, []);

  useEffect(() => {
    const updateTestimonialSlideWidth = () => {
      const viewport = document.querySelector<HTMLElement>(
        ".client-testimonials__viewport",
      );

      setTestimonialSlideWidth(viewport?.clientWidth ?? window.innerWidth);
    };

    updateTestimonialSlideWidth();
    window.addEventListener("resize", updateTestimonialSlideWidth);

    return () =>
      window.removeEventListener("resize", updateTestimonialSlideWidth);
  }, []);

  return (
    <>
    <main className="bg-[#f7f8f8]">
      <section className="flex items-start bg-[#f7f8f8] px-5 py-16 md:px-12 md:py-24 xl:px-[120px]">
        <div className="mx-auto w-full max-w-[1040px]">
          <h1 className="title-reveal mx-auto max-w-[720px] text-center text-[32px] font-semibold leading-[1.16] text-black md:text-[44px] xl:text-[48px]">
            {renderAnimatedTitle([
              "친환경 패키지 ",
              {
                text: "개발, 양산, 수출",
                wrapperClassName:
                  "marker-scribble relative inline-block whitespace-nowrap px-1",
                charClassName: "relative z-10",
                withMarker: true,
              },
              "까지",
              { type: "break" },
              "리스튜디오에서 한번에.",
            ])}
          </h1>

          <form
            className="mx-auto mt-10 max-w-[760px] rounded-2xl border border-[#d7dde2] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(23,33,27,0.035)] md:mt-11 md:px-5 md:py-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex items-center gap-2.5">
              <Paperclip
                size={21}
                weight="regular"
                aria-hidden="true"
                className="shrink-0 text-[#9aa8b7]"
              />
              <label className="sr-only" htmlFor="home-ai-question">
                AI Agent 리사에게 제품 개발 문의하기
              </label>
              <input
                id="home-ai-question"
                type="text"
                className="h-8 min-w-0 flex-1 bg-transparent text-[13px] font-medium text-primary-900 outline-none placeholder:text-[#9aa3af] md:text-[14px]"
                placeholder="제품 개발에 대해 궁금한 것이 있나요? AI Agent 리사가 도와드릴게요!"
              />
              <button
                type="submit"
                aria-label="문의 보내기"
                className="grid size-8 shrink-0 place-items-center rounded-full bg-[#bfc5c1] text-white transition hover:bg-primary-600 active:scale-[0.98] md:size-9"
              >
                <ArrowUp size={18} weight="bold" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-2.5 text-center text-[10px] font-semibold text-[#b6bdc5] md:text-[11px]">
              대화를 진행하면{" "}
              <a
                href="https://material-beam-ed6.notion.site/20224acd6ea980ee90cae0df5e5cc6af"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-primary-600"
              >
                개인정보처리방침
              </a>
              에 동의하신 것으로 이해됩니다
            </p>
          </form>

          <div className="mt-16 md:mt-20">
            <div
              className="flex h-16 items-center justify-center gap-1.5"
              aria-label="이미지 분야 선택"
            >
              {showcaseCategories.map((category, index) => {
                const isActive = activeShowcase === index;

                return (
                  <button
                    key={category.title}
                    type="button"
                    aria-label={`${category.title} 이미지 보기`}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveShowcase(index)}
                    onFocus={() => setActiveShowcase(index)}
                    className="group flex h-16 w-1.5 items-center justify-center"
                  >
                    <span
                      className={`block w-0.5 rounded-full transition-[height,background-color,transform] duration-300 ease-out group-hover:scale-x-[1.35] ${
                        isActive
                          ? "h-16 bg-black"
                          : "h-[42px] bg-[#d9d9d9] group-hover:h-16 group-hover:bg-black"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <h2 className="title-reveal mt-8 text-center text-[28px] font-semibold leading-none text-black md:text-[34px]">
              {renderAnimatedTitle([activeCategory.title])}
            </h2>

            <div className="mx-auto mt-8 grid max-w-[760px] gap-1.5 md:grid-cols-2">
              {activeCategory.images.map((image, index) => (
                <div
                  key={image.src}
                  className={`showcase-image-frame ${
                    index === 2
                      ? "aspect-[1.72/1] md:col-span-2"
                      : "aspect-[1.62/1]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>

            <section className="service-excellence mx-auto mt-10 max-w-[760px] md:mt-12">
              <div className="service-excellence__stage">
                <div className="service-excellence__stack">
                  {serviceMetrics.map((item, index) => (
                    <article
                      key={item.title}
                      className="service-excellence__item"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="min-w-0">
                        <h3 className="text-[18px] font-semibold leading-[1.25] text-black md:text-[21px]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 max-w-[520px] text-[13px] font-medium leading-[1.55] text-[#657181] md:text-[14px]">
                          {item.description}
                        </p>
                      </div>
                      <div className="service-excellence__badge">
                        {item.value}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f8] px-5 pb-20 pt-14 md:px-12 md:pb-28 md:pt-24 xl:px-[120px]">
        <div className="mx-auto w-full max-w-[1760px]">
          <h2 className="title-reveal text-center text-[30px] font-semibold leading-[1.15] text-black md:text-[42px] xl:text-[48px]">
            {renderAnimatedTitle(["2가지 핵심 서비스에서 만나요."])}
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:mt-20 xl:gap-8">
            {coreServices.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="core-service-card group"
                aria-label={`${service.title} 자세히 보기`}
              >
                <div className="core-service-card__media">
                  <img src={service.image} alt={service.alt} />
                </div>

                <div className="mt-6 flex items-end justify-between gap-5 md:mt-7">
                  <div className="min-w-0">
                    <h3 className="text-[21px] font-semibold leading-[1.24] text-black md:text-[26px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[13px] font-medium leading-[1.55] text-[#9aa3af] md:text-[14px]">
                      {service.description}
                    </p>
                  </div>

                  <span className="core-service-card__button">
                    <ArrowRight size={28} weight="regular" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section ref={clientSectionRef} className="client-growth-section">
        <div className="client-growth-stage">
          <div ref={clientSceneRef} className="client-growth-scene">
            <div className="title-reveal client-growth-label client-growth-label--left">
              {renderAnimatedTitle(["누적 고객사"])}
            </div>

            <div className="client-growth-panel" aria-label="고객사 로고 영역">
              <div className="client-logo-grid" aria-hidden="true">
                {visibleClientLogos.map((logoIndex, slot) => (
                  <span
                    key={slot}
                    className={`client-logo-slot ${
                      fadingClientSlots.includes(slot) ? "is-fading" : ""
                    }`}
                  >
                    <img src={clientLogos[logoIndex].src} alt="" />
                  </span>
                ))}
              </div>
            </div>

            <div className="title-reveal client-growth-label client-growth-label--right">
              {renderAnimatedTitle(["120개"])}
            </div>
          </div>

          <div className="client-testimonials">
            <div className="client-testimonials__viewport">
              <div
                className="client-testimonials__track"
                style={{
                  transform: `translateX(-${
                    testimonialSlideWidth * activeTestimonial
                  }px)`,
                }}
              >
                {testimonialPages.map((page, pageIndex) => (
                  <div
                    key={`testimonial-page-${pageIndex}`}
                    className="client-testimonials__page"
                  >
                    {page.map((testimonial) => (
                      <article
                        key={testimonial.author}
                        className="client-testimonial-card"
                      >
                        {testimonial.logo ? (
                          <div className="client-testimonial-card__logo">
                            <img
                              src={testimonial.logo}
                              alt={testimonial.logoLabel}
                            />
                          </div>
                        ) : (
                          <div className="client-testimonial-card__image">
                            <img
                              src={testimonial.image}
                              alt={testimonial.imageLabel}
                            />
                          </div>
                        )}

                        <div className="client-testimonial-card__content">
                          <p className="client-testimonial-card__quote">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <strong>{testimonial.author}</strong>
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="client-testimonials__controls">
              <button
                type="button"
                aria-label="이전 후기 보기"
                onClick={() =>
                  setActiveTestimonial((current) =>
                    current === 0 ? testimonialPageCount - 1 : current - 1,
                  )
                }
              >
                <CaretLeft size={21} weight="bold" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="다음 후기 보기"
                onClick={() =>
                  setActiveTestimonial((current) =>
                    current === testimonialPageCount - 1 ? 0 : current + 1,
                  )
                }
              >
                <CaretRight size={21} weight="bold" aria-hidden="true" />
              </button>
              <span>
                {activeTestimonial + 1}/{testimonialPageCount}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies-section" id="customer-cases">
        <div className="case-studies">
          <div>
            <h2 className="title-reveal case-studies__title">
              {renderAnimatedTitle(["고객 사례"])}
            </h2>
            <p className="case-studies__description">
              산업별 특징과 고객의 니즈를 분석하여 지속가능한 패키지 솔루션을 개발합니다.
            </p>
          </div>

          <div className="case-studies__panel">
            <div className="case-studies__list" aria-label="고객 사례 분야">
              {caseStudies.map((caseStudy, index) => {
                const isActive = activeCaseStudy === index;

                return (
                  <button
                    key={caseStudy.category}
                    type="button"
                    className={`case-study-tab ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveCaseStudy(index)}
                    onFocus={() => setActiveCaseStudy(index)}
                    onClick={() => setActiveCaseStudy(index)}
                    aria-pressed={isActive}
                  >
                    <span className="case-study-tab__header">
                      <span>{caseStudy.category}</span>
                      {!isActive && (
                        <Plus size={24} weight="regular" aria-hidden="true" />
                      )}
                    </span>
                    <span className="case-study-tab__services">
                      {caseStudy.services}
                    </span>
                  </button>
                );
              })}
            </div>

            <article className="case-study-preview">
              <div className="case-study-preview__media">
                <img
                  key={currentCaseStudy.image}
                  src={currentCaseStudy.image}
                  alt={currentCaseStudy.alt}
                />
              </div>
              <div className="case-study-preview__content">
                <h3>{currentCaseStudy.title}</h3>
                <p>{currentCaseStudy.description}</p>
                <Link to="/cases" className="case-study-preview__link">
                  자세히 보기
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ad-banner-section" aria-label="프로모션 배너">
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
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-section__inner">
          <h2 className="title-reveal section-title">
            {renderAnimatedTitle(["FAQ"])}
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
            {renderAnimatedTitle(["새로운 소식"])}
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
                {item.image ? (
                  <img src={item.image} alt={item.alt} />
                ) : (
                  <span>
                    친환경 패키지 원스톱 솔루션,
                    <strong>리스튜디오란?</strong>
                  </span>
                )}
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

      <section className="closing-wordmark-section" aria-label="리스튜디오 원스톱 메시지">
        <p className="title-reveal">
          {renderAnimatedTitle(["Onestop in Restudio"])}
        </p>
      </section>
    </main>
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__left">
          <div className="site-footer__cta">
            <Link to="/inquiry/product">제품개발문의</Link>
            <Link to="/inquiry/regulation">규제대응문의</Link>
          </div>

          <address className="site-footer__contact">
            <p>
              <strong>주소</strong>
              서울특별시 강서구 마곡중앙로 143, 타워B, 3층
            </p>
            <p>
              <strong>이메일</strong>
              <a href="mailto:sales@revation.co.kr">sales@revation.co.kr</a>
            </p>
            <p>
              <strong>전화번호</strong>
              <a href="tel:0264897080">02-6489-7080</a>
            </p>
          </address>
        </div>

        <div className="site-footer__social" aria-label="소셜 링크">
          {footerSocialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <img src={icon} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__brand">
          <img src="/assets/logo-dark.svg" alt="RESTUDIO" />
          <p>@2024 REVATION. All rights reserved.</p>
        </div>

        <nav className="site-footer__policies" aria-label="정책 링크">
          <a
            href="https://material-beam-ed6.notion.site/20224acd6ea980678464cdaa66662ec7"
            target="_blank"
            rel="noreferrer"
          >
            이용약관
          </a>
          <span aria-hidden="true" />
          <a
            href="https://material-beam-ed6.notion.site/20224acd6ea980ee90cae0df5e5cc6af"
            target="_blank"
            rel="noreferrer"
          >
            개인정보처리방침
          </a>
        </nav>
      </div>
    </footer>
    </>
  );
}
