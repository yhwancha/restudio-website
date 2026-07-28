import { useState, type ComponentType } from "react";
import {
  Box,
  CircleDot,
  Contrast,
  Cylinder,
  Factory,
  FileText,
  FlaskConical,
  GalleryHorizontalEnd,
  Grid3x3,
  Layers,
  Leaf,
  type LucideIcon,
  MessagesSquare,
  Package,
  PenTool,
  Pin,
  RotateCw,
  Wine,
} from "lucide-react";
import { useI18n } from "../i18n";
import {
  BeautyIcon,
  ElectronicsIcon,
  FoodIcon,
  HealthcareIcon,
} from "./IndustryIcons";

type StoryId = "beauty" | "fnb" | "electronics" | "healthcare";

const lucideNoteProps = {
  className: "stories__note-icon",
  size: 18,
  strokeWidth: 1.5,
  absoluteStrokeWidth: true,
  "aria-hidden": true,
} as const;

const lucideTitleProps = {
  className: "stories__title-icon",
  size: 20,
  strokeWidth: 1.5,
  absoluteStrokeWidth: true,
  "aria-hidden": true,
} as const;

const noteIconsByStory: Partial<Record<StoryId, LucideIcon[]>> = {
  beauty: [Leaf, Layers, Box],
  fnb: [Wine, Grid3x3, GalleryHorizontalEnd],
  healthcare: [RotateCw, Cylinder, Contrast],
  electronics: [Pin, Leaf, CircleDot],
};

const defaultNoteIcons: LucideIcon[] = [Leaf, Layers, Box];

const tabs: {
  id: StoryId;
  Icon: ComponentType<{ className?: string }>;
  logo: string;
  images: string[];
}[] = [
  {
    id: "beauty",
    Icon: BeautyIcon,
    logo: "/assets/brands/19ec420dd5608da770d89546a3248f85b153057e.svg",
    images: [
      "/assets/stories/dweather-01.jpg",
      "/assets/stories/dweather-02.jpg",
    ],
  },
  {
    id: "fnb",
    Icon: FoodIcon,
    logo: "/assets/brands/dcb00014736e846360ab577ccc1bc48b74828cbf.svg",
    images: [
      "/assets/stories/bukchon-01.jpg",
      "/assets/stories/bukchon-02.jpg",
    ],
  },
  {
    id: "healthcare",
    Icon: HealthcareIcon,
    logo: "/assets/brands/a96fbb03a75436ff6927543a14e41b0a9968b6ea.svg",
    images: [
      "/assets/stories/spindle-01.jpg",
      "/assets/stories/spindle-02.jpg",
    ],
  },
  {
    id: "electronics",
    Icon: ElectronicsIcon,
    logo: "/assets/brands/3410b7d7520e10ad3f926a62ed7319d56e3a55a6.svg",
    images: ["/assets/stories/fintin-01.jpg"],
  },
];

type ProcessId =
  | "consulting"
  | "design"
  | "rnd"
  | "production"
  | "delivery"
  | "carbon";

const processTabs: {
  id: ProcessId;
  Icon: LucideIcon;
  images: string[];
}[] = [
  { id: "consulting", Icon: MessagesSquare, images: ["/assets/stories/process-consulting.png"] },
  { id: "design", Icon: PenTool, images: ["/assets/stories/process-design.png"] },
  { id: "rnd", Icon: FlaskConical, images: ["/assets/stories/process-rnd.png"] },
  { id: "production", Icon: Factory, images: ["/assets/stories/process-production.png"] },
  { id: "delivery", Icon: Package, images: ["/assets/stories/process-delivery.png"] },
  { id: "carbon", Icon: FileText, images: ["/assets/stories/process-carbon.png"] },
];

const PROCESS_TAB_MS = 4000;

type CustomerStoriesProps = {
  variant?: "stories" | "process";
};

