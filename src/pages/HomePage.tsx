import { useEffect, useState } from "react";
import { ArrowUp, Paperclip } from "@phosphor-icons/react";

const showcaseCategories = [
  {
    title: "PAPERMOLD",
    images: [
      {
        src: "/assets/showcase/papermold1.png",
        alt: "PAPERMOLD molded package with sesame oil bottles",
      },
      {
        src: "/assets/showcase/papermold2.png",
        alt: "PAPERMOLD curved paper packaging forms",
      },
      {
        src: "/assets/showcase/papermold3.png",
        alt: "PAPERMOLD wine bottle package on a dark background",
      },
    ],
  },
  {
    title: "BIOPLASTIC",
    images: [
      {
        src: "/assets/showcase/bioplastic1.png",
        alt: "Bioplastic cosmetic tube holder display",
      },
      {
        src: "/assets/showcase/bioplastic2.png",
        alt: "Blue bioplastic tray with resin pellets",
      },
      {
        src: "/assets/showcase/bioplastic3.png",
        alt: "Bioplastic display plaque",
      },
    ],
  },
  {
    title: "PCR/PIR",
    images: [
      {
        src: "/assets/showcase/pcr-pir.png",
        alt: "PCR/PIR recycled plastic cosmetic packaging with pink pellets",
      },
      {
        src: "/assets/showcase/pcr-pir2.png",
        alt: "PCR/PIR package surrounded by blue-gray recycled pellets",
      },
      {
        src: "/assets/showcase/pcr-pir3.png",
        alt: "PCR/PIR translucent cosmetic cream jar",
      },
    ],
  },
  {
    title: "UPCYCLE",
    images: [
      {
        src: "/assets/showcase/upcycle.png",
        alt: "Upcycled coffee ground hair clips",
      },
      {
        src: "/assets/showcase/upcycle2.png",
        alt: "Upcycled dark cosmetic jar",
      },
      {
        src: "/assets/showcase/upcycle3.png",
        alt: "Upcycled coffee ground toothpaste squeezer in use",
      },
    ],
  },
];

const serviceMetrics = [
  {
    title: "평균 개발 기간 단축",
    description:
      "AI 기반 요구사항 정리와 검증 프로세스로 반복 수정 시간을 줄여 제품 출시까지 빠르게 연결합니다.",
    value: "50%",
  },
  {
    title: "개발비용 최대 절감",
    description:
      "소재, 금형, 생산 조건을 초기에 비교해 불필요한 샘플링과 재작업 비용을 낮춥니다.",
    value: "30%",
  },
  {
    title: "소재 선정부터 양산까지",
    description:
      "친환경 소재 검토, 구조 설계, 샘플 제작, 양산 연결까지 한 흐름으로 관리합니다.",
    value: "원스톱",
  },
  {
    title: "해외 수출 규제 대응",
    description:
      "EU 포장폐기물 규정과 글로벌 인증 요구사항을 제품 개발 단계부터 함께 반영합니다.",
    value: "PPWR",
  },
];

