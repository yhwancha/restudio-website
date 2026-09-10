import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  CaretDown,
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

const SERVICE_ITEMS = [
  {
    label: "제품 개발",
    to: "/services/product-development",
    description: "브랜드 맞춤 제품 기획과 개발",
  },
  {
    label: "규제 대응",
    to: "/services/regulatory-response",
    description: "PPWR 등 글로벌 규제 대응",
  },
] as const;

const ACTION_ITEMS = [
  { label: "제품 개발 문의", to: "/inquiry/product" },
  { label: "규제 대응 문의", to: "/inquiry/regulation" },
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

function ServiceDropdown() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = SERVICE_ITEMS.some((item) => item.to === location.pathname);

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
        서비스 이동
        <CaretDown
          size={14}
          weight="bold"
          aria-hidden="true"
          className="transition-transform group-hover:rotate-180"
        />
      </button>

      <div
        className={[
          "invisible absolute left-1/2 top-full z-50 w-[260px] -translate-x-1/2 pt-5 opacity-0 transition duration-150",
          "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
          open ? "visible opacity-100" : "",
        ].join(" ")}
      >
        <div className="rounded-lg bg-primary-25 p-2 shadow-[0_18px_44px_rgba(23,33,27,0.14)]">
          {SERVICE_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "block rounded-xl px-4 py-3 transition-colors",
                  isActive ? "bg-primary-100" : "hover:bg-primary-50",
                ].join(" ")
              }
            >
              <span className="block text-[15px] font-semibold text-primary-900">
                {item.label}
              </span>
              <span className="mt-1 block text-[13px] leading-5 text-primary-700/75">
                {item.description}
              </span>
            </NavLink>
          ))}
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
  const [loggedIn, setLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("restudio-login-status") === "authenticated";
  });
  const isServiceDetailPage = SERVICE_DETAIL_PATHS.includes(
    location.pathname as (typeof SERVICE_DETAIL_PATHS)[number],
  );
  const currentService =
    location.pathname === "/services/regulatory-response"
      ? "regulatory-response"
      : "product-development";
  const actionItems = isServiceDetailPage
    ? [
        loggedIn
          ? { label: "프로젝트 관리", to: `/project-management?service=${currentService}` }
          : {
              label: "무료로 시작하기",
              to:
                currentService === "product-development"
                  ? "/project-management/quote?service=product-development"
                  : `/account?service=${currentService}`,
            },
      ]
    : ACTION_ITEMS;

  useEffect(() => {
    setMenuOpen(false);
    setMobileServiceOpen(false);
  }, [location.pathname]);

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

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/[0.72] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-12 items-center justify-between px-5 md:px-12 xl:px-[120px]">
        <Link to="/" aria-label="RESTUDIO 홈" className="shrink-0">
          <Logo className="h-[15px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="주요 메뉴">
          <NavLink to="/company" className={navLinkClass}>
            회사 소개
          </NavLink>
          <ServiceDropdown />
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
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
            <IconLink to="/account" label="회원가입 및 로그인" IconComponent={UserCircle} />
          ) : null}
          <LanguageDropdown />
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          className="grid size-9 place-items-center rounded-full border border-primary-600/20 text-primary-800 xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={22} weight="regular" aria-hidden="true" />
          ) : (
            <List size={23} weight="regular" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-primary-600/15 bg-warm-neutral px-5 py-4 md:px-12 xl:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label="모바일 주요 메뉴">
          <NavLink
            to="/company"
            className={({ isActive }) =>
              [
                "rounded-xl px-3 py-3 text-[17px] font-semibold transition-colors",
                isActive
                  ? "bg-primary-100 text-primary-900"
                  : "text-primary-800 hover:bg-primary-50",
              ].join(" ")
            }
          >
            회사 소개
          </NavLink>
          <button
            type="button"
            className={[
              "flex items-center justify-between rounded-xl px-3 py-3 text-left text-[17px] font-semibold transition-colors",
              SERVICE_ITEMS.some((item) => item.to === location.pathname)
                ? "bg-primary-100 text-primary-900"
                : "text-primary-800 hover:bg-primary-50",
            ].join(" ")}
            aria-expanded={mobileServiceOpen}
            onClick={() => setMobileServiceOpen((current) => !current)}
          >
            서비스 이동
            <CaretDown
              size={16}
              weight="bold"
              aria-hidden="true"
              className={`transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServiceOpen ? (
            <div className="grid gap-1 px-3 pb-2">
              {SERVICE_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-colors",
                      isActive
                        ? "bg-primary-100 text-primary-900"
                        : "text-primary-700 hover:bg-primary-50",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          ) : null}
          {MOBILE_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "rounded-xl px-3 py-3 text-[17px] font-semibold transition-colors",
                  isActive
                    ? "bg-primary-100 text-primary-900"
                    : "text-primary-800 hover:bg-primary-50",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={`mt-5 grid gap-2 ${isServiceDetailPage ? "" : "md:grid-cols-2"}`}>
          {actionItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={[
                "inline-flex min-h-11 items-center justify-center rounded-full border border-primary-600 px-5",
                "text-[15px] font-semibold transition-colors active:scale-[0.98]",
                "text-primary-700 hover:bg-primary-600 hover:text-primary-25",
              ].join(" ")}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          {!(isServiceDetailPage && loggedIn) ? (
            <NavLink
              to="/account"
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-primary-600/20 text-[15px] font-medium text-primary-800"
            >
              <UserCircle size={20} weight="regular" aria-hidden="true" />
              회원가입 및 로그인
            </NavLink>
          ) : null}
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-primary-600/20 px-4 text-[15px] font-medium text-primary-800"
          >
            <GlobeHemisphereEast size={20} weight="regular" aria-hidden="true" />
            KO
          </button>
        </div>
      </div>
    </header>
  );
}
