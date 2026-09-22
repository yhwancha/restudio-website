import { Download } from "@phosphor-icons/react";
import { useState } from "react";

const recommendedReaders = [
  "화장품, F&B, 라이프스타일 브랜드의 패키지 흐름을 빠르게 파악해야 하는 담당자",
  "친환경 소재 전환을 검토하고 있지만 업종별 적용 기준이 궁금한 마케터",
  "2026년 제품 출시와 리뉴얼에 맞춰 패키지 전략을 정리해야 하는 브랜드 매니저",
  "소재, 디자인, 생산 조건을 함께 고려한 실행 가능한 전환 방향이 필요한 실무자",
];

const previewSlides = [
  {
    title: "카테고리별 전환 흐름",
    bars: [80, 128, 96],
    stat: "78.5",
  },
  {
    title: "소재 선택 체크포인트",
    bars: [112, 88, 138],
    stat: "64.2",
  },
  {
    title: "실행 우선순위 매트릭스",
    bars: [72, 132, 104],
    stat: "91.4",
  },
];

export function ResourceDetailPage() {
  const [activePreview, setActivePreview] = useState(0);
  const goToPreview = (step: number) => {
    setActivePreview((current) => (current + step + previewSlides.length) % previewSlides.length);
  };

  return (
    <main className="resource-detail-page">
      <section className="resource-detail-hero">
        <div className="resource-detail-hero__copy">
          <h1>
            친환경 패키지
            <br />
            업종별 트렌드 2026
          </h1>
          <p>화장품, F&B, 라이프스타일 브랜드가 참고할 친환경 패키지 흐름을 정리했습니다.</p>
          <a className="resource-detail-button" href="#resource-download-form">
            무료 다운로드
          </a>
        </div>
        <div className="resource-detail-hero__visual" aria-hidden="true">
          <img src="/assets/resources/resource-book-trend-2026.png" alt="" />
        </div>
      </section>

      <section className="resource-detail-recommend">
        <div className="resource-detail-preview">
          <div className="resource-detail-preview__viewport">
            <div
              className="resource-detail-preview__track"
              style={{ transform: `translateX(-${activePreview * 100}%)` }}
            >
              {previewSlides.map((preview) => (
                <div className="resource-detail-preview__page" key={preview.title}>
                  <strong className="resource-detail-preview__title">{preview.title}</strong>
                  <div className="resource-detail-preview__columns">
                    <div>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <aside>
                      <strong>INDUSTRY</strong>
                      <span />
                      <span />
                      <span />
                    </aside>
                  </div>
                  <div className="resource-detail-preview__charts">
                    {preview.bars.map((height) => (
                      <span key={height} style={{ height }} />
                    ))}
                    <em>{preview.stat}</em>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="resource-detail-preview__controls">
            <button type="button" aria-label="이전 미리보기" onClick={() => goToPreview(-1)}>
              ←
            </button>
            <button type="button" aria-label="다음 미리보기" onClick={() => goToPreview(1)}>
              →
            </button>
            <div
              className="resource-detail-preview__indicator"
              aria-label="미리보기 인디케이터"
              style={{ "--resource-preview-index": activePreview } as React.CSSProperties}
            >
              {previewSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.title}
                  className={index === activePreview ? "is-active" : undefined}
                  aria-label={`${index + 1}번째 미리보기 보기`}
                  onClick={() => setActivePreview(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="resource-detail-recommend__copy">
          <h2>이런 내용이 궁금한 분들께 추천드려요.</h2>
          <ol>
            {recommendedReaders.map((reader, index) => (
              <li key={reader}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {reader}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="resource-detail-reason">
        <h2>
          이 리포트가
          <br />
          세상에 나온 이유
        </h2>
        <div>
          <p>
            업종마다 친환경 패키지를 받아들이는 기준과 구매 맥락은 다릅니다. 화장품은 브랜드
            경험과 소재 감성이 중요하고, F&B는 안전성과 유통 안정성이 우선이며, 라이프스타일
            제품은 사용 후 보관과 재사용 가능성이 함께 고려됩니다.
          </p>
          <p>
            이번 리포트는 업종별로 반복되는 친환경 패키지 고민을 실무 관점에서 정리했습니다.
            소재 선택, 구조 설계, 디자인 표현, 생산 가능성까지 연결해 2026년 패키지 전략을
            세우는 데 필요한 판단 기준을 제공합니다.
          </p>
          <p>
            리스튜디오는 국내외 브랜드의 패키지 개발 프로젝트를 수행하며 쌓은 인사이트를
            바탕으로, 더 빠르고 실행 가능한 친환경 전환을 돕고자 이 자료를 만들었습니다.
          </p>
        </div>
      </section>

      <section className="resource-detail-form-section" id="resource-download-form">
        <form className="resource-detail-form">
          <h2>
            간단한 정보만 입력하고
            <br />
            리포트를 바로 다운받을 수 있어요.
          </h2>
          <div className="resource-detail-form__grid">
            <label>
              <span>
                성함 <em>*</em>
              </span>
              <input type="text" placeholder="홍길동" />
            </label>
            <label>
              <span>
                회사명 <em>*</em>
              </span>
              <input type="text" placeholder="회사명" />
            </label>
            <label>
              <span>
                부서명 <em>*</em>
              </span>
              <input type="text" placeholder="마케팅 팀" />
            </label>
            <label>
              <span>
                직책 및 직급 <em>*</em>
              </span>
              <input type="text" placeholder="팀장" />
            </label>
            <label className="resource-detail-form__wide">
              <span>
                연락처 <em>*</em>
              </span>
              <input type="tel" placeholder="01012341234" />
            </label>
            <label className="resource-detail-form__wide">
              <span>
                이메일 <em>*</em>
              </span>
              <input type="email" placeholder="example@example.com" />
            </label>
          </div>
          <label className="resource-detail-form__check">
            <input type="checkbox" />
            뉴스레터 구독하고 리포트 받기 *
          </label>
          <button type="button">
            무료 다운로드
            <Download size={16} weight="bold" aria-hidden="true" />
          </button>
        </form>
      </section>
    </main>
  );
}
