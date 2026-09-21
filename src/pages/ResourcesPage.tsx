import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const featuredResources = [
  {
    tag: "리포트",
    title: "친환경 패키지 업종별 트렌드 2026",
    description: "화장품, F&B, 라이프스타일 브랜드가 참고할 친환경 패키지 흐름을 정리했습니다.",
    tone: "green",
    image: "/assets/resources/resource-book-trend-2026.png",
    href: "/resources/eco-package-industry-trend-2026",
  },
  {
    tag: "리포트",
    title: "친환경 패키지 개발 성공 인사이트 2026",
    description: "소재 선정부터 양산까지 실패를 줄이는 프로젝트 운영 방식을 담았습니다.",
    tone: "mint",
    image: "/assets/resources/resource-book-development-insight.png",
  },
  {
    tag: "플레이북",
    title: "개발비용 30% 아껴주는 친환경 패키지 소재개발법",
    description: "초기 설계 단계에서 비용과 일정을 함께 줄이는 체크 포인트를 확인하세요.",
    tone: "blue",
    image: "/assets/resources/resource-book-material-playbook.png",
  },
];

const ppwrResources = [
  {
    tag: "가이드",
    title: "PPWR 규제 용어",
    description: "PPWR 문서에서 자주 등장하는 핵심 용어를 쉽게 정리했습니다.",
    tone: "green",
    image: "/assets/resources/resource-book-ppwr-terms.png",
  },
  {
    tag: "가이드",
    title: "PPWR 5대 업종별 핵심용어 정리",
    description: "업종별로 다르게 해석되는 포장재 규제 키워드를 빠르게 확인하세요.",
    tone: "green",
    image: "/assets/resources/resource-book-ppwr-industry-terms.png",
  },
  {
    tag: "가이드",
    title: "PPWR 이커머스 성공전략",
    description: "For 미국 아마존 & 유럽 수출기업을 위한 대응 흐름을 담았습니다.",
    tone: "green",
    image: "/assets/resources/resource-book-ppwr-commerce.png",
  },
  {
    tag: "체크리스트",
    title: "PPWR 수출기업 실무자가 바로 쓰는 필수 체크리스트",
    description: "수출 전 확인해야 할 문서, 소재, 표시 요건을 한 장으로 점검하세요.",
    tone: "lavender",
    image: "/assets/resources/resource-book-export-checklist.png",
  },
  {
    tag: "체크리스트",
    title: "PPWR 대기업 중견기업 경영진이 알아야 할 7가지 체크리스트",
    description: "전략 의사결정 전에 확인해야 할 리스크와 실행 항목을 정리했습니다.",
    tone: "lavender",
    image: "/assets/resources/resource-book-executive-checklist.png",
  },
  {
    tag: "체크리스트",
    title: "대기업·중견기업 친환경 패키지 개발 5가지 체크리스트",
    description: "개발 착수 전에 정리해야 할 목표, 소재, 인증, 생산 조건을 담았습니다.",
    tone: "lavender",
    image: "/assets/resources/resource-book-package-checklist.png",
  },
  {
    tag: "자료집",
    title: "EU PPWR FAQ 자료집_가장 자주 묻는 질문 총망라",
    description: "PPWR 대응 과정에서 자주 묻는 질문을 실무 관점으로 정리했습니다.",
    tone: "peach",
    image: "/assets/resources/resource-book-ppwr-faq.png",
  },
];

function ResourceCard({
  description,
  image,
  tag,
  title,
  tone,
  href,
}: {
  description: string;
  href?: string;
  image: string;
  tag: string;
  title: string;
  tone: string;
}) {
  const content = (
    <>
      <div className={`resource-card__media resource-card__media--${tone}`}>
        <span className={`resource-card__tag resource-card__tag--${tone}`}>{tag}</span>
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  if (href) {
    return (
      <Link className="resource-card resource-card--link" to={href}>
        {content}
      </Link>
    );
  }

  return (
    <article className="resource-card">
      {content}
    </article>
  );
}

export function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="resources-hero" aria-label="자료실 대표 리포트">
        <div className="resources-hero__copy">
          <h1>
            친환경 패키지 트렌드부터 규제 정보까지,
            <br />
            핵심 리포트와 가이드북을 무료로 마음껏 읽어보세요.
          </h1>
          <p>
            견적을 알아보기 전 단계라면, 부담 없이 자료부터 읽고 천천히 알아보세요.
            친환경 전환에 성공한 대기업 고객사들의 인사이트만을 모아 전해드려요.
          </p>
          <a className="resources-hero__button" href="#resource-list">
            무료 다운로드
          </a>
        </div>
        <div className="resources-hero__visual" aria-hidden="true">
          <img src="/assets/resources/hero-package-insight.png" alt="" />
        </div>
      </section>

      <section className="resources-section" id="resource-list">
        <h2>친환경 패키지, 기초부터 실무까지</h2>
        <div className="resources-card-grid resources-card-grid--featured">
          {featuredResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </section>

      <section className="resources-section resources-section--ppwr">
        <div className="resources-section__header">
          <h2>PPWR 규제, 용어부터 체크리스트까지</h2>
          <div className="resources-tabs" aria-label="자료 카테고리">
            <span className="is-active">가이드</span>
            <span>체크리스트</span>
            <span>자료집</span>
          </div>
        </div>
        <div className="resources-card-grid">
          {ppwrResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
        <a className="resources-more-link" href="#resource-list">
          모든 자료 둘러보기
          <ArrowRight size={17} weight="bold" aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
