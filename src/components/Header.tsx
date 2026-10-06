import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  CaretDown,
  Cube,
  FileText,
  GlobeHemisphereEast,
  List,
  UserCircle,
  X,
  type Icon,
} from "@phosphor-icons/react";
import { Logo } from "./Logo";

interface NavItem {
  label: string;
  to: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "고객 사례", to: "/stories" },
  { label: "자료실", to: "/resources" },
  { label: "새로운 소식", to: "/news" },
];

const MOBILE_NAV_ITEMS: NavItem[] = [...NAV_ITEMS];

const CASE_INDUSTRIES = [
  "화장품",
  "F&B",
  "패션",
  "헬스케어",
  "전자제품",
  "생활용품",
] as const;

const SERVICE_MENU_GROUPS = [
  {
    title: "제품 개발 솔루션",
    to: "/services/product-development",
    Icon: Cube,
    items: [
      {
        label: "원스톱 개발 시스템",
        to: "/services/product-development/onestop-system",
      },
      {
        label: "업종별 맞춤 설계 컨설팅",
        to: "/services/product-development/industry-consulting",
      },
      {
        label: "친환경 소재 연구소",
        to: "/services/product-development/eco-material-lab",
      },
      {
        label: "친환경 기술 인증",
        to: "/services/product-development/eco-certification",
      },
      {
        label: "FAQ",
        to: "/services/product-development/faq",
      },
    ],
  },
  {
    title: "규제 마스터 솔루션",
    to: "/services/regulatory-response",
    Icon: FileText,
    items: [
      {
        label: "요금제",
        to: "/services/regulatory-response/pricing",
      },
      {
        label: "원스톱 대응 시스템",
        to: "/services/regulatory-response/onestop-system",
      },
      {
        label: "통합 규제 대응 컨트롤",
        to: "/services/regulatory-response/integrated-control",
      },
      {
        label: "규제 전문가 밀착진단",
        to: "/services/regulatory-response/expert-diagnosis",
      },
      {
        label: "AI Agent 자동화",
        to: "/services/regulatory-response/ai-agent-automation",
      },
      {
        label: "FAQ",
        to: "/services/regulatory-response/faq",
      },
      {
        label: "타 솔루션 비교",
        to: "/services/regulatory-response/compare/consulting",
        children: [
          {
            label: "일반 컨설팅펌",
            to: "/services/regulatory-response/compare/consulting",
          },
          {
            label: "패키징 공급사",
            to: "/services/regulatory-response/compare/supplier",
          },
          {
            label: "기존 기술인증사",
            to: "/services/regulatory-response/compare/certification",
          },
        ],
      },
    ],
  },
] as const;

const ACTION_ITEMS = [
  { label: "제품 개발 문의", to: "/project-management/quote?service=product-development" },
  { label: "규제 대응 문의", to: "/services/regulatory-response" },
] as const;

const SERVICE_DETAIL_PATHS = [
  "/services/product-development",
  "/services/regulatory-response",
] as const;

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "text-[15px] font-medium transition-colors",
    "hover:text-primary-800",
    isActive ? "text-primary-900" : "text-primary-700/75",
  ].join(" ");
}

function isExternalUrl(to: string) {
  return /^https?:\/\//.test(to);
}

