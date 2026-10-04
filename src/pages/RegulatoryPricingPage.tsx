import { CheckCircle, XCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

type PricingValue =
  | string
  | {
      type: "check" | "cross";
    }
  | {
      type: "storage";
      label: string;
      ratio: number;
    };

const pricingRows = [
  "정기 구독료",
  "제품, 포장 정보 관리",
  "AI 데이터 입력 / 작성 지원",
  "AI 채팅 에이전트 지원",
  "PPWR 간단 리포트 진단 비용",
  "TD / DoC 리포트 발행 비용",
  "TD / DoC 리포트 재발행 비용",
  "전문가 TD / DoC 문서 점검 비용",
  "PPWR 전문가 진단 대행",
  "규제 업데이트 안내",
  "시험 성적서 발급 대행",
  "문서 관리 용량",
  "TD / DoC 문서 용량",
] as const;

const pricingPlans = [
  {
    key: "free",
    name: "무료",
    subtitle: "필요 시 단건 이용",
    featured: true,
    ctaLabel: "내가 구독중인 플랜",
    ctaTo: "/project-management",
    values: [
      "0원",
      { type: "check" },
      { type: "cross" },
      { type: "cross" },
      "300,000원 / 제품",
      "700,000원 / 제품",
      "400,000원 / 제품",
      "1,000,000원 / 건",
      "3,000,000원~ / 제품",
      "기본 공지",
      "별도 견적",
      { type: "storage", label: "500MB", ratio: 0.04 },
      { type: "storage", label: "500MB", ratio: 0.04 },
    ],
  },
  {
    key: "monthly",
    name: "월 구독",
    subtitle: "소규모 / 초기 대응 기업",
    featured: false,
    ctaLabel: "구독하러 가기",
    ctaTo: "/project-management/quote?service=regulatory-response&plan=monthly",
    values: [
      "99,000원 / 월",
      { type: "check" },
      { type: "check" },
      { type: "check" },
      "250,000원 / 제품",
      "550,000원 / 제품",
      "300,000원 / 제품",
      "1,000,000원 / 건",
      "2,500,000원~ / 제품",
      "시스템 연동 안내",
      "별도 견적",
      { type: "storage", label: "10GB", ratio: 0.18 },
      { type: "storage", label: "10GB", ratio: 0.18 },
    ],
  },
  {
    key: "enterprise",
    name: "엔터프라이즈",
    subtitle: "대기업 / 다부서 / 다브랜드",
    featured: false,
    ctaLabel: "구독 문의",
    ctaTo: "/project-management/quote?service=regulatory-response&plan=enterprise",
    values: [
      "별도 견적",
      { type: "check" },
      { type: "check" },
      { type: "check" },
      "협의",
      "협의",
      "협의",
      "협의",
      "협의",
      "시스템 연동 안내",
      "협의",
      "협의",
      "협의",
    ],
  },
] as const;

function renderPricingValue(value: PricingValue) {
  if (typeof value === "string") {
    const [main, unit] = value.split(" / ");

    return (
      <span className="regulatory-pricing-value">
        <strong>{main}</strong>
        {unit ? <span> / {unit}</span> : null}
      </span>
    );
  }

  if (value.type === "storage") {
    return (
      <span className="regulatory-pricing-storage">
        <span className="regulatory-pricing-storage__track">
          <span style={{ width: `${value.ratio * 100}%` }} />
        </span>
        <strong>{value.label}</strong>
      </span>
    );
  }

  if (value.type === "check") {
    return (
      <span className="regulatory-pricing-status is-check" aria-label="포함">
        <CheckCircle weight="regular" />
      </span>
    );
  }

  if (value.type === "cross") {
    return (
      <span className="regulatory-pricing-status is-cross" aria-label="미포함">
        <XCircle weight="regular" />
      </span>
    );
  }
}

export function RegulatoryPricingPage() {
  return (
    <main className="regulatory-pricing-page">
      <section className="regulatory-pricing-section" aria-labelledby="regulatory-pricing-title">
        <h1 id="regulatory-pricing-title">구독 및 요금제</h1>
        <div className="regulatory-pricing-scroll">
          <div className="regulatory-pricing-table">
            <div aria-hidden="true" />
            {pricingPlans.map((plan) => (
              <div className="regulatory-pricing-plan-head" key={plan.key}>
                <h2>{plan.name}</h2>
                <p>{plan.subtitle}</p>
              </div>
            ))}

            <ul className="regulatory-pricing-labels" aria-label="요금제 항목">
              {pricingRows.map((row) => (
                <li key={row}>{row}</li>
              ))}
            </ul>

            {pricingPlans.map((plan) => (
              <div className="regulatory-pricing-column" key={plan.key}>
                <article
                  className={`regulatory-pricing-card${
                    plan.featured ? " is-featured" : ""
                  }`}
                >
                  <ul>
                    {plan.values.map((value, index) => (
                      <li key={`${plan.key}-${pricingRows[index]}`}>
                        {renderPricingValue(value as PricingValue)}
                      </li>
                    ))}
                  </ul>
                </article>
                <Link
                  className={`regulatory-pricing-cta${
                    plan.featured ? " is-current" : ""
                  }`}
                  to={plan.ctaTo}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
