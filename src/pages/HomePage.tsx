import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  ArrowsClockwise,
  CaretLeft,
  CaretRight,
  Certificate,
  ChartBar,
  CheckCircle,
  ClipboardText,
  Cube,
  Factory,
  Flask,
  Leaf,
  MagnifyingGlass,
  Paperclip,
  PaintBrush,
} from "@phosphor-icons/react";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { NovemberPromotionBannerSlide } from "../components/NovemberPromotionBanner";

const homeProcessBenefits = [
  "제조-규제 동시 해결",
  "수출 준비 기간 단축",
  "원스톱으로 비용 절감",
] as const;

const homeImpactItems = [
  {
    badge: "50%",
    title: "평균 개발 기간 단축",
    description: "AI 기반 검증 프로세스로 제품 출시까지 빠르게 연결합니다.",
  },
  {
    badge: "30%",
    title: "개발비용 최대 절감",
    description:
      "소재, 금형, 생산 조건을 초기에 비교해 불필요한 샘플링과 재작업 비용을 낮춥니다.",
  },
  {
    badge: "원스톱",
    title: "소재 선정부터 양산까지",
    description:
      "친환경 소재 검토, 구조 설계, 샘플 제작, 양산 연결까지 한 흐름으로 관리합니다.",
  },
  {
    badge: "100%",
    title: "PPWR 등 글로벌 친환경 규제 대응",
    description:
      "EU 포장폐기물 규정과 글로벌 인증 요구사항을 제품 개발 단계부터 함께 반영합니다.",
  },
] as const;

