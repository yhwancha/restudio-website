import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="container hero__inner">
        <a
          className="report-chip reveal"
          href="https://tally.so/r/VLyB0N"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <strong>{t.reportChip}</strong>
            {t.reportChipRest}
          </span>
          <ArrowUpRight size={20} strokeWidth={1.5} absoluteStrokeWidth aria-hidden="true" />
        </a>

        <div className="hero__copy reveal reveal-delay-1">
          <h1>
            <span className="hero__line">{t.heroLine1}</span>
            <span className="hero__line hero__line--soft">{t.heroLine2}</span>
          </h1>
          <p>{t.heroSub}</p>
        </div>

        <div className="hero__ctas reveal reveal-delay-2">
          <a className="btn btn-outline" href="https://www.restudio.co.kr/">
            {t.consult}
          </a>
          <a
            className="btn btn-primary"
            href="https://www.restudio.co.kr/quotation"
          >
            {t.customQuote}
          </a>
        </div>
      </div>
    </section>
  );
}
