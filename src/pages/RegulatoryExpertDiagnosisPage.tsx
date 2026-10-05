import {
  ArrowRight,
  Brain,
  FileText,
  Globe,
  ShieldCheck,
  UserFocus,
  Users,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const expertHeroFeatures = [
  { title: "AI 에이전트", description: "빠른 1차 분석", Icon: Brain },
  { title: "규제 전문가", description: "심층 진단", Icon: Users },
  { title: "AI + 전문가", description: "교차 검증", Icon: ShieldCheck },
] as const;

const expertNeedCards = [
  {
    title: "규제 핵심 항목과 필수 대응사항 정리",
    description: "최신 규제 동향을 기반으로 우리 제품에 필요한 항목만 정확하게 선별합니다.",
    Icon: FileText,
  },
  {
    title: "업종별 · 국가별 맞춤 설계",
    description: "화장품, 식품, 전자기기 등 업종 특성과 수출 국가에 맞는 최적의 대응 전략을 설계합니다.",
    Icon: Globe,
  },
  {
    title: "1:1 밀착 컨설팅",
    description: "단순 컨설팅이 아닌, 실무까지 함께하는 전문가의 맞춤형 컨설팅을 제공합니다.",
    Icon: UserFocus,
  },
] as const;

const expertProcessSteps = [
  {
    number: "01",
    title: "사전 상담",
    description: "제품·패키지 정보 및 수출 국가, 목표 시장 확인",
  },
  {
    number: "02",
    title: "AI 에이전트 1차 분석",
    description: "규제 요건 매칭 및 주요 리스크 도출",
  },
  {
    number: "03",
    title: "전문가 심층 진단",
    description: "경력 10년+ 전문가의 핵심 항목 분석 및 인사이트 정리",
  },
  {
    number: "04",
    title: "맞춤 전략 설계",
    description: "필수 서류, 시험, 인증, 소재 등 맞춤 대응안 제시",
  },
  {
    number: "05",
    title: "AI + 전문가 교차 검증",
    description: "AI 분석과 전문가 검토를 통한 이중 확인",
  },
  {
    number: "06",
    title: "실행 및 사후관리",
    description: "서류 제출 지원 및 규제 변경 모니터링, 지속 관리",
  },
] as const;

const expertCheckCards = [
  {
    title: "제품 · 패키지 분석",
    image: "/assets/services/regulatory-expert-product-analysis.png",
    alt: "연구원이 현미경으로 제품과 패키지 성분을 분석하는 모습",
    items: ["제품 구성 성분", "포장 구조 및 소재", "BOM, 도면, 사양서 검토"],
  },
  {
    title: "규제 요건 심층 검토",
    image: "/assets/services/regulatory-expert-eu-flag.png",
    alt: "푸른 하늘 아래 유럽 연합 깃발이 흔들리는 모습",
    items: ["PPWR, MoCRA, CPNP 등", "필수 시험 항목", "라벨링, 표시사항"],
  },
  {
    title: "필수 서류 및 인증",
    image: "/assets/services/regulatory-expert-documents.png",
    alt: "규제 프레임워크 문서와 심사 서류를 검토하는 모습",
    items: ["TD·DoC 작성 지원", "시험성적서 준비", "등록·신고 절차 안내"],
  },
  {
    title: "리스크 분석 및 대응 전략",
    image: "/assets/services/regulatory-expert-risk-strategy.png",
    alt: "친환경 화장품 패키지와 제품 라벨을 검토하는 모습",
    items: ["규제 리스크 사전 진단", "대체 소재 제안", "비용·일정 최적화"],
  },
] as const;

export function RegulatoryExpertDiagnosisPage() {
  return (
    <main className="regulatory-expert-page">
      <section className="regulatory-expert-hero" aria-labelledby="regulatory-expert-title">
        <div className="regulatory-expert-hero__copy">
          <p className="regulatory-expert-hero__eyebrow">규제, 전문가와 함께 더 정확하게.</p>
          <h1 id="regulatory-expert-title">
            AI가 빠르게 분석하고,
            <br />
            <span className="regulatory-expert-hero__highlight">규제 전문가</span>가 더 깊게 짚어줍니다.
          </h1>
          <p className="regulatory-expert-hero__description">
            경력 10년 차 이상의 리스튜디오 친환경 제품 개발 연구원 및 규제 전문가가 귀사의 제품과
            패키지에 맞는 규제 핵심 항목을 분석하고, 등록 서류부터 국가별 맞춤 설계까지 1:1로
            함께합니다.
            <br />
            AI와 전문가의 교차 검증으로, AI가 미처 잡아낼 수 없는 부분까지 꼼꼼하게 설계합니다.
          </p>
          <Link className="regulatory-expert-hero__button" to="/project-management/quote?service=regulatory-response">
            지금, 전문가 밀착진단 신청하기
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>

          <div className="regulatory-expert-hero__features" aria-label="규제 전문가 밀착 진단 핵심 방식">
            {expertHeroFeatures.map(({ title, description, Icon }) => (
              <article key={title}>
                <span>
                  <Icon size={30} weight="regular" aria-hidden="true" />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <figure className="regulatory-expert-hero__media">
          <img
            src="/assets/services/regulatory-expert-diagnosis.png"
            alt="규제 전문가가 고객에게 분석 결과를 설명하는 상담 장면"
            width={1504}
            height={1032}
            loading="eager"
          />
        </figure>
      </section>

      <section className="regulatory-expert-need-section" aria-labelledby="regulatory-expert-need-title">
        <div className="regulatory-expert-need-section__inner">
          <div className="regulatory-expert-need-section__intro">
            <h2 id="regulatory-expert-need-title">
              왜 전문가 밀착진단이
              <br />
              필요할까요?
            </h2>
            <p>
              규제는 복잡하고, 자주 바뀝니다. 일반적인 정보만으로는 우리 회사 제품에 꼭 맞는 대응이
              어렵습니다. 리스튜디오의 규제 전문가가 귀사의 상황에 맞춰 가장 현실적인 해답을 제시합니다.
            </p>
          </div>

          <div className="regulatory-expert-need-grid">
            {expertNeedCards.map(({ title, description, Icon }) => (
              <article key={title}>
                <div className="regulatory-expert-need-grid__head">
                  <span>
                    <Icon size={28} weight="regular" aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="regulatory-expert-process-section" aria-labelledby="regulatory-expert-process-title">
        <div className="regulatory-expert-process-section__inner">
          <div className="regulatory-expert-process-section__head">
            <h2 id="regulatory-expert-process-title">전문가 밀착진단 프로세스</h2>
            <p>AI와 전문가가 함께, 더 정확한 해답을 제시합니다.</p>
          </div>

          <ol className="regulatory-expert-process-list">
            {expertProcessSteps.map(({ number, title, description }, index) => (
              <li key={number}>
                <article>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
                {index < expertProcessSteps.length - 1 ? (
                  <ArrowRight size={27} weight="bold" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="regulatory-expert-check-section" aria-labelledby="regulatory-expert-check-title">
        <div className="regulatory-expert-check-section__inner">
          <h2 id="regulatory-expert-check-title">전문가가 확인하는 주요 항목 예시</h2>

          <div className="regulatory-expert-check-grid">
            {expertCheckCards.map(({ title, image, alt, items }) => (
              <article key={title}>
                <img src={image} alt={alt} width={632} height={268} loading="lazy" />
                <div>
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
