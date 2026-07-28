import { Logo } from "./Logo";
import { useI18n } from "../i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo className="logo-light" />
          <div className="site-footer__info">
            <p>{t.ceo}</p>
            <p>{t.bizNo}</p>
            <p>{t.address}</p>
            <p>{t.email}</p>
            <p>{t.phone}</p>
          </div>
        </div>

        <img
          className="site-footer__awards"
          src="/assets/awards.png"
          alt="Awards and certifications"
          width={414}
          height={186}
        />

        <div className="site-footer__bottom">
          <p>© 2026 Revation. All rights reserved.</p>
          <div className="site-footer__links">
            <a href="#">{t.terms}</a>
            <a href="#">{t.privacy}</a>
            <a href="#">{t.marketing}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