export function CustomerStories({ variant = "stories" }: CustomerStoriesProps) {
  const { t } = useI18n();
  const isProcess = variant === "process";
  const [activeStory, setActiveStory] = useState<StoryId>("beauty");
  const [activeProcess, setActiveProcess] = useState<ProcessId>("consulting");
  const [slide, setSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = isProcess ? activeProcess : activeStory;
  const processTab = processTabs.find((tab) => tab.id === activeProcess) ?? processTabs[0];
  const storyTab = tabs.find((tab) => tab.id === activeStory) ?? tabs[0];
  const activeTab = isProcess ? processTab : storyTab;
  const content = isProcess
    ? t.processFlow.steps[activeProcess]
    : t.customerStories[activeStory];
  const imageCount = activeTab.images.length;
  const currentImage = activeTab.images[slide] ?? activeTab.images[0];
  const heading = isProcess ? t.processFlow.heading : t.storiesHeading;
  const sub = isProcess ? t.processFlow.sub : t.storiesSub;
  const tabLabel = isProcess ? t.processFlow.label : t.storiesLabel;
  const processIndex = processTabs.findIndex((tab) => tab.id === activeProcess);

  const selectTab = (id: StoryId | ProcessId) => {
    if (isProcess) {
      setActiveProcess(id as ProcessId);
      setProgressKey((key) => key + 1);
    } else {
      setActiveStory(id as StoryId);
    }
    setSlide(0);
  };

  const goToNextProcess = () => {
    const nextIndex = (processIndex + 1) % processTabs.length;
    setActiveProcess(processTabs[nextIndex].id);
    setSlide(0);
    setProgressKey((key) => key + 1);
  };

  const goPrev = () => {
    setSlide((current) => (current - 1 + imageCount) % imageCount);
  };

  const goNext = () => {
    setSlide((current) => (current + 1) % imageCount);
  };

  return (
    <section
      className={`stories ${isProcess ? "stories--process" : ""}`}
      id={isProcess ? "process-flow" : "customer-stories"}
    >
      <div className="container stories__inner">
        <header className="stories__header">
          <h2>
            {heading.map((line) => (
              <span key={`${line.before}${"highlight" in line ? line.highlight : ""}`}>
                {line.before}
                {"highlight" in line && line.highlight ? (
                  <em className="stories__highlight">{line.highlight}</em>
                ) : null}
                {"after" in line ? line.after : null}
              </span>
            ))}
          </h2>
          <p>{sub}</p>
        </header>

        <div
          className={isProcess ? "stories__layout" : undefined}
          onMouseEnter={() => {
            if (isProcess) setPaused(true);
          }}
          onMouseLeave={() => {
            if (isProcess) setPaused(false);
          }}
        >
          {isProcess ? (
            <aside className="stories__rail" aria-label={tabLabel}>
              <div
                className="stories__tabs stories__tabs--process"
                role="tablist"
                aria-label={tabLabel}
              >
                {processTabs.map((tab, index) => {
                  const selected = tab.id === activeProcess;
                  const progressState =
                    index < processIndex
                      ? "is-done"
                      : index === processIndex
                        ? "is-active"
                        : "";
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      className={`stories__tab stories__tab--process ${selected ? "is-active" : ""}`}
                      onClick={() => selectTab(tab.id)}
                    >
                      <span
                        className={`stories__progress-seg ${progressState}`}
                        aria-hidden="true"
                      >
                        <span
                          key={index === processIndex ? progressKey : undefined}
                          className="stories__progress-fill"
                          style={
                            index === processIndex
                              ? {
                                  animationDuration: `${PROCESS_TAB_MS}ms`,
                                  animationPlayState: paused ? "paused" : "running",
                                }
                              : undefined
                          }
                          onAnimationEnd={() => {
                            if (index === processIndex) goToNextProcess();
                          }}
                        />
                      </span>
                      <span className="stories__tab-num">{index + 1}</span>
                      <span className="stories__tab-label">{t.processFlow.tabs[tab.id]}</span>
                    </button>
                  );
                })}
              </div>
            </aside>
          ) : null}

          <article className="stories__card">
            {isProcess ? null : (
              <div className="stories__tabs-wrap">
                <div className="stories__tabs" role="tablist" aria-label={tabLabel}>
                  {tabs.map((tab) => {
                    const selected = tab.id === activeStory;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        className={`stories__tab ${selected ? "is-active" : ""}`}
                        onClick={() => selectTab(tab.id)}
                      >
                        <tab.Icon />
                        <span>{t.storyTabs[tab.id]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="stories__body" key={active}>
              <div className="stories__media">
                <img
                  key={currentImage}
                  src={currentImage}
                  alt=""
                  width={640}
                  height={480}
                />
                {imageCount > 1 ? (
                  <>
                    <button
                      type="button"
                      className="stories__media-nav stories__media-nav--prev"
                      aria-label="Previous image"
                      onClick={goPrev}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="stories__media-nav stories__media-nav--next"
                      aria-label="Next image"
                      onClick={goNext}
                    >
                      ›
                    </button>
                    <div className="stories__media-dots" aria-hidden="true">
                      {activeTab.images.map((src, index) => (
                        <span
                          key={src}
                          className={`stories__media-dot ${index === slide ? "is-active" : ""}`}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>

              <div className="stories__content">
                {isProcess ? (
                  <div className="stories__step-label">
                    STEP {String(processIndex + 1).padStart(2, "0")}
                  </div>
                ) : (
                  <div className="stories__client">
                    <img
                      src={storyTab.logo}
                      alt={t.customerStories[activeStory].company}
                      className="stories__logo"
                      height={22}
                    />
                  </div>
                )}

                <h3 className={isProcess ? "stories__title--with-icon" : undefined}>
                  {isProcess ? (
                    <span className="stories__title-icon-wrap">
                      <processTab.Icon {...lucideTitleProps} />
                    </span>
                  ) : null}
                  <span className="stories__title-text">
                    {content.title.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </h3>
                <p>{content.body}</p>
                {content.notes.length > 0 ? (
                  <ul className="stories__notes">
                    {content.notes.map((note, index) => {
                      const icons = isProcess
                        ? defaultNoteIcons
                        : (noteIconsByStory[activeStory] ?? defaultNoteIcons);
                      const Icon = icons[index] ?? Leaf;
                      return (
                        <li key={note} className="stories__note">
                          <Icon {...lucideNoteProps} />
                          <span>{note}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}

                <ul className="stories__tags">
                  {content.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

              {isProcess ? null : (
                <div className="stories__footer">
                  <a
                    className="stories__link"
                    href={t.customerStories[activeStory].articleHref}
                  >
                    {t.storiesReadMore} <span aria-hidden="true">›</span>
                  </a>
                </div>
              )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
