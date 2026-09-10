import { type CSSProperties, useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowRight,
  CaretLeft,
  CaretRight,
  CheckCircle,
  ClipboardText,
  Cube,
  Flask,
  MagnifyingGlass,
  Network,
  Paperclip,
  XCircle,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  ServiceDetailAdBanner,
  ServiceDetailSharedSections,
} from "../components/ServiceDetailSharedSections";

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
    description: "제품 특성과 유통 환경을 분석해 친환경 패키지 개발 방향을 잡습니다.",
    image: "/assets/detail-pages/service-flow/consulting.png",
    alt: "친환경 패키지 컨설팅을 위한 소재와 스케치가 놓인 책상",
  },
  {
    step: "step 2",
    title: "디자인 제작",
    description: "패키지 구조와 제품 디자인, CMF를 함께 검토해 완성도를 높입니다.",
    image: "/assets/detail-pages/service-flow/design.png",
    alt: "친환경 패키지 디자인 스케치와 샘플",
  },
  {
    step: "step 3",
    title: "제품 R&D",
    description: "친환경 소재 후보를 발굴하고 제품에 맞는 물성, 성형성, 리스크를 확인합니다.",
    image: "/assets/detail-pages/service-flow/rnd.png",
    alt: "친환경 소재 연구를 위한 실험실 샘플",
  },
  {
    step: "step 4",
    title: "제품 제작 및 생산",
    description: "페이퍼몰드와 바이오 플라스틱 등 제품에 맞는 방식으로 양산을 준비합니다.",
    image: "/assets/detail-pages/service-flow/production.png",
    alt: "친환경 패키지 생산 라인",
  },
  {
    step: "step 5",
    title: "검수 및 납품",
    description: "QC 기준에 따라 품질을 점검하고 완제품 납품까지 안정적으로 관리합니다.",
    image: "/assets/detail-pages/service-flow/inspection.png",
    alt: "완성된 패키지를 검수하고 납품 준비하는 장면",
  },
  {
    step: "step 6",
    title: "탄소저감 리포트",
    description: "환경 영향과 친환경 검증 내용을 정리해 ESG 보고와 인증 대응에 활용합니다.",
    image: "/assets/detail-pages/service-flow/report.png",
    alt: "탄소저감 리포트와 친환경 패키지 샘플",
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

const regulatoryGrowthTabs = [
  {
    id: "market",
    label: "매출 증가율",
    title: "유럽 수출 시 국내 한정 대비 매출 증가율",
    description: "같은 제품도 시장 규모와 규제 진입장벽에 따라 성장 폭이 달라집니다.",
  },
  {
    id: "fit",
    label: "필요 기업",
    title: "이런 기업에 필요합니다",
    description: "제품 등록, 포장재 증빙, 제출 문서 관리가 필요한 팀에 적합합니다.",
  },
  {
    id: "factor",
    label: "주요 요인",
    title: "매출 증가율 차이를 결정짓는 주요 요인",
    description: "시장 규모와 규제 통과 역량이 가격과 수량 확보에 영향을 줍니다.",
  },
] as const;

const regulatoryGrowthRows = [
  {
    category: "화장품",
    growth: "+200% ~ +500%",
    source: "KOTRA 유럽 CPNP 인증 및 C-뷰티/K-뷰티 분석",
  },
  {
    category: "식품 및 음료",
    growth: "+150% ~ +400%",
    source: "농림축산식품부·aT 유럽편 해외시장 맞춤형 조사",
  },
  {
    category: "생활·소형가전",
    growth: "+150% ~ +350%",
    source: "KITA 유럽 소비재 유통망 진출 전략, KOTRA 동향",
  },
  {
    category: "소형 전자부품",
    growth: "+200% ~ +500%",
    source: "산업통상자원부 주요 품목별 수출입 동향, KEA 정보",
  },
];

const regulatoryFitItems = [
  "EU에 제품을 수출 중이거나 준비하는 기업",
  "여러 공급사로부터 포장재 증빙을 받는 브랜드사",
  "제품별 포장재 구성·증빙자료 관리가 어려운 기업",
  "고객사로부터 PPWR 대응자료 제출을 요청받은 제조사",
  "TD-DoC 작성 근거를 체계적으로 관리해야 하는 기업",
  "국가별 EPR 신고용 포장재 증빙관리가 필요한 기업",
  "다수 SKU를 관리하는 화장품·식품·생활용품·전자제품 기업",
];

const regulatoryFactorItems = [
  {
    title: "시장 규모의 급격한 확장",
    description:
      "대한민국 내수 대비 유럽 통합 시장은 더 큰 고객 기반을 제공합니다. 유통망 확보 시 매출 파이가 비선형적으로 증가할 수 있습니다.",
  },
  {
    title: "규제 진입장벽과 독점적 가치",
    description:
      "EU CE, CPNP, MDR 등 엄격한 규제 관문을 통과한 제품은 높은 진입장벽 덕분에 국내 대비 더 높은 가격과 수량을 확보할 수 있습니다.",
  },
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

function ProductClientSection({ activePage, onPrev, onNext }: ProductClientSectionProps) {
  return (
    <section className="product-client-section" aria-label="제품 개발 고객사와 후기">
      <div className="product-client-marquee" aria-hidden="true">
        <div className="product-client-marquee__track">
          {[...productClientLogos, ...productClientLogos].map((logo, index) => (
            <span className="product-client-logo" key={`${logo.src}-${index}`}>
              <img src={logo.src} alt="" />
            </span>
          ))}
        </div>
      </div>

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
        <h1>AI 기반의 PPWR 규제 대응 서비스</h1>
        <p>제품 등록부터 증빙 검토, 제출 문서 준비까지</p>

        <form
          className="relative z-[3] mx-auto mt-10 w-full max-w-[760px] rounded-2xl border border-[#d7dde2] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(23,33,27,0.035)] md:mt-11 md:px-5 md:py-4"
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
              placeholder="PPWR 규제 대응에 대해 궁금한 것이 있나요? AI Agent 리사가 도와드릴게요!"
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

        <div className="regulatory-hero__visual" aria-hidden="true">
          <div className="regulatory-hero__dashboard">
            <img
              src="/assets/detail-pages/regulatory-product-detail.png"
              alt=""
            />
          </div>
          <div className="regulatory-hero__floating-panel">
            <strong>1. 포장 데이터</strong>
            <p>보호해야 할 제품과 포장 구성을 선택하세요.</p>
            <div className="regulatory-hero__segment">
              <span>용기·캡</span>
              <span>라벨·박스</span>
            </div>
            <p>필요한 증빙 유형을 선택하면 AI가 누락 자료를 정리합니다.</p>
            <div className="regulatory-hero__checks">
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

function RegulatoryGrowthSection() {
  const [activeTab, setActiveTab] = useState<(typeof regulatoryGrowthTabs)[number]["id"]>(
    "market",
  );
  const currentTab = regulatoryGrowthTabs.find((tab) => tab.id === activeTab) ?? regulatoryGrowthTabs[0];

  return (
    <section className="regulatory-growth-section">
      <div className="regulatory-growth-section__inner">
        <div className="regulatory-growth-section__header">
          <h2>꾸준히 성장하는 기업의 매출은 해외에서 발생합니다.</h2>
          <p>특히 제조업 분야에서 국내만으로 회사가 성장하기에는 그 한계가 명확합니다.</p>
        </div>

        <div className="regulatory-growth-tabs" role="tablist" aria-label="규제 대응 성장 정보">
          {regulatoryGrowthTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={activeTab === tab.id ? "is-active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="regulatory-growth-panel">
          <div className="regulatory-growth-panel__copy">
            <h3>{currentTab.title}</h3>
            <p>{currentTab.description}</p>
          </div>

          {activeTab === "market" && (
            <div className="regulatory-growth-table">
              {regulatoryGrowthRows.map((row) => (
                <article key={row.category}>
                  <strong>{row.category}</strong>
                  <span>{row.growth}</span>
                  <p>{row.source}</p>
                </article>
              ))}
            </div>
          )}

          {activeTab === "fit" && (
            <div className="regulatory-fit-list">
              {regulatoryFitItems.map((item) => (
                <span key={item}>
                  <CheckCircle size={18} weight="bold" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          )}

          {activeTab === "factor" && (
            <div className="regulatory-factor-list">
              {regulatoryFactorItems.map((item) => (
                <article key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function RegulatoryPpwrSection() {
  return (
    <section className="regulatory-ppwr-section">
      <div className="regulatory-ppwr-section__inner">
        <div className="regulatory-ppwr-section__header">
          <h2>AI, PPWR 전문가와 함께하는 유럽 수출</h2>
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

function RegulatoryWhySection() {
  return (
    <section className="regulatory-why-section">
      <div className="regulatory-why-section__inner">
        <h2>왜 리스튜디오인가요?</h2>
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

function RegulatoryPlatformSection() {
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
              <h2>{currentStep.title}</h2>
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

function RegulatoryReportSection() {
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
              <h2>{currentStep.title}</h2>
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

function RegulatoryDiagnosisSection() {
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
          <h2>수출을 위한 품목 진단 과정</h2>

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

function RegulatoryRequestSection() {
  return (
    <section className="regulatory-request-section">
      <div className="regulatory-request-section__inner">
        <div className="regulatory-request-section__header">
          <p>이 모든 과정이 복잡하다면?</p>
          <h2>품목 등록 및 진단 대행 서비스</h2>
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

function RegulatoryPricingSection() {
  return (
    <section className="regulatory-pricing-section">
      <div className="regulatory-pricing-section__inner">
        <h2>구독 및 요금제</h2>

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
  const serviceFlowSectionRef = useRef<HTMLElement | null>(null);
  const serviceFlowViewportRef = useRef<HTMLDivElement | null>(null);
  const serviceFlowTrackRef = useRef<HTMLDivElement | null>(null);

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
      const trackDistance = Math.max(track.scrollWidth - viewport.clientWidth, 0);

      section.style.setProperty("--product-service-progress", `${1 - progress}`);
      section.style.setProperty("--product-service-distance", `${trackDistance}px`);
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
            <div className="service-detail-hero__header">
              <h1>리스튜디오를 선택하는 것 만으로,</h1>
              <p>
                개발 기간 단축, 비용 절감, 양산 설계, 환경까지
                <br />
                4마리 토끼를 한번에 잡을 수 있어요.
              </p>
            </div>

            <div className="service-detail-hero__media" tabIndex={0}>
              <img
                src="/assets/detail-pages/product-development-hero.png"
                alt="사무실에서 여섯 명이 케이스 제품과 3D 모델링 화면을 보며 회의하는 모습"
              />
              <div className="service-detail-hero__overlay" aria-hidden="true">
                <div className="service-detail-hero__overlay-headlines">
                  <span>대량 양산 설계</span>
                  <span>친환경 검증</span>
                  <span>규제 대응</span>
                </div>
                <div className="service-detail-hero__overlay-metrics">
                  <div>
                    <span>개발 기간 최대 단축</span>
                    <strong>50%</strong>
                  </div>
                  <div>
                    <span>개발 비용 최대 절감</span>
                    <strong>30%</strong>
                  </div>
                </div>
              </div>
            </div>
            <ServiceDetailAdBanner embedded />
          </section>

          <ProductClientSection
            activePage={activeProductTestimonial}
            onPrev={showPrevProductTestimonial}
            onNext={showNextProductTestimonial}
          />

          <section className="product-challenge-section">
            <div className="product-challenge-section__inner">
              <div className="product-challenge-section__title">
                <h2>
                  친환경 패키지 개발,
                  <br />
                  왜 늘 오래 걸리고 비쌀까요?
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
              <div className="product-service-flow__header">
                <h2>서비스 소개</h2>
                <p>
                  제품 컨설팅부터 디자인, R&D, 생산, 검수, 탄소저감 리포트까지
                  <br />
                  전 과정을 통합 지원하는 친환경 패키지 개발 서비스를 제공합니다.
                </p>
              </div>

              <div
                ref={serviceFlowViewportRef}
                className="product-service-flow__viewport"
              >
                <div ref={serviceFlowTrackRef} className="product-service-flow__track">
                  {productServiceSteps.map((service) => (
                    <article className="product-service-card" key={service.step}>
                      <span className="product-service-card__step">
                        {service.step}
                      </span>
                      <div className="product-service-card__media">
                        <img src={service.image} alt={service.alt} />
                      </div>
                      <div className="product-service-card__content">
                        <h3>{service.title}</h3>
                        <strong>{service.description}</strong>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="product-transition-section">
            <div className="product-transition-section__header">
              <h2>
                친환경 전환, 감으로 하지말고
                <br />
                실행 가능성까지 따져보세요
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

          <section className="product-capability-section">
            <div className="product-capability-section__inner">
              <div className="product-capability-section__copy">
                <h2>
                  친환경 패키지,
                  <br />
                  어디까지 한번에
                  <br />
                  개발 가능한지가 중요합니다
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
              <strong>리스튜디오 원스톱 시스템</strong>
              <span>
                <CheckCircle size={18} weight="bold" aria-hidden="true" />
                개발 비용 절감
              </span>
              <span>
                <CheckCircle size={18} weight="bold" aria-hidden="true" />
                개발 기간 단축
              </span>
              <Link to="/inquiry/product">맞춤 견적 받기</Link>
            </div>
          </aside>
        </>
      )}
      {!isProductDevelopment && (
        <>
          <RegulatoryHero />
          <ProductClientSection
            activePage={activeProductTestimonial}
            onPrev={showPrevProductTestimonial}
            onNext={showNextProductTestimonial}
          />
          <RegulatoryGrowthSection />
          <RegulatoryPpwrSection />
          <RegulatoryWhySection />
          <RegulatoryPlatformSection />
          <RegulatoryReportSection />
          <RegulatoryDiagnosisSection />
          <RegulatoryRequestSection />
          <RegulatoryPricingSection />
        </>
      )}
      <ServiceDetailSharedSections showAdBanner={!isProductDevelopment} />
    </main>
  );
}
