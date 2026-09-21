import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  CaretLeft,
  CaretRight,
  Paperclip,
} from "@phosphor-icons/react";
import {
  AnimatedTitle,
  useTitleReveal,
} from "../components/AnimatedTitle";

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
    eyebrow: "친환경 제품&패키지를 만들고 싶어요.",
    title: "친환경 패키지 원스톱 솔루션 바로가기",
    description:
      "친환경 소재 검토부터 설계, 성능 평가까지 제품개발 전 과정을 도와드려요.",
    image: "/assets/services/eco-product-development.png",
    alt: "Recycled material package surrounded by blue-green pellets",
    to: "/services/product-development",
  },
  {
    eyebrow: "EU PPWR 같은 친환경 규제 준비가 필요해요.",
    title: "친환경 규제대응 솔루션 바로가기",
    description:
      "국내외 규제 동향 분석과 대응 전략 수립으로 비즈니스 리스크를 최소화하고 해외 수출까지 도와드려요.",
    image: "/assets/services/regulatory-consulting.png",
    alt: "PPWR regulatory consulting dashboard preview",
    to: "/services/regulatory-response",
  },
];

const testimonialSlides = [
  {
    title: "원스톱 전환",
    subtitle: "소재·인증·디자인 통합 조율",
    tag: "화장품",
    quote:
      "소재는 A업체, 인증은 B기관, 디자인은 C에이전시... 각각 따로 연락하면서 중간에서 다 조율하고 있었는데, 리스튜디오를 만나고 모든 과정이 한 번에 해결되었습니다.",
    author: "김*수",
    role: "A 코스메틱 마케팅팀",
    image: "/assets/showcase/bioplastic1.png",
    imageLabel: "화장품 패키지 원스톱 전환 사례",
  },
  {
    title: "개발 기간 50% 단축",
    subtitle: "신제품 패키지 런칭 리드타임 개선",
    tag: "헬스케어",
    quote:
      "기존 대비 패키지 개발 기간을 절반으로 줄일 수 있었습니다. 무엇보다 대기업 수준의 결과물을 합리적인 비용으로 얻을 수 있어 매우 만족스럽습니다. 다음 신제품도 함께할 예정입니다.",
    author: "박*훈",
    role: "C 헬스케어 스타트업",
    image: "/assets/showcase/papermold1.png",
    imageLabel: "헬스케어 신제품 패키지 개발 사례",
  },
  {
    title: "PPWR 대응",
    subtitle: "수출 규제 맞춤 패키지 도입",
    tag: "F&B",
    quote:
      "수출 규제 대응 때문에 고민이 많았는데, 리스튜디오 덕분에 EU PPWR 규격에 맞춘 패키지를 빠르게 도입할 수 있었습니다. 디자인도 너무 만족스럽습니다.",
    author: "이수진 팀장",
    role: "B F&B 상품기획팀",
    image: "/assets/testimonials/fnb-ppwr-response.png",
    imageLabel: "F&B PPWR 대응 패키지 리뷰 이미지",
  },
  {
    title: "소재 탐색 단축",
    subtitle: "콘셉트 맞춤 친환경 소재 매칭",
    tag: "LIFESTYLE",
    quote:
      "브랜드 콘셉트에 맞는 친환경 소재를 찾는 데 시간이 오래 걸렸는데, 리스튜디오가 소재 제안부터 샘플 제작까지 빠르게 연결해 주어 출시 일정에 맞출 수 있었습니다.",
    author: "정다운 PM",
    role: "D 라이프스타일 브랜드",
    image: "/assets/testimonials/lifestyle-material-search.png",
    imageLabel: "라이프스타일 브랜드 친환경 소재 탐색 리뷰 이미지",
  },
  {
    title: "PPWR 대응진단&필수 서류 점검",
    subtitle: "수출에 꼭 필요한 업종별 원스톱 맞춤 서비스",
    tag: "화장품 고객사",
    quote:
      "바이어가 갑자기 PPWR 관련 증빙 서류 요청해서 앞 길이 막막했는데 준비할 서류부터 대응해야 할 액션 아이템까지 꼼꼼히 도와주셔서 무사히 수출했습니다.",
    author: "강*모 실장",
    role: "A 화장품 상품기획팀",
    image: "/assets/testimonials/cosmetics-ppwr-documents.png",
    imageLabel: "화장품 고객사 PPWR 필수 서류 점검 리뷰 이미지",
  },
];

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
    theme: "product-development-onestop",
    title: "처음부터 끝까지 리스튜디오 친환경 패키지 완성",
    description: "친환경 패키지 원스톱 솔루션 상담 신청 배너",
    image: "/assets/ads/product-development-onestop-banner.png",
    alt: "처음부터 끝까지 리스튜디오 친환경 패키지 완성 배너",
  },
];

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

const clientLogos = Array.from({ length: 40 }, (_, index) => ({
  src: `/assets/clients/client-logo-${String(index + 1).padStart(2, "0")}.svg`,
}));

const testimonialPageCount = Math.ceil(testimonialSlides.length / 2);

const testimonialPages = Array.from(
  { length: testimonialPageCount },
  (_, pageIndex) =>
    testimonialSlides.slice(pageIndex * 2, pageIndex * 2 + 2),
);

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