export function HomePage() {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const activeCategory = showcaseCategories[activeShowcase];

  useEffect(() => {
    const revealItems = document.querySelectorAll(".service-excellence__item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <section className="flex items-start bg-[#f7f8f8] px-5 py-16 md:px-12 md:py-24 xl:px-[120px]">
        <div className="mx-auto w-full max-w-[1040px]">
          <h1 className="mx-auto max-w-[720px] text-center text-[32px] font-semibold leading-[1.16] text-black md:text-[44px] xl:text-[48px]">
            친환경 패키지{" "}
            <span className="marker-scribble relative inline-block whitespace-nowrap px-1">
              <svg
                className="marker-scribble__stroke"
                viewBox="0 0 320 62"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="marker-scribble__path marker-scribble__path--base"
                  pathLength={1}
                  d="M34 33 C48 15 63 16 76 24 C91 34 99 20 115 18 C133 16 144 31 160 24 C177 17 191 14 206 29 C223 46 235 12 255 17 C272 21 282 14 293 18"
                />
                <path
                  className="marker-scribble__path marker-scribble__path--middle"
                  pathLength={1}
                  d="M31 37 C47 46 57 8 75 16 C92 24 96 43 113 36 C132 29 139 9 155 19 C170 29 171 45 189 35 C206 26 211 23 227 30 C244 38 246 17 263 22 C279 27 286 32 296 24"
                />
              </svg>
              <span className="relative z-10">개발, 양산, 수출</span>
            </span>
            까지
            <br />
            리스튜디오에서 한번에.
          </h1>

          <form
            className="mx-auto mt-10 max-w-[760px] rounded-2xl border border-[#d7dde2] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(23,33,27,0.035)] md:mt-11 md:px-5 md:py-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex items-center gap-2.5">
              <Paperclip
                size={21}
                weight="regular"
                aria-hidden="true"
                className="shrink-0 text-[#9aa8b7]"
              />
              <label className="sr-only" htmlFor="home-ai-question">
                AI Agent 리사에게 제품 개발 문의하기
              </label>
              <input
                id="home-ai-question"
                type="text"
                className="h-8 min-w-0 flex-1 bg-transparent text-[13px] font-medium text-primary-900 outline-none placeholder:text-[#9aa3af] md:text-[14px]"
                placeholder="제품 개발에 대해 궁금한 것이 있나요? AI Agent 리사가 도와드릴게요!"
              />
              <button
                type="submit"
                aria-label="문의 보내기"
                className="grid size-8 shrink-0 place-items-center rounded-full bg-[#bfc5c1] text-white transition hover:bg-primary-600 active:scale-[0.98] md:size-9"
              >
                <ArrowUp size={18} weight="bold" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-2.5 text-center text-[10px] font-semibold text-[#b6bdc5] md:text-[11px]">
              대화를 진행하면{" "}
              <a
                href="https://material-beam-ed6.notion.site/20224acd6ea980ee90cae0df5e5cc6af"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-primary-600"
              >
                개인정보처리방침
              </a>
              에 동의하신 것으로 이해됩니다
            </p>
          </form>

          <div className="mt-16 md:mt-20">
            <div
              className="flex h-16 items-center justify-center gap-1.5"
              aria-label="이미지 분야 선택"
            >
              {showcaseCategories.map((category, index) => {
                const isActive = activeShowcase === index;

                return (
                  <button
                    key={category.title}
                    type="button"
                    aria-label={`${category.title} 이미지 보기`}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveShowcase(index)}
                    onFocus={() => setActiveShowcase(index)}
                    className="group flex h-16 w-1.5 items-center justify-center"
                  >
                    <span
                      className={`block w-0.5 rounded-full transition-[height,background-color,transform] duration-300 ease-out group-hover:scale-x-[1.35] ${
                        isActive
                          ? "h-16 bg-black"
                          : "h-[42px] bg-[#d9d9d9] group-hover:h-16 group-hover:bg-black"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <h2 className="mt-8 text-center text-[28px] font-semibold leading-none text-black md:text-[34px]">
              {activeCategory.title}
            </h2>

            <div className="mx-auto mt-8 grid max-w-[760px] gap-1.5 md:grid-cols-2">
              {activeCategory.images.map((image, index) => (
                <div
                  key={image.src}
                  className={`showcase-image-frame ${
                    index === 2
                      ? "aspect-[1.72/1] md:col-span-2"
                      : "aspect-[1.62/1]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>

            <section className="service-excellence mx-auto mt-10 max-w-[760px] md:mt-12">
              <div className="service-excellence__stage">
                <div className="service-excellence__stack">
                  {serviceMetrics.map((item, index) => (
                    <article
                      key={item.title}
                      className="service-excellence__item"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="min-w-0">
                        <h3 className="text-[18px] font-semibold leading-[1.25] text-black md:text-[21px]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 max-w-[520px] text-[13px] font-medium leading-[1.55] text-[#657181] md:text-[14px]">
                          {item.description}
                        </p>
                      </div>
                      <div className="service-excellence__badge">
                        {item.value}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