function ServiceDropdown() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = SERVICE_MENU_GROUPS.some((group) =>
    location.pathname.startsWith(group.to),
  );

  return (
    <div className={`group relative${open ? " is-open" : ""}`} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={[
          "inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors",
          "hover:text-primary-800",
          isActive ? "text-primary-900" : "text-primary-700/75",
        ].join(" ")}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        서비스
        <CaretDown
          size={14}
          weight="bold"
          aria-hidden="true"
          className="transition-transform group-hover:rotate-180"
        />
      </button>

      <div
        className={[
          "invisible absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-4 opacity-0 transition duration-150",
          "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
          open ? "visible opacity-100" : "",
        ].join(" ")}
      >
        <div className="grid grid-cols-2 overflow-hidden rounded-[20px] bg-white shadow-[0_18px_44px_rgba(23,33,27,0.14)]">
          {SERVICE_MENU_GROUPS.map(({ title, to, Icon, items }, groupIndex) => (
            <div
              className={[
                "px-4 py-3",
                groupIndex === 0 ? "border-r border-primary-600/10" : "",
              ].join(" ")}
              key={title}
            >
              <NavLink
                className="mb-3 flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-primary-50"
                to={to}
              >
                <span className="grid size-9 place-items-center rounded-lg bg-primary-50 text-primary-900">
                  <Icon size={20} weight="regular" aria-hidden="true" />
                </span>
                <strong className="text-[16px] font-semibold leading-none text-primary-900">
                  {title}
                </strong>
              </NavLink>

              <div className="grid grid-cols-2 gap-x-3 border-t border-primary-600/10 pt-3">
                {items.map((item) => {
                  const label = typeof item === "string" ? item : item.label;
                  const children =
                    typeof item !== "string" && "children" in item ? item.children : [];
                  const itemTo = typeof item !== "string" && "to" in item ? item.to : "";
                  const itemClassName =
                    "flex min-h-9 w-full items-center rounded-md px-2 text-left text-[14px] font-semibold leading-none text-primary-800 transition-colors hover:bg-primary-50 hover:text-primary-900";

                  return (
                    <div key={label}>
                      {itemTo && isExternalUrl(itemTo) ? (
                        <a className={itemClassName} href={itemTo} rel="noreferrer" target="_blank">
                          {label}
                        </a>
                      ) : itemTo ? (
                        <NavLink className={itemClassName} to={itemTo}>
                          {label}
                        </NavLink>
                      ) : (
                        <button type="button" className={itemClassName}>
                          {label}
                        </button>
                      )}
                      {children.length ? (
                        <div className="grid gap-1 px-1 pb-3 pt-1 text-[14px] font-medium leading-none text-primary-700/75">
                          {children.map((child) => (
                            <NavLink
                              className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-primary-50 hover:text-primary-900"
                              key={child.label}
                              to={child.to}
                            >
                              <span aria-hidden="true">↳</span>
                              <span>{child.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseDropdown() {
  const location = useLocation();
  const isActive = location.pathname === "/stories";

  return (
    <div className="group relative">
      <NavLink
        to="/stories"
        className={[
          "inline-flex items-center text-[15px] font-medium transition-colors",
          "hover:text-primary-800",
          isActive ? "text-primary-900" : "text-primary-700/75",
        ].join(" ")}
        aria-haspopup="menu"
      >
        고객 사례
      </NavLink>

      <div
        className={[
          "invisible absolute left-1/2 top-full z-50 w-[440px] -translate-x-1/2 pt-5 opacity-0 transition duration-150",
          "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
        ].join(" ")}
      >
        <div className="rounded-[20px] bg-white px-5 py-4 shadow-[0_18px_44px_rgba(23,33,27,0.14)]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {CASE_INDUSTRIES.map((industry) => (
              <NavLink
                className="rounded-md text-[14px] font-semibold leading-none text-primary-900 transition-colors hover:text-primary-600"
                key={industry}
                to={`/stories?client=${encodeURIComponent(industry)}`}
              >
                {industry}
              </NavLink>
            ))}
          </div>
          <NavLink
            to="/stories"
            className="mt-8 flex h-12 items-center justify-center rounded-lg bg-[#f3f2f0] text-[14px] font-medium text-primary-800 transition-colors hover:bg-primary-100"
          >
            모든 사례 보기
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function LanguageDropdown() {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-label="언어변경"
        className="grid size-8 place-items-center rounded-full border border-primary-600/20 text-primary-700 transition-colors hover:border-primary-600 hover:bg-primary-50"
      >
        <GlobeHemisphereEast size={20} weight="regular" aria-hidden="true" />
      </button>

      <div className="invisible absolute right-0 top-full z-50 w-[160px] pt-5 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-lg bg-primary-25 p-2 shadow-[0_18px_44px_rgba(23,33,27,0.14)]">
          <button
            type="button"
            className="block w-full rounded-md px-3 py-2.5 text-left text-[14px] font-semibold text-primary-900 transition-colors hover:bg-primary-50"
          >
            한국어
          </button>
          <button
            type="button"
            className="block w-full rounded-md px-3 py-2.5 text-left text-[14px] font-semibold text-primary-700 transition-colors hover:bg-primary-50"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}

function IconLink({
  to,
  label,
  IconComponent,
}: {
  to: string;
  label: string;
  IconComponent: Icon;
}) {
  return (
    <NavLink
      to={to}
      aria-label={label}
      className={({ isActive }) =>
        [
          "grid size-8 place-items-center rounded-full border border-primary-600/20",
          "text-primary-700 transition-colors hover:border-primary-600 hover:bg-primary-50",
          isActive ? "bg-primary-50 text-primary-900" : "",
        ].join(" ")
      }
    >
      <IconComponent size={20} weight="regular" aria-hidden="true" />
    </NavLink>
  );
}

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileNavHidden, setMobileNavHidden] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("restudio-login-status") === "authenticated";
  });
  const isServiceDetailPage = SERVICE_DETAIL_PATHS.some((path) =>
    location.pathname.startsWith(path),
  );
  const currentService =
    location.pathname === "/services/regulatory-response"
      ? "regulatory-response"
      : "product-development";
  const actionItems = isServiceDetailPage
    ? loggedIn
      ? [{ label: "프로젝트 관리", to: `/project-management?service=${currentService}` }]
      : [
          {
            label: "무료 진단 받기",
            to:
              currentService === "product-development"
                ? "/project-management/quote?service=product-development"
                : `/account?service=${currentService}`,
          },
          { label: "자료집 다운받기", to: "/resources" },
        ]
    : ACTION_ITEMS;

  useEffect(() => {
    setMenuOpen(false);
    setMobileServiceOpen(false);
    setMobileNavHidden(false);
  }, [location.pathname]);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 1279px)");
    let lastScrollY = Math.max(0, window.scrollY);

    const handleScroll = () => {
      const scrollY = Math.max(0, window.scrollY);

      if (!mobileViewport.matches || menuOpen || scrollY <= 16) {
        setMobileNavHidden(false);
        lastScrollY = scrollY;
        return;
      }

      const scrollDistance = scrollY - lastScrollY;
      if (Math.abs(scrollDistance) < 8) return;

      setMobileNavHidden(scrollDistance > 0);
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    mobileViewport.addEventListener("change", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileViewport.removeEventListener("change", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const syncLoginStatus = () => {
      setLoggedIn(window.localStorage.getItem("restudio-login-status") === "authenticated");
    };

    window.addEventListener("storage", syncLoginStatus);
    window.addEventListener("restudio-login-change", syncLoginStatus);

    return () => {
      window.removeEventListener("storage", syncLoginStatus);
      window.removeEventListener("restudio-login-change", syncLoginStatus);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
    <header className={`mobile-scroll-header sticky top-0 ${menuOpen ? "mobile-scroll-header--menu-open z-[130]" : "z-40"} ${mobileNavHidden && !menuOpen ? "mobile-scroll-header--hidden" : ""} bg-white/[0.72] backdrop-blur-xl backdrop-saturate-150`}>
      <div className="mx-auto flex h-12 items-center justify-between px-5 md:px-12 xl:px-[120px]">
        <Link to="/" aria-label="RESTUDIO 홈" className="shrink-0">
          <Logo className="h-[15px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="주요 메뉴">
          <ServiceDropdown />
          <CaseDropdown />
          {NAV_ITEMS.filter((item) => item.label !== "고객 사례").map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/company" className={navLinkClass}>
            회사 소개
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          {actionItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={[
                "inline-flex h-8 items-center justify-center rounded-full border border-primary-600 px-4",
                "text-[14px] font-semibold transition-colors active:scale-[0.98]",
                "text-primary-700 hover:bg-primary-600 hover:text-primary-25",
              ].join(" ")}
            >
              {item.label}
            </NavLink>
          ))}
          {!(isServiceDetailPage && loggedIn) ? (
            <IconLink
              to={
                loggedIn
                  ? "/project-management?service=product-development"
                  : "/account"
              }
              label={loggedIn ? "프로젝트 관리" : "회원가입 및 로그인"}
              IconComponent={UserCircle}
            />
          ) : null}
          <LanguageDropdown />
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          className="grid size-8 place-items-center rounded-full border border-primary-600/20 text-primary-700 transition-colors hover:border-primary-600 hover:bg-primary-50 xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={20} weight="regular" aria-hidden="true" />
          ) : (
            <List size={21} weight="regular" aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-primary-600/10 bg-white/[0.95] px-5 py-2 md:px-12 xl:hidden">
        {ACTION_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="inline-flex min-h-10 min-w-0 items-center justify-center whitespace-nowrap rounded-full border border-primary-600 px-2 text-[13px] font-semibold text-primary-700 transition-colors hover:bg-primary-600 hover:text-primary-25 active:scale-[0.98] sm:px-5 sm:text-[14px]"
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`mobile-navigation absolute inset-x-0 top-full max-h-[calc(100dvh-105px)] overflow-y-auto border-t border-primary-600/10 bg-white/[0.98] px-5 pb-[max(8px,env(safe-area-inset-bottom))] pt-3 shadow-[0_18px_36px_rgba(23,33,27,0.12)] backdrop-blur-xl md:px-12 xl:hidden${menuOpen ? " is-open" : ""}`}
      >
        <nav className="flex flex-col" aria-label="모바일 주요 메뉴">
          <button
            type="button"
            className={[
              "flex min-h-12 items-center justify-between rounded-lg px-2 text-left text-[15px] font-medium transition-colors",
              SERVICE_MENU_GROUPS.some((group) => location.pathname.startsWith(group.to))
                ? "text-primary-900"
                : "text-primary-700/75 hover:bg-primary-50 hover:text-primary-800",
            ].join(" ")}
            aria-expanded={mobileServiceOpen}
            onClick={() => setMobileServiceOpen((current) => !current)}
          >
            서비스
            <CaretDown
              size={16}
              weight="bold"
              aria-hidden="true"
              className={`transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServiceOpen ? (
            <div className="grid gap-3 pb-3 pt-1">
              {SERVICE_MENU_GROUPS.map(({ title, to, Icon, items }) => (
                <div
                  className="rounded-[16px] border border-primary-600/10 bg-white p-3 shadow-[0_10px_30px_rgba(23,33,27,0.06)]"
                  key={title}
                >
                  <NavLink
                    className="flex items-center gap-3 rounded-lg px-1 py-1 transition-colors hover:bg-primary-50"
                    to={to}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-900">
                      <Icon size={20} weight="regular" aria-hidden="true" />
                    </span>
                    <strong className="text-[15px] font-semibold leading-snug text-primary-900">
                      {title}
                    </strong>
                  </NavLink>

                  <div className="mt-3 grid grid-cols-2 gap-1 border-t border-primary-600/10 pt-3">
                    {items.map((item) => {
                      const children = "children" in item ? item.children : [];

                      return (
                        <div key={item.label}>
                          <NavLink
                            className={({ isActive }) =>
                              [
                                "flex min-h-9 items-center rounded-md px-2 text-[14px] font-semibold leading-snug transition-colors",
                                isActive
                                  ? "bg-primary-50 text-primary-900"
                                  : "text-primary-800 hover:bg-primary-50 hover:text-primary-900",
                              ].join(" ")
                            }
                            to={item.to}
                          >
                            {item.label}
                          </NavLink>
                          {children.length ? (
                            <div className="grid gap-1 pb-2 pl-2 text-[13px] font-medium text-primary-700/75">
                              {children.map((child) => (
                                <NavLink
                                  className="rounded-md px-2 py-1.5 transition-colors hover:bg-primary-50 hover:text-primary-900"
                                  key={child.label}
                                  to={child.to}
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          <div className="grid grid-cols-2 gap-x-3">
            {MOBILE_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "flex min-h-12 items-center rounded-lg px-2 text-[15px] font-medium transition-colors",
                    isActive
                      ? "text-primary-900"
                      : "text-primary-700/75 hover:bg-primary-50 hover:text-primary-800",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/company"
              className={({ isActive }) =>
                [
                  "flex min-h-12 items-center rounded-lg px-2 text-[15px] font-medium transition-colors",
                  isActive
                    ? "text-primary-900"
                    : "text-primary-700/75 hover:bg-primary-50 hover:text-primary-800",
                ].join(" ")
              }
            >
              회사 소개
            </NavLink>
          </div>
        </nav>

        {isServiceDetailPage ? (
          <div className="mt-3 grid gap-2 border-t border-primary-600/10 pt-4">
            {actionItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="inline-flex min-h-10 min-w-0 items-center justify-center rounded-full border border-primary-600 px-2 text-[13px] font-semibold text-primary-700 transition-colors hover:bg-primary-600 hover:text-primary-25 active:scale-[0.98] sm:px-5 sm:text-[14px]"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ) : null}

        <div className="mt-2 flex items-center gap-2">
          {!(isServiceDetailPage && loggedIn) ? (
            <NavLink
              to={
                loggedIn
                  ? "/project-management?service=product-development"
                  : "/account"
              }
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-primary-600/20 text-[14px] font-medium text-primary-700 transition-colors hover:border-primary-600 hover:bg-primary-50"
            >
              <UserCircle size={20} weight="regular" aria-hidden="true" />
              {loggedIn ? "프로젝트 관리" : "회원가입 및 로그인"}
            </NavLink>
          ) : null}
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-primary-600/20 px-4 text-[14px] font-medium text-primary-700 transition-colors hover:border-primary-600 hover:bg-primary-50"
          >
            <GlobeHemisphereEast size={20} weight="regular" aria-hidden="true" />
            KO
          </button>
        </div>
      </div>
    </header>
    <button
      type="button"
      aria-label="메뉴 바깥 영역을 눌러 닫기"
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 0 : -1}
      className={`mobile-navigation-backdrop fixed inset-0 z-[120] xl:hidden${menuOpen ? " is-open" : ""}`}
      onClick={() => setMenuOpen(false)}
    />
    </>
  );
}
