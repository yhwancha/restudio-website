import { useEffect, useState, type ComponentType, type CSSProperties } from "react";
import { TriangleAlert } from "lucide-react";
import { useI18n } from "../i18n";
import { CtaBanner } from "../components/CtaBanner";
import { CustomerStories } from "../components/CustomerStories";
import {
  ActionStepIcon,
  CurationStepIcon,
  DiagnoseStepIcon,
  OnestopIcon,
  ProjectStepIcon,
  PpwrIcon,
  QuoteStepIcon,
  ReportStepIcon,
} from "../components/SolutionIcons";

type SolutionId = "onestop" | "ppwr";

const meta = {
  onestop: {
    Icon: OnestopIcon,
    stepIcons: [CurationStepIcon, QuoteStepIcon, ProjectStepIcon, ReportStepIcon],
  },
  ppwr: {
    Icon: PpwrIcon,
    stepIcons: [DiagnoseStepIcon, ActionStepIcon, ReportStepIcon],
  },
} as const;

/** EU PPWR enforcement date — 2026-08-12 (Asia/Seoul) */
const PPWR_START_ISO = "2026-08-12";

function getSeoulDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  return { year, month, day };
}

function daysUntilPpwr(now = new Date()) {
  const today = getSeoulDateParts(now);
  const [targetYear, targetMonth, targetDay] = PPWR_START_ISO.split("-").map(Number);
  const todayUtc = Date.UTC(today.year, today.month - 1, today.day);
  const targetUtc = Date.UTC(targetYear, targetMonth - 1, targetDay);
  return Math.round((targetUtc - todayUtc) / 86_400_000);
}

/** Progress along the 2026 → 2030 timeline (Asia/Seoul calendar days). */
function timelineProgressTo2030(now = new Date()) {
  const today = getSeoulDateParts(now);
  const start = Date.UTC(2026, 0, 1);
  const end = Date.UTC(2030, 0, 1);
  const current = Date.UTC(today.year, today.month - 1, today.day);
  return Math.min(1, Math.max(0, (current - start) / (end - start)));
}

function formatCountdownLabel(template: string, days: number) {
  if (days > 0) {
    return template.replace("{days}", String(days));
  }
  if (days === 0) {
    return template.includes("시행까지")
      ? "EU PPWR 시행 D-Day"
      : "EU PPWR enforcement: D-Day";
  }
  return template.includes("시행까지")
    ? "EU PPWR 시행 중"
    : "EU PPWR now in effect";
}