export function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeAdBanner, setActiveAdBanner] = useState(0);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [testimonialSlideWidth, setTestimonialSlideWidth] = useState(0);
  const currentAdBanner = adBanners[activeAdBanner];

  useTitleReveal();

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
      <section className="home-hero-section bg-[#f7f8f8] px-5 py-16 md:px-12 md:py-24 xl:px-[120px]">
        <div className="mx-auto w-full max-w-[1040px]">
          <h1 className="title-reveal mx-auto max-w-[720px] text-center text-[32px] font-semibold leading-[1.16] text-black md:text-[44px] xl:text-[48px]">
            <AnimatedTitle
              parts={[
              "친환경 패키지, 처음부터 끝까지",
              { type: "break" },
              {
                text: "리스튜디오",
                wrapperClassName:
                  "marker-scribble relative inline-block whitespace-nowrap px-1",
                charClassName: "relative z-10",
                prefix: markerStroke,
              },
              " 하나로 완성",
              ]}
            />
          </h1>

          <div className="ad-banner-section ad-banner-section--embedded" aria-label="프로모션 배너">
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
          </div>

          <form
            className="mx-auto mt-4 max-w-[1040px] rounded-2xl border border-[#d7dde2] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(23,33,27,0.035)] md:mt-5 md:px-5 md:py-4"
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

          <section className="mt-28 md:mt-40" aria-label="핵심 서비스">
            <h2 className="title-reveal text-center text-[26px] font-semibold leading-[1.18] text-black md:text-[34px] xl:text-[38px]">
              <AnimatedTitle
                parts={[
                  "어떤 고민 있으세요?",
                  { type: "break" },
                  "리스튜디오와 함께 해결할 분야를 선택해주세요.",
                ]}
              />
            </h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:gap-8">
              {coreServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.to}
                  className="core-service-card group"
                  aria-label={`${service.title} 자세히 보기`}
                >
                  <p className="mb-3 text-[13px] font-medium leading-[1.45] text-[#8d98a4] md:text-[14px]">
                    {service.eyebrow}
                  </p>

                  <div className="core-service-card__media">
                    <img src={service.image} alt={service.alt} />
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-5 md:mt-7">
                    <div className="min-w-0">
                      <h3 className="text-[18px] font-semibold leading-[1.24] text-black md:text-[22px]">
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
          </section>

        </div>
      </section>

      <section className="home-video-section">
        <div className="home-video-section__inner">
          <div className="home-video-section__copy">
            <h2>
              대한민국 대표 클린테크 기업, 리베이션이 만든
              <span>원스톱 친환경 패키지 솔루션, 리스튜디오</span>
            </h2>
            <p>
              제품 컨설팅부터 디자인, R&amp;D, 생산, 검수, 탄소저감 리포트까지
              전 과정을 통합 지원하는 친환경 패키지 개발 서비스를 제공합니다.
            </p>
          </div>

          <div className="home-video-section__frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/-qfbylgla54?rel=0"
              title="리스튜디오 소개 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
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
      </section>

      <section className="client-growth-section">
        <div className="client-growth-stage">
          <div className="client-growth-scene">
            <div className="title-reveal client-growth-label client-growth-label--left">
              <AnimatedTitle parts={["누적 고객사"]} />
            </div>

            <div className="client-growth-panel" aria-label="고객사 로고 영역">
              <div className="client-logo-marquee" aria-hidden="true">
                <div className="client-logo-marquee__track client-logo-marquee__track--forward">
                  {[...clientLogos.slice(0, 14), ...clientLogos.slice(0, 14)].map(
                    (logo, index) => (
                      <span className="client-logo-slot" key={`top-${logo.src}-${index}`}>
                        <img src={logo.src} alt="" />
                      </span>
                    ),
                  )}
                </div>
                <div className="client-logo-marquee__track client-logo-marquee__track--reverse">
                  {[...clientLogos.slice(14, 28), ...clientLogos.slice(14, 28)].map(
                    (logo, index) => (
                      <span
                        className="client-logo-slot"
                        key={`bottom-${logo.src}-${index}`}
                      >
                        <img src={logo.src} alt="" />
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="title-reveal client-growth-label client-growth-label--right">
              <AnimatedTitle parts={["120개"]} />
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
                        <div className="client-testimonial-card__image">
                          <img
                            src={testimonial.image}
                            alt={testimonial.imageLabel}
                          />
                          <div className="client-testimonial-card__image-copy">
                            <strong>{testimonial.title}</strong>
                            <span>{testimonial.subtitle}</span>
                          </div>
                        </div>

                        <div className="client-testimonial-card__content">
                          <div className="client-testimonial-card__body">
                            <span className="client-testimonial-card__tag">
                              {testimonial.tag}
                            </span>
                            <p className="client-testimonial-card__quote">
                              "{testimonial.quote}"
                            </p>
                          </div>
                          <div className="client-testimonial-card__author">
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
              <AnimatedTitle parts={["고객 사례"]} />
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

      <section className="faq-section" id="faq">
        <div className="faq-section__inner">
          <h2 className="title-reveal section-title">
            <AnimatedTitle parts={["FAQ"]} />
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
            <AnimatedTitle parts={["새로운 소식"]} />
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

    </main>
    <nav className="home-sticky-cta" aria-label="빠른 문의">
      <Link to="/services/product-development">
        제품 개발 문의
      </Link>
      <Link to="/services/regulatory-response">규제 대응 문의</Link>
    </nav>
    </>
  );
}
