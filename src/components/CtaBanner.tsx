import { useI18n } from "../i18n";

export function CtaBanner() {
  const { t } = useI18n();
  const [line1, line2] = t.ctaBody.split("\n");

  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner__card reveal">
          <img
            className="cta-banner__bg"
            src="/assets/forest.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="cta-banner__overlay" aria-hidden="true" />
          <div className="cta-banner__content">
            <div>
              <h2>{t.ctaTitle}</h2>
              <p>
                {line1}
                <br />
                {line2}
              </p>
            </div>
            <a
              className="btn btn-light"
              href="https://www.restudio.co.kr/quotation"
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