const homeProcessSteps = [
  {
    label: "친환경 소재\n개발 / 큐레이션",
    Icon: Leaf,
  },
  {
    label: "디자인 제작",
    Icon: PaintBrush,
  },
  {
    label: "제품 R&D",
    Icon: Flask,
  },
  {
    label: "제품\n대량생산",
    Icon: Factory,
  },
  {
    label: "검수 / 납품",
    Icon: CheckCircle,
  },
  {
    label: "ESG 리포트\n발행",
    Icon: ChartBar,
  },
  {
    label: "후속 관리",
    Icon: ArrowsClockwise,
  },
  {
    label: "규제서류\n작성 / 발급",
    Icon: Certificate,
  },
  {
    label: "TD/DoC\n기술문서 컨설팅",
    Icon: ClipboardText,
  },
  {
    label: "규제 대응\n현황 진단",
    Icon: MagnifyingGlass,
  },
] as const;

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
    title: "11월, 신규 회원 대상 무료 이용권 증정, 제품 개발부터 규제 마스터까지.",
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
      "리스튜디오는 디자인·소재 R&D·생산·납품까지 한 곳에서 해결하는 원스톱(End-to-End) 친환경 패키지 개발 서비스라는 점이 가장 큰 차별점입니다.\n• 내부에서 6개월 이상 걸리던 개발을 평균 3개월 이내로 단축합니다.\n• 페이퍼몰드·바이오플라스틱·재생플라스틱 등 검증된 친환경 소재 라인업을 보유해 제품에 맞는 최적 소재를 제안합니다.\n• 여러 업체를 따로 관리할 필요 없이, 기획부터 양산까지 한 곳에서 책임집니다.",
  },
  {
    question: "친환경 패키지로 바꾸면 원가가 무조건 올라가나요?",
    answer:
      "꼭 그렇지 않습니다. 구조와 소재에 따라 오히려 원가를 낮출 수 있습니다.\n• 리스튜디오의 페이퍼몰드는 기존 일반 펄프몰드 대비 금형 비용 약 60%, 제품 단가 약 30% 절감이 가능합니다.\n• 플라스틱 사용량을 줄여 재활용 분담금 감면 효과도 기대할 수 있습니다.\n• 다품종 소량 생산이 가능해 초기 금형·재고 투자 부담을 줄일 수 있습니다.",
  },
  {
    question: "친환경 패키지로 바꾸면 디자인 자유도가 떨어지지 않나요?",
    answer:
      "아닙니다. 리스튜디오에서는 디자인이 친환경의 핵심 경쟁력입니다.\n• 디자인 R&D 조직과 CMF(색상·소재·마감) 역량을 갖춰, 소재 특성에 맞는 차별화 디자인을 제안합니다.\n• 페이퍼몰드는 성형으로 자유로운 형태 구현이 가능하고 인쇄까지 적용할 수 있습니다.\n• 페이퍼몰드·석회석·목재 바이오플라스틱·재생플라스틱 등 소재 선택 폭이 넓어 색감과 질감을 살릴 수 있습니다.\n\"친환경이라 디자인을 포기한다\"가 아니라, 친환경 소재로 브랜드만의 개성을 살리는 방향으로 설계합니다.",
  },
  {
    question: "규제 시행까지 시간이 있는데, 지금 당장 움직여야 할 이유가 있나요?",
    answer:
      "준비에 걸리는 시간이 생각보다 길기 때문입니다.\n• 친환경 패키지 개발은 소재 검토·샘플·금형·양산 검증까지 기업 내부 기준 6개월 이상의 기간이 필요합니다.\n• 규제 시행 직전에 시작하면 물량과 일정이 몰려 대응이 늦어질 수 있습니다.\n• 미리 바꿔두면 친환경 스토리(마케팅·세일즈 포인트)와 탄소 저감 실적을 확보해, 규제 대응은 물론 브랜드 경쟁력까지 얻을 수 있습니다.\n지금 시작할수록 검증과 개선을 위한 여유 시간을 확보할 수 있습니다.",
  },
  {
    question: "아직 구체적인 사양이 없어도 상담 가능한가요?",
    answer:
      "네 가능합니다. 오히려 초기일수록 도움이 됩니다.\n• 제품 컨셉팅 단계에서 고객 니즈와 시장 트렌드를 함께 분석해 방향을 잡아드립니다.\n• 적용 품목 협의 → 디자인 제작 → 소재 선정 → 목업·샘플 제작 순으로, 사양이 정해지지 않은 상태에서 함께 구체화합니다.\n• 아이디어나 참고 이미지만 있어도 상담을 시작할 수 있습니다.",
  },
  {
    question: "업종에 상관없이 제작 가능한가요?",
    answer:
      "네 다양한 업종에 적용 가능합니다.\n화장품·뷰티, 전자, 생활용품, 식품, 리테일·럭셔리 등 폭넓은 분야에서 프로젝트를 수행해 왔습니다.\n• 소재 라인업이 넓어 업종별 요구(강도·내유성·내구성·식품 접촉 등)에 맞춰 제안할 수 있습니다.",
  },
  {
    question: "친환경 검증이나 규제 대응 관련 상담도 가능한가요?",
    answer:
      "네, 가능합니다.\n• 플라스틱 저감·예상 탄소배출 분석 레포트 등 정량 검증 시스템을 제공해, 마케팅·세금 감면 자료로 활용할 수 있습니다.\n• 글로벌 친환경 기업들과의 업무협약을 통해 환경 인증 서비스도 함께 제공합니다.\n• 국제 규제에 대응 가능한 글로벌 네트워크와 가이드라인을 보유해, 수출 제품의 규제 대응도 상담할 수 있습니다.\n검증·인증이 필요한 항목을 알려주시면 필요한 절차와 일정을 안내해 드립니다.",
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

export function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeAdBanner, setActiveAdBanner] = useState(0);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [testimonialSlideWidth, setTestimonialSlideWidth] = useState(0);
  const currentAdBanner = adBanners[activeAdBanner];

  useEffect(() => {
    const updateTestimonialSlideWidth = () => {
      const viewport = document.querySelector<HTMLElement>(
        ".client-testimonials__viewport",
      );
      const pages = document.querySelectorAll<HTMLElement>(
        ".client-testimonials__page",
      );
      const firstPage = pages[0];
      const secondPage = pages[1];

      setTestimonialSlideWidth(
        firstPage && secondPage
          ? secondPage.offsetLeft - firstPage.offsetLeft
          : viewport?.clientWidth ?? window.innerWidth,
      );
    };

    updateTestimonialSlideWidth();
    window.addEventListener("resize", updateTestimonialSlideWidth);

    return () =>
      window.removeEventListener("resize", updateTestimonialSlideWidth);
  }, []);

  return (
    <>
    <main className="home-page bg-[#f7f8f8]">
      <section className="home-hero-section bg-[#f7f8f8] px-5 py-16 md:px-12 md:py-24 xl:px-[120px]">
        <div className="mx-auto w-full max-w-[1040px]">
          <h1 className="title-reveal mx-auto max-w-[920px] text-center text-[28px] font-semibold leading-[1.16] text-black md:text-[44px] xl:text-[48px]">
            <AnimatedTitle
              parts={[
              "친환경 제품 개발과 규제 대응,",
              { type: "break" },
              {
                text: "하나의 플랫폼",
                wrapperClassName:
                  "relative inline-block whitespace-nowrap px-1 text-[#22aa62]",
                charClassName: "relative",
              },
              "에서 한 번에 완성",
              ]}
            />
          </h1>

          <div className="ad-banner-section ad-banner-section--embedded" aria-label="프로모션 배너">
            <div className="ad-banner">
              <div
                className="ad-banner__track"
                style={{ transform: `translateX(-${activeAdBanner * 100}%)` }}
              >
                {adBanners.map(({ theme }) => (
                  <NovemberPromotionBannerSlide key={theme} />
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
            className="ai-chat-entry mx-auto mt-4 max-w-[1040px] rounded-2xl px-4 py-4 md:mt-5 md:px-5 md:py-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex items-center gap-2.5">
              <Paperclip
                size={21}
                weight="regular"
                aria-hidden="true"
                className="shrink-0"
              />
              <label className="sr-only" htmlFor="home-ai-question">
                AI Agent 리사에게 제품 개발 문의하기
              </label>
              <input
                id="home-ai-question"
                type="text"
                className="h-8 min-w-0 flex-1 bg-transparent text-[13px] font-medium outline-none md:text-[14px]"
                placeholder="제품 개발에 대해 궁금한 것이 있나요? AI Agent 리사가 도와드릴게요!"
              />
              <button
                type="submit"
                aria-label="문의 보내기"
                className="grid size-8 shrink-0 place-items-center rounded-full transition active:scale-[0.98] md:size-9"
              >
                <ArrowUp size={18} weight="bold" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-2.5 text-center text-[10px] font-semibold md:text-[11px]">
              대화를 진행하면{" "}
              <a
                href="https://material-beam-ed6.notion.site/20224acd6ea980ee90cae0df5e5cc6af"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                개인정보처리방침
              </a>
              에 동의하신 것으로 이해됩니다
            </p>
          </form>
        </div>
      </section>

      <section className="home-core-services-section px-5 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24 xl:px-[100px]" aria-label="핵심 서비스">
        <div className="mx-auto w-full max-w-[1350px]">
          <h2 className="title-reveal text-center text-[26px] font-semibold leading-[1.18] text-black md:text-[34px] xl:text-[38px]">
            <AnimatedTitle
              parts={[
                "어떤 고민 있으세요?",
                { type: "break" },
                "리스튜디오와 함께 해결할 분야를 선택해주세요.",
              ]}
            />
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {coreServices.map((service) => (
              <div key={service.title} className="home-core-service">
                <p className="home-core-service__prompt">
                  {service.to === "/services/product-development" ? (
                    <Cube size={20} weight="regular" aria-hidden="true" />
                  ) : (
                    <Leaf size={20} weight="fill" aria-hidden="true" />
                  )}
                  {service.eyebrow}
                </p>

                <Link
                  to={service.to}
                  className="core-service-card group"
                  aria-label={`${service.title} 자세히 보기`}
                >
                  <div className="core-service-card__media">
                    <img src={service.image} alt={service.alt} />
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-5">
                    <div className="min-w-0">
                      <h3 className="text-[18px] font-semibold leading-[1.24] text-black md:text-[22px]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[13px] font-medium leading-[1.55] text-[#9aa3af] md:text-[14px]">
                        {service.description}
                      </p>
                    </div>

                    <span className="core-service-card__button">
                      <ArrowRight size={28} weight="regular" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-video-section">
        <div className="home-video-section__inner">
          <div className="home-video-section__copy">
            <h2>
              대한민국 대표 클린테크 기업, 리베이션이 만든
              <span className="home-video-section__highlight">
                원스톱 친환경 패키지 솔루션, 리스튜디오
              </span>
            </h2>
            <p>
              친환경 패키지의 시작과 끝, 리스튜디오가 함께합니다.
            </p>
          </div>

          <section className="home-process" aria-label="리스튜디오 원스톱 친환경 패키지 프로세스">
            <div className="home-process__outcomes">
              <div className="home-process__endpoint home-process__endpoint--start">
                <span>DEVELOP</span>
                <strong>친환경 패키지 개발 / 제작</strong>
              </div>
              <span className="home-process__arrow" aria-hidden="true" />
              <div className="home-process__endpoint home-process__endpoint--finish">
                <span>CERTIFIED</span>
                <strong>글로벌 수출 완성</strong>
              </div>
            </div>

            <div className="home-process__panel">
              <div className="home-process__group">
                <h3>제품 개발 솔루션</h3>
                <ol className="home-process__steps">
                  {homeProcessSteps.slice(0, 6).map(({ label, Icon }) => (
                    <li className="home-process__step" key={label}>
                      <Icon weight="fill" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="home-process__group">
                <h3>규제 마스터 솔루션</h3>
                <ol className="home-process__steps">
                  {homeProcessSteps.slice(6).map(({ label, Icon }) => (
                    <li className="home-process__step" key={label}>
                      <Icon weight="fill" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="home-process__benefits" aria-label="핵심 효과">
              {homeProcessBenefits.map((benefit) => (
                <span key={benefit}>{benefit}</span>
              ))}
            </div>
            <p className="home-process__closing">
              제품을 만들면서 동시에 글로벌 규제를 통과하는 유일한 원스톱 솔루션
            </p>
          </section>
        </div>
      </section>

      <section className="home-impact-section" aria-label="리스튜디오 핵심 성과">
        <div className="home-impact-list">
          {homeImpactItems.map((item) => (
            <article className="home-impact-item" key={item.title}>
              <span className="home-impact-item__badge">{item.badge}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
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