export function SolutionPage({ id }: { id: SolutionId }) {
  const { t } = useI18n();
  const page = t.solutionPages[id];
  const { Icon, stepIcons } = meta[id];
  const [dDay, setDDay] = useState(() => daysUntilPpwr());
  const [timelineProgress, setTimelineProgress] = useState(() => timelineProgressTo2030());
  const showCountdown = id === "ppwr" && "countdownLabel" in page && page.countdownLabel;
  const showRisksTimeline = id === "ppwr" && "risks" in page && Boolean(page.risks);

  useEffect(() => {
    if (!showCountdown) return;

    const update = () => setDDay(daysUntilPpwr());
    update();

    const intervalId = window.setInterval(update, 60_000);
    const onVisibility = () => {
      if (document.visibilityState === "visible") update();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [showCountdown]);

  useEffect(() => {
    if (!showRisksTimeline) return;

    const update = () => setTimelineProgress(timelineProgressTo2030());
    update();

    const intervalId = window.setInterval(update, 60_000);
    const onVisibility = () => {
      if (document.visibilityState === "visible") update();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [showRisksTimeline]);

  return (
    <main className="solution-page">
      <section className="solution-hero">
        <div className="container solution-hero__inner">
          {showCountdown ? (
            <span className="solution-hero__badge">
              {formatCountdownLabel(page.countdownLabel, dDay)}
            </span>
          ) : null}
          <div className="solution-hero__title">
            <span className="solution-hero__icon">
              <Icon />
            </span>
            <h1>{page.title}</h1>
          </div>
          <p className="solution-hero__lead">{page.lead}</p>
          <div className="solution-hero__actions">
            {"secondaryCta" in page && page.secondaryCta ? (
              <a className="btn btn-outline" href={page.secondaryHref}>
                {page.secondaryCta} <span aria-hidden="true">→</span>
              </a>
            ) : null}
            <a className="btn btn-primary" href="https://www.restudio.co.kr/quotation">
              {t.customQuote}
            </a>
          </div>
        </div>
      </section>

      {id === "onestop" ? <CustomerStories variant="process" /> : null}

      <section className="solution-system" id="system">
        <div className="container solution-system__inner">
          <header className="solution-system__header">
            <span className="solution-system__badge">{page.systemBadge}</span>
            <h2>{page.systemTitle}</h2>
          </header>

          <ol className="solution-system__grid">
            {page.steps.map((step, index) => {
              const StepIcon = stepIcons[index] as ComponentType | undefined;
              return (
                <li key={step.title} className="solution-system__card">
                  <span className="solution-system__icon">
                    {StepIcon ? <StepIcon /> : null}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {"risks" in page && page.risks ? (
        <section className="solution-risks" id="risks">
          <div className="container solution-risks__inner">
            <header className="solution-risks__header">
              {"eyebrow" in page.risks && page.risks.eyebrow ? (
                <span className="solution-risks__eyebrow">{page.risks.eyebrow}</span>
              ) : null}
              <h2>{page.risks.title}</h2>
              <p>{page.risks.sub}</p>
            </header>

            <div className="solution-risks__stats">
              {page.risks.stats.map((stat) => (
                <article key={stat.label} className="solution-risks__stat">
                  <p className="solution-risks__value">{stat.value}</p>
                  <p className="solution-risks__label">{stat.label}</p>
                  <p className="solution-risks__desc">{stat.desc}</p>
                </article>
              ))}
            </div>

            <div className="solution-risks__timeline">
              {"timelineTitle" in page.risks && page.risks.timelineTitle ? (
                <h3 className="solution-risks__timeline-title">{page.risks.timelineTitle}</h3>
              ) : null}
              <ol
                className="solution-risks__track"
                style={
                  {
                    "--timeline-progress": String(timelineProgress),
                  } as CSSProperties
                }
              >
                {page.risks.timeline.map((item) => (
                  <li
                    key={item.year}
                    className={`solution-risks__milestone ${item.year === "2026" ? "is-pulse" : ""}`}
                  >
                    <div className="solution-risks__marker">
                      <span className="solution-risks__dot" aria-hidden="true" />
                      <span className="solution-risks__year">{item.year}</span>
                    </div>
                    <div className="solution-risks__milestone-body">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {"timelineAlert" in page.risks && page.risks.timelineAlert ? (
                <div className="solution-risks__alert" role="status">
                  <span className="solution-risks__alert-icon" aria-hidden="true">
                    <TriangleAlert size={18} strokeWidth={1.7} absoluteStrokeWidth />
                  </span>
                  <p>{page.risks.timelineAlert}</p>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {"pricing" in page && page.pricing ? (
        <section className="solution-pricing" id="pricing">
          <div className="container">
            <header className="solution-pricing__header">
              <h2>{page.pricing.title}</h2>
              <p>{page.pricing.sub}</p>
            </header>

            <div className="solution-pricing__plans">
              {page.pricing.plans.map((plan) => {
                const featured = "featured" in plan && plan.featured;
                const featuredLabel =
                  "featuredLabel" in plan ? plan.featuredLabel : undefined;
                return (
                <article
                  key={plan.title}
                  className={`solution-pricing__plan ${featured ? "is-featured" : ""}`}
                >
                  <div className="solution-pricing__plan-top">
                    <span className="solution-pricing__badge">{plan.badge}</span>
                    {featured && featuredLabel ? (
                      <span className="solution-pricing__featured-label">
                        {featuredLabel}
                      </span>
                    ) : null}
                  </div>
                  <h3>{plan.title}</h3>
                  <p className="solution-pricing__plan-body">{plan.body}</p>
                  <p className="solution-pricing__price">
                    <strong>{plan.price}</strong>
                    <span>{plan.unit}</span>
                  </p>
                  <ul className="solution-pricing__features">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${featured ? "btn-primary" : "btn-outline"}`}
                    href={plan.href}
                  >
                    {plan.cta}
                  </a>
                </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner />
    </main>
  );
}

export function OnestopSolutionPage() {
  return <SolutionPage id="onestop" />;
}

export function PpwrSolutionPage() {
  return <SolutionPage id="ppwr" />;
}
