import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

type TabId = "onestop" | "ppwr";

export function Solutions() {
  const { t } = useI18n();
  const [active, setActive] = useState<TabId>("onestop");

  const tabs = [
    {
      id: "onestop" as const,
      title: t.tabOnestop,
      subtitle: t.tabOnestopSub,
      href: "/solutions/onestop",
    },
    {
      id: "ppwr" as const,
      title: t.tabPpwr,
      subtitle: t.tabPpwrSub,
      href: "/solutions/ppwr",
    },
  ];

  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <p className="solutions__lead reveal">{t.solutionsLead}</p>

        <div className="solutions__panel reveal reveal-delay-1">
          <div className="solutions__tabs" role="list" aria-label="솔루션">
            <div className="solutions__rail" aria-hidden="true">
              <span
                className={`solutions__rail-fill ${active === "ppwr" ? "is-bottom" : ""}`}
              />
            </div>
            {tabs.map((tab) => {
              const selected = active === tab.id;
              return (
                <div
                  key={tab.id}
                  id={`solutions-${tab.id}`}
                  className={`solutions__tab ${selected ? "is-active" : ""}`}
                  role="listitem"
                  onMouseEnter={() => setActive(tab.id)}
                  onFocus={() => setActive(tab.id)}
                >
                  <h3>{tab.title}</h3>
                  <p>{tab.subtitle}</p>
                  <Link className="solutions__learn-more" to={tab.href}>
                    {t.learnMore}
                  </Link>
                </div>
              );
            })}
          </div>

          <Link className="solutions__media" to={`/solutions/${active}`} aria-label={tabs.find((tab) => tab.id === active)?.title}>
            <img src="/assets/forest.jpg" alt="" width={528} height={405} />
          </Link>
        </div>
      </div>
    </section>
  );
}
