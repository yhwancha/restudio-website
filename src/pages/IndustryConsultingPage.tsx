import { ArrowRight, Check } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const industryCards = [
  {
    label: "화장품",
    title: "화장품",
    description: "브랜드 경험은 살리고, 플라스틱 의존도는 낮추는 패키지 제안",
    bullets: [
      "디자인 완성도와 친환경 브랜드 리더십 동시 확보",
      "페이퍼 몰드, 바이오 플라스틱 친환경 소재 검토",
      "브랜드 경험을 극대화하는 차별화 전략",
    ],
    image: "/assets/cases/featured/dweather-01.jpg",
    alt: "화장품 친환경 패키지 사례",
    service: "cosmetics",
  },
  {
    label: "F&B",
    title: "F&B",
    description: "식품 안전 기준을 지키면서도 지속가능한 포장재 솔루션 제안",
    bullets: [
      "유통 안정성 검토",
      "내수·내열·내습 성능 인증 소재 제안",
      "기능성, 생산 효율성 극대화",
    ],
    image: "/assets/cases/featured/tway-01.jpg",
    alt: "F&B 친환경 패키지 사례",
    service: "fnb",
  },
  {
    label: "바이오/헬스케어",
    title: "바이오/헬스케어",
    description: "의약품·건강기능식품에 특화된 신뢰감 있는 패키지 솔루션",
    bullets: [
      "구조 안정성 검토",
      "대량생산과 제작비용의 효율성",
      "운영 가능한 구조 제안",
    ],
    image: "/assets/cases/featured/ppt-image-5.png",
    alt: "헬스케어 제품 패키지 사례",
    service: "healthcare",
  },
  {
    label: "전자기기",
    title: "전자기기",
    description: "프리미엄 언박싱 경험과 내충격 보호를 동시에 충족하는 패키지",
    bullets: [
      "보호 성능 중심 설계",
      "플라스틱 트레이 대체 검토",
      "대량생산과 제작비용의 효율성",
    ],
    image: "/assets/showcase/pcr-pir2.png",
    alt: "전자기기 보호 패키지 소재 사례",
    service: "electronics",
  },
  {
    label: "패션",
    title: "패션",
    description: "의류·잡화의 브랜드 감도와 물류 효율을 함께 고려한 패키지 제안",
    bullets: [
      "브랜드 언박싱 경험과 재사용성 설계",
      "의류·신발·액세서리 보호 구조 검토",
      "배송 부피와 제작비용 최적화",
    ],
    image: "/assets/cases/featured/ppt-image-6.png",
    alt: "패션 리유저블 패키지 사례",
    service: "fashion",
  },
  {
    label: "생활용품",
    title: "생활용품",
    description: "반복 구매 제품의 사용성, 진열성, 분리배출성을 고려한 패키지 제안",
    bullets: [
      "리필·대용량 제품 구조 안정성 검토",
      "생활 방수·내구 조건에 맞춘 소재 제안",
      "매장 진열과 물류 효율을 함께 설계",
    ],
    image: "/assets/showcase/upcycle2.png",
    alt: "생활용품 친환경 소재 패키지 사례",
    service: "lifestyle-goods",
  },
] as const;

export function IndustryConsultingPage() {
  return (
    <main className="industry-consulting-page">
      <section className="industry-consulting-hero">
        <div className="industry-consulting-hero__copy">
          <h1>
            친환경 패키지,
            <br />
            업종이 다르면 접근도 달라져야 합니다
          </h1>
          <p>
            제품 특성과 유통 조건, 브랜드 경험까지 함께 검토해 업종별로 실행 가능한
            친환경 패키지 개발 방향을 제안합니다.
          </p>
        </div>
      </section>

      <section className="industry-consulting-section" aria-label="업종별 맞춤 설계 카드">
        <div className="industry-consulting-carousel">
          <div className="industry-consulting-track">
            {[...industryCards, ...industryCards].map(
              ({ label, title, description, bullets, image, alt, service }, index) => (
                <article
                  className="industry-consulting-card"
                  key={`${title}-${index}`}
                  aria-hidden={index >= industryCards.length}
                >
                  <div className="industry-consulting-card__media">
                    <img src={image} alt={alt} />
                  </div>
                  <div className="industry-consulting-card__content">
                    <div className="industry-consulting-card__heading">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                    <ul>
                      {bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check size={18} weight="bold" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/project-management/quote?service=product-development&industry=${service}`}>
                      {label} 견적 받기
                      <ArrowRight size={18} weight="bold" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
