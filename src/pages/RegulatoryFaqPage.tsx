import { useState } from "react";

const regulatoryFaqPageItems = [
  {
    question: "EU 이외 지역(미국·중국 등) 수출 기업도 이용할 수 있나요?",
    answer:
      "해외 수출에 필수적인 글로벌 규제 대응의 파고 속에서 고객사들의 빠른 친환경 전환을 도와드리기 위해 탄생했습니다. 글로벌 스탠다드에 맞춘 패키징 전환, 지금 바로 리스튜디오 전문가와 1:1로 상담해 보세요. 개발 비용과 시간을 아껴드립니다. 제품 기획부터 소재 선정, 디자인, 생산에 이르는 전 과정을 담은 원스톱 솔루션, 리스튜디오와 함께하세요.",
  },
  {
    question: "무료 'PPWR 3가지 핵심 진단'과 유료 심층 진단은 무엇이 다른가요?",
    answer:
      "무료 진단은 핵심 리스크를 빠르게 확인하는 1차 점검입니다. 유료 심층 진단은 제품 정보, 포장 구조, 소재, 시험성적서, BOM 등 실제 제출에 필요한 자료까지 검토해 실행 가능한 대응 방향과 보완 항목을 정리합니다.",
  },
  {
    question: "서류(TD·DoC)는 바로 제출 가능한 형태로 발급되나요?",
    answer:
      "등록된 제품 데이터와 증빙 자료를 기준으로 제출 형식에 맞춘 초안을 구성하고, 필요한 보완 항목을 함께 안내합니다. 최종 제출 전에는 국가와 바이어 요구사항에 맞게 전문가 검토를 거쳐 완성도를 높입니다.",
  },
  {
    question: "회원가입 후 무료 진단 리포트는 어떻게 받나요?",
    answer:
      "회원가입 후 제품과 패키지 기본 정보를 입력하면 AI가 1차 진단 리포트를 생성합니다. 리포트에서는 주요 규제 체크포인트, 누락 가능성이 높은 정보, 다음 단계에서 준비할 자료를 확인할 수 있습니다.",
  },
  {
    question: "진단을 시작하려면 어떤 자료를 준비해야 하나요?",
    answer:
      "제품 정보, SKU 정보, 패키지 소재 정보, BOM, 도면, 시험성적서가 있으면 가장 좋습니다. 자료가 모두 준비되어 있지 않아도 시작할 수 있으며, 부족한 항목은 진단 과정에서 별도로 안내합니다.",
  },
  {
    question: "AI 진단과 전문가 검토는 어떻게 함께 진행되나요?",
    answer:
      "AI가 먼저 등록 데이터를 구조화하고 주요 규제 리스크와 누락 항목을 도출합니다. 이후 규제 전문가가 실제 제출 가능성, 예외 조건, 국가별 요구사항을 다시 검토해 최종 판단을 보완합니다.",
  },
  {
    question: "규제 변경이 생기면 후속 관리도 받을 수 있나요?",
    answer:
      "가능합니다. 규제 변경, 바이어 추가 요청, 제출 서류 수정이 발생했을 때 기존 데이터를 기반으로 후속 업데이트와 보완 대응을 이어갈 수 있습니다.",
  },
  {
    question: "업로드한 제품 정보와 서류 데이터는 안전하게 관리되나요?",
    answer:
      "업로드한 자료는 프로젝트 단위로 관리되며, 규제 진단과 서류 작성 목적에 필요한 범위 안에서만 활용됩니다. 내부 검토 권한과 접근 범위를 분리해 민감한 정보를 안전하게 다룹니다.",
  },
  {
    question: "심층 진단 리포트는 얼마나 걸리나요?",
    answer:
      "자료가 충분히 준비되어 있다면 1차 AI 분석은 빠르게 진행됩니다. 전문가 검토가 포함된 심층 리포트는 제품 수, 시장 범위, 증빙 자료의 완성도에 따라 일정이 달라질 수 있습니다.",
  },
  {
    question: "요금제는 어떻게 구성되어 있나요?",
    answer:
      "무료 1차 진단, 유료 심층 진단, TD·DoC 작성 및 발급, 후속 관리 등 필요한 범위에 따라 구성됩니다. 제품 수와 대응 국가, 제출 서류 범위에 따라 맞춤 견적을 안내합니다.",
  },
  {
    question: "필요한 자료(시험성적서 등)가 부족해도 신청할 수 있나요?",
    answer:
      "신청할 수 있습니다. 리스튜디오는 부족한 자료를 먼저 식별하고, 어떤 시험이나 증빙이 필요한지 정리해 드립니다. 필요한 경우 소재, 시험, 인증, 서류 준비까지 연결해 대응합니다.",
  },
  {
    question: "패키징 공급사나 원부자재 업체도 이용할 수 있나요?",
    answer:
      "가능합니다. 공급사가 보유한 소재·시험·인증 데이터를 정리해 고객사 제출용 증빙으로 전환하거나, 납품처별 요청에 맞춰 규제 대응 패키지를 구성할 수 있습니다.",
  },
] as const;

export function RegulatoryFaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="regulatory-faq-page">
      <section className="regulatory-faq-detail" aria-labelledby="regulatory-faq-detail-title">
        <aside className="regulatory-faq-detail__side">
          <p>PPWR</p>
          <h1 id="regulatory-faq-detail-title">자주 묻는 질문</h1>
        </aside>

        <div className="regulatory-faq-detail__list">
          {regulatoryFaqPageItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={`regulatory-faq-detail__item ${isOpen ? "is-open" : ""}`} key={question}>
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
