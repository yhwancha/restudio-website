import { Link, useLocation } from "react-router-dom";
import { Cube, ShieldCheck } from "@phosphor-icons/react";

const footerSocialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/revation.co.kr/",
    icon: "/assets/social/instagram.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/revation.co.kr",
    icon: "/assets/social/facebook-fill.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/revation21/?originalSubdomain=kr",
    icon: "/assets/social/linkedin-original.svg",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/revation?tracking_source=search_projects|bioplastic",
    icon: "/assets/social/behance-original.svg",
  },
];

const footerCaseLinks = [
  { label: "패키지 개발 사례", to: "/stories" },
  { label: "규제 대응 사례", to: "/stories" },
  { label: "통합 수행 사례", to: "/stories" },
];

const footerResourceLinks = [
  { label: "사용설명서", to: "/resources" },
  { label: "가이드북", to: "/resources" },
];

const footerNewsLinks = [
  { label: "블로그", to: "/news" },
  { label: "뉴스레터", to: "/news" },
  { label: "인스타", href: "https://www.instagram.com/revation.co.kr/" },
  { label: "보도자료", to: "/news" },
];

export function Footer() {
  const location = useLocation();
  const needsStickyBarOffset =
    location.pathname === "/" ||
    location.pathname === "/services/product-development" ||
    location.pathname === "/services/regulatory-response";

  return (
    <footer
      className={`site-footer${needsStickyBarOffset ? " site-footer--sticky-offset" : ""}`}
    >
      <div className="site-footer__top">
        <div className="site-footer__nav">
          <span className="site-footer__nav-heading">서비스 바로가기</span>

          <div className="site-footer__services">
            <Link to="/services/product-development">
              <Cube size={22} weight="fill" aria-hidden="true" />
              친환경 패키지 원스톱 솔루션
            </Link>
            <Link to="/services/regulatory-response">
              <ShieldCheck size={22} weight="fill" aria-hidden="true" />
              친환경 규제대응 솔루션
            </Link>
          </div>

          <nav className="site-footer__column" aria-label="고객사례">
            <strong>고객사례</strong>
            {footerCaseLinks.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="site-footer__column" aria-label="자료실">
            <strong>자료실</strong>
            {footerResourceLinks.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="site-footer__column" aria-label="새로운 소식">
            <strong>새로운 소식</strong>
            {footerNewsLinks.map((item) =>
              "href" in item ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <nav className="site-footer__column" aria-label="회사 소개">
            <strong>회사 소개</strong>
          </nav>
        </div>

        <address className="site-footer__contact">
          <p>
            <strong>CEO</strong>
            이민성
            <span aria-hidden="true" />
            <strong>사업자등록번호</strong>
            438-81-02556
          </p>
          <p>
            <strong>개인정보보호책임자</strong>
            이민성
            <span aria-hidden="true" />
            <strong>통신판매업신고</strong>
            제2024-서울강서-1185호
          </p>
          <p>
            <strong>본사</strong>
            서울특별시 강서구 마곡중앙로 143, 타워B, 3층
          </p>
          <p>
            <strong>R&amp;D센터</strong>
            서울특별시 강서구 마곡중앙8로 7길 57, 3층
          </p>
          <p>
            <strong>본사 연락처</strong>
            <a href="tel:0269597260">02-6959-7260</a>
            <span aria-hidden="true" />
            <a href="mailto:info@revation.co.kr">info@revation.co.kr</a>
          </p>
          <p>
            <strong>제품 문의</strong>
            <a href="tel:0264897080">02-6489-7080</a>
            <span aria-hidden="true" />
            <a href="mailto:sales@revation.co.kr">sales@revation.co.kr</a>
          </p>
        </address>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-left">
          <div className="site-footer__social" aria-label="소셜 링크">
            {footerSocialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <img src={icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="site-footer__brand">
            <img src="/assets/logo-dark.svg" alt="RESTUDIO" />
            <p>@2024 REVATION. All rights reserved.</p>
          </div>
        </div>

        <nav className="site-footer__policies" aria-label="정책 링크">
          <a
            href="https://material-beam-ed6.notion.site/20224acd6ea980678464cdaa66662ec7"
            target="_blank"
            rel="noreferrer"
          >
            이용약관
          </a>
          <span aria-hidden="true" />
          <a
            href="https://material-beam-ed6.notion.site/20224acd6ea980ee90cae0df5e5cc6af"
            target="_blank"
            rel="noreferrer"
          >
            개인정보처리방침
          </a>
        </nav>
      </div>
    </footer>
  );
}
