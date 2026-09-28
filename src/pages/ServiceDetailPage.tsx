import { Fragment, type CSSProperties, useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowRight,
  AirplaneTilt,
  Bell,
  Brain,
  Buildings,
  CaretDown,
  CaretLeft,
  CaretRight,
  Briefcase,
  CheckCircle,
  CheckSquare,
  ChartBar,
  Clock,
  ClipboardText,
  ClockCounterClockwise,
  CreditCard,
  Cube,
  Factory,
  FileMagnifyingGlass,
  FileText,
  Key,
  Flask,
  Leaf,
  LockKey,
  MagnifyingGlass,
  Network,
  Paperclip,
  PaperPlaneTilt,
  PlusCircle,
  Scan,
  ShieldCheck,
  SquaresFour,
  TrendUp,
  UploadSimple,
  User,
  UserCircle,
  WarningCircle,
  XCircle,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  CustomerCaseStudiesSection,
  ServiceDetailAdBanner,
  ServiceDetailSharedSections,
} from "../components/ServiceDetailSharedSections";
import { AnimatedTitle, useTitleReveal } from "../components/AnimatedTitle";

const productClientLogos = Array.from({ length: 14 }, (_, index) => ({
  src: `/assets/clients/client-logo-${String(index + 1).padStart(2, "0")}.svg`,
  alt: "고객사 로고",
}));

const productTestimonials = [
  {
    quote:
      "소재 후보와 제작 가능성을 함께 검토해줘서 제품 방향을 빠르게 정할 수 있었습니다.",
    author: "생활용품 브랜드 제품개발팀",
    role: "패키지 개발 담당",
    logo: "/assets/clients/client-logo-01.svg",
    logoLabel: "고객사 로고",
  },
  {
    quote:
      "샘플 제작부터 양산 견적까지 한 흐름으로 확인할 수 있어 내부 의사결정이 훨씬 수월했습니다.",
    author: "커머스 브랜드 운영팀",
    role: "브랜드 매니저",
    image: "/assets/showcase/papermold1.png",
    imageLabel: "친환경 패키지 샘플",
  },
  {
    quote:
      "소재 변경에 따른 구조 안정성을 함께 봐줘서 출시 전 리스크를 줄일 수 있었습니다.",
    author: "식품 브랜드 신제품팀",
    role: "제품 PM",
    logo: "/assets/clients/client-logo-06.svg",
    logoLabel: "고객사 로고",
  },
  {
    quote:
      "디자인, 샘플, 생산 파트너 커뮤니케이션이 한 번에 정리되어 일정 관리가 편했습니다.",
    author: "라이프스타일 브랜드",
    role: "프로덕트 디렉터",
    image: "/assets/showcase/upcycle3.png",
    imageLabel: "업사이클 제품 샘플",
  },
  {
    quote:
      "기존 플라스틱 패키지를 대체할 수 있는 소재와 단가 범위를 빠르게 비교할 수 있었습니다.",
    author: "뷰티 브랜드 운영팀",
    role: "패키지 구매 담당",
    logo: "/assets/clients/client-logo-10.svg",
    logoLabel: "고객사 로고",
  },
  {
    quote:
      "양산 전에 필요한 테스트 항목을 먼저 확인해 재작업을 줄이고 견적 정확도를 높였습니다.",
    author: "제조사 상품기획팀",
    role: "상품기획 매니저",
    image: "/assets/showcase/pcr-pir2.png",
    imageLabel: "재생 소재 패키지 샘플",
  },
];

const productTestimonialPages = Array.from({ length: 3 }, (_, pageIndex) =>
  productTestimonials.slice(pageIndex * 2, pageIndex * 2 + 2),
);

