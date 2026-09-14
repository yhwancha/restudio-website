import { Link, useLocation } from "react-router-dom";

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

export function Footer() {
  const location = useLocation();
  const needsStickyBarOffset =
    location.pathname === "/services/product-development" ||
    location.pathname === "/services/regulatory-response";

  return (
    <footer
      className={`site-footer${needsStickyBarOffset ? " site-footer--sticky-offset" : ""}`}
    >
      <div className="site-footer__top">
        <div className="site-footer__left">
          <div className="site-footer__cta">
            <Link to="/project-management/quote?service=product-development">
              제품개발문의
            </Link>
            <Link to="/services/regulatory-response">규제대응문의</Link>
          </div>

          <address className="site-footer__contact">
            <p>
              <strong>주소</strong>
              서울특별시 강서구 마곡중앙로 143, 타워B, 3층
            </p>
            <p>
              <strong>이메일</strong>
              <a href="mailto:sales@revation.co.kr">sales@revation.co.kr</a>
            </p>
            <p>
              <strong>전화번호</strong>
              <a href="tel:0264897080">02-6489-7080</a>
            </p>
          </address>
        </div>

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
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__brand">
          <img src="/assets/logo-dark.svg" alt="RESTUDIO" />
          <p>@2024 REVATION. All rights reserved.</p>
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
