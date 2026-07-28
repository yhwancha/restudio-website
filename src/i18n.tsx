import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ko" | "en";

const copy = {
  ko: {
    solutionsNav: "솔루션",
    onestopNav: "원스톱 솔루션",
    ppwrNav: "PPWR 솔루션",
    blog: "블로그",
    login: "로그인",
    quote: "견적 문의",
    aiSearch: "ReStudio 또는 친환경 패키징에 대해 무엇이든 물어보세요",
    aiSearchMobile: "Restudio에 대해 무엇이든 물어보세요",
    aiSearchLabel: "AI 검색",
    aiSearchSubmit: "전송",
    trendingSearch: "인기 검색",
    trendingSearches: [
      "PPWR 대응 패키지",
      "화장품 친환경 소재",
      "페이퍼몰드 단상자",
      "ESG 리포트",
      "F&B 내습 패키지",
    ],
    language: "언어 선택",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
    korean: "한국어",
    english: "English",
    reportChip: "트렌드 / 인사이트 리포트",
    reportChipRest: " 무료로 받아보기",
    heroLine1: "친환경 패키지, 처음부터 끝까지",
    heroLine2: "‘리스튜디오’ 하나로 완성",
    heroSub: "원스톱 시스템으로 해결, 개발 기간과 비용을 줄여드립니다.",
    consult: "상담 예약하기",
    customQuote: "맞춤 견적 받기",
    trust: "기업이 신뢰하는 리스튜디오",
    trustCount: "120개+",
    storiesHeading: [
      { before: "이미 ", highlight: "다양한 업종의 브랜드", after: "가" },
      { before: "리스튜디오와 함께하고 있습니다" },
    ],
    storiesSub:
      "화장품, F&B, 바이오/헬스케어, 전자기기 등 리스튜디오는 친환경 패키지 개발부터\n환경 규제 대응까지 브랜드의 지속가능한 패키징을 위한 솔루션을 제공합니다.",
    storiesLabel: "고객 사례 업종",
    storiesReadMore: "아티클 이어서 읽으러 가기",
    storiesSimilarCta: "비슷한 사례 들어보기",
    storyTabs: {
      beauty: "화장품",
      fnb: "F&B",
      electronics: "전자기기",
      healthcare: "헬스케어",
    },
    customerStories: {
      beauty: {
        title: ["디웨더: 선코다 선블록 패키지"],
        body: "제품 외형을 그대로 살린 구조 설계. 상단 고정부로 파손 없이 안정적으로 고정\n페이퍼 몰드. 입체 전면과 평면 후면이 하나의 구조 안에서 자연스럽게 연결",
        notes: [
          "디자인 완성도와 친환경 인증을 동시에",
          "페이퍼몰드·바이오 플라스틱 중 최적 소재를 선별",
          "브랜드 아이덴티티를 해치지 않는 구조 설계",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "아모레퍼시픽",
        role: "친환경 패키지 담당",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?b_idx=5813",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
      fnb: {
        title: ["노스탤지어 북촌소주 주류 패키지"],
        body: "한국 전통미의 현대화와 서울 북촌의 헤리티지를 담은 핸디한 소주 패키지입니다. 조선백자에서 영감받은 부드러운 곡선 실루엣과 매트한 백자 질감으로 전통성과 현대적 감각을 함께 구현했습니다.",
        notes: [
          "조선백자 곡선에서 영감받은 병형 패키지 구조",
          "실루엣과 매트한 백자 질감으로 완성한 프리미엄 촉감",
          "선물·리테일 진열에서 브랜드 헤리티지가 선명하게 드러나는 F&B 패키징",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "노스탤지어",
        role: "패키지 기획",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?b_idx=5730",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
      electronics: {
        title: ["원콤 핀틴 V1 전자기기 패키지"],
        body: "또한 시각장애인을 위한 기기의 특성과 걸맞게 패키지에는 점자가 적용되어 독창적인 디자인과 친환경 소재가 결합된 차별화된 패키지가 완성되었습니다. 이 패키지는 고객사의 브랜드 철학을 반영하며, 지속 가능한 내일을 위한 노력과 브랜드만의 독창적인 디자인을 통해 제품의 가치를 한층 높이고, 소비자에게 새로운 경험을 제공합니다.",
        notes: [
          "하단 받침 홈에 맞춰 제품을 안정적으로 고정하는 구조 설계",
          "페이퍼몰드 적용으로 기존 플라스틱 사용 최소화",
          "점자 요소와 친환경 소재를 결합한 차별화된 전자기기 패키지",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "원콤",
        role: "패키징 엔지니어",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?bid=6&b_idx=5597",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
      healthcare: {
        title: ["삼양 스핀들 건기식 패키지"],
        body: "라운드 코너의 직사각형 판형과 원통형 용기를 결합해 중심성과 순환의 이미지를 직관적으로 드러내고, 전면의 돌출 반원형 고정부가 제품을 안정적으로 수용하면서 입체적인 리듬을 더합니다. 민트 톤 본체와 짙은 네이비 라벨의 대비는 로고와 제품 정보를 또렷하게 부각시키며, 기능 중심 제품에 감각적인 브랜드 인상을 더합니다.",
        notes: [
          "브랜드명 “스핀들”의 회전축 의미를 구조와 그래픽 언어로 해석",
          "원통형 본품이 자연스럽게 안착하는 보관·개봉·분리 흐름 설계",
          "민트 본체와 네이비 라벨 대비로 건강기능식품의 신뢰감과 감각적 인상 강화",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "삼양식품",
        role: "제품 패키지 담당",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?b_idx=5822",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
    },
    solutionsLead:
      "소재 추천, 개발부터 디자인, 양산, 친환경 검증, 규제 대응까지",
    tabOnestop: "원스톱 시스템",
    tabOnestopSub: "소재 선정, 디자인부터 양산까지",
    tabPpwr: "PPWR 완벽 대응",
    tabPpwrSub: "친환경 검증 · ESG 리포트 제공",
    learnMore: "더 알아보기 →",
    processFlow: {
      heading: [
        { before: "제품 컨설팅부터 탄소저감 리포트까지" },
        { before: "원스톱으로 진행합니다" },
      ],
      sub: "소재 기획·브랜딩·디자인·생산·검수·리포트까지 한 팀이 완주하는 리스튜디오 프로세스입니다.",
      label: "프로세스 단계",
      cta: "이 단계부터 상담하기",
      tabs: {
        consulting: "제품 컨설팅",
        design: "디자인 제작",
        rnd: "제품 R&D",
        production: "제품 제작 및 생산",
        delivery: "검수 및 납품",
        carbon: "탄소저감 리포트",
      },
      steps: {
        consulting: {
          title: ["제품 컨설팅"],
          body: "제품 특성과 목표를 분석하고, 디자인·ESG 경영 전략과 친환경 솔루션 방향을 함께 정리합니다.",
          notes: [
            "디자인 ESG 경영 전략 수립",
            "친환경 솔루션 컨설팅",
            "ESG 전략 구축 제안",
          ],
          tags: ["CONSULTING", "ESG STRATEGY", "SOLUTION"],
        },
        design: {
          title: ["디자인 제작"],
          body: "제품·패키지 디자인을 제작하고, 친환경 요소와 CMF를 반영해 브랜드 니즈에 맞는 결과물을 제안합니다.",
          notes: [
            "제품/패키지 디자인 제작",
            "친환경 디자인 제작",
            "고객 니즈 맞춤 디자인 제안",
          ],
          tags: ["PACKAGING DESIGN", "PRODUCT DESIGN", "CMF"],
        },
        rnd: {
          title: ["제품 R&D"],
          body: "패키지 R&D를 협의하고, 친환경 소재 발굴과 제품 적용 검증을 통해 상용화 가능한 방향을 확정합니다.",
          notes: [
            "패키지 R&D 협의 완료",
            "친환경 소재 발굴 및 제품 R&D",
            "친환경 소재 제품 개발",
          ],
          tags: ["MATERIAL R&D", "PAPER MOLD", "BIO PLASTIC"],
        },
        production: {
          title: ["제품 제작 및 생산"],
          body: "페이퍼몰드·사출 등 적합한 방식으로 생산하며, 신뢰성과 안정성을 기준으로 양산 품질을 관리합니다.",
          notes: [
            "페이퍼몰드 및 사출 생산",
            "제품 생산 신뢰성 & 안정성",
            "양산 품질 기준 관리",
          ],
          tags: ["MANUFACTURE", "MOLDING", "QC"],
        },
        delivery: {
          title: ["검수 및 납품"],
          body: "QC 품질 관리 후 완제품을 납품하고, 입고와 이후 재발주까지 운영 흐름을 함께 맞춥니다.",
          notes: [
            "QC 품질 관리",
            "완제품 납품",
            "편리한 입고 시스템",
          ],
          tags: ["QA", "DELIVERY", "AFTERCARE"],
        },
        carbon: {
          title: ["탄소저감 리포트"],
          body: "LCA 기반 탄소저감 데이터와 인증 기준을 정리해, ESG 공시와 이해관계자 공유에 바로 쓸 수 있는 리포트를 제공합니다.",
          notes: [
            "LCA 기반 탄소저감 데이터 정리",
            "친환경성 검증 및 인증 기준 반영",
            "ESG 공시용 리포트 발행",
          ],
          tags: ["ESG REPORT", "LCA", "CARBON"],
        },
      },
    },
    solutionPages: {
      onestop: {
        title: "원스톱 시스템",
        lead: "소재 선정부터 디자인, 양산, 검수까지 한 흐름으로 관리합니다.",
        overviewTitle: "제품 문의부터 사후 관리까지 시스템으로",
        overviewBody:
          "분산된 외주 대신 리스튜디오 원스톱 시스템으로 개발 기간과 비용을 줄입니다. 산업·용도에 맞는 소재 큐레이션부터 견적, 프로젝트 관리, ESG 리포트까지 이어집니다.",
        systemBadge: "RESTUDIO System",
        systemTitle: "큐레이션부터 ESG 리포트까지, 한 시스템으로",
        stepsTitle: "원스톱으로 진행되는 과정",
        stepsSub: "상담부터 양산까지 네 가지 핵심 단계",
        steps: [
          {
            title: "큐레이션",
            body: "고객 니즈와 산업 특성에 맞춘 최적 친환경 소재 큐레이션",
          },
          {
            title: "자동 견적 시스템",
            body: "개발 제품 정보 기반 예상 견적 자동화 서비스",
          },
          {
            title: "실시간 프로젝트 관리",
            body: "상담부터 완료까지 프로젝트 전 과정 통합 관리",
          },
          {
            title: "ESG 리포트 발행",
            body: "제품 개발 탄소저감·인증 등 지속가능성 성과 리포트",
          },
        ],
      },
      ppwr: {
        title: "PPWR AI 규제 자동진단",
        lead: "제품과 포장 구조를 입력하면 규제 미이행 리스크를 즉시 진단합니다.\n공급사 제출용 정보요청서(RFI)까지 자동으로 매핑해 드립니다.",
        countdownLabel: "EU PPWR 시행까지 D-{days}",
        overviewTitle: "EU 2025/40 PPWR 대응 솔루션",
        overviewBody:
          "EU 포장폐기물 규정을 AI로 미리 진단하고 대응하세요. 포장 단위별 BOM 분석부터 액션플랜·리포트까지 한 흐름으로 진행합니다.",
        systemBadge: "PPWR Workflow",
        systemTitle: "AI 진단부터 리포트 발행까지, 한 흐름으로 대응",
        secondaryCta: "무료로 예비 진단 시작",
        secondaryHref: "https://ppwr-report.neopress.app/",
        stepsTitle: "진단 워크플로우",
        stepsSub: "3단계로 이어지는 PPWR 예비 진단",
        steps: [
          {
            title: "AI 진단",
            body: "분리 가능성·PCR 함량 등 요건을 분석해 규제 리스크 점수와 판정을 즉시 제공합니다.",
          },
          {
            title: "액션플랜",
            body: "부족 자료와 보완 우선순위를 도출하고 공급사 RFI 항목을 자동 매핑합니다.",
          },
          {
            title: "리포트 발행",
            body: "PPWR 예비 진단 리포트를 발행해 내부 공유와 바이어 제출 준비를 지원합니다.",
          },
        ],
        risks: {
          eyebrow: "PPWR Risk",
          title: "규제 미대응이 만드는 실질적 리스크",
          sub: "PPWR은 단계별로 강화됩니다. 준비 시점에 따라 벌금과 유통 중단 리스크가 달라집니다.",
          stats: [
            {
              value: "최대 4%",
              label: "연 매출액 대비 벌금",
              desc: "미이행 시 회원국별로 부과되는 최대 과징금 규모입니다.",
            },
            {
              value: "평균 6주",
              label: "증빙 자료 확보 소요",
              desc: "공급망 전반에서 시험성적서와 DoC를 수집하는 데 걸리는 시간입니다.",
            },
            {
              value: "30% ↑",
              label: "2030 최소 PCR 함량",
              desc: "플라스틱 포장재별 재생원료 함량 기준을 충족해야 합니다.",
            },
          ],
          timelineTitle: "단계별 의무화 타임라인",
          timelineAlert:
            "2030년까지 PCR 함량·재활용성 요건을 충족해야 EU 역내 유통이 가능합니다. 지금 대비를 시작하세요.",
          timeline: [
            {
              year: "2026",
              title: "재활용성 등급 표시 의무",
              body: "모든 포장재에 소재별 분리 배출 및 재활용성 등급 라벨 부착이 의무화됩니다.",
            },
            {
              year: "2030",
              title: "최소 PCR 함량 규제",
              body: "플라스틱 포장재별 재생원료(PCR) 최소 함량 기준을 충족해야 EU 역내 유통이 가능합니다.",
            },
          ],
        },
        pricing: {
          title: "이용가격",
          sub: "내부 리소스와 공급사 자료 확보 상황에 따라 선택하세요. 두 방식 모두 동일한 진단 엔진을 사용합니다.",
          plans: [
            {
              badge: "자가 진단",
              title: "DIY 셀프 진단 시스템",
              body: "내부 담당자가 직접 포장재 BOM과 증빙문서를 입력해 PPWR 예비 진단 리포트를 생성합니다.",
              price: "300,000원",
              unit: "/ 제품 1건",
              features: [
                "1차·2차·3차 포장재 BOM 구조 입력",
                "요건별 자동 진단 및 리스크 표시",
                "AI 기반 부족자료·우선순위 도출",
                "공급사 제출용 RFI 자동 매핑",
                "PPWR 예비 진단 리포트 PDF 출력",
              ],
              cta: "셀프 진단 시작하기",
              href: "https://ppwr-report.neopress.app/",
            },
            {
              badge: "전문가 대행",
              title: "매니지드 규제 대응 서비스",
              body: "AI 예비 진단에서 도출된 부족 자료(시험성적서, DoC 등)를 보완하고, 바이어 제출용 리포트 검증까지 일대일로 지원합니다.",
              price: "1,800,000원~",
              unit: "/ 프로젝트",
              features: [
                "DIY 시스템 기능 전체 포함",
                "시험성적서·원료명세서 확보 지원",
                "공급사 RFI 초안 검토",
                "EU 수출 국가별 규제 해석 상담",
                "바이어 제출용 진단 리포트 검수",
              ],
              cta: "전문가 상담 예약",
              href: "https://www.restudio.co.kr/quotation",
              featured: true,
              featuredLabel: "추천",
            },
            {
              badge: "매니지드 · 다품목/공급사 연계",
              title: "수출 준비 종합 대응",
              body: "품목 수, 공급사 협조 범위, 시험자료 확보 범위에 맞춰 맞춤형으로 대응합니다. 다품목 수출 준비에 필요한 규제 대응을 한 흐름으로 진행합니다.",
              price: "별도 견적",
              unit: "",
              features: [
                "매니지드 서비스 범위 전체 포함",
                "다품목·라인업 단위 갭 분석",
                "공급사 연계 자료 취합 지원",
                "시험자료·인증 확보 범위 맞춤 설계",
              ],
              cta: "맞춤 견적 요청",
              href: "https://www.restudio.co.kr/quotation",
            },
          ],
        },
      },
    },
    dataHeading: "효과를 입증한 데이터",
    dataSub: "원스톱 시스템으로 개발 기간과 비용을 줄입니다",
    dataStats: [
      {
        value: "120+",
        label: "누적 고객사",
        desc: "기업이 선택한 친환경 패키지 파트너",
      },
      {
        value: "50%",
        label: "개발 기간 단축",
        desc: "평균 6개월에서 3개월로 단축",
      },
      {
        value: "30%",
        label: "개발 비용 절감",
        desc: "분산 외주 대비 비용 부담 감소",
      },
    ],

    cardHeading: "30초 맞춤 견적 신청",
    seeMore: "더 보기 →",
    ctaTitle: "30초 맞춤 견적 신청",
    ctaBody:
      "우리 제품에 딱 맞는 맞춤형 솔루션을 알아보세요.\n소재개발/디자인/생산까지 도움 드리겠습니다.",
    ctaButton: "견적문의 바로가기",
    ceo: "대표명 : 이민성",
    bizNo: "사업자번호 : 438-81-02556",
    address: "주소 : 서울특별시 강서구 마곡중앙 8로 14, 4층",
    email: "이메일 : sales@revation.co.kr",
    phone: "전화번호 : 02-6489-7080",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    marketing: "마케팅 활용 및 광고 수신 동의",
  },
  en: {
    solutionsNav: "Solutions",
    onestopNav: "One-stop Solution",
    ppwrNav: "PPWR Solution",
    blog: "Blog",
    login: "Log in",
    quote: "Get a quote",
    aiSearch: "Ask anything about ReStudio or eco packaging",
    aiSearchMobile: "Ask anything about Restudio",
    aiSearchLabel: "AI search",
    aiSearchSubmit: "Send",
    trendingSearch: "Trending",
    trendingSearches: [
      "PPWR-ready packaging",
      "Beauty eco materials",
      "Paper mold cartons",
      "ESG reporting",
      "Moisture-proof F&B packs",
    ],
    language: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    korean: "한국어",
    english: "English",
    reportChip: "Trend / Insight Report",
    reportChipRest: " — free download",
    heroLine1: "Eco packaging, start to finish",
    heroLine2: "All in one with Restudio",
    heroSub: "One-stop system that shortens development time and cost.",
    consult: "Book a consultation",
    customQuote: "Get a custom quote",
    trust: "companies trust Restudio",
    trustCount: "120+",
    storiesHeading: [
      { before: "", highlight: "Brands across industries", after: "" },
      { before: "are already building with Restudio" },
    ],
    storiesSub:
      "From beauty and F&B to bio/healthcare and electronics, Restudio supports sustainable packaging—from eco material development to environmental regulation readiness.",
    storiesLabel: "Customer story industries",
    storiesReadMore: "Continue reading",
    storiesSimilarCta: "See similar cases",
    storyTabs: {
      beauty: "Beauty",
      fnb: "F&B",
      electronics: "Electronics",
      healthcare: "Healthcare",
    },
    customerStories: {
      beauty: {
        title: ["D:Weather: Suncoata sun block packaging"],
        body: "Structure that mirrors the product form, secured safely with top fixtures\nPaper mold connecting a dimensional front and flat back in one structure",
        notes: [
          "Design quality and eco certification together",
          "Selecting the optimal material among paper mold and bio-plastic",
          "Structure design that preserves brand identity",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "Amorepacific",
        role: "Eco packaging lead",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?b_idx=5813",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
      fnb: {
        title: ["Nostalgia Bukchon Soju packaging"],
        body: "A handy soju package that modernizes Korean tradition and Bukchon heritage. Soft curves inspired by Joseon white porcelain and a matte porcelain texture bring tradition and contemporary sensibility together.",
        notes: [
          "Bottle-form structure inspired by Joseon white porcelain curves",
          "Premium tactile finish through silhouette and matte porcelain texture",
          "F&B packaging that makes brand heritage clear in gift and retail display",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "Nostalgia",
        role: "Packaging planner",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?b_idx=5730",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
      electronics: {
        title: ["Onecom Fintin V1 electronics packaging"],
        body: "Braille is applied to match the characteristics of a device for the visually impaired, combining distinctive design with eco materials. The package reflects the client’s brand philosophy and elevates product value through sustainable design and a new consumer experience.",
        notes: [
          "Structure that securely seats the product in a bottom cradle groove",
          "Paper mold application to minimize conventional plastic use",
          "Electronics packaging that pairs braille with eco materials",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "Onecom",
        role: "Packaging engineer",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?bid=6&b_idx=5597",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
      healthcare: {
        title: ["Samyang Spindle health-supplement packaging"],
        body: "A rounded rectangular board combined with a cylindrical container conveys centeredness and circulation, while a protruding semicircle fixture on the front holds the product securely and adds dimensional rhythm. Mint body and deep navy label contrast make the logo and product info stand out, giving a functional product a sensory brand impression.",
        notes: [
          "Interpreting Spindle’s “axis of rotation” meaning in structure and graphics",
          "Storage, opening, and separation flow for a naturally seated cylinder",
          "Mint body and navy label contrast for trust and sensory impact",
        ],
        tags: [
          "STRATEGY",
          "PACKAGING DESIGN",
          "PRODUCT DESIGN",
          "3D MODELING & RENDERING",
          "MANUFACTURE",
        ],
        company: "Samyang Foods",
        role: "Product packaging",
        articleHref: "https://revation.co.kr/kr/sub/portfolio/view.asp?b_idx=5822",
        ctaHref: "https://www.restudio.co.kr/quotation",
      },
    },
    solutionsLead:
      "From material recommendation and design to mass production, eco verification, and regulation support",
    tabOnestop: "One-stop system",
    tabOnestopSub: "From material selection and design to production",
    tabPpwr: "Full PPWR coverage",
    tabPpwrSub: "Eco verification · ESG reporting",
    learnMore: "Learn more →",
    processFlow: {
      heading: [
        { before: "From consulting to carbon reports," },
        { before: "delivered as one continuous process" },
      ],
      sub: "Restudio runs material planning, branding, design, production, inspection, and reporting with one accountable team.",
      label: "Process steps",
      cta: "Start from this step",
      tabs: {
        consulting: "Product consulting",
        design: "Design",
        rnd: "Product R&D",
        production: "Production",
        delivery: "QA & delivery",
        carbon: "Carbon report",
      },
      steps: {
        consulting: {
          title: ["Product consulting"],
          body: "We analyze product goals and align design, ESG strategy, and eco packaging direction from the start.",
          notes: [
            "Design and ESG strategy planning",
            "Eco packaging solution consulting",
            "ESG roadmap proposal",
          ],
          tags: ["CONSULTING", "ESG STRATEGY", "SOLUTION"],
        },
        design: {
          title: ["Design production"],
          body: "We design the product and packaging with eco considerations and CMF, tailored to brand needs.",
          notes: [
            "Product and packaging design",
            "Eco-focused design development",
            "Need-fit design proposals",
          ],
          tags: ["PACKAGING DESIGN", "PRODUCT DESIGN", "CMF"],
        },
        rnd: {
          title: ["Product R&D"],
          body: "We align packaging R&D, source eco materials, and validate application paths ready for commercialization.",
          notes: [
            "Packaging R&D alignment",
            "Eco material discovery and applied R&D",
            "Eco-material product development",
          ],
          tags: ["MATERIAL R&D", "PAPER MOLD", "BIO PLASTIC"],
        },
        production: {
          title: ["Manufacturing & production"],
          body: "We produce via paper mold, injection, and related methods while managing reliability and mass-production quality.",
          notes: [
            "Paper mold and injection production",
            "Production reliability and stability",
            "Mass-production quality control",
          ],
          tags: ["MANUFACTURE", "MOLDING", "QC"],
        },
        delivery: {
          title: ["Inspection & delivery"],
          body: "After QC, we deliver finished goods and coordinate inbound flow and reorder operations.",
          notes: [
            "QC quality management",
            "Finished-goods delivery",
            "Inbound process support",
          ],
          tags: ["QA", "DELIVERY", "AFTERCARE"],
        },
        carbon: {
          title: ["Carbon reduction report"],
          body: "We package LCA-based carbon data and verification criteria into ESG-ready reports stakeholders can use.",
          notes: [
            "LCA-based carbon reduction data",
            "Eco verification and certification criteria",
            "ESG disclosure-ready reporting",
          ],
          tags: ["ESG REPORT", "LCA", "CARBON"],
        },
      },
    },
    solutionPages: {
      onestop: {
        title: "One-stop system",
        lead: "From material selection and design to production and QA in one flow.",
        overviewTitle: "From inquiry to aftercare, managed as a system",
        overviewBody:
          "Replace scattered vendors with Restudio’s one-stop system to cut time and cost. Material curation, quotes, project management, and ESG reporting stay connected.",
        systemBadge: "RESTUDIO System",
        systemTitle: "From curation to ESG reports, in one system",
        stepsTitle: "How the one-stop process works",
        stepsSub: "Four core steps from consultation to production",
        steps: [
          {
            title: "Curation",
            body: "Eco-material curation matched to customer needs and industry traits",
          },
          {
            title: "Auto quote system",
            body: "Automated estimate service based on product development data",
          },
          {
            title: "Live project management",
            body: "Integrated management from consultation through completion",
          },
          {
            title: "ESG report publishing",
            body: "Sustainability performance reports on carbon reduction and certification",
          },
        ],
      },
      ppwr: {
        title: "PPWR AI compliance diagnosis",
        lead: "Enter your product and packaging structure to instantly diagnose non-compliance risk.\nSupplier RFI documents are mapped automatically.",
        countdownLabel: "EU PPWR enforcement in D-{days}",
        overviewTitle: "EU 2025/40 PPWR readiness solution",
        overviewBody:
          "Diagnose and prepare for EU packaging waste rules with AI. Move from packaging-unit BOM analysis to action plans and reports in one flow.",
        systemBadge: "PPWR Workflow",
        systemTitle: "From AI diagnosis to report publishing, in one flow",
        secondaryCta: "Start a free preliminary diagnosis",
        secondaryHref: "https://ppwr-report.neopress.app/",
        stepsTitle: "Diagnosis workflow",
        stepsSub: "A three-step PPWR preliminary diagnosis",
        steps: [
          {
            title: "AI diagnosis",
            body: "Analyze separability, PCR content, and other requirements for risk scores and rulings in real time.",
          },
          {
            title: "Action plan",
            body: "Surface missing evidence, prioritize fixes, and auto-map supplier RFI items.",
          },
          {
            title: "Report publishing",
            body: "Publish a PPWR preliminary diagnosis report for internal sharing and buyer submission prep.",
          },
        ],
        risks: {
          eyebrow: "PPWR Risk",
          title: "The real cost of falling behind",
          sub: "PPWR tightens in stages. Penalties and market-access risk grow the later you prepare.",
          stats: [
            {
              value: "Up to 4%",
              label: "of annual turnover in fines",
              desc: "Maximum penalties member states can impose for non-compliance.",
            },
            {
              value: "Avg. 6 weeks",
              label: "to gather evidence",
              desc: "Typical time to collect test reports and DoCs across the supply chain.",
            },
            {
              value: "30% ↑",
              label: "minimum PCR by 2030",
              desc: "Plastic packaging must meet recycled-content thresholds to circulate in the EU.",
            },
          ],
          timelineTitle: "Mandatory timeline by stage",
          timelineAlert:
            "By 2030, packaging must meet PCR and recyclability requirements to stay on the EU market. Start preparing now.",
          timeline: [
            {
              year: "2026",
              title: "Recyclability grade labeling",
              body: "Packaging must carry material-specific sorting guidance and recyclability grade labels.",
            },
            {
              year: "2030",
              title: "Minimum PCR requirements",
              body: "Plastic packaging must meet minimum recycled (PCR) content to be placed on the EU market.",
            },
          ],
        },
        pricing: {
          title: "Pricing",
          sub: "Choose based on internal resources and supplier documentation readiness. Both paths use the same diagnosis engine.",
          plans: [
            {
              badge: "Self-serve",
              title: "DIY self-diagnosis system",
              body: "Your team enters packaging BOM and evidence documents to generate a PPWR preliminary diagnosis report.",
              price: "₩300,000",
              unit: "/ product",
              features: [
                "Primary, secondary, and tertiary packaging BOM input",
                "Requirement-based auto diagnosis and risk flags",
                "AI-driven missing-data and priority insights",
                "Automatic supplier RFI mapping",
                "PPWR preliminary diagnosis report PDF",
              ],
              cta: "Start self-diagnosis",
              href: "https://ppwr-report.neopress.app/",
            },
            {
              badge: "Expert-led",
              title: "Managed compliance service",
              body: "Close evidence gaps from the AI diagnosis (test reports, DoCs, and more) and validate buyer-ready reports with 1:1 support.",
              price: "₩1,800,000~",
              unit: "/ project",
              features: [
                "All DIY system capabilities included",
                "Support securing test reports and material specs",
                "Supplier RFI draft review",
                "Country-specific EU export regulation guidance",
                "Buyer submission report review",
              ],
              cta: "Book an expert consultation",
              href: "https://www.restudio.co.kr/quotation",
              featured: true,
              featuredLabel: "Recommended",
            },
            {
              badge: "Managed · multi-SKU / suppliers",
              title: "Full export readiness",
              body: "Tailored to SKU count, supplier cooperation, and required test evidence. A full workflow for multi-product export compliance.",
              price: "Custom quote",
              unit: "",
              features: [
                "Full managed service scope included",
                "Multi-SKU / lineup gap analysis",
                "Supplier-linked documentation support",
                "Custom plan for tests and certifications",
              ],
              cta: "Request a custom quote",
              href: "https://www.restudio.co.kr/quotation",
            },
          ],
        },
      },
    },
    dataHeading: "Proven results",
    dataSub: "Cut development time and cost with a one-stop system",
    dataStats: [
      {
        value: "120+",
        label: "Clients served",
        desc: "Companies that chose Restudio for eco packaging",
      },
      {
        value: "50%",
        label: "Faster development",
        desc: "Typical timeline cut from 6 months to 3",
      },
      {
        value: "30%",
        label: "Lower cost",
        desc: "Less spend vs. managing vendors separately",
      },
    ],

    cardHeading: "30-second custom quote",
    seeMore: "See more →",
    ctaTitle: "30-second custom quote",
    ctaBody:
      "Find the right solution for your product.\nWe support material development, design, and production.",
    ctaButton: "Go to quote",
    ceo: "CEO: Lee Min-seong",
    bizNo: "Business No.: 438-81-02556",
    address: "Address: 14 Magokjungang 8-ro, Gangseo-gu, Seoul, 4F",
    email: "Email: sales@revation.co.kr",
    phone: "Phone: 02-6489-7080",
    terms: "Terms of use",
    privacy: "Privacy policy",
    marketing: "Marketing & advertising consent",
  },
} as const;

type Copy = (typeof copy)[Lang];

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: copy[lang],
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