const productDevelopmentHeroBanners = [
  {
    theme: "product-development-onestop",
    title: "처음부터 끝까지 리스튜디오 친환경 패키지 완성",
    description: "친환경 패키지 원스톱 솔루션 상담 신청 배너",
    image: "/assets/ads/product-development-onestop-banner.png",
    alt: "처음부터 끝까지 리스튜디오 친환경 패키지 완성 배너",
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
      d="M34 33 C48 15 63 16 76 24 C91 34 99 20 115 18 C133 16 144 31 160 24 C177 17 191 14 206 29 C223 46 235 12 255 17 C272 21 282 14 293 18"
    />
    <path
      className="marker-scribble__path marker-scribble__path--middle"
      pathLength={1}
      d="M31 37 C47 46 57 8 75 16 C92 24 96 43 113 36 C132 29 139 9 155 19 C170 29 171 45 189 35 C206 26 211 23 227 30 C244 38 246 17 263 22 C279 27 286 32 296 24"
    />
  </svg>
);

const regulatoryMarkerStroke = (
  <svg
    className="regulatory-marker-scribble__stroke"
    viewBox="0 0 520 78"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      className="regulatory-marker-scribble__path regulatory-marker-scribble__path--base"
      pathLength={1}
      d="M13 43 C33 19 55 23 74 33 C96 45 106 18 131 22 C157 26 169 42 193 31 C218 20 238 15 261 34 C286 55 304 13 333 21 C362 29 381 46 407 30 C434 14 455 21 477 29 C492 34 503 29 512 24"
    />
    <path
      className="regulatory-marker-scribble__path regulatory-marker-scribble__path--middle"
      pathLength={1}
      d="M10 48 C34 58 49 10 74 19 C99 28 107 55 132 43 C160 30 171 10 195 22 C219 34 224 55 250 40 C277 25 292 27 317 37 C344 48 353 17 379 25 C405 33 420 47 445 34 C470 21 493 38 510 28"
    />
  </svg>
);

const productChallenges = [
  {
    title: "소재 선택이 어렵습니다",
    description: "우리 제품에 맞는 친환경 소재를 고르는 것부터 막히기 쉽습니다.",
    image: "/assets/detail-pages/challenges/material-selection.png",
    alt: "친환경 소재 알갱이와 제품 샘플",
  },
  {
    title: "양산까지가 힘듭니다",
    description: "디자인은 나왔지만 실제 생산 가능성과 구조 검토에서 다시 막힙니다.",
    image: "/assets/detail-pages/challenges/production-ready.png",
    alt: "제품 양산 설비 이미지",
  },
  {
    title: "시간과 비용이 늘어납니다",
    description: "여러 파트너를 따로 조율하다 보면 일정도 늘고 비용이 자꾸 커집니다.",
    image: "/assets/detail-pages/challenges/time-cost-risk.png",
    alt: "개발 비용과 일정 절감을 표현한 이미지",
  },
  {
    title: "친환경 입증이 부담됩니다",
    description: "친환경성 검증과 규제 대응 문서를 준비하는 과정이 까다롭습니다.",
    image: "/assets/detail-pages/challenges/eco-proof.png",
    alt: "규제 대응 문서와 대시보드 이미지",
  },
];

const productServiceSteps = [
  {
    step: "step 1",
    title: "제품 컨설팅",
    description: "제품 특성과 목표 분석, 최적의 방향 제시",
    image: "/assets/detail-pages/service-flow/consulting.png",
    alt: "친환경 패키지 컨설팅을 위한 소재와 스케치가 놓인 책상",
    Icon: ClipboardText,
  },
  {
    step: "step 2",
    title: "소재 큐레이션 / R&D",
    description: "제품에 적합한 소재 추천 및 개발",
    image: "/assets/detail-pages/service-flow/design.png",
    alt: "친환경 패키지 디자인 스케치와 샘플",
    Icon: Cube,
  },
  {
    step: "step 3",
    title: "패키지 디자인",
    description: "친환경 소재 최적화 맞춤 디자인",
    image: "/assets/detail-pages/service-flow/rnd.png",
    alt: "친환경 소재 연구를 위한 실험실 샘플",
    Icon: Flask,
  },
  {
    step: "step 4",
    title: "제품 제작 및 생산",
    description: "페이퍼 몰드, 바이오 플라스틱(사출)",
    image: "/assets/detail-pages/service-flow/production.png",
    alt: "친환경 패키지 생산 라인",
    Icon: Buildings,
  },
  {
    step: "step 5",
    title: "검수 및 납품",
    description: "QC 품질 관리, 완제품 납품",
    image: "/assets/detail-pages/service-flow/inspection.png",
    alt: "완성된 패키지를 검수하고 납품 준비하는 장면",
    Icon: MagnifyingGlass,
  },
  {
    step: "step 6",
    title: "친환경 검증 및 ESG 리포트",
    description: "친환경 인증 및 규제 완벽 대응",
    image: "/assets/detail-pages/service-flow/report.png",
    alt: "탄소저감 리포트와 친환경 패키지 샘플",
    Icon: Leaf,
  },
];

const productTransitionRows = [
  {
    asIs: "소재사, 디자인사, 생산처를 각각 검토",
    toBe: "한 번의 문의로 통합 검토",
  },
  {
    asIs: "반복 커뮤니케이션으로 일정 지연",
    toBe: "초기 방향 정리로 시행착오 감소",
  },
  {
    asIs: "친환경 검증 자료 확보 부담",
    toBe: "검토와 보고 자료까지 연계 지원",
  },
];

const productChoiceBenefits = [
  {
    value: "50%",
    label: "개발 기간 최대 단축",
    Icon: null,
  },
  {
    value: "30%",
    label: "개발비용 최대 절감",
    Icon: null,
  },
  {
    value: "",
    label: "대량 양산 가능 초기 설계",
    Icon: Factory,
  },
  {
    value: "",
    label: "친환경 근거 정량 자료 지원",
    Icon: ClipboardText,
  },
];

const productCapabilityItems = [
  {
    title: "소재 큐레이션 및 맞춤 제안",
    description: "제품 특성에 맞는 친환경 소재를 직접 탐색하고 제안합니다.",
    Icon: Cube,
  },
  {
    title: "친환경 소재 개발 역량",
    description: "자체 R&D를 통해 새로운 소재 대안을 개발합니다.",
    Icon: Flask,
  },
  {
    title: "생산 네트워크 기반 양산 연계",
    description: "대량 양산 품질도 직접 관리해 안정적으로 연결합니다.",
    Icon: Network,
  },
  {
    title: "LAC/LCI DB · 인증 ESG 리포트",
    description: "객관적 지표 기반으로 친환경성을 검증합니다.",
    Icon: ClipboardText,
  },
  {
    title: "PPWR, ESPR, DPP, CBAM 대응",
    description: "글로벌 규제 흐름에 맞춰 대응 자료를 준비합니다.",
    Icon: MagnifyingGlass,
  },
];

const regulatoryMasterHighlights = [
  {
    number: "01",
    title: "원스톱 솔루션",
    description: "준비 기간 단축 / 비용 절감",
    Icon: PaperPlaneTilt,
  },
  {
    number: "02",
    title: "AI 에이전트",
    description: "쉽고 빠른 서류 작성",
    Icon: Brain,
  },
  {
    number: "03",
    title: "2중 철통진단",
    description: "AI + 규제 전문가 2중 교차검증",
    Icon: ShieldCheck,
  },
  {
    number: "04",
    title: "리스크 최소화",
    description: "납기 지연 / 통관 거부 방지",
    Icon: WarningCircle,
  },
  {
    number: "05",
    title: "패스트 런칭",
    description: "빠른 수출 시장 진출",
    Icon: AirplaneTilt,
  },
  {
    number: "06",
    title: "패스트 트랙",
    description: "한번 등록으로 준비 끝",
    Icon: Scan,
  },
];

const regulatoryConcernCards = [
  {
    title: "규제 서류 준비에 너무 많은 시간과 비용이 들어요.",
    tag: "글로벌 유통사",
    quote:
      "제품마다 필요한 서류가 다르고, 규제가 계속 바뀌어 매번 처음부터 다시 준비하는 것 같아요.",
    image: "/assets/testimonials/cosmetics-ppwr-documents.png",
    imageLabel: "규제 서류 준비에 필요한 제품과 시험 자료 이미지",
  },
  {
    title: "고객사마다 요구하는 서류가 달라 대응이 힘들어요.",
    tag: "OEM / ODM 사",
    quote:
      "같은 제품인데도 국가마다, 고객사마다 요구사항이 달라 반복 작업이 많고 인력이 부족해요.",
    image: "/assets/testimonials/lifestyle-material-search.png",
    imageLabel: "고객사별 규제 대응 자료를 정리하는 이미지",
  },
  {
    title: "해외 진출을 하고 싶은데 규제가 너무 복잡합니다.",
    tag: "브랜드 제조사",
    quote:
      "친환경 제품과 패키지를 만들었지만 어떤 시장에, 어떤 서류가 필요한지 몰라 시작이 어렵습니다.",
    image: "/assets/testimonials/fnb-ppwr-response.png",
    imageLabel: "해외 진출 규제 대응을 준비하는 이미지",
  },
];

const regulatoryMasterShowcaseCards = [
  {
    eyebrow: "무엇이 부족한지,\n정확히 알고 시작하세요.",
    title: "심층 진단 리포팅 서비스",
    description:
      "무료 진단 현황 리포트에서 한 단계 더 들어가, 증빙서류(도면, BOM, 시험성적서 등)까지 등록하면 AI Agent가 1차로 빠르고 정확하게 산출하고 규제 전문가가 2차로 정밀 진단합니다.",
    image: "/assets/detail-pages/regulatory-master/doc-report.png",
    alt: "PPWR 심층 진단 리포트 화면",
  },
  {
    eyebrow: "서류에 쏟던 시간을,\n다시 비즈니스로.",
    title: "TD / DoC 작성 및 발급 서비스",
    description:
      "진단 리포트를 기반으로 규제 대응 필수 서류(TD/DoC)를 AI가 자동 작성 지원하고 발급까지 연결합니다. 수정이 필요하면 언제든 고객이 직접 보완할 수 있습니다.",
    image: "/assets/detail-pages/regulatory-master/td-report.png",
    alt: "TD 리포트와 DoC 리포트 작성 화면",
  },
  {
    eyebrow: "규제가 바뀌어도, 처음부터\n다시 준비하지 않도록.",
    title: "후속 관리 서비스",
    description:
      "새롭게 추가되거나 변경되는 규제 대응 트렌드를 분석하고, 서류 수정과 후속관리 컨설팅까지 지속적으로 지원합니다.",
    image: "/assets/detail-pages/regulatory-master/follow-up-meeting.png",
    alt: "규제 후속 관리를 상담하는 회의 장면",
  },
];

const regulatorySolutionFitTags = [
  "해외 이커머스 셀러",
  "D2C 수출기업",
  "수입사",
  "무역상사",
  "대행사",
  "패키징 / 원부자재 공급사",
  "글로벌 리테일 납품벤더",
  "PB 공급사",
  "해외 진출 예정 스타트업 / 중소기업",
];

const regulatorySolutionChats = [
  {
    customer: "해외 수출 유통사",
    question: "바이어 제출 서류가 나라마다 달라 한 번에 정리가 안돼요.",
    answer:
      "제품 정보 / 시험자료 / 공급사 증빙을 시장별 기준에 맞춰 정리하고, DoC / TD 작성 지원부터 제출용 증빙 발급 연계, 후속 대응까지 한 흐름으로 지원해드려요.",
  },
  {
    customer: "OEM / ODM사",
    question: "고객사마다 요청이 달라 개발 / 생산 문서를 매번 따로 대응해요.",
    answer:
      "개발 산출물과 생산 데이터를 규제 문서로 연결해 고객사 대응 프로세스를 표준화해 드립니다.",
  },
  {
    customer: "브랜드 제조사",
    question: "출시는 빨리 하고 싶은데 친환경 전환과 규제 대응까지 챙기기 벅차요.",
    answer:
      "전략 → 소재 → 디자인 → R&D → 생산 → 탄소저감/ESG → PPWR 대응 → 핵심 문서 작성까지 하나의 프로젝트로 통합 관리할 수 있어요.",
  },
  {
    customer: "패키징 / 원부자재 공급사",
    question: "고객사가 요구하는 재질 증빙과 시험자료 요청이 계속 늘고 있어요.",
    answer:
      "공급사 자료를 품목별로 정리하고, 부족한 시험·선언·기술문서 항목을 먼저 확인해 납품 대응 속도를 높입니다.",
  },
];

const regulatoryTrustTestimonials = [
  {
    tag: "A 유통사",
    quote:
      "진단부터 문서 발급, 후속 관리까지 연결해 1회성 대응이 아닌 저희 회사만의 지속가능한 수출 인프라를 구축해줘서 좋았어요.",
    author: "김*모",
    role: "과장",
  },
  {
    tag: "OEM / ODM 사",
    quote:
      "문서 대응을 표준화하고 TD/DoC까지 빠르게 연결해 고객 대응 효율과 납기 안정성, 고객 만족감이 높아졌어요.",
    author: "성*나",
    role: "부장",
  },
  {
    tag: "브랜드 제조사 / 화장품",
    quote:
      "친환경 제품 / 패키지와 규제 대응을 함께 설계해줘서 저희 브랜드의 글로벌 진출 기반을 탄탄하게 만들어줬습니다.",
    author: "박*수",
    role: "CEO",
  },
];

const regulatoryExpertCards = [
  {
    number: "01",
    title: "심층 진단 리포팅 서비스",
    highlight: "AI Agent + 전문가",
    description:
      "회사 정보, 수출 제품/브랜드, 패키지 정보, 증빙 자료를 업로드하면 AI가 빠르게 진단하고 전문가가 한번 더 자세히 검토하여 이해하기 쉬운 리포트를 제공합니다.",
  },
  {
    number: "02",
    title: "TD / DoC 작성 및 발급 서비스",
    highlight: "AI Agent",
    description:
      "진단 리포트를 바탕으로 필요한 기술문서(TD)와 적합성 선언서(DoC)를 자동으로 작성하고 발급합니다. 언제든지 항목을 추가하거나 수정할 수 있습니다.",
  },
  {
    number: "03",
    title: "후속 관리 서비스",
    highlight: "지속적인 규제 모니터링",
    description:
      "변화하는 글로벌 규제를 모니터링하고, 문서 수정이 필요한 때 신속히 대응합니다. 추가 컨설팅과 지속적인 지원으로 항상 안정적인 수출을 도와드립니다.",
  },
];

const regulatoryValueTargets = [
  {
    title: "제조 / 수출업체",
    items: ["제품 출시 및 수출 지연 최소화", "증빙 문서 체계적 관리", "더 빠른 글로벌 시장 진입"],
    Icon: Factory,
  },
  {
    title: "OEM / ODM 사",
    items: ["고객사 요구에 표준화된 대응", "반복적인 문서 작업 시간 절감", "제안 경쟁력 강화"],
    Icon: Cube,
  },
  {
    title: "브랜드 제조사",
    items: ["친환경 제품 / 패키지의 글로벌 수출 연계", "내부 인력 부담 감소", "더 큰 비즈니스 기회 확보"],
    Icon: Flask,
  },
];

const regulatoryComparisonRows = [
  {
    label: "규제 전문성",
    restudio: "글로벌 패키징 규제 중심 전문 대응 (유럽 120개 법령)",
    consulting: "광범위 사안 일반적 조언",
    packaging: "패키징 생산·소재 중심",
    certification: "시험 인증 위주의 규제 해석",
  },
  {
    label: "서비스 제공 범위",
    restudio: "진단 > 개선 > 시험 > 대응 > 인증/등록까지 A-Z",
    consulting: "진단만 하거나 시험 외부 연계 필요",
    packaging: "소재 패키지 시험까지",
    certification: "시험 인증만 수행 중심",
  },
  {
    label: "비용 효율",
    restudio: "하나의 프로젝트로 통합 관리 → 중복비용 제로 절감 가능",
    consulting: "단계마다 별도 비용 발생 가능",
    packaging: "규제 비용은 별도 청구 가능",
    certification: "시험 인증 시 인건비 포함 별도 정산 가능",
  },
  {
    label: "준비 기간",
    restudio: "전 과정을 한 곳에서 진행해 대응 기간 단축",
    consulting: "다양한 기관 연계 시 일정이 길어질 가능성",
    packaging: "시험 인증 시 인계 시간 별도 소요",
    certification: "시험 인증 시 인계비 등 별도 기간 소요",
  },
  {
    label: "지속 / 확장성",
    restudio: "현 구축한 데이터·AI일로 기반으로 지속 대응 + 타 품목 등 규제 확장 대응",
    consulting: "프로젝트 단위 대응",
    packaging: "제조·소재 업데이트",
    certification: "인증→시험 대응만 대응",
  },
];

const regulatoryStartSteps = [
  {
    title: "회원가입",
    description: "지금 바로 시작하세요",
    Icon: UserCircle,
  },
  {
    title: "회사/제품 정보 등록",
    description: "기본 정보를 입력합니다",
    Icon: FileText,
  },
  {
    title: "서류 업로드",
    description: "필요한 자료를 올려주세요",
    Icon: UploadSimple,
  },
  {
    title: "진단 리포트 확인",
    description: "AI와 전문가가 분석한 결과를 확인하세요",
    Icon: ChartBar,
  },
];

const regulatoryFreeReportSteps = [
  {
    number: "1",
    title: "회원가입",
    description: "이메일 등 기본 계정 생성",
  },
  {
    number: "2",
    title: "기본 정보 입력",
    description: "제품·업종 등 간단 정보만 입력",
  },
  {
    number: "3",
    title: "진단 현황 리포트 확인",
    description: "우리 회사 맞춤 규제 진단 현황을 무료로 즉시 확인",
    badge: "무료",
    featured: true,
  },
  {
    number: "4",
    title: "심층 진단 신청",
    description: "증빙서류 업로드 후 AI+전문가 정밀 진단",
  },
];

const regulatoryDiagnosisMissingDocs = [
  {
    status: "danger",
    title: "시험성적서 내 시험 대상 제품명 불일치",
    description: "제출된 시험성적서의 제품명이 현재 제품 정보와 다릅니다.",
    action: "업로드",
  },
  {
    status: "warning",
    title: "적합성 선언서(DoC) 작성 필요",
    description: "최신 PPWR 양식에 따라 DoC를 작성해 주세요.",
    action: "작성하기",
  },
  {
    status: "warning",
    title: "기술문서 작성용 소재 성분표 보완 필요",
    description: "모든 포장 재질의 소재 성분 정보가 누락되었습니다.",
    action: "요청하기",
  },
];

const regulatoryDiagnosisAlerts = [
  {
    tone: "blue",
    title: "새로운 규제 동향에 따른 검토 필요",
    description: "EU가 발표한 PPWR 핵심 가이드에 주요 변경사항이 있습니다.",
    date: "2025.04.21",
  },
  {
    tone: "yellow",
    title: "서류 갱신 시점이 임박했습니다",
    description: "제출한 시험성적서의 유효기간이 30일 남았습니다.",
    date: "2025.04.20",
  },
  {
    tone: "green",
    title: "EU 규제 변경(안)이 발표되었습니다",
    description: "재활용성 평가 기준이 강화될 예정이나 사전 검토가 필요합니다.",
    date: "2025.04.18",
  },
];

const regulatoryDiagnosisBenefits = [
  {
    Icon: FileMagnifyingGlass,
    tone: "blue",
    title: "진단 결과 & 보완 가이드",
    description:
      "제품·패키지·증빙자료를 기반으로 PPWR 대응 현황과 보완이 필요한 항목을 한눈에 확인할 수 있습니다. AI 진단과 전문가 검토를 통해 우선 대응이 필요한 사항까지 안내합니다.",
  },
  {
    Icon: CheckSquare,
    tone: "green",
    title: "기술문서 작성 & 관리",
    description:
      "진단 결과와 확인된 제품·패키지 정보를 기반으로 기술문서(TD)와 적합성 선언서(DoC) 작성을 지원합니다. 제품 또는 패키지 정보가 변경되면 기존 데이터를 활용해 관련 문서를 효율적으로 업데이트할 수 있습니다.",
  },
  {
    Icon: Bell,
    tone: "purple",
    title: "규정 변화 & 후속 관리",
    description:
      "PPWR 규정과 가이드의 변경사항을 지속적으로 확인하고, 기존 제품과 문서에 영향을 주는 사항을 안내합니다. 추가 확인이나 보완이 필요한 항목도 함께 관리할 수 있습니다.",
  },
];

const regulatorySecurityItems = [
  {
    Icon: LockKey,
    title: "검증된 인프라",
    description:
      "Supabase 인프라에서 운영되며, 인증과 보안 정책으로 데이터베이스 접근을 관리합니다.",
  },
  {
    Icon: ShieldCheck,
    title: "DDoS 보호",
    description: "Vercel의 DDoS 보호 기능은 악성 트래픽을 탐지하고 완화하는 데 도움을 줍니다.",
  },
  {
    Icon: CreditCard,
    title: "안전한 결제 처리",
    description: "결제는 판매 대행사의 포트원이 처리합니다. 리스튜디오는 카드 정보를 저장하지 않습니다.",
  },
  {
    Icon: ClockCounterClockwise,
    title: "버전 기록",
    description: "저장된 버전을 확인하고 페이지와 사이트 레이아웃을 이전 버전으로 되돌릴 수 있습니다.",
  },
  {
    Icon: Key,
    title: "인증과 결제 관리",
    description: "인증은 Supabase Auth가 관리하고, 결제는 포트원이 처리합니다.",
  },
];

const regulatoryFaqItems = [
  "서류(TD·DoC)는 바로 제출 가능한 형태로 발급되나요?",
  "진단을 시작하려면 어떤 자료를 준비해야 하나요?",
  "AI 진단과 전문가 검토는 어떻게 함께 진행되나요?",
  "규제 변경이 생기면 후속 관리도 받을 수 있나요?",
  "요금제는 어떻게 구성되어 있나요?",
  "필요한 자료(시험성적서 등)가 부족해도 신청할 수 있나요?",
];

const regulatoryWhyItems = [
  {
    title: "규제 데이터 자동 정리",
    description:
      "제품과 포장재 정보를 입력하면 PPWR 검토에 필요한 항목을 체계적으로 구조화합니다.",
    Icon: ClipboardText,
  },
  {
    title: "누락 증빙 사전 확인",
    description:
      "재질, 시험성적서, 선언서 등 빠진 자료를 제출 전에 먼저 확인해 재작업을 줄입니다.",
    Icon: MagnifyingGlass,
  },
  {
    title: "AI와 전문가 동시 검토",
    description:
      "AI가 자료를 정리하고 PPWR 전문가가 판단이 필요한 부분을 함께 검토합니다.",
    Icon: Network,
  },
  {
    title: "진행 현황 한눈에 관리",
    description:
      "제품별 대응 상태와 제출 준비율을 대시보드에서 확인하고 팀과 공유할 수 있습니다.",
    Icon: CheckCircle,
  },
];

const regulatoryPlatformSteps = [
  {
    title: "모든 품목 정보를 하나의 기준 데이터로 관리",
    shortTitle: "품목 관리",
    description:
      "제품 정보를 한 번 등록하면 AI 진단, TD-DoC, EPR 기초자료에 연결해 활용합니다.",
    bullets: [
      "제품명, SKU, 판매 국가, 리포트 상태를 품목 단위로 확인합니다.",
      "포장재 구성과 첨부 문서 확보율을 같은 화면에서 추적합니다.",
      "진단 시작 전 필요한 입력 항목을 빠르게 점검합니다.",
    ],
    image: "/assets/detail-pages/regulatory-platform/product-detail.png",
    alt: "품목 상세 관리 화면",
  },
  {
    title: "포장자재별 소재와 증빙 상태를 연결",
    shortTitle: "포장자재 관리",
    description:
      "용기, 캡, 라벨, 박스처럼 제품을 구성하는 포장자재를 단계별로 관리합니다.",
    bullets: [
      "포장 단계, 재질, 공급사, 연결 품목을 카드 단위로 확인합니다.",
      "누락 항목과 적합 여부를 포장자재별로 구분합니다.",
      "동일 자재가 쓰이는 품목을 연결해 반복 입력을 줄입니다.",
    ],
    image: "/assets/detail-pages/regulatory-platform/packaging-materials.png",
    alt: "포장자재 관리 화면",
  },
  {
    title: "부자재와 공급사 정보를 한 번에 정리",
    shortTitle: "부자재 관리",
    description:
      "착색제, 접착제, 부속 구성품처럼 놓치기 쉬운 부자재도 함께 추적합니다.",
    bullets: [
      "공급사, 유형, 연결된 포장자재 기준으로 부자재를 검색합니다.",
      "부자재별 문서 수와 보완 필요 상태를 바로 확인합니다.",
      "포장자재 등록 흐름과 연결해 규제 검토 범위를 넓힙니다.",
    ],
    image: "/assets/detail-pages/regulatory-platform/sub-materials.png",
    alt: "부자재 관리 화면",
  },
  {
    title: "첨부 문서를 제품 데이터와 자동 매칭",
    shortTitle: "문서 관리",
    description:
      "시험성적서, TDS, 공급사 확인서 등 제출 근거 문서를 한 곳에서 관리합니다.",
    bullets: [
      "문서 유형, 진단 상태, 업로드 날짜를 기준으로 정렬합니다.",
      "관련 부자재, 포장자재, 영향 품목을 문서별로 연결합니다.",
      "만료일과 보완 필요 여부를 확인해 제출 전 리스크를 줄입니다.",
    ],
    image: "/assets/detail-pages/regulatory-platform/documents.png",
    alt: "문서 관리 화면",
  },
];

const regulatoryReportSteps = [
  {
    title: "AI가 진단하는 수출 가능성",
    shortTitle: "간단 리포트",
    description:
      "입력된 제품·포장재 데이터를 바탕으로 보완 항목과 우선순위를 먼저 확인합니다.",
    bullets: [
      "필수 보완, 권장 보완, 향후 준비 항목을 구분합니다.",
      "PPWR Article별 진단 요약과 예상 작성 방향을 확인합니다.",
      "위험도와 타임라인을 보고 다음 조치를 빠르게 결정합니다.",
    ],
    image: "/assets/detail-pages/regulatory-reports/simple-report.png",
    alt: "PPWR 간단 리포트 화면",
  },
  {
    title: "TD 리포트 작성 근거를 자동 구성",
    shortTitle: "TD 리포트",
    description:
      "포장 시스템 정보와 구성품 관계를 기술문서 양식에 맞춰 정리합니다.",
    bullets: [
      "문서 관리 번호, 대상 범위, 제조사 정보를 체계적으로 정리합니다.",
      "포장 단위 이미지와 구성품 관계를 리포트 안에 연결합니다.",
      "제출에 필요한 시험 데이터와 근거 자료 위치를 함께 남깁니다.",
    ],
    image: "/assets/detail-pages/regulatory-reports/td-report.png",
    alt: "TD 리포트 화면",
  },
  {
    title: "DoC 선언 문서를 제출 가능한 형태로 준비",
    shortTitle: "DoC 리포트",
    description:
      "적합성 선언에 필요한 조항별 판단과 제품 정보를 문서 형태로 정리합니다.",
    bullets: [
      "선언 기준, 발행일, 제조사와 EU 대리인 정보를 정돈합니다.",
      "Article별 적용 여부와 판단 근거를 표 형태로 확인합니다.",
      "검토 후 서명과 발행 단계로 이어질 수 있도록 준비합니다.",
    ],
    image: "/assets/detail-pages/regulatory-reports/doc-report.png",
    alt: "DoC 리포트 화면",
  },
];

const regulatoryDiagnosisSteps = [
  {
    title: "기업 정보 등록",
    description:
      "제조자, 담당자, EU 수입자 정보를 먼저 등록해 리포트와 제출 문서의 기본값으로 사용합니다.",
    image: "/assets/detail-pages/regulatory-diagnosis/company-info.png",
    alt: "기업 정보 등록 화면",
  },
  {
    title: "품목 정보 입력",
    description:
      "품목명, SKU, 판매 국가, 출시 예정일을 입력해 진단 대상과 시장 범위를 확정합니다.",
    image: "/assets/detail-pages/regulatory-diagnosis/product-info.png",
    alt: "품목 정보 입력 화면",
  },
  {
    title: "포장자재 정보 입력",
    description:
      "포장 단계, 재질, 중량, 사용량을 입력해 PPWR 기준으로 검토할 포장 단위를 정리합니다.",
    image: "/assets/detail-pages/regulatory-diagnosis/packaging-info.png",
    alt: "포장자재 정보 입력 화면",
  },
  {
    title: "부자재 정보 입력",
    description:
      "착색제, 접착제, 라벨 부속물처럼 포장자재에 포함되는 부자재 정보를 함께 연결합니다.",
    image: "/assets/detail-pages/regulatory-diagnosis/sub-material-info.png",
    alt: "부자재 정보 입력 화면",
  },
  {
    title: "첨부 문서 등록",
    description:
      "TDS, 시험성적서, 공급사 확인서 등 진단 근거가 되는 문서를 항목별로 업로드합니다.",
    image: "/assets/detail-pages/regulatory-diagnosis/document-upload.png",
    alt: "첨부 문서 등록 화면",
  },
  {
    title: "진단 전 확인 사항",
    description:
      "입력 누락과 유의사항을 확인한 뒤 AI 진단을 실행해 보완 필요 항목을 확인합니다.",
    image: "/assets/detail-pages/regulatory-diagnosis/pre-check.png",
    alt: "진단 전 확인 화면",
  },
];

const regulatoryPricingPlans = [
  {
    name: "무료",
    caption: "필요 시 단건 이용",
    price: "0원",
    action: "내가 구독중인 플랜",
    current: true,
  },
  {
    name: "월 구독",
    caption: "소규모 / 초기 대응 기업",
    price: "99,000원",
    unit: "/ 월",
    action: "구독하러 가기",
  },
  {
    name: "연 구독",
    caption: "다수 SKU / 지속 대응 기업",
    price: "9,900,000원",
    unit: "/ 연",
    action: "구독하러 가기",
  },
  {
    name: "엔터프라이즈",
    caption: "대기업 / 다부서 / 다브랜드",
    price: "별도 견적",
    action: "구독 문의",
  },
];

const regulatoryPricingRows = [
  {
    label: "정기 구독료",
    values: ["0원", "99,000원 / 월", "9,900,000원 / 연", "별도 견적"],
  },
  {
    label: "제품, 포장 정보 관리",
    values: ["check", "check", "check", "check"],
  },
  {
    label: "AI 데이터 입력 / 작성 지원",
    values: ["none", "check", "check", "check"],
  },
  {
    label: "AI 채팅 에이전트 지원",
    values: ["none", "check", "check", "check"],
  },
  {
    label: "PPWR 간단 리포트 진단 비용",
    values: ["300,000원 / 제품", "250,000원 / 제품", "무료, 무제한 진단 가능", "협의"],
  },
  {
    label: "TD / DoC 리포트 발행 비용",
    values: ["700,000원 / 제품", "550,000원 / 제품", "무료, 무제한 발행 가능", "협의"],
  },
  {
    label: "TD / DoC 리포트 재발행 비용",
    values: ["400,000원 / 제품", "300,000원 / 제품", "무료, 무제한 재발행 가능", "협의"],
  },
  {
    label: "전문가 TD / DoC 문서 점검 비용",
    values: ["1,000,000원 / 건", "1,000,000원 / 건", "별도 견적", "협의"],
  },
  {
    label: "PPWR 전문가 진단 대행",
    values: ["3,000,000원~ / 제품", "2,500,000원~ / 제품", "별도 견적", "협의"],
  },
  {
    label: "규제 업데이트 안내",
    values: ["기본 공지", "시스템 연동 안내", "시스템 연동 안내", "시스템 연동 안내"],
  },
  {
    label: "시험 성적서 발급 대행",
    values: ["별도 견적", "별도 견적", "별도 견적", "협의"],
  },
  {
    label: "문서 관리 용량",
    values: ["500MB", "10GB", "100GB", "협의"],
    meter: [5, 18, 86, 100],
  },
  {
    label: "TD / DoC 문서 용량",
    values: ["500MB", "10GB", "100GB", "협의"],
    meter: [5, 18, 86, 100],
  },
];

interface ProductClientSectionProps {
  activePage: number;
  onPrev: () => void;
  onNext: () => void;
}

function ProductClientLogoMarquee() {
  return (
    <section className="product-client-logo-section" aria-label="제품 개발 고객사 로고">
      <div className="product-client-marquee" aria-hidden="true">
        <div className="product-client-marquee__track">
          {[...productClientLogos, ...productClientLogos].map((logo, index) => (
            <span className="product-client-logo" key={`${logo.src}-${index}`}>
              <img src={logo.src} alt="" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductClientSection({ activePage, onPrev, onNext }: ProductClientSectionProps) {
  return (
    <section className="product-client-section" aria-label="제품 개발 고객사와 후기">
      <div className="product-client-testimonials">
        <div className="product-client-testimonials__viewport">
          <div
            className="product-client-testimonials__track"
            style={{
              transform: `translateX(-${activePage * 100}%)`,
            }}
          >
            {productTestimonialPages.map((page, pageIndex) => (
              <div
                className="product-client-testimonials__page"
                key={`product-testimonial-page-${pageIndex}`}
              >
                {page.map((testimonial) => (
                  <article className="product-client-testimonial" key={testimonial.author}>
                    {testimonial.logo ? (
                      <div className="product-client-testimonial__logo">
                        <img src={testimonial.logo} alt={testimonial.logoLabel} />
                      </div>
                    ) : (
                      <div className="product-client-testimonial__image">
                        <img src={testimonial.image} alt={testimonial.imageLabel} />
                      </div>
                    )}
                    <div className="product-client-testimonial__content">
                      <p>"{testimonial.quote}"</p>
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

        <div className="product-client-testimonials__controls">
          <button type="button" aria-label="이전 제품 개발 후기 보기" onClick={onPrev}>
            <CaretLeft size={18} weight="bold" aria-hidden="true" />
          </button>
          <button type="button" aria-label="다음 제품 개발 후기 보기" onClick={onNext}>
            <CaretRight size={18} weight="bold" aria-hidden="true" />
          </button>
          <span>
            {activePage + 1}/{productTestimonialPages.length}
          </span>
        </div>
      </div>
    </section>
  );
}

function RegulatoryHero() {
  return (
    <section className="regulatory-hero">
      <div className="regulatory-hero__inner">
        <h1 className="title-reveal">
          <AnimatedTitle
            parts={[
              "EU수출, 서류때문에 발목 잡히지 마세요.",
              { type: "break" },
              {
                text: "PPWR 준비부터 서류 제출까지,",
                wrapperClassName:
                  "marker-scribble regulatory-hero__highlight",
                charClassName: "relative z-10",
                prefix: regulatoryMarkerStroke,
              },
              { type: "break" },
              "리스튜디오 하나로 끝냅니다.",
            ]}
          />
        </h1>
        <p>AI와 규제 전문가가 함께 진단부터 통과까지 하나의 흐름으로 완성합니다.</p>

        <div className="ad-banner-section ad-banner-section--embedded" aria-label="프로모션 배너">
          <div className="ad-banner">
            <div className="ad-banner__track" style={{ transform: "translateX(0%)" }}>
              <article className="ad-banner__slide ad-banner__slide--product-development-onestop">
                <img
                  className="ad-banner__image"
                  src="/assets/ads/product-development-onestop-banner.png"
                  alt="친환경 패키지 처음부터 끝까지 리스튜디오 하나로 완성"
                />
                <span className="sr-only">
                  처음부터 끝까지 리스튜디오 친환경 패키지 완성. 친환경 패키지 원스톱 솔루션 상담 신청 배너
                </span>
              </article>
            </div>

            <div className="ad-banner__controls">
              <button type="button" aria-label="이전 광고 배너 보기">
                <CaretLeft size={19} weight="bold" aria-hidden="true" />
              </button>
              <button type="button" aria-label="다음 광고 배너 보기">
                <CaretRight size={19} weight="bold" aria-hidden="true" />
              </button>
              <div className="ad-banner__indicator" aria-hidden="true">
                <span style={{ transform: "translateX(0%)", width: "100%" }} />
              </div>
              <span className="ad-banner__count">1/1</span>
            </div>

            <span className="sr-only">현재 배너: 처음부터 끝까지 리스튜디오 친환경 패키지 완성</span>
          </div>
        </div>

        <form
          className="mx-auto mt-4 w-full max-w-[1040px] rounded-2xl border border-[#d7dde2] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(23,33,27,0.035)] md:mt-5 md:px-5 md:py-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex items-center gap-2.5">
            <Paperclip
              size={21}
              weight="regular"
              aria-hidden="true"
              className="shrink-0 text-[#9aa8b7]"
            />
            <label className="sr-only" htmlFor="regulatory-ai-question">
              AI Agent 리사에게 규제 대응 문의하기
            </label>
            <input
              id="regulatory-ai-question"
              type="text"
              className="h-8 min-w-0 flex-1 bg-transparent text-[13px] font-medium text-primary-900 outline-none placeholder:text-[#9aa3af] md:text-[14px]"
              placeholder="PPWR 규제 대응, AI Agent 리사와 채팅하세요!"
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

        <div className="regulatory-hero__cta">
          <strong>PPWR 3가지 핵심 진단 무료 제공</strong>
          <Link to="/project-management/quote?service=regulatory-response">
            무료로 가입하고 진단받기
          </Link>
          <p>지금 가입 후 우리 회사 대응 준비 수준을 체크해 보세요.</p>
        </div>
      </div>
    </section>
  );
}

function RegulatoryGrowthSection() {
  return (
    <section className="regulatory-growth-section">
      <div className="regulatory-growth-section__inner">
        <div className="regulatory-growth-cards" aria-label="규제 마스터 솔루션 핵심 기능">
          {regulatoryMasterHighlights.map(({ number, title, description, Icon }) => (
            <article className="regulatory-growth-card" key={number}>
              <div>
                <span>{number}</span>
                <Icon size={24} weight="fill" aria-hidden="true" />
              </div>
              <strong>{title}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="regulatory-growth-preview" aria-label="PPWR 서류 준비 화면 예시">
          <div className="regulatory-growth-dashboard">
            <img
              src="/assets/detail-pages/regulatory-product-detail.png"
              alt="리스튜디오 PPWR 포장재 관리 대시보드 화면"
            />
          </div>
          <div className="regulatory-growth-floating-panel">
            <strong>1. 포장 데이터</strong>
            <p>보호해야 할 제품과 포장 구성을 선택하세요.</p>
            <div className="regulatory-growth-segment">
              <span>용기·캡</span>
              <span>라벨·박스</span>
            </div>
            <p>필요한 증빙 유형을 선택하면 AI가 누락 자료를 정리합니다.</p>
            <div className="regulatory-growth-checks">
              <span>
                <i />
                <b>재질</b>
                자동 검토
              </span>
              <span>
                <i />
                <b>시험</b>
                자동 검토
              </span>
              <span>
                <i />
                <b>선언</b>
                자동 검토
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulatoryConcernSection() {
  const [activeConcern, setActiveConcern] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const concernCount = regulatoryConcernCards.length;

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateCardStep = () => {
      const cards = track.querySelectorAll<HTMLElement>(".client-testimonial-card");
      const firstCard = cards[0];
      const secondCard = cards[1];

      if (!firstCard) {
        return;
      }

      setCardStep(
        secondCard
          ? secondCard.offsetLeft - firstCard.offsetLeft
          : firstCard.offsetWidth,
      );
    };

    updateCardStep();
    window.addEventListener("resize", updateCardStep);

    return () => {
      window.removeEventListener("resize", updateCardStep);
    };
  }, []);

  return (
    <section className="client-growth-section regulatory-concern-section" aria-label="규제 대응 어려움">
      <div className="client-growth-stage">
        <h2>규제 대응, 이렇게 어려우신가요?</h2>

        <div className="client-testimonials regulatory-concern-testimonials">
          <div className="client-testimonials__viewport">
            <div
              className="client-testimonials__track"
              ref={trackRef}
              style={{ transform: `translateX(-${cardStep * activeConcern}px)` }}
            >
              {regulatoryConcernCards.map((concern) => (
                <article className="client-testimonial-card" key={concern.title}>
                  <div className="client-testimonial-card__image">
                    <img src={concern.image} alt={concern.imageLabel} />
                    <div className="client-testimonial-card__image-copy">
                      <strong>{concern.title}</strong>
                    </div>
                  </div>

                  <div className="client-testimonial-card__content">
                    <div className="client-testimonial-card__body">
                      <span className="client-testimonial-card__tag">
                        {concern.tag}
                      </span>
                      <p className="client-testimonial-card__quote">
                        {concern.quote}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="client-testimonials__controls">
            <button
              type="button"
              aria-label="이전 규제 대응 어려움 보기"
              onClick={() =>
                setActiveConcern((current) =>
                  current === 0 ? concernCount - 1 : current - 1,
                )
              }
            >
              <CaretLeft size={21} weight="bold" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="다음 규제 대응 어려움 보기"
              onClick={() =>
                setActiveConcern((current) =>
                  current === concernCount - 1 ? 0 : current + 1,
                )
              }
            >
              <CaretRight size={21} weight="bold" aria-hidden="true" />
            </button>
            <span>
              {activeConcern + 1}/{concernCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulatoryMasterShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    let frame = 0;

    const updateShowcaseScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const progress =
        scrollableDistance <= 0
          ? 0
          : Math.min(
              Math.max((window.innerHeight * -1 + sectionRect.bottom) / scrollableDistance, 0),
              1,
            );
      const horizontalProgress = 1 - progress;
      const trackDistance = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      const offset = -horizontalProgress * trackDistance;

      track.style.setProperty("--regulatory-master-offset", `${offset}px`);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateShowcaseScroll);
    };

    updateShowcaseScroll();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      className="regulatory-master-showcase-section"
      ref={sectionRef}
      aria-label="규제 마스터 솔루션 서비스 소개"
    >
      <div className="regulatory-master-showcase-sticky">
        <div className="regulatory-master-showcase-header">
          <div className="regulatory-master-showcase-copy">
            <h2>
              자주 바뀌는 규제 변화에도 흔들리지 않는,
              <br />
              리스튜디오{" "}
              <span>‘규제 마스터 솔루션’</span>을 체험하세요.
            </h2>
            <p>
              AI가 데이터를 빠르고 정확하게 1차 진단하고, 규제 전문가가 다시 한번 맞춤
              검증해 최종 보증합니다.
            </p>
          </div>
          <div className="regulatory-master-showcase-cta">
            <Link to="/project-management/quote?service=regulatory-response">
              무료로 가입하고 진단받기
            </Link>
            <p>
              무료로 PPWR 3가지 핵심 진단을 받고,
              <br />
              필요한만큼 이어서 활용하세요.
            </p>
          </div>
        </div>

        <div className="regulatory-master-showcase-viewport" ref={viewportRef}>
          <div className="regulatory-master-showcase-track" ref={trackRef}>
            {regulatoryMasterShowcaseCards.map((card) => (
              <article className="regulatory-master-showcase-card" key={card.title}>
                <div className="regulatory-master-showcase-card__head">
                  <strong>{card.eyebrow}</strong>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
                <div className="regulatory-master-showcase-card__media">
                  <img src={card.image} alt={card.alt} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulatorySolutionFitSection() {
  return (
    <section
      className="regulatory-solution-fit-section"
      aria-label="규제 마스터 솔루션 적합 고객"
    >
      <div className="regulatory-solution-fit-inner">
        <div className="regulatory-solution-fit-copy">
          <h2>
            PPWR은 이미 시작되었습니다.
            <br />
            우리 회사에 맞는 해결책을 제안합니다.
          </h2>
          <p>이런 기업들도 리스튜디오 규제 솔루션을 찾고 있어요.</p>
          <div className="regulatory-solution-fit-tags" aria-label="규제 솔루션 대상 기업">
            {regulatorySolutionFitTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="regulatory-solution-fit-chat" aria-label="고객 고민과 리스튜디오 답변">
          {regulatorySolutionChats.map((chat) => (
            <div className="regulatory-solution-chat-pair" key={chat.customer}>
              <div className="regulatory-solution-message regulatory-solution-message--customer">
                <span className="regulatory-solution-message__avatar" aria-hidden="true">
                  <User size={34} weight="fill" />
                </span>
                <div>
                  <strong>{chat.customer}</strong>
                  <p>{chat.question}</p>
                </div>
              </div>

              <div className="regulatory-solution-message regulatory-solution-message--restudio">
                <div>
                  <strong>리스튜디오</strong>
                  <p>{chat.answer}</p>
                </div>
                <img src="/assets/ai-agent-resa.png?v=2" alt="" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryTrustSection() {
  return (
    <section className="regulatory-trust-section" aria-label="규제 대응 고객 후기와 고객사 로고">
      <div className="regulatory-trust-inner">
        <h2>
          이미 많은 기업들이 리스튜디오와 함께
          <br />
          규제를 준비하고 있습니다.
        </h2>

        <div className="regulatory-trust-cards">
          {regulatoryTrustTestimonials.map((testimonial) => (
            <article className="regulatory-trust-card" key={testimonial.tag}>
              <span>{testimonial.tag}</span>
              <p>{testimonial.quote}</p>
              <strong>
                {testimonial.author} <em>{testimonial.role}</em>
              </strong>
            </article>
          ))}
        </div>
      </div>

      <div className="regulatory-trust-marquee" aria-hidden="true">
        <div className="regulatory-trust-marquee__track">
          {[...productClientLogos, ...productClientLogos].map((logo, index) => (
            <span className="regulatory-trust-logo" key={`${logo.src}-${index}`}>
              <img src={logo.src} alt="" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryExpertSection() {
  return (
    <section className="regulatory-expert-section" aria-label="AI와 규제 전문가 결합 서비스">
      <div className="regulatory-expert-inner">
        <h2>
          지금 가장 시급한 EU PPWR 대응부터, 앞으로의 글로벌 수출 규제까지,
          <br />
          AI와 규제 전문가의 결합으로 빠르고, 더 정확하게, 이제 더 쉽고 스마트하게 준비하세요.
        </h2>

        <div className="regulatory-expert-layout">
          <div className="regulatory-expert-summary">
            <article>
              <span aria-hidden="true">
                <Brain size={42} weight="fill" />
              </span>
              <div>
                <strong>
                  AI가 1차 진단하고, <em>전문가가 최종 보증</em>
                </strong>
                <p>
                  빠르고 정확한 AI, 그리고 풍부한 경험의 전문가가 함께 만들어가는 신뢰할 수 있는 결과입니다.
                </p>
              </div>
            </article>
            <PlusCircle
              className="regulatory-expert-plus"
              size={34}
              weight="fill"
              aria-hidden="true"
            />
            <article>
              <span aria-hidden="true">
                <ClipboardText size={42} weight="fill" />
              </span>
              <div>
                <strong>
                  AI로 편리하게, <em>전문가가 또 한번 맞춤 검증</em>
                </strong>
                <p>
                  AI가 시간을 줄여주고, 전문가가 비즈니스에 맞는 최적의 솔루션을 제안합니다.
                </p>
              </div>
            </article>
          </div>

          <div className="regulatory-expert-cards">
            {regulatoryExpertCards.map((card) => (
              <article className="regulatory-expert-card" key={card.number}>
                <span>{card.number}</span>
                <div>
                  <h3>{card.title}</h3>
                  <strong>{card.highlight}</strong>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulatoryAssetizationSection() {
  return (
    <section className="regulatory-assetization-section" aria-label="제품 데이터와 서류 자산화">
      <div className="regulatory-assetization-inner">
        <div className="regulatory-assetization-copy">
          <div className="regulatory-assetization-badges" aria-label="리스튜디오 서비스 방향">
            <span>단순 규제 이론 컨설팅 NO</span>
            <span>단순 서류 작성 대행 NO</span>
          </div>
          <h2>
            귀사의 제품 데이터와 서류를 자산화하고,
            <br />
            경쟁사보다 더 빠른 출시로 더 큰 시장 기회를 만들어드립니다.
          </h2>
        </div>

        <div className="regulatory-assetization-stack">
          <article className="regulatory-assetization-panel">
            <div className="regulatory-assetization-panel__head">
              <h3>데이터 자산화</h3>
              <span>흩어진 문서를 하나의 자산으로</span>
            </div>
            <img
              src="/assets/detail-pages/regulatory-master/data-assetization.png"
              alt="흩어진 문서를 리스튜디오 데이터 자산으로 정리하는 화면"
            />
            <div className="regulatory-assetization-security">
              <ShieldCheck size={28} weight="fill" aria-hidden="true" />
              <span>보안으로 안전하게 보호되는 우리 회사 수출 데이터 자산</span>
            </div>
          </article>

          <div className="regulatory-assetization-bridge" aria-hidden="true">
            <span>
              <CaretDown size={20} weight="bold" />
            </span>
            <strong>데이터 자산이 더 큰 가능성으로</strong>
            <span>
              <CaretDown size={20} weight="bold" />
            </span>
          </div>

          <article className="regulatory-assetization-panel regulatory-assetization-panel--launch">
            <div className="regulatory-assetization-panel__head">
              <h3>더 빠른 출시</h3>
              <span>정리된 데이터로 정확하고 빠른 출시</span>
            </div>
            <img
              src="/assets/detail-pages/regulatory-master/faster-launch.png"
              alt="평균 준비 기간 50% 단축을 보여주는 리스튜디오 출시 일정 화면"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

function RegulatoryValueSection() {
  return (
    <section className="regulatory-value-section" aria-label="규제 마스터 솔루션 가치 비교">
      <div className="regulatory-value-inner">
        <div className="regulatory-value-head">
          <h2>
            규제 마스터 솔루션은 이런 기업에게
            <br />
            더 큰 가치와 효용성을 제공해 드립니다.
          </h2>
          <p>
            규제는 계속 변합니다. 하지만 귀사의 글로벌 비즈니스는 멈추지 않아야 합니다.
            <br />
            그래서 일회성 대응은 안됩니다. 모두 같은 대응을 약속하지만 본질은 다릅니다.
            <br />
            꼭 확인하세요.
          </p>
        </div>

        <div className="regulatory-value-targets">
          {regulatoryValueTargets.map(({ title, items, Icon }) => (
            <article className="regulatory-value-target" key={title}>
              <div>
                <Icon size={34} weight="regular" aria-hidden="true" />
                <strong>{title}</strong>
              </div>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="regulatory-value-table" role="table" aria-label="규제 대응 서비스 비교표">
          <div className="regulatory-value-table__row regulatory-value-table__row--head" role="row">
            <span role="columnheader">비교 항목</span>
            <strong role="columnheader">리스튜디오 규제 해결 솔루션</strong>
            <span role="columnheader">일반 컨설팅사</span>
            <span role="columnheader">패키징 제조사</span>
            <span role="columnheader">일반 기술 / 인증사</span>
          </div>
          {regulatoryComparisonRows.map((row) => (
            <div className="regulatory-value-table__row" role="row" key={row.label}>
              <span role="cell">{row.label}</span>
              <strong role="cell">{row.restudio}</strong>
              <span role="cell">{row.consulting}</span>
              <span role="cell">{row.packaging}</span>
              <span role="cell">{row.certification}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryStartSection() {
  return (
    <section className="regulatory-start-section" aria-label="규제 마스터 솔루션 시작 프로세스">
      <div className="regulatory-start-inner">
        <div className="regulatory-start-head">
          <h2>규제 마스터 솔루션, 지금 바로 시작하세요.</h2>
          <p>간단한 4단계 프로세스로 글로벌 수출 규제 준비가 시작됩니다.</p>
        </div>

        <div className="regulatory-start-process" aria-label="규제 마스터 솔루션 4단계 프로세스">
          {regulatoryStartSteps.map(({ title, description, Icon }, index) => (
            <Fragment key={title}>
              <article className="regulatory-start-step">
                <span className="regulatory-start-step__icon" aria-hidden="true">
                  <Icon size={24} weight="regular" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </article>
              {index < regulatoryStartSteps.length - 1 && (
                <CaretRight
                  className="regulatory-start-step__arrow"
                  size={22}
                  weight="bold"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryFreeReportSection() {
  return (
    <section className="regulatory-free-report-section" aria-label="무료 진단 리포트 시작 단계">
      <div className="regulatory-free-report-inner">
        <div className="regulatory-free-report-head">
          <h2>회원가입만 하면, 무료 진단 리포트부터 시작됩니다</h2>
          <p>기본 정보만 입력해도 무료로 현황을 바로 확인할 수 있습니다.</p>
        </div>

        <div className="regulatory-free-report-steps">
          {regulatoryFreeReportSteps.map(({ number, title, description, badge, featured }, index) => (
            <Fragment key={title}>
              <article className={featured ? "regulatory-free-report-step is-featured" : "regulatory-free-report-step"}>
                {badge && <span className="regulatory-free-report-step__badge">{badge}</span>}
                <span className="regulatory-free-report-step__number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
              {index < regulatoryFreeReportSteps.length - 1 && (
                <span className="regulatory-free-report-steps__line" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryFinalCtaSection() {
  return (
    <section className="regulatory-final-cta-section" aria-label="규제 마스터 솔루션 무료 진단 신청">
      <div className="regulatory-final-cta">
        <p>규제 마스터 솔루션,</p>
        <h2>
          규제 대응을 넘어,
          <br />
          지속 가능한 글로벌 비즈니스를 위한 단 하나의 솔루션
        </h2>
        <span>지금 우리 회사만의 수출 규제 해결 인프라를 구축하세요.</span>
        <Link className="regulatory-final-cta__button" to="/project-management/quote?service=regulatory-response">
          무료로 가입하고 진단 받기
        </Link>
        <small>간단한 회원가입 후 'PPWR 3가지 핵심 진단'을 무료로 받으실 수 있습니다.</small>
      </div>
    </section>
  );
}

function RegulatoryDiagnosisResultSection() {
  return (
    <section className="regulatory-diagnosis-result-section" aria-label="진단 후 제공 결과">
      <div className="regulatory-diagnosis-result-inner">
        <h2>진단 후, 무엇을 받게 되나요?</h2>

        <div className="regulatory-diagnosis-result-layout">
          <article className="regulatory-diagnosis-score-card">
            <h3>규제 진단 점수</h3>
            <div className="regulatory-diagnosis-gauge-wrap">
              <div className="regulatory-diagnosis-gauge" aria-label="규제 진단 점수 85점">
                <img
                  className="regulatory-diagnosis-gauge__track"
                  src="/assets/detail-pages/regulatory-master/track-arc.svg"
                  alt=""
                  aria-hidden="true"
                />
                <img
                  className="regulatory-diagnosis-gauge__value"
                  src="/assets/detail-pages/regulatory-master/progress-arc.svg"
                  alt=""
                  aria-hidden="true"
                />
                <div>
                  <strong>85</strong>
                  <span>/100</span>
                </div>
              </div>
            </div>
            <div className="regulatory-diagnosis-risk">
              <WarningCircle size={22} weight="fill" aria-hidden="true" />
              <span>주요 리스크:</span>
              <strong>재활용성 등급 미달 부품 존재</strong>
            </div>
          </article>

          <div className="regulatory-diagnosis-center">
            <article className="regulatory-diagnosis-list-card">
              <h3>미비 서류 리스트</h3>
              <p>아래 항목을 보완하여 규제 준수를 완료하세요.</p>
              <div className="regulatory-diagnosis-doc-list">
                {regulatoryDiagnosisMissingDocs.map((item) => (
                  <div className="regulatory-diagnosis-doc-item" data-status={item.status} key={item.title}>
                    <span aria-hidden="true">!</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                    <button type="button">{item.action}</button>
                  </div>
                ))}
              </div>
            </article>

            <article className="regulatory-diagnosis-alert-card">
              <div className="regulatory-diagnosis-alert-head">
                <div>
                  <h3>후속 관리 알림</h3>
                  <p>지속적인 모니터링으로 규제 변화를 놓치지 마세요.</p>
                </div>
                <strong>
                  3건
                  <Bell size={22} weight="fill" aria-hidden="true" />
                </strong>
              </div>
              <div className="regulatory-diagnosis-alert-list">
                {regulatoryDiagnosisAlerts.map((item) => (
                  <div className="regulatory-diagnosis-alert-item" data-tone={item.tone} key={item.title}>
                    <span aria-hidden="true">
                      {item.tone === "blue" ? (
                        <TrendUp size={22} weight="regular" />
                      ) : item.tone === "yellow" ? (
                        <Clock size={22} weight="regular" />
                      ) : (
                        <FileText size={22} weight="regular" />
                      )}
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                    <time>{item.date}</time>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="regulatory-diagnosis-benefits">
            {regulatoryDiagnosisBenefits.map(({ Icon, tone, title, description }) => (
              <article className="regulatory-diagnosis-benefit-card" data-tone={tone} key={title}>
                <span className="regulatory-diagnosis-benefit-card__icon" aria-hidden="true">
                  <Icon size={24} weight="regular" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulatorySecuritySection() {
  return (
    <section className="regulatory-security-section" aria-label="데이터와 서류 보안 안내">
      <div className="regulatory-security-inner">
        <div className="regulatory-security-head">
          <h2>귀사의 데이터, 서류 발급 안심하고 맡기세요.</h2>
          <p>리스튜디오 규제 마스터 솔루션은 보안과 인증에 철저합니다.</p>
        </div>

        <div className="regulatory-security-grid">
          {regulatorySecurityItems.map(({ Icon, title, description }) => (
            <article className="regulatory-security-card" key={title}>
              <span className="regulatory-security-card__icon" aria-hidden="true">
                <Icon size={28} weight="regular" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryFaqCtaSection() {
  return (
    <section className="regulatory-faq-cta-section" aria-label="규제 마스터 솔루션 FAQ">
      <div className="regulatory-faq-cta-banner">
        <div>
          <h2>지금 회원가입하고, 흔들리지 않는 규제 대응 인프라를 시작하세요.</h2>
          <p>AI가 1차 진단하고, 전문가가 최종 보증하는 단 하나의 솔루션</p>
        </div>
        <Link className="regulatory-faq-cta-banner__button" to="/project-management/quote?service=regulatory-response">
          무료로 가입하고 진단 받기
        </Link>
      </div>

      <div className="regulatory-faq-layout">
        <aside className="regulatory-faq-side">
          <h2>FAQ</h2>
          <Link className="regulatory-faq-more" to="/resources">
            더 많은 질문 보기
            <ArrowRight size={17} weight="bold" aria-hidden="true" />
          </Link>
        </aside>

        <div className="regulatory-faq-list">
          {regulatoryFaqItems.map((question) => (
            <button className="regulatory-faq-item" type="button" key={question}>
              <span>{question}</span>
              <span aria-hidden="true">+</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RegulatoryPpwrSection() {
  return (
    <section className="regulatory-ppwr-section">
      <div className="regulatory-ppwr-section__inner">
        <div className="regulatory-ppwr-section__header">
          <h2 className="title-reveal">
            <AnimatedTitle parts="AI, PPWR 전문가와 함께하는 유럽 수출" />
          </h2>
          <div className="regulatory-ppwr-section__definition">
            <strong>PPWR이란?</strong>
            <p>
              EU의 PPWR은 유럽연합 역내에 유통·출시되는 모든 포장재의 감량,
              재사용, 재활용성을 법적으로 강화하는 환경 규제입니다. 기존의 자율적
              지침과 달리 회원국 전역에 직접 적용되는 구속력을 가집니다.
            </p>
          </div>
        </div>

        <div className="regulatory-ppwr-section__media">
          <img
            src="/assets/detail-pages/regulatory-export-consulting.png"
            alt="회의실에서 PPWR 규제 대응 대시보드를 보며 상담하는 모습"
          />
        </div>
      </div>
    </section>
  );
}

export function RegulatoryWhySection() {
  return (
    <section className="regulatory-why-section">
      <div className="regulatory-why-section__inner">
        <h2 className="title-reveal">
          <AnimatedTitle parts="왜 리스튜디오인가요?" />
        </h2>
        <div className="regulatory-why-grid">
          {regulatoryWhyItems.map(({ title, description, Icon }) => (
            <article className="regulatory-why-item" key={title}>
              <span className="regulatory-why-item__icon">
                <Icon size={34} weight="regular" aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RegulatoryPlatformSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentStep = regulatoryPlatformSteps[activeStep] ?? regulatoryPlatformSteps[0];

  useEffect(() => {
    const steps = stepRefs.current.filter((step): step is HTMLDivElement => step !== null);

    if (steps.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredEntry = entries.find((entry) => entry.isIntersecting);

        if (!centeredEntry) {
          return;
        }

        const nextIndex = Number(
          (centeredEntry.target as HTMLDivElement).dataset.platformStep ?? 0,
        );
        setActiveStep(nextIndex);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="regulatory-platform-section">
      <div className="regulatory-platform-stage">
        <div className="regulatory-platform-section__inner">
          <div className="regulatory-platform-copy" aria-live="polite">
            <div className="regulatory-platform-copy__content" key={currentStep.shortTitle}>
              <h2 className="title-reveal">
                <AnimatedTitle parts={currentStep.title} />
              </h2>
              <p>{currentStep.description}</p>
              <ul>
                {currentStep.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="regulatory-platform-indicator" aria-label="관리 화면 단계">
              <strong>{currentStep.shortTitle}</strong>
              {regulatoryPlatformSteps.map((step, index) => (
                <button
                  key={step.shortTitle}
                  type="button"
                  className={index === activeStep ? "is-active" : ""}
                  onClick={() => setActiveStep(index)}
                  aria-pressed={index === activeStep}
                  aria-label={`${step.shortTitle} 화면 보기`}
                >
                  <i aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          <div className="regulatory-platform-media" aria-label={currentStep.alt}>
            {regulatoryPlatformSteps.map((step, index) => (
              <img
                key={step.image}
                src={step.image}
                alt={step.alt}
                className={index === activeStep ? "is-active" : ""}
                aria-hidden={index !== activeStep}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="regulatory-platform-scroll-track" aria-hidden="true">
        {regulatoryPlatformSteps.map((step, index) => (
          <div
            key={step.shortTitle}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
            data-platform-step={index}
          />
        ))}
      </div>
    </section>
  );
}

export function RegulatoryReportSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentStep = regulatoryReportSteps[activeStep] ?? regulatoryReportSteps[0];

  useEffect(() => {
    const steps = stepRefs.current.filter((step): step is HTMLDivElement => step !== null);

    if (steps.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredEntry = entries.find((entry) => entry.isIntersecting);

        if (!centeredEntry) {
          return;
        }

        const nextIndex = Number(
          (centeredEntry.target as HTMLDivElement).dataset.reportStep ?? 0,
        );
        setActiveStep(nextIndex);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="regulatory-report-section">
      <div className="regulatory-report-stage">
        <div className="regulatory-report-section__inner">
          <div className="regulatory-report-media" aria-label={currentStep.alt}>
            {regulatoryReportSteps.map((step, index) => (
              <img
                key={step.image}
                src={step.image}
                alt={step.alt}
                className={index === activeStep ? "is-active" : ""}
                aria-hidden={index !== activeStep}
              />
            ))}
          </div>

          <div className="regulatory-report-copy" aria-live="polite">
            <div className="regulatory-report-copy__content" key={currentStep.shortTitle}>
              <h2 className="title-reveal">
                <AnimatedTitle parts={currentStep.title} />
              </h2>
              <p>{currentStep.description}</p>
              <ul>
                {currentStep.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="regulatory-report-indicator" aria-label="리포트 화면 단계">
              <strong>{currentStep.shortTitle}</strong>
              {regulatoryReportSteps.map((step, index) => (
                <button
                  key={step.shortTitle}
                  type="button"
                  className={index === activeStep ? "is-active" : ""}
                  onClick={() => setActiveStep(index)}
                  aria-pressed={index === activeStep}
                  aria-label={`${step.shortTitle} 화면 보기`}
                >
                  <i aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="regulatory-report-scroll-track" aria-hidden="true">
        {regulatoryReportSteps.map((step, index) => (
          <div
            key={step.shortTitle}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
            data-report-step={index}
          />
        ))}
      </div>
    </section>
  );
}

export function RegulatoryDiagnosisSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const steps = stepRefs.current.filter((step): step is HTMLDivElement => step !== null);

    if (steps.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredEntry = entries.find((entry) => entry.isIntersecting);

        if (!centeredEntry) {
          return;
        }

        const nextIndex = Number(
          (centeredEntry.target as HTMLDivElement).dataset.diagnosisStep ?? 0,
        );
        setActiveStep(nextIndex);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="regulatory-diagnosis-section">
      <div className="regulatory-diagnosis-stage">
        <div className="regulatory-diagnosis-section__inner">
          <h2 className="title-reveal">
            <AnimatedTitle parts="수출을 위한 품목 진단 과정" />
          </h2>

          <div className="regulatory-diagnosis-board">
            <ol
              className="regulatory-diagnosis-list"
              aria-label="품목 진단 과정"
              style={{ "--diagnosis-active-step": activeStep } as CSSProperties}
            >
              {regulatoryDiagnosisSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={index === activeStep ? "is-active" : ""}
                >
                  <span>{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                  <div className="regulatory-diagnosis-item__media" aria-hidden={index !== activeStep}>
                    <img src={step.image} alt={step.alt} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="regulatory-diagnosis-scroll-track" aria-hidden="true">
        {regulatoryDiagnosisSteps.map((step, index) => (
          <div
            key={step.title}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
            data-diagnosis-step={index}
          />
        ))}
      </div>
    </section>
  );
}

export function RegulatoryRequestSection() {
  return (
    <section className="regulatory-request-section">
      <div className="regulatory-request-section__inner">
        <div className="regulatory-request-section__header">
          <p>이 모든 과정이 복잡하다면?</p>
          <h2 className="title-reveal">
            <AnimatedTitle parts="품목 등록 및 진단 대행 서비스" />
          </h2>
          <span>
            PPWR 전문가로 이루어진 리스튜디오에서 품목, 포장자재, 부자재, 문서 등록에 대한
            조언, 등록 대행 서비스를 제공합니다.
          </span>
        </div>

        <form
          className="regulatory-request-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            <span>등록 요청 내용 *</span>
            <textarea placeholder="품목 정보를 자유롭게 입력해주세요..." />
          </label>

          <div className="regulatory-request-form__upload">
            <span>첨부파일</span>
            <button type="button">불러오기</button>
          </div>

          <div className="regulatory-request-form__divider" />

          <div className="regulatory-request-form__grid">
            <label>
              <span>품목 등록 요청 수량 *</span>
              <input type="number" min="1" placeholder="1" />
            </label>

            <label>
              <span>EU 시장 출시 형태</span>
              <select defaultValue="">
                <option value="" disabled>
                  선택
                </option>
                <option>출시 예정</option>
                <option>출시 중</option>
                <option>미정</option>
              </select>
            </label>

            <label>
              <span>EU 출시 예정일</span>
              <input type="text" placeholder="YYYY. MM. DD" />
            </label>
          </div>

          <label>
            <span>EU 판매 예정국가</span>
            <select defaultValue="">
              <option value="" disabled>
                선택
              </option>
              <option>독일</option>
              <option>프랑스</option>
              <option>스페인</option>
              <option>EU 전체</option>
            </select>
          </label>

          <button type="submit" className="regulatory-request-form__submit">
            서비스 신청하기
          </button>
        </form>
      </div>
    </section>
  );
}

export function RegulatoryPricingSection() {
  return (
    <section className="regulatory-pricing-section">
      <div className="regulatory-pricing-section__inner">
        <h2 className="title-reveal">
          <AnimatedTitle parts="구독 및 요금제" />
        </h2>

        <div className="regulatory-pricing-table">
          <div className="regulatory-pricing-labels" aria-hidden="true">
            <div />
            {regulatoryPricingRows.map((row) => (
              <span key={row.label}>{row.label}</span>
            ))}
          </div>

          <div className="regulatory-pricing-plans">
            {regulatoryPricingPlans.map((plan, planIndex) => (
              <div className="regulatory-pricing-plan-shell" key={plan.name}>
                <article
                  className={`regulatory-pricing-plan${plan.current ? " is-current" : ""}`}
                >
                  <header>
                    <h3>{plan.name}</h3>
                    <p>{plan.caption}</p>
                  </header>

                  <div className="regulatory-pricing-plan__body">
                    {regulatoryPricingRows.map((row) => {
                      const value = row.values[planIndex];

                      return (
                        <div
                          className={`regulatory-pricing-cell${
                            row.meter ? " regulatory-pricing-cell--meter" : ""
                          }${
                            row.label === "정기 구독료"
                              ? " regulatory-pricing-cell--price"
                              : ""
                          }`}
                          key={`${plan.name}-${row.label}`}
                        >
                          <span className="regulatory-pricing-cell__label">{row.label}</span>
                          {value === "check" ? (
                            <CheckCircle size={20} weight="bold" aria-label="포함" />
                          ) : value === "none" ? (
                            <XCircle
                              className="regulatory-pricing-cell__none"
                              size={20}
                              weight="bold"
                              aria-label="미포함"
                            />
                          ) : (
                            <strong>
                              {row.label === "정기 구독료" ? (
                                <>
                                  {plan.price}
                                  {plan.unit ? <em>{plan.unit}</em> : null}
                                </>
                              ) : (
                                value
                              )}
                            </strong>
                          )}
                          {row.meter ? (
                            <span className="regulatory-pricing-meter">
                              <i style={{ width: `${row.meter[planIndex]}%` }} />
                            </span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </article>

                {plan.current ? (
                  <span className="regulatory-pricing-plan__current">
                    {plan.action}
                  </span>
                ) : (
                  <button type="button">{plan.action}</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceDetailPageProps {
  variant: "product-development" | "regulatory-response";
}

export function ServiceDetailPage({ variant }: ServiceDetailPageProps) {
  const isProductDevelopment = variant === "product-development";
  const [activeProductTestimonial, setActiveProductTestimonial] = useState(0);
  const [isFloatingCtaVisible, setIsFloatingCtaVisible] = useState(false);
  const [isFloatingCtaDismissed, setIsFloatingCtaDismissed] = useState(false);
  const serviceFlowSectionRef = useRef<HTMLElement | null>(null);
  const serviceFlowViewportRef = useRef<HTMLDivElement | null>(null);
  const serviceFlowTrackRef = useRef<HTMLDivElement | null>(null);
  const floatingCtaVisibleRef = useRef(false);

  useTitleReveal();

  useEffect(() => {
    if (!isProductDevelopment) {
      return;
    }

    const section = serviceFlowSectionRef.current;
    const viewport = serviceFlowViewportRef.current;
    const track = serviceFlowTrackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    let frame = 0;

    const updateServiceFlow = () => {
      const sectionRect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const progress =
        scrollableDistance <= 0
          ? 0
          : Math.min(
              Math.max((window.innerHeight * -1 + sectionRect.bottom) / scrollableDistance, 0),
              1,
            );
      const endPadding =
        parseFloat(
          window
            .getComputedStyle(section)
            .getPropertyValue("--product-service-end-padding"),
        ) || 0;
      const startPadding =
        parseFloat(
          window
            .getComputedStyle(section)
            .getPropertyValue("--product-service-start-padding"),
        ) || 0;
      const trackDistance = Math.max(
        track.scrollWidth - viewport.clientWidth + startPadding + endPadding,
        0,
      );
      const rawHorizontalProgress = 1 - progress;
      const horizontalProgress = Math.min(
        Math.max((rawHorizontalProgress - 0.1) / 0.9, 0),
        1,
      );
      const horizontalOffset = startPadding - horizontalProgress * trackDistance;

      section.style.setProperty("--product-service-offset", `${horizontalOffset}px`);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateServiceFlow);
    };

    updateServiceFlow();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isProductDevelopment]);

  useEffect(() => {
    if (isProductDevelopment || isFloatingCtaDismissed) {
      floatingCtaVisibleRef.current = false;
      setIsFloatingCtaVisible(false);
      return;
    }

    let lastScrollY = window.scrollY;
    let frame = 0;

    const setVisible = (nextVisible: boolean) => {
      if (floatingCtaVisibleRef.current === nextVisible) {
        return;
      }

      floatingCtaVisibleRef.current = nextVisible;
      setIsFloatingCtaVisible(nextVisible);
    };

    const updateFloatingCta = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY < 160) {
        setVisible(false);
      } else if (Math.abs(scrollDelta) > 8) {
        setVisible(scrollDelta > 0);
      }

      lastScrollY = Math.max(currentScrollY, 0);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateFloatingCta);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
    };
  }, [isFloatingCtaDismissed, isProductDevelopment]);

  const showPrevProductTestimonial = () => {
    setActiveProductTestimonial((current) =>
      current === 0 ? productTestimonialPages.length - 1 : current - 1,
    );
  };

  const showNextProductTestimonial = () => {
    setActiveProductTestimonial((current) =>
      current === productTestimonialPages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main className="bg-white">
      {isProductDevelopment && (
        <>
          <section className="service-detail-hero">
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
            <ServiceDetailAdBanner
              banners={productDevelopmentHeroBanners}
              embedded
            />
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
                <label className="sr-only" htmlFor="product-ai-question">
                  AI Agent 리사에게 제품 개발 문의하기
                </label>
                <input
                  id="product-ai-question"
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
          </section>

          <section className="product-summary-section" aria-label="리스튜디오 제품개발 핵심 지표">
            <div className="product-summary-section__inner">
              <div className="product-summary-metrics" aria-label="제품개발 성과 지표">
                {[
                  ["50%", "평균 개발 기간 단축"],
                  ["30%", "개발비용 최대 절감"],
                  ["원스톱", "소재 선정부터 양산까지"],
                  ["ESG", "친환경 검증 · 규제 대응"],
                ].map(([value, label]) => (
                  <article className="product-summary-metric" key={value}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </article>
                ))}
              </div>

              <div className="product-summary-proof">
                <div className="product-summary-proof__copy">
                  <h2>
                    이미{" "}
                    <span className="marker-scribble product-summary-proof__highlight">
                      {markerStroke}
                      <span>다양한 업종의 브랜드</span>
                    </span>
                    가
                    <br />
                    리스튜디오와 함께 하고 있습니다
                  </h2>
                  <p>
                    화장품, 패션, F&amp;B, 바이오/헬스케어, 전자기기 등
                    리스튜디오는 업종별 요구조건에 맞는 친환경 패키지 개발을
                    원스톱으로 대응합니다.
                  </p>
                </div>

                <div className="product-summary-proof__grid">
                  {[
                    {
                      title: "120개사의 선택",
                      description: "누적 고객사",
                      Icon: Buildings,
                    },
                    {
                      title: "다양한 업종 올커버",
                      description: "맞춤 프로젝트 경험 풍부",
                      Icon: SquaresFour,
                    },
                    {
                      title: "통합 대응",
                      description: "소재, 디자인, 생산, 친환경 검증까지",
                      Icon: Briefcase,
                    },
                    {
                      title: "친환경 리더십",
                      description: "친환경성 검증 지원 및 규제 대응",
                      Icon: Leaf,
                    },
                  ].map(({ title, description, Icon }) => (
                    <article className="product-summary-proof-card" key={title}>
                      <span>
                        <Icon size={28} weight="regular" aria-hidden="true" />
                      </span>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <CustomerCaseStudiesSection className="product-case-studies-section" />

          <ProductClientLogoMarquee />

          <ProductClientSection
            activePage={activeProductTestimonial}
            onPrev={showPrevProductTestimonial}
            onNext={showNextProductTestimonial}
          />

          <section className="product-challenge-section">
            <div className="product-challenge-section__inner">
              <div className="product-challenge-section__title">
                <h2 className="title-reveal">
                  <AnimatedTitle
                    parts={[
                      "친환경 패키지 개발,",
                      { type: "break" },
                      "왜 늘 오래 걸리고 비쌀까요?",
                    ]}
                  />
                </h2>
              </div>

              <div className="product-challenge-list" aria-label="친환경 패키지 개발 어려움">
                {productChallenges.map((challenge) => (
                  <article className="product-challenge-card" key={challenge.title}>
                    <div className="product-challenge-card__media">
                      <img src={challenge.image} alt={challenge.alt} />
                    </div>
                    <div className="product-challenge-card__content">
                      <h3>{challenge.title}</h3>
                      <p>{challenge.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section ref={serviceFlowSectionRef} className="product-service-flow-section">
            <div className="product-service-flow-stage">
              <div className="product-service-flow__copy">
                <span>서비스 소개</span>
                <h2 className="title-reveal">
                  <AnimatedTitle
                    parts={[
                      "복잡한 친환경 패키지 개발을",
                      { type: "break" },
                      {
                        text: "원스톱 시스템으로 바꿉니다.",
                        wrapperClassName: "product-service-flow__accent",
                      },
                    ]}
                  />
                </h2>
                <p>
                  제품 특성 분석부터 소재, 디자인, 생산, 검증 리포트까지
                  리스튜디오가 하나의 흐름으로 연결합니다.
                </p>
              </div>

              <div className="product-service-flow__panel">
                <div
                  ref={serviceFlowViewportRef}
                  className="product-service-flow__viewport"
                >
                  <div ref={serviceFlowTrackRef} className="product-service-flow__track">
                    {productServiceSteps.map((service, index) => {
                      const Icon = service.Icon;

                      return (
                        <article className="product-service-card" key={service.step}>
                          <div className="product-service-card__top">
                            <span className="product-service-card__step">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="product-service-card__icon">
                              <Icon size={26} weight="regular" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="product-service-card__content">
                            <div>
                              <h3>{service.title}</h3>
                              <strong>{service.description}</strong>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
                <Link className="product-service-flow__cta" to="/quote/product-development">
                  한 번에 가능한 원스톱 시스템 상담받기
                  <ArrowRight size={18} weight="bold" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <section className="product-transition-section">
            <div className="product-transition-section__header">
              <h2 className="title-reveal">
                <AnimatedTitle
                  parts={[
                    "친환경 전환, 감으로 하지말고",
                    { type: "break" },
                    "실행 가능성까지 따져보세요",
                  ]}
                />
              </h2>
              <p>
                리스튜디오는 실제 개발 속도, 커뮤니케이션 효율, 생산 연결 가능성까지 고려해
                기업이 바로 실행할 수 있는 방식으로 제안합니다.
              </p>
            </div>

            <div className="product-transition-compare">
              <article className="product-transition-card product-transition-card--asis">
                <div className="product-transition-card__head">
                  <span>AS-IS</span>
                  <strong>기존 방식</strong>
                </div>
                <ul>
                  {productTransitionRows.map((row) => (
                    <li key={row.asIs}>{row.asIs}</li>
                  ))}
                </ul>
              </article>

              <div className="product-transition-arrow" aria-hidden="true">
                <ArrowRight size={34} weight="bold" />
              </div>

              <article className="product-transition-card product-transition-card--tobe">
                <div className="product-transition-card__head">
                  <span>TO-BE</span>
                  <strong>리스튜디오 솔루션</strong>
                </div>
                <ul>
                  {productTransitionRows.map((row) => (
                    <li key={row.toBe}>
                      <CheckCircle size={25} weight="fill" aria-hidden="true" />
                      {row.toBe}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="product-choice-section" aria-label="리스튜디오 선택 효과">
            <div className="product-choice-section__inner">
              <div className="product-choice-section__header">
                <h2>
                  리스튜디오를{" "}
                  <span className="product-choice-section__accent">선택하는 것만으로,</span>
                </h2>
                <Link className="product-choice-section__link" to="/quote/product-development">
                  친환경 전환, 빠르게 알아보기
                  <ArrowRight size={18} weight="bold" aria-hidden="true" />
                </Link>
              </div>

              <div className="product-choice-section__grid">
                {productChoiceBenefits.map(({ value, label, Icon }) => (
                  <article className="product-choice-card" key={label}>
                    {value ? (
                      <strong>{value}</strong>
                    ) : (
                      Icon && (
                        <span className="product-choice-card__icon">
                          <Icon size={34} weight="regular" aria-hidden="true" />
                        </span>
                      )
                    )}
                    <p>{label}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="product-capability-section">
            <div className="product-capability-section__inner">
              <div className="product-capability-section__copy">
                <h2 className="title-reveal">
                  <AnimatedTitle
                    parts={[
                      "친환경 패키지,",
                      { type: "break" },
                      "어디까지 한번에",
                      { type: "break" },
                      "개발 가능한지가 중요합니다",
                    ]}
                  />
                </h2>
                <p>
                  리스튜디오는 소재 큐레이션, R&D, 생산, 친환경성 검토, ESG 및 글로벌 규제
                  대응까지 친환경 패키지 제작의 전 과정을 원스톱으로 직접 수행합니다.
                </p>
              </div>

              <div className="product-capability-list" aria-label="리스튜디오 제품 개발 역량">
                {productCapabilityItems.map(({ title, description, Icon }) => (
                  <article className="product-capability-item" key={title}>
                    <span className="product-capability-item__icon">
                      <Icon size={34} weight="regular" aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <aside className="product-sticky-bar" aria-label="제품 개발 상담 바로가기">
            <div className="product-sticky-bar__inner">
              <p>PPWR 대응부터 소재 추천 / 디자인 / 양산, 지금 원스톱으로 해결하세요.</p>
              <div className="product-sticky-bar__actions">
                <Link
                  className="product-sticky-bar__button product-sticky-bar__button--light"
                  to="/resources"
                >
                  리포트 자료 다운로드
                </Link>
                <Link
                  className="product-sticky-bar__button product-sticky-bar__button--dark"
                  to="/project-management/quote?service=product-development"
                >
                  1:1 맞춤 상담 신청
                </Link>
              </div>
            </div>
          </aside>
        </>
      )}
      {!isProductDevelopment && (
        <>
          <div className="regulatory-master-gradient">
            <RegulatoryHero />
            <RegulatoryGrowthSection />
          </div>
          <RegulatoryConcernSection />
          <RegulatoryMasterShowcaseSection />
          <RegulatorySolutionFitSection />
          <RegulatoryTrustSection />
          <CustomerCaseStudiesSection />
          <RegulatoryExpertSection />
          <RegulatoryAssetizationSection />
          <RegulatoryValueSection />
          <RegulatoryStartSection />
          <RegulatoryFreeReportSection />
          <RegulatoryFinalCtaSection />
          <RegulatoryDiagnosisResultSection />
          <RegulatorySecuritySection />
          <RegulatoryFaqCtaSection />
        </>
      )}
      {isProductDevelopment && (
        <ServiceDetailSharedSections
          showAdBanner={false}
          showCaseStudies={false}
        />
      )}
      {!isProductDevelopment && !isFloatingCtaDismissed && (
        <aside
          className={`service-detail-floating-cta${
            isFloatingCtaVisible ? " is-visible" : ""
          }`}
          aria-label="리스튜디오 회원가입 바로가기"
        >
          <div className="service-detail-floating-cta__inner">
            <p>지금, RESTUDIO와 함께 더 큰 시장으로 나아가세요.</p>
            <div className="service-detail-floating-cta__actions">
              <span>지금 시작하는 것이, 더 큰 기회의 시작입니다.</span>
              <Link
                className="service-detail-floating-cta__button"
                to="/project-management/quote?service=regulatory-response"
              >
                회원가입하고 시작하기
                <ArrowRight size={18} weight="bold" aria-hidden="true" />
              </Link>
            </div>
            <button
              className="service-detail-floating-cta__close"
              type="button"
              aria-label="하단 CTA 닫기"
              onClick={() => setIsFloatingCtaDismissed(true)}
            >
              ×
            </button>
          </div>
        </aside>
      )}
    </main>
  );
}
