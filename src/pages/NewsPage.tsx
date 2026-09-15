import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { CaretDown, Check, LinkSimple, X } from "@phosphor-icons/react";

type NewsCategory = "블로그" | "뉴스레터" | "인스타그램" | "보도자료";

interface NewsItem {
  slug: string;
  category: NewsCategory;
  title: string;
  description: string;
  date: string;
  image: string;
  alt: string;
}

const newsItems: NewsItem[] = [
  {
    slug: "restudio-onestop-solution",
    category: "블로그",
    title: "친환경 패키지 원스톱 솔루션, 리스튜디오란?",
    description:
      "친환경 패키지 디자인 전환을 시작하는 브랜드가 알아야 할 리스튜디오의 접근 방식을 소개합니다.",
    date: "2026.09.13.",
    image: "/assets/news/news-restudio.webp",
    alt: "친환경 패키지 원스톱 솔루션 소개 썸네일",
  },
  {
    slug: "why-eco-package-now",
    category: "블로그",
    title: "왜 지금 친환경 패키지 디자인 전환을 서둘러야 할까요?",
    description:
      "글로벌 규제와 고객사 요구가 동시에 바뀌는 시점에서 필요한 준비 항목을 정리했습니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-ppwr.webp",
    alt: "친환경 패키지 전환 배경 썸네일",
  },
  {
    slug: "restudio-process",
    category: "블로그",
    title: "리스튜디오 6단계 원스톱 프로세스",
    description:
      "소재 선정부터 양산, 규제 대응 자료까지 한 흐름으로 연결되는 실행 절차를 살펴봅니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-revation.webp",
    alt: "리스튜디오 프로세스 썸네일",
  },
  {
    slug: "monthly-regulation-note",
    category: "뉴스레터",
    title: "9월 친환경 패키지 규제 업데이트",
    description:
      "EU PPWR, PFAS 제한, 재활용 표시 관련 실무자가 확인해야 할 이슈를 모았습니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-ppwr.webp",
    alt: "친환경 패키지 규제 뉴스레터 썸네일",
  },
  {
    slug: "package-cost-insight",
    category: "뉴스레터",
    title: "개발 비용과 시간을 줄이는 패키지 설계 기준",
    description:
      "초기 설계 단계에서 반복 수정을 줄이는 체크 포인트와 협업 방식을 소개합니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-restudio.webp",
    alt: "친환경 패키지 개발 인사이트 썸네일",
  },
  {
    slug: "material-selection-guide",
    category: "뉴스레터",
    title: "친환경 소재를 고를 때 놓치기 쉬운 기준",
    description:
      "소재의 친환경성, 가공성, 공급 안정성을 함께 검토하는 방법을 정리했습니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-revation.webp",
    alt: "친환경 소재 선정 가이드 썸네일",
  },
  {
    slug: "instagram-studio-note",
    category: "인스타그램",
    title: "패키지 샘플이 완성되기까지의 스튜디오 기록",
    description:
      "리스튜디오 팀이 실제 샘플을 검토하며 확인하는 디테일을 짧게 담았습니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-restudio.webp",
    alt: "리스튜디오 인스타그램 콘텐츠 썸네일",
  },
  {
    slug: "instagram-material-test",
    category: "인스타그램",
    title: "소재 테스트 현장에서 확인한 재활용성 포인트",
    description:
      "표면 처리, 접착 방식, 후가공 조건이 재활용성에 미치는 영향을 소개합니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-ppwr.webp",
    alt: "소재 테스트 인스타그램 콘텐츠 썸네일",
  },
  {
    slug: "instagram-brand-case",
    category: "인스타그램",
    title: "브랜드 경험을 해치지 않는 친환경 전환 사례",
    description:
      "기존 브랜드 무드를 유지하면서 구조와 소재를 바꾼 프로젝트 장면을 공유합니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-revation.webp",
    alt: "브랜드 친환경 전환 사례 썸네일",
  },
  {
    slug: "revation-launches-restudio",
    category: "보도자료",
    title: "리베이션, 친환경 패키지 원스톱 솔루션 리스튜디오 공개",
    description:
      "친환경 패키지 전환을 위한 소재 R&D, 디자인, 양산 네트워크를 통합 지원합니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-revation.webp",
    alt: "리베이션 보도자료 썸네일",
  },
  {
    slug: "ppwr-response-program",
    category: "보도자료",
    title: "리스튜디오, PPWR 대응 실무 프로그램 강화",
    description:
      "수출 기업이 빠르게 확인해야 할 포장재 규제 대응 자료와 진단 체계를 제공합니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-ppwr.webp",
    alt: "PPWR 대응 보도자료 썸네일",
  },
  {
    slug: "eco-package-network",
    category: "보도자료",
    title: "친환경 패키지 양산 네트워크 확대",
    description:
      "국내외 생산 파트너와 협력해 브랜드별 패키지 개발 속도와 안정성을 높입니다.",
    date: "2026.09.04.",
    image: "/assets/news/news-restudio.webp",
    alt: "친환경 패키지 네트워크 보도자료 썸네일",
  },
];

