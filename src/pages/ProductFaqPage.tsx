import { useState } from "react";

const productFaqItems = [
  {
    question: "아직 구체적인 사양이나 도면이 없어도 상담할 수 있나요?",
    answer:
      "네, 가능합니다. 제품의 용도, 크기, 목표 수량과 원하는 친환경 방향만 알려주시면 소재 추천부터 구조 설계, 샘플 제작까지 단계별로 안내해 드립니다.",
  },
  {
    question: "친환경 패키지로 바꾸면 원가가 많이 올라가나요?",
    answer:
      "반드시 그렇지는 않습니다. 소재와 구조를 함께 검토하고 생산 조건을 초기에 최적화하면 과도한 사양과 반복 샘플링을 줄여 비용 경쟁력을 확보할 수 있습니다.",
  },
  {
    question: "제품 개발은 어떤 순서로 진행되나요?",
    answer:
      "상담과 요구사항 확인을 시작으로 소재 큐레이션, 구조와 디자인 설계, 샘플 제작 및 검수, 양산과 납품 순서로 진행합니다. 프로젝트 특성에 따라 필요한 인증과 규제 검토도 함께 연결합니다.",
  },
  {
    question: "친환경 패키지도 원하는 디자인과 형태로 제작할 수 있나요?",
    answer:
      "가능합니다. 제품 보호 성능과 생산성을 고려하면서 브랜드의 형태, 색상, 질감과 사용 경험을 반영합니다. 소재별 가공 특성에 맞춰 구현 가능한 디자인 방향을 구체적으로 제안합니다.",
  },
  {
    question: "어떤 친환경 소재를 선택해야 할지 모르겠어요.",
    answer:
      "제품의 무게, 내수성, 내열성, 유통 환경과 폐기 방식 등을 확인한 뒤 페이퍼 몰드, 재생 플라스틱, 바이오 소재 등 적합한 후보를 비교해 드립니다.",
  },
  {
    question: "샘플 제작에는 얼마나 걸리나요?",
    answer:
      "일정은 구조의 복잡도, 소재와 금형 필요 여부에 따라 달라집니다. 요구사항을 확인한 뒤 설계, 목업과 시제품 제작에 필요한 예상 일정을 프로젝트 시작 전에 안내합니다.",
  },
  {
    question: "최소 제작 수량은 어느 정도인가요?",
    answer:
      "품목과 생산 공정에 따라 다르지만 소량 생산부터 대량 양산까지 대응합니다. 제품 사양과 목표 수량을 확인한 뒤 가장 적합한 공정과 최소 수량을 안내합니다.",
  },
  {
    question: "패키지 디자인만 또는 생산만 별도로 의뢰할 수 있나요?",
    answer:
      "프로젝트 상황에 따라 필요한 범위만 협의할 수 있습니다. 기존 디자인이나 도면이 있다면 생산 적합성을 검토하고, 필요한 보완 작업과 제작 범위를 안내합니다.",
  },
  {
    question: "친환경 인증이나 검증도 함께 진행할 수 있나요?",
    answer:
      "네, 가능합니다. FSC, GRS 등 소재와 제품에 필요한 인증 요건을 검토하고 시험, 증빙 자료와 검증 리포트 준비를 제품 개발 과정과 연결해 지원합니다.",
  },
  {
    question: "예상 견적은 어떻게 받을 수 있나요?",
    answer:
      "제품 정보, 크기, 소재, 목표 수량과 희망 일정을 전달해 주시면 검토 후 예상 견적을 안내합니다. 사양이 확정되지 않은 경우에는 상담을 통해 견적에 필요한 기준부터 함께 정리합니다.",
  },
] as const;

export function ProductFaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="regulatory-faq-page">
      <section className="regulatory-faq-detail" aria-labelledby="product-faq-detail-title">
        <aside className="regulatory-faq-detail__side">
          <p>제품 개발 솔루션</p>
          <h1 id="product-faq-detail-title">자주 묻는 질문</h1>
        </aside>

        <div className="regulatory-faq-detail__list">
          {productFaqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={`regulatory-faq-detail__item ${isOpen ? "is-open" : ""}`}
                key={question}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{question}</span>
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="regulatory-faq-detail__answer" aria-hidden={!isOpen}>
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
