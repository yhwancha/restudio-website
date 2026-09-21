import {
  ArrowRight,
  ChartLineUp,
  ClipboardText,
  Cube,
  Factory,
  Gauge,
  Leaf,
  Lightbulb,
  Package,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const systemSteps = [
  {
    title: "큐레이션",
    description: "고객 니즈와 산업 특성에 맞춘 최적 친환경 소재 큐레이션",
    Icon: Sparkle,
  },
  {
    title: "자동 견적 시스템",
    description: "개발 제품 정보 기반 예상 견적 자동화 서비스",
    Icon: Gauge,
  },
  {
    title: "실시간 프로젝트 관리",
    description: "상담부터 완료까지 프로젝트 전 과정 통합 관리",
    Icon: ClipboardText,
  },
  {
    title: "ESG 리포트 발행",
    description: "제품 개발 탄소저감·인증 등 지속가능성 성과 리포트",
    Icon: ChartLineUp,
  },
] as const;

const serviceSteps = [
  {
    step: "step 1",
    title: "제품 컨설팅",
    description: "친환경 패키지 전략 설정 및 소재 큐레이션",
    Icon: Lightbulb,
  },
  {
    step: "step 2",
    title: "디자인 제작",
    description: "제품/패키지 디자인 제작, 친환경 디자인 제작",
    Icon: Cube,
  },
  {
    step: "step 3",
    title: "제품 R&D",
    description: "친환경 소재 개발 및 발굴",
    Icon: ClipboardText,
  },
  {
    step: "step 4",
    title: "제품 제작 및 생산",
    description: "페이퍼 몰드, 바이오 플라스틱(사출) 양산",
    Icon: Package,
  },
  {
    step: "step 5",
    title: "검수 및 납품",
    description: "QC 품질 관리, 완제품 납품",
    Icon: ShieldCheck,
  },
  {
    step: "step 6",
    title: "탄소저감 리포트",
    description: "환경 영향 평가, 친환경 인증",
    Icon: Leaf,
  },
] as const;

export function OnestopDevelopmentSystemPage() {
  return (
    <main className="onestop-system-page">
      <section className="onestop-system-hero" aria-label="원스톱 개발 시스템 개요">
        <div className="onestop-system-hero__title">
          <h1>
            제품 문의부터 제품 사후 관리까지
            <br />
            시스템으로 관리
          </h1>
          <i aria-hidden="true" />
        </div>

        <div className="onestop-system-flow" aria-label="시스템 관리 흐름">
          {systemSteps.map(({ title, description, Icon }, index) => (
            <div className="onestop-system-flow__item" key={title}>
              <article className="onestop-system-flow__card">
                <span className="onestop-system-flow__icon">
                  <Icon size={30} weight="regular" aria-hidden="true" />
                </span>
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
              {index < systemSteps.length - 1 ? (
                <span className="onestop-system-flow__arrow" aria-hidden="true">
                  <ArrowRight size={24} weight="bold" />
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="onestop-service-section" aria-label="서비스 소개">
        <div className="onestop-service-section__header">
          <h2>서비스 소개</h2>
          <p>
            제품 컨설팅부터 디자인, R&amp;D, 생산, 검수, 탄소저감 리포트까지
            <br />
            전 과정을 통합 지원하는 친환경 패키지 개발 서비스를 제공합니다.
          </p>
        </div>

        <div className="onestop-service-timeline" aria-label="서비스 진행 단계">
          {serviceSteps.map(({ step, title, description, Icon }) => (
            <article className="onestop-service-timeline__item" key={step}>
              <span className="onestop-service-timeline__step">{step}</span>
              <span className="onestop-service-timeline__marker">
                <Icon size={26} weight="regular" aria-hidden="true" />
              </span>
              <div className="onestop-service-timeline__copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="onestop-service-section__cta">
          <Factory size={22} weight="regular" aria-hidden="true" />
          <span>소재 선정부터 양산과 리포트까지 하나의 프로젝트 흐름으로 관리합니다.</span>
          <Link to="/project-management/quote?service=product-development">
            상담 시작하기
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
