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
      "꼭 그렇지 않습니다. 구조와 소재에 따라 오히려 낮출 수 있습니다.\n• 페이퍼몰드는 기존 일반 펄프몰드 대비 금형비 약 60%, 제품 단가 약 30% 절감이 가능합니다.\n• 플라스틱 사용을 줄여 재활용 분담금 감면 효과도 기대할 수 있습니다.\n• 소재·구조에 따라 원가가 달라지므로, 상담 시 예상 원가와 절감 포인트를 함께 안내해 드립니다.",
  },
  {
    question: "제품 개발은 어떤 순서로 진행되나요?",
    answer:
      "컨설팅 → 디자인 → R&D → 생산 → 납품 → 탄소절감 ESG리포팅 제공 순으로 진행됩니다.\n\nSTEP 1 (기획·설계)\n1. 솔루션 컨설팅 - 니즈 파악, 목표 설계, 시장 트렌드 분석\n2. 디자인 제작 - 적용 품목 협의, 제품 패키징 디자인, CMF 제안\n3. 제품 R&D - 소재 발굴, 샘플링, 생산성 검증\n\nSTEP 2 (개발·생산)\n4. 제품 생산 의뢰 - 금형 도면 설계, 샘플 제작\n5. 시제품 수정 보완 → 파일럿 테스트, 최종 컨펌, 작업표준 설정\n6. 생산 납품 - 양산 관리, QC 관리, 포장, 납품\n• 탄소절감 리포팅 제공까지 각 단계마다 확인·승인을 거쳐 진행됩니다.",
  },
  {
    question: "친환경 패키지도 원하는 디자인과 형태로 제작할 수 있나요?",
    answer:
      "네, 가능합니다. 브랜드 맞춤형 경쟁력 높은 디자인을 구상하실 수 있습니다.\n• 디자인 R&D 조직과 CMF 역량으로 소재 특성에 맞는 차별화 디자인을 제안합니다.\n• 페이퍼몰드는 성형으로 자유로운 형태 구현이 가능하고 인쇄까지 적용할 수 있습니다.\n• 페이퍼몰드·바이오플라스틱·재생플라스틱 등 소재 선택 폭이 넓어 색감과 질감을 살린 디자인이 가능합니다.",
  },
  {
    question: "어떤 친환경 소재를 선택해야 할지 모르겠어요.",
    answer:
      "용도에 따라 최적 소재를 함께 골라드립니다.\n제품의 특성과 용도에 따라 물성을 비교 분석·검증해 적합한 소재와 대안을 비교해 제안해 드립니다.\n• 소재·구조에 따라 원가가 달라지므로, 상담 시 예상 원가와 절감 포인트를 함께 안내해 드립니다.\n지금 상담 신청하세요.",
  },
  {
    question: "샘플 제작에는 얼마나 걸리나요?",
    answer:
      "샘플은 개발 초반 R&D 단계에서 제작됩니다.\n• 샘플 건조 기간은 소재·형상·금형 밀도 여부에 따라 달라집니다.\n• 목업 → 1차 샘플 → 최종 샘플 순으로 진행되며, 각 단계별로 샘플·보완이 포함됩니다.\n정확한 일정은 품목과 사양을 확인한 뒤 안내해 드립니다.\n지금 상담 신청하세요!",
  },
  {
    question: "최소 제작 수량은 어느 정도인가요?",
    answer:
      "다품종 소량도 생산이 가능합니다!\n• 소재·형상·금형 방식에 따라 최소 수량이 달라집니다.\n• 소량 생산 시에도 초기 금형·재고 부담을 줄일 수 있는 방식을 함께 검토합니다.",
  },
  {
    question: "패키지 디자인만 또는 생산만 별도로 의뢰할 수 있나요?",
    answer:
      "가능합니다. 리스튜디오는 기획부터 생산·납품까지 원스톱이지만, 필요한 단계만 선택해 의뢰할 수도 있습니다.\n• 프로젝트 성격에 맞춰 참여 범위를 유연하게 조정합니다.\n지금 상담 신청하세요.",
  },
  {
    question: "친환경 인증이나 검증도 함께 진행할 수 있나요?",
    answer:
      "네, 맞습니다. 검증 리포트부터 인증 연계까지 지원합니다.\n• 정량 검증: 플라스틱 저감·예상 탄소배출 분석 레포트 제공 → 마케팅·세금 감면 자료로 활용\n• 소재 인증 보유: ECO-PRODUCT, OK biobased, GRS, FSC, RoHS, 식품 접촉 인증 등\n• 글로벌 네트워크: 해외 친환경 기업과 협약으로 환경 인증 서비스 제공, 국제 규제 대응 상담",
  },
  {
    question: "예상 견적은 어떻게 받을 수 있나요?",
    answer:
      "상담 신청을 통해 품목과 요구 사항을 알려주시면, 담당 전문가가 빠르게 담당자 배정과 함께 안내해 드립니다.\n• 필요한 정보: 제품 종류, 예상 수량, 적용 소재 희망 여부, 납기 등\n• 정보가 부족해도 상담 단계에서 함께 구체화한 뒤 견적을 산출합니다.\n지금 상담 신청하세요.",
  },
] as const;

export function ProductFaqPage() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <main className="regulatory-faq-page product-faq-page">
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
