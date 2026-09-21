const detailImages = [
  "https://www.revation.co.kr/upload/55_Details%20Page%200.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%201.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%202.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%203.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%204.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%205.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%206.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%207.png",
  "https://www.revation.co.kr/upload/55_Details%20Page%208.png",
];

const scopes = ["전략", "패키지 디자인", "제품 디자인", "3D 모델링", "제조 개발"];

export function StoryDetailPage() {
  return (
    <main className="story-detail-page">
      <section className="story-detail-hero">
        <div className="story-detail-hero__title">
          <h1>뮤어하이크 리유저블 박스</h1>
          <strong>SIERRA DESIGNS</strong>
          <span>MUIR HIKE REUSABLE CARGO BOX</span>
        </div>

        <div className="story-detail-hero__meta">
          <div className="story-detail-info">
            <span>고객사</span>
            <strong>HILIGHT BRANDS</strong>
          </div>

          <div className="story-detail-info">
            <span>프로젝트 범위</span>
            <div className="story-detail-tags">
              {scopes.map((scope) => (
                <em key={scope}>{scope}</em>
              ))}
            </div>
          </div>

          <div className="story-detail-copy">
            <strong>프로젝트 설명</strong>
            <p>
              시에라디자인의 뮤어하이크 리유저블 카고 박스는 아웃도어의 거친 매력과
              탐험의 여정을 담아낸 신발 패키지입니다. 대자연을 연상시키는 요소를 시각적,
              촉각적으로 구현해 브랜드가 지향하는 아웃도어 정체성을 패키지 전반에
              반영했습니다.
            </p>
            <p>
              패키지 외관에는 등고선을 모티브로 한 음각 디자인을 적용해 입체적인 깊이감을
              더하고, 하이킹의 여정을 상징적으로 표현했습니다. 표면의 거친 종이 질감은
              자연의 촉감을 전달하며 제품을 마주하는 순간의 감각적 몰입감을 높여줍니다.
            </p>
            <p>
              내부에는 제품을 안정적으로 보호하는 묵직한 그레이 색상의 페이퍼몰드를
              적용했습니다. 단순한 포장재를 넘어 일상에서 다용도로 활용할 수 있는 카고 박스
              형태로 완성해, 실용성과 브랜드의 지속 가능한 가치를 함께 제안합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="story-detail-gallery" aria-label="뮤어하이크 리유저블 박스 상세 이미지">
        {detailImages.map((image, index) => (
          <figure key={image}>
            <img src={image} alt={`뮤어하이크 리유저블 박스 상세 이미지 ${index + 1}`} />
          </figure>
        ))}
      </section>
    </main>
  );
}