const categories: Array<"전체" | NewsCategory> = [
  "전체",
  "블로그",
  "뉴스레터",
  "인스타그램",
  "보도자료",
];

const contentOrder = [
  "왜 지금 친환경 패키지, 친환경 패키지 디자인 전환을 서둘러야 할까요?",
  "왜 리스튜디오(RESTUDIO)인가요? 비친환경 패키지의 스마트한 전환",
  "리스튜디오: 6단계 원스톱 프로세스",
  "데이터로 증명하는 효율: 개발 비용 & 개발 시간 단축",
  "리스튜디오 친환경 소재: 리베이션의 기술력을 담다",
  "실패 없는 친환경 패키지 솔루션 도입, 리스튜디오가 답입니다",
  "FAQ",
  "Q. 친환경 패키지로 무엇을 할 수 있나요?",
  "Q. 리스튜디오는 왜 만들어졌나요?",
  "Q. 리스튜디오의 차별점은 무엇인가요?",
];

const relatedItems = newsItems.filter((item) => item.slug !== "restudio-onestop-solution").slice(0, 3);
const subscribeDismissedUntilKey = "restudio-news-subscribe-dismissed-until";
const dayInMs = 24 * 60 * 60 * 1000;

function toDateTime(date: string) {
  return date.replace(/\.$/, "").replaceAll(".", "-");
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="news-list-card">
      <RouterLink to={`/news/${item.slug}`} className="news-list-card__image">
        <img src={item.image} alt={item.alt} />
      </RouterLink>
      <RouterLink to={`/news/${item.slug}`} className="news-list-card__title">
        {item.title}
      </RouterLink>
      <p>{item.description}</p>
      <time dateTime={toDateTime(item.date)}>{item.date}</time>
    </article>
  );
}

function ShareLinks() {
  return (
    <div className="news-share" aria-label="공유 링크">
      <a href="https://www.instagram.com/revation.co.kr/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <img src="/assets/social/instagram.svg" alt="" aria-hidden="true" />
      </a>
      <a href="https://www.facebook.com/revation.co.kr" target="_blank" rel="noreferrer" aria-label="Facebook">
        <img src="/assets/social/facebook-fill.svg" alt="" aria-hidden="true" />
      </a>
      <a href="https://www.linkedin.com/company/revation21/?originalSubdomain=kr" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <img src="/assets/social/linkedin-original.svg" alt="" aria-hidden="true" />
      </a>
      <a href="https://www.behance.net/revation?tracking_source=search_projects%7Cbioplastic" target="_blank" rel="noreferrer" aria-label="Behance">
        <img src="/assets/social/behance-original.svg" alt="" aria-hidden="true" />
      </a>
      <button type="button" aria-label="링크 공유">
        <LinkSimple size={20} weight="bold" aria-hidden="true" />
        <span>공유하기</span>
      </button>
    </div>
  );
}

