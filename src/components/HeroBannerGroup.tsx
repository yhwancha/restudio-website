import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const banners = [
  {
    image: "/assets/ads/banner-packaging-short.webp",
    alt: "친환경 패키지 개발, 리스튜디오에서 한 번에. 소재 선정부터 디자인·양산까지. 제품 개발 알아보기",
    to: "/services/product-development",
  },
  {
    image: "/assets/ads/banner-ppwr-short.webp",
    alt: "EU 수출을 준비하는 PPWR 규제 대응. 첫 진단부터 함께. 무료 진단 받기",
    to: "/project-management/quote?service=regulatory-response",
  },
  {
    image: "/assets/ads/banner-guide-short.webp",
    alt: "소재부터 수출 규제까지, 리스튜디오 가이드북. 무료 가이드 살펴보기",
    to: "/resources",
  },
];

export function HeroBannerGroup() {
  const [activeBanner, setActiveBanner] = useState(0);
  const moveBanner = (direction: number) => {
    setActiveBanner((current) => (current + direction + banners.length) % banners.length);
  };

  return (
    <div className="hero-banner-group" aria-label="리스튜디오 서비스 안내">
      <div className="hero-banner hero-banner--main" role="region" aria-roledescription="캐러셀" aria-label="주요 서비스 배너">
        <div className="hero-banner__track" style={{ transform: `translateX(-${activeBanner * 100}%)` }}>
          {banners.map((banner, index) => (
            <Link className="hero-banner__slide" to={banner.to} key={banner.image} tabIndex={index === activeBanner ? 0 : -1} aria-hidden={index !== activeBanner}>
              <img src={banner.image} alt={banner.alt} />
            </Link>
          ))}
        </div>
        <button className="hero-banner__caret hero-banner__caret--prev" type="button" aria-label="이전 배너" onClick={() => moveBanner(-1)}>
          <CaretLeft size={28} weight="regular" aria-hidden="true" />
        </button>
        <button className="hero-banner__caret hero-banner__caret--next" type="button" aria-label="다음 배너" onClick={() => moveBanner(1)}>
          <CaretRight size={28} weight="regular" aria-hidden="true" />
        </button>
        <span className="sr-only" aria-live="polite">{activeBanner + 1}/{banners.length}</span>
      </div>
      {[1, 2].map((offset) => {
        const banner = banners[(activeBanner + offset) % banners.length];
        return (
          <Link className="hero-banner" to={banner.to} key={offset}>
            <img src={banner.image} alt={banner.alt} />
          </Link>
        );
      })}
    </div>
  );
}
