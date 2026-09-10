import { ArrowLeft, ArrowRight, CaretDown } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const quoteSteps = ["상품 기본 정보", "상품 상세 정보", "상품 견적"] as const;

export function ProductQuotePage() {
  const navigate = useNavigate();
  const handleBack = () => {
    const loggedIn =
      window.localStorage.getItem("restudio-login-status") === "authenticated";

    navigate(
      loggedIn
        ? "/project-management?service=product-development"
        : "/services/product-development",
    );
  };

  return (
    <main className="product-quote-page">
      <section className="product-quote-shell">
        <button
          type="button"
          className="product-quote-back"
          onClick={handleBack}
        >
          <ArrowLeft size={20} weight="bold" aria-hidden="true" />
          뒤로가기
        </button>

        <header className="product-quote-header">
          <h1>견적 문의</h1>
          <p>지속 가능한 포장이 필요하신가요? 지금 정보를 입력하고 빠르게 견적 받아보세요.</p>
        </header>

        <ol className="product-quote-steps" aria-label="견적 문의 단계">
          {quoteSteps.map((step, index) => (
            <li key={step} className={index === 0 ? "is-active" : ""}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
              {index < quoteSteps.length - 1 ? (
                <ArrowRight size={24} weight="regular" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>

        <form
          className="product-quote-card"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="product-quote-card__intro">
            <h2>상품 기본 정보</h2>
            <p>산업 및 제품 타입을 선택해 주세요.</p>
          </div>

          <label>
            <span>산업 타입 *</span>
            <button type="button">
              식품
              <CaretDown size={16} weight="bold" aria-hidden="true" />
            </button>
          </label>

          <label>
            <span>제품 타입 *</span>
            <button type="button">
              제품
              <CaretDown size={16} weight="bold" aria-hidden="true" />
            </button>
          </label>

          <div className="product-quote-preview">
            <img
              src="/assets/showcase/papermold1.png"
              alt="파란색 페이퍼몰드 제품 예시"
            />
            <span>맞춤 견적이 만들어지고 있어요</span>
          </div>

          <button type="submit" className="product-quote-next">
            다음
            <ArrowRight size={17} weight="bold" aria-hidden="true" />
          </button>
        </form>
      </section>
    </main>
  );
}