function SubscribeWidget() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    const dismissedUntil = Number(window.localStorage.getItem(subscribeDismissedUntilKey));
    return Number.isFinite(dismissedUntil) && dismissedUntil > Date.now();
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 340);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen]);

  const hideWidget = () => {
    window.localStorage.setItem(subscribeDismissedUntilKey, String(Date.now() + dayInMs));
    setDismissed(true);
  };

  return (
    <>
      <aside className={`subscribe-widget${visible && !dismissed ? " is-visible" : ""}`} aria-label="뉴스레터 구독 안내">
        <button type="button" className="subscribe-widget__close" aria-label="구독 안내 닫기" onClick={() => setDismissed(true)}>
          <X size={22} weight="regular" aria-hidden="true" />
        </button>
        <strong>
          뉴스레터가 발행되면
          <br />
          이메일로 알려드릴게요
        </strong>
        <span className="subscribe-widget__icon" aria-hidden="true">
          <span />
        </span>
        <button type="button" className="subscribe-widget__button" onClick={() => setModalOpen(true)}>
          구독하기
        </button>
        <button type="button" className="subscribe-widget__muted" onClick={hideWidget}>
          하루 동안 보지 않기
        </button>
      </aside>

      {modalOpen ? (
        <div className="subscribe-modal" role="dialog" aria-modal="true" aria-labelledby="subscribe-modal-title">
          <button type="button" className="subscribe-modal__backdrop" aria-label="구독 모달 닫기" onClick={() => setModalOpen(false)} />
          <form className="subscribe-modal__panel">
            <h2 id="subscribe-modal-title" className="sr-only">
              뉴스레터 구독 신청
            </h2>
            <label>
              <span>성명 <b>*</b></span>
              <input type="text" placeholder="담당자 성명을 입력해 주세요." />
            </label>
            <label>
              <span>이메일 <b>*</b></span>
              <input type="email" placeholder="이메일 주소를 입력해 주세요." />
            </label>
            <label>
              <span>받고 싶은 소식 <b>*</b></span>
              <span className="subscribe-modal__select">
                <select defaultValue="">
                  <option value="" disabled>
                    카테고리를 선택해 주세요.
                  </option>
                  <option value="all">전체 소식</option>
                  <option value="blog">블로그</option>
                  <option value="newsletter">뉴스레터</option>
                  <option value="press">보도자료</option>
                </select>
                <CaretDown size={18} weight="bold" aria-hidden="true" />
              </span>
            </label>
            <div className="subscribe-modal__agree">
              <button
                type="button"
                className={agreed ? "is-checked" : ""}
                aria-pressed={agreed}
                onClick={() => setAgreed((current) => !current)}
              >
                {agreed ? <Check size={14} weight="bold" aria-hidden="true" /> : null}
              </button>
              <p>
                <strong>(필수)</strong> 뉴스레터 수신을 위한 개인정보 수집 및 이용에 동의합니다.
              </p>
              <a href="https://material-beam-ed6.notion.site/20224acd6ea980ee90cae0df5e5cc6af" target="_blank" rel="noreferrer">
                보기
              </a>
            </div>
            <button type="submit" className="subscribe-modal__submit" disabled={!agreed}>
              동의하고 구독하기
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}

function NewsListPage() {
  const groupedItems = useMemo(() => {
    return categories.slice(1).map((category) => ({
      category,
      items: newsItems.filter((item) => item.category === category),
    }));
  }, []);

  return (
    <main className="news-page news-page--list">
      <nav className="news-category-tabs" aria-label="새로운 소식 카테고리">
        {categories.map((category) => (
          <a key={category} href={category === "전체" ? "#news-all" : `#news-${category}`}>
            {category}
          </a>
        ))}
      </nav>

      <div id="news-all" className="news-list-sections">
        {groupedItems.map(({ category, items }) => (
          <section key={category} id={`news-${category}`} className="news-list-section">
            <h2>{category}</h2>
            <div className="news-list-grid">
              {items.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <SubscribeWidget />
    </main>
  );
}

function NewsDetailPage({ item }: { item: NewsItem }) {
  return (
    <main className="news-page news-page--detail">
      <aside className="news-detail-side news-detail-side--toc" aria-label="콘텐츠 순서">
        <h2>컨텐츠 순서</h2>
        <ol>
          {contentOrder.map((content, index) => (
            <li key={content} className={index === 0 ? "is-active" : ""}>
              <a href={index === 0 ? "#why-now" : "#article-body"}>{content}</a>
            </li>
          ))}
        </ol>
      </aside>

      <article className="news-detail-article">
        <span className="news-detail-article__tag">{item.category}</span>
        <img className="news-detail-article__hero" src={item.image} alt={item.alt} />
        <h1>{item.title}</h1>
        <p className="news-detail-article__lead">
          리스튜디오(RESTUDIO)는 혁신적인 디자인과 소재 R&amp;D 기술을 결합해 환경 문제 해결에 나서고 있는 국내 대표 클린테크 기업 리베이션(REVATION)에서 만든 친환경 패키지 원스톱 솔루션입니다.
        </p>
        <time dateTime={toDateTime(item.date)}>{item.date}</time>
        <ShareLinks />

        <section id="why-now" className="news-detail-content">
          <h2>왜 지금 친환경 패키지, 친환경 패키지 디자인 전환을 서둘러야 할까요?</h2>
          <p>
            지금 전 세계는 기후 위기 속 플라스틱과의 전쟁 중입니다. 단순히 착한 기업이 되기 위한 선택을 넘어, 강력한 친환경 글로벌 규제가 고객사 브랜드의 앞날을 가로막고 있습니다.
          </p>
          <div className="news-detail-callout">
            <strong>패키징의 탈 플라스틱은 비즈니스 생존의 문제입니다.</strong>
            <ul>
              <li>2026년 주요 변곡점: EU의 포장재 및 포장 폐기물 규제(PPWR)가 본격화되며, 화장품 및 식품 패키지에 사용되던 PFAS 사용 금지가 확산됩니다.</li>
              <li>플라스틱 세 및 탄소세의 습격: ESG 공시 의무화와 함께 규제 비용은 기업 운영 비용을 매년 높이는 원인이 됩니다.</li>
              <li>리스크 관리의 골든타임: 친환경 소재 개발과 안정성 테스트에는 시간이 필요합니다. 시행 직전 대응은 결국 출시 지연으로 이어집니다.</li>
            </ul>
          </div>
        </section>

        <ShareLinks />

        <section className="news-detail-related" aria-label="비슷한 컨텐츠">
          <h2>비슷한 컨텐츠</h2>
          <div className="news-list-grid">
            {relatedItems.map((related) => (
              <NewsCard key={related.slug} item={related} />
            ))}
          </div>
        </section>
      </article>

      <aside className="news-detail-side news-detail-side--related" aria-label="비슷한 컨텐츠">
        <h2>비슷한 컨텐츠</h2>
        <div>
          {relatedItems.slice(0, 2).map((related) => (
            <RouterLink key={related.slug} to={`/news/${related.slug}`} className="news-side-card">
              <img src={related.image} alt={related.alt} />
              <span>{related.title}</span>
            </RouterLink>
          ))}
        </div>
      </aside>

      <SubscribeWidget />
    </main>
  );
}

export function NewsPage() {
  const { slug } = useParams();
  const item = newsItems.find((newsItem) => newsItem.slug === slug) ?? newsItems[0];

  if (slug) {
    return <NewsDetailPage item={item} />;
  }

  return <NewsListPage />;
}
