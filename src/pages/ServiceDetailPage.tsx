import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
  CheckCircle,
  ClipboardText,
  Cube,
  Flask,
  MagnifyingGlass,
  Network,
  Play,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ServiceDetailSharedSections } from "../components/ServiceDetailSharedSections";

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

interface ServiceDetailPageProps {
  variant: "product-development" | "regulatory-response";
}

export function ServiceDetailPage({ variant }: ServiceDetailPageProps) {
  const isProductDevelopment = variant === "product-development";
  const [activeProductTestimonial, setActiveProductTestimonial] = useState(0);
  const serviceFlowSectionRef = useRef<HTMLElement | null>(null);
  const serviceFlowViewportRef = useRef<HTMLDivElement | null>(null);
  const serviceFlowTrackRef = useRef<HTMLDivElement | null>(null);
  const processVideoRef = useRef<HTMLVideoElement | null>(null);

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

  const playProcessVideo = () => {
    processVideoRef.current?.play().catch(() => undefined);
  };

  const pauseProcessVideo = () => {
    if (!processVideoRef.current) {
      return;
    }

    processVideoRef.current.pause();
    processVideoRef.current.currentTime = 0;
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
          </section>

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
                    transform: `translateX(-${activeProductTestimonial * 100}%)`,
                  }}
                >
                  {productTestimonialPages.map((page, pageIndex) => (
                    <div
                      className="product-client-testimonials__page"
                      key={`product-testimonial-page-${pageIndex}`}
                    >
                      {page.map((testimonial) => (
                        <article
                          className="product-client-testimonial"
                          key={testimonial.author}
                        >
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
                <button
                  type="button"
                  aria-label="이전 제품 개발 후기 보기"
                  onClick={() =>
                    setActiveProductTestimonial((current) =>
                      current === 0 ? productTestimonialPages.length - 1 : current - 1,
                    )
                  }
                >
                  <CaretLeft size={18} weight="bold" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="다음 제품 개발 후기 보기"
                  onClick={() =>
                    setActiveProductTestimonial((current) =>
                      current === productTestimonialPages.length - 1 ? 0 : current + 1,
                    )
                  }
                >
                  <CaretRight size={18} weight="bold" aria-hidden="true" />
                </button>
                <span>
                  {activeProductTestimonial + 1}/{productTestimonialPages.length}
                </span>
              </div>
            </div>
          </section>

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

          <section className="product-process-section">
            <div className="product-process-section__inner">
              <h2>제조과정</h2>
              <div className="product-process-video-stage">
                <button
                  type="button"
                  className="product-process-video"
                  aria-label="제조과정 영상 재생"
                  onMouseEnter={playProcessVideo}
                  onMouseLeave={pauseProcessVideo}
                  onFocus={playProcessVideo}
                  onBlur={pauseProcessVideo}
                >
                  <video
                    ref={processVideoRef}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/assets/detail-pages/process-video/manufacturing-process-poster.jpg"
                  >
                    <source
                      src="/assets/detail-pages/process-video/manufacturing-process.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <span className="product-process-video__play" aria-hidden="true">
                    <Play size={58} weight="fill" />
                  </span>
                </button>
              </div>
              <p>
                제품 설계가 끝나면 원료 수급, 금형 설계, 시제품 제작, 양산이 진행되고,
                <br />
                이 과정에서 디자인 수정, 기술 보완 및 제품 생산에 대한 감리까지 이루어집니다.
              </p>
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
      <ServiceDetailSharedSections />
    </main>
  );
}
