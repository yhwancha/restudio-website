import { useI18n } from "../i18n";

type Brand = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const rowOne: Brand[] = [
  {
    src: "/assets/brands/c304088083261ace0cfb0f38ee8a1bef2618fd82.svg",
    alt: "Brand logo",
    width: 112,
    height: 22,
  },
  {
    src: "/assets/brands/3c662a6f920ea42869b24263f83bb40fa093f8ad.svg",
    alt: "Brand logo",
    width: 111,
    height: 22,
  },
  {
    src: "/assets/brands/a06d19d02b7bb8d0f5bb8ef6cfdf3ff9531c4450.svg",
    alt: "Brand logo",
    width: 105,
    height: 20,
  },
  {
    src: "/assets/brands/507f0240d3f7e7cc57f1b5e16a9217764b054a62.svg",
    alt: "Brand logo",
    width: 142,
    height: 24,
  },
  {
    src: "/assets/brands/a96fbb03a75436ff6927543a14e41b0a9968b6ea.svg",
    alt: "유한킴벌리",
    width: 103,
    height: 30,
  },
  {
    src: "/assets/brands/19ec420dd5608da770d89546a3248f85b153057e.svg",
    alt: "아모레퍼시픽",
    width: 175,
    height: 30,
  },
  {
    src: "/assets/brands/3410b7d7520e10ad3f926a62ed7319d56e3a55a6.svg",
    alt: "LG전자",
    width: 113,
    height: 30,
  },
  {
    src: "/assets/brands/a196de62f2614692e148b127a6e0c2ffe34b160a.svg",
    alt: "하이브",
    width: 104,
    height: 20,
  },
];

const rowTwo: Brand[] = [
  {
    src: "/assets/brands/e92bf4f96b81abd8771a7d050ae908275df150b3.svg",
    alt: "기업은행",
    width: 135,
    height: 26,
  },
  {
    src: "/assets/brands/16cf68bb0e1b7fe8f28f66eba7bbeb9d49653168.svg",
    alt: "Brand logo",
    width: 143,
    height: 20,
  },
  {
    src: "/assets/brands/a196de62f2614692e148b127a6e0c2ffe34b160a.svg",
    alt: "하이브",
    width: 104,
    height: 20,
  },
  {
    src: "/assets/brands/dcb00014736e846360ab577ccc1bc48b74828cbf.svg",
    alt: "LOTTE",
    width: 99,
    height: 30,
  },
  {
    src: "/assets/brands/05afda861183997b0d0b678ed4a443af82e58dbc.svg",
    alt: "KAO",
    width: 76,
    height: 29,
  },
  {
    src: "/assets/brands/bc745426fdb0c3b4957c9c3a1d24e63955c78180.svg",
    alt: "LG",
    width: 105,
    height: 30,
  },
  {
    src: "/assets/brands/2e7f7aee5a731379391ef47691a2ddc28e86d955.svg",
    alt: "Brand logo",
    width: 243,
    height: 30,
  },
];

function MarqueeRow({
  brands,
  reverse = false,
}: {
  brands: Brand[];
  reverse?: boolean;
}) {
  const loop = [...brands, ...brands];

  return (
    <div className="trust__marquee" aria-hidden="true">
      <div className={`marquee-track ${reverse ? "marquee-track--reverse" : ""}`}>
        {loop.map((brand, i) => (
          <span key={`${brand.src}-${i}`} className="trust__brand">
            <img
              src={brand.src}
              alt=""
              width={Math.round((brand.width / brand.height) * 24)}
              height={24}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Trust() {
  const { t } = useI18n();

  return (
    <section className="trust">
      <div className="container">
        <p className="trust__title reveal">
          <strong>{t.trustCount}</strong> {t.trust}
        </p>
      </div>
      <div className="trust__rows reveal reveal-delay-1">
        <MarqueeRow brands={rowOne} />
        <MarqueeRow brands={rowTwo} reverse />
      </div>
    </section>
  );
}
