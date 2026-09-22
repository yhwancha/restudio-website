import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type FilterKey = "client" | "material" | "project";

type CaseItem = {
  title: string;
  customer: string;
  image: string;
  hoverImage: string;
  href?: string;
  client: string;
  material: string;
  project: string;
};

const filters: Record<FilterKey, string[]> = {
  client: ["전체", "화장품", "F&B", "패션", "헬스케어", "전자제품", "생활용품"],
  material: ["전체", "페이퍼몰드", "바이오플라스틱", "PCR/PIR", "업사이클"],
  project: ["전체", "제품 개발", "규제 대응", "통합 수행"],
};

const filterLabels: Record<FilterKey, string> = {
  client: "고객 타입",
  material: "소재 타입",
  project: "프로젝트 타입",
};

const caseItems: CaseItem[] = [
  {
    title: "뮤어하이크 리유저블 박스",
    customer: "SIERRA DESIGNS",
    image: "https://www.revation.co.kr/upload/55_List%20on_main.png",
    hoverImage: "https://www.revation.co.kr/upload/55_List%20off.png",
    href: "/stories/muir-hike-reusable-box",
    client: "패션",
    material: "페이퍼몰드",
    project: "제품 개발",
  },
  {
    title: "카라V 샴푸&바디워시 패키지",
    customer: "MIJU",
    image: "https://www.revation.co.kr/upload/0_List%20on_main(11).png",
    hoverImage: "https://www.revation.co.kr/upload/0_List%20off(7).png",
    client: "화장품",
    material: "페이퍼몰드",
    project: "제품 개발",
  },
  {
    title: "삼양푸드 아커만시아 패키지",
    customer: "SAMYANG FOODS",
    image: "https://www.revation.co.kr/upload/0_List%20on_main(10).png",
    hoverImage: "https://www.revation.co.kr/upload/0_List%20off(6).png",
    client: "F&B",
    material: "페이퍼몰드",
    project: "제품 개발",
  },
  {
    title: "선코타 선블록 패키지",
    customer: "D:WEATHER",
    image: "https://www.revation.co.kr/upload/0_List%20on_main(8).png",
    hoverImage: "https://www.revation.co.kr/upload/0_List%20off(4).png",
    client: "화장품",
    material: "페이퍼몰드",
    project: "제품 개발",
  },
  {
    title: "멀티밤 패키지",
    customer: "GBH",
    image: "https://www.revation.co.kr/upload/0_List%20on_main(4).png",
    hoverImage: "https://www.revation.co.kr/upload/0_List%20off(0).png",
    client: "화장품",
    material: "PCR/PIR",
    project: "제품 개발",
  },
  {
    title: "메종사바티 전통주 패키지",
    customer: "MASION SABATY",
    image: "https://www.revation.co.kr/upload/0_List%20on_main(6).png",
    hoverImage: "https://www.revation.co.kr/upload/0_List%20off(2).png",
    client: "F&B",
    material: "페이퍼몰드",
    project: "제품 개발",
  },
  {
    title: "센텔리안24 앰플 트레이 패키지",
    customer: "CENTELLIAN24",
    image: "https://www.revation.co.kr/upload/49_List%20on_main.png",
    hoverImage: "https://www.revation.co.kr/upload/49_List%20off.png",
    client: "헬스케어",
    material: "바이오플라스틱",
    project: "제품 개발",
  },
  {
    title: "북촌소주 패키지",
    customer: "NOSTALGIA",
    image: "https://www.revation.co.kr/upload/48_List%20on_main.jpg",
    hoverImage: "https://www.revation.co.kr/upload/48_List%20off.jpg",
    client: "F&B",
    material: "페이퍼몰드",
    project: "통합 수행",
  },
  {
    title: "보닉스 샤인 프로페셔널 패키지",
    customer: "BIOPLUS",
    image: "https://www.revation.co.kr/upload/47_List%20on_main.png",
    hoverImage: "https://www.revation.co.kr/upload/47_List%20off.png",
    client: "헬스케어",
    material: "PCR/PIR",
    project: "제품 개발",
  },
  {
    title: "티웨이 기내식 트레이",
    customer: "T'WAY AIR",
    image: "https://www.revation.co.kr/upload/46_List%20on_main.png",
    hoverImage: "https://www.revation.co.kr/upload/46_List%20off.png",
    client: "생활용품",
    material: "업사이클",
    project: "통합 수행",
  },
  {
    title: "퍼퓸 바 컬렉션",
    customer: "ARLT",
    image: "https://www.revation.co.kr/upload/46_List%20on_main(0).png",
    hoverImage: "https://www.revation.co.kr/upload/46_List%20off(0).png",
    client: "화장품",
    material: "바이오플라스틱",
    project: "제품 개발",
  },
  {
    title: "퍼퓸 바 어메니티",
    customer: "ARLT",
    image: "https://www.revation.co.kr/upload/0_List%20on_main(3).png",
    hoverImage: "https://www.revation.co.kr/upload/0_List%20off.png",
    client: "화장품",
    material: "업사이클",
    project: "제품 개발",
  },
];

export function StoriesListPage() {
  const [activeFilters, setActiveFilters] = useState<Record<FilterKey, string>>({
    client: "전체",
    material: "전체",
    project: "전체",
  });

  const visibleItems = useMemo(
    () =>
      caseItems.filter((item) =>
        (Object.keys(activeFilters) as FilterKey[]).every((key) => {
          const selected = activeFilters[key];
          return selected === "전체" || item[key] === selected;
        }),
      ),
    [activeFilters],
  );

  const selectFilter = (key: FilterKey, value: string) => {
    setActiveFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <main className="stories-list-page">
      <section className="stories-list-hero">
        <h1>고객 사례</h1>

        <div className="stories-list-filters" aria-label="고객 사례 필터">
          {(Object.keys(filters) as FilterKey[]).map((key) => (
            <div className="stories-list-filter" key={key}>
              <strong>{filterLabels[key]}</strong>
              <div>
                {filters[key].map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    className={activeFilters[key] === filter ? "is-active" : undefined}
                    onClick={() => selectFilter(key, filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stories-list-section" aria-label="고객 사례 목록">
        <div className="stories-list-grid">
          {visibleItems.map((item) => (
            <Link
              to={item.href ?? "#"}
              className={`stories-list-card ${item.href ? "" : "is-disabled"}`.trim()}
              key={`${item.title}-${item.image}`}
              aria-disabled={!item.href}
            >
              <div className="stories-list-card__media">
                <img className="stories-list-card__image stories-list-card__image--base" src={item.image} alt={item.title} />
                <img
                  className="stories-list-card__image stories-list-card__image--hover"
                  src={item.hoverImage}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <strong className="stories-list-card__customer">{item.customer}</strong>
              <div className="stories-list-card__content">
                <div className="stories-list-card__tags">
                  <span>{item.client}</span>
                  <span>{item.project}</span>
                  <span>{item.material}</span>
                </div>
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
