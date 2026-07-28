import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, Sparkles, TrendingUp, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageButton } from "./LanguageButton";
import { OnestopIcon, PpwrIcon } from "./SolutionIcons";
import { useI18n } from "../i18n";

function MenuIcon({ open }: { open: boolean }) {
  const Icon = open ? X : Menu;
  return <Icon size={22} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" />;
}

export function Header() {
  const { t } = useI18n();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [trendingOpen, setTrendingOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    setSolutionsOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 959px)");
    const sync = () => {
      setIsMobile(media.matches);
      if (!media.matches) setMenuOpen(false);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!isMobile || t.trendingSearches.length < 2) return;

    const id = window.setInterval(() => {
      setTrendingIndex((current) => (current + 1) % t.trendingSearches.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [isMobile, t.trendingSearches.length]);

  const solutionCards = [
    {
      href: "/solutions/onestop",
      title: t.onestopNav,
      description: t.tabOnestopSub,
      Icon: OnestopIcon,
    },
    {
      href: "/solutions/ppwr",
      title: t.ppwrNav,
      description: t.tabPpwrSub,
      Icon: PpwrIcon,
    },
  ];

  const mobileTrending = t.trendingSearches[trendingIndex] ?? t.trendingSearches[0];

  const searchBar = (
    <div
      className={`site-header__search-wrap ${trendingOpen ? "is-open" : ""} ${isMobile ? "is-mobile" : ""}`}
      onMouseEnter={() => {
        if (!isMobile) setTrendingOpen(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setTrendingOpen(false);
      }}
    >
      {isMobile ? (
        <div
          id="trending-search-menu"
          className="search-trending is-mobile"
          role="listbox"
          aria-label={t.trendingSearch}
        >
          <p className="search-trending__title">{t.trendingSearch}</p>
          <ul className="search-trending__list">
            <li key={mobileTrending}>
              <button
                type="button"
                className="search-trending__item"
                role="option"
                onClick={() => setQuery(mobileTrending)}
              >
                <span className="search-trending__rank">{trendingIndex + 1}</span>
                <span className="search-trending__term">{mobileTrending}</span>
                <TrendingUp size={16} strokeWidth={1.5} absoluteStrokeWidth aria-hidden="true" />
              </button>
            </li>
          </ul>
        </div>
      ) : null}

      <form
        className="site-header__search"
        role="search"
        aria-label={t.aiSearchLabel}
        onSubmit={(event) => event.preventDefault()}
      >
        <Sparkles
          className="ai-sparkle"
          size={18}
          strokeWidth={1.5}
          absoluteStrokeWidth
          aria-hidden="true"
        />
        <input
          type="search"
          name="q"
          value={query}
          placeholder={isMobile ? t.aiSearchMobile : t.aiSearch}
          autoComplete="off"
          aria-label={t.aiSearchLabel}
          aria-expanded={!isMobile && trendingOpen}
          aria-controls={isMobile ? undefined : "trending-search-menu"}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => {
            if (!isMobile) setTrendingOpen(true);
          }}
        />
        {query.trim() ? (
          <button
            type="submit"
            className="site-header__search-submit"
            aria-label={t.aiSearchSubmit}
          >
            <ArrowRight size={16} strokeWidth={1.7} absoluteStrokeWidth aria-hidden="true" />
          </button>
        ) : null}
      </form>

      {!isMobile ? (
        <div
          id="trending-search-menu"
          className="search-trending"
          role="listbox"
          aria-label={t.trendingSearch}
        >
          <p className="search-trending__title">{t.trendingSearch}</p>
          <ul className="search-trending__list">
            {t.trendingSearches.map((term, index) => (
              <li key={term}>
                <button
                  type="button"
                  className="search-trending__item"
                  role="option"
                  onClick={() => {
                    setQuery(term);
                    setTrendingOpen(false);
                  }}
                >
                  <span className="search-trending__rank">{index + 1}</span>
                  <span className="search-trending__term">{term}</span>
                  <TrendingUp size={16} strokeWidth={1.5} absoluteStrokeWidth aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner container">
          <div className="site-header__left">
            <Link to="/" className="site-header__brand" aria-label="restudio home">
              <Logo />
            </Link>
            <nav className="site-header__nav" aria-label="주요 메뉴">
              <div
                className={`nav-popover ${solutionsOpen ? "is-open" : ""}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setSolutionsOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  className="nav-popover__trigger"
                  aria-haspopup="true"
                  aria-expanded={solutionsOpen}
                  onClick={() => setSolutionsOpen((open) => !open)}
                  onFocus={() => setSolutionsOpen(true)}
                >
                  {t.solutionsNav}
                </button>
                <div className="nav-popover__menu" role="menu">
                  {solutionCards.map(({ Icon, ...card }) => (
                    <Link
                      key={card.href}
                      role="menuitem"
                      className="nav-popover__card"
                      to={card.href}
                      onClick={() => setSolutionsOpen(false)}
                    >
                      <span className="nav-popover__icon">
                        <Icon />
                      </span>
                      <strong>{card.title}</strong>
                      <span>{card.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <a href="https://www.restudio.co.kr/blog">{t.blog}</a>
            </nav>
          </div>

          {!isMobile ? searchBar : null}

          <div className="site-header__actions">
            <a className="link-quiet site-header__login" href="https://www.restudio.co.kr/">
              {t.login}
            </a>
            <a
              className="btn btn-primary btn-sm site-header__quote"
              href="https://www.restudio.co.kr/quotation"
            >
              {t.quote}
            </a>
            <LanguageButton />
            <button
              type="button"
              className="site-header__menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-menu"
          className={`site-header__mobile-menu ${menuOpen ? "is-open" : ""}`}
          hidden={!menuOpen}
        >
          <div className="container site-header__mobile-menu-inner">
            <p className="site-header__mobile-label">{t.solutionsNav}</p>
            {solutionCards.map(({ Icon, ...card }) => (
              <Link
                key={card.href}
                className="site-header__mobile-link"
                to={card.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className="site-header__mobile-icon">
                  <Icon />
                </span>
                <span>
                  <strong>{card.title}</strong>
                  <span>{card.description}</span>
                </span>
              </Link>
            ))}
            <a
              className="site-header__mobile-link site-header__mobile-link--simple"
              href="https://www.restudio.co.kr/blog"
              onClick={() => setMenuOpen(false)}
            >
              {t.blog}
            </a>
            <a
              className="site-header__mobile-link site-header__mobile-link--simple"
              href="https://www.restudio.co.kr/"
              onClick={() => setMenuOpen(false)}
            >
              {t.login}
            </a>
            <a
              className="btn btn-primary site-header__mobile-cta"
              href="https://www.restudio.co.kr/quotation"
              onClick={() => setMenuOpen(false)}
            >
              {t.quote}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile: outside header so position:fixed isn't trapped by backdrop-filter */}
      {isMobile ? searchBar : null}
    </>
  );
}
