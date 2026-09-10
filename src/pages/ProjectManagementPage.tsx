import { useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Bell,
  CaretDown,
  CaretRight,
  CreditCard,
  FileText,
  Folder,
  Gear,
  House,
  Info,
  MagnifyingGlass,
  Package,
  ShieldCheck,
  Stack,
  SquaresFour,
  Trash,
  Users,
  WarningCircle,
  XCircle,
} from "@phosphor-icons/react";
import { Logo } from "../components/Logo";

type ManagedService = "product-development" | "regulatory-response";

const serviceLabels: Record<ManagedService, string> = {
  "product-development": "제품개발",
  "regulatory-response": "PPWR",
};

const serviceDetailPaths: Record<ManagedService, string> = {
  "product-development": "/services/product-development",
  "regulatory-response": "/services/regulatory-response",
};

const ppwrMenu = [
  { label: "대시보드", Icon: SquaresFour, active: true },
  { label: "진단 관리", Icon: ShieldCheck },
  { label: "리포트 관리", Icon: FileText },
  { label: "품목 관리", Icon: Package },
  { label: "포장 자재 관리", Icon: Stack },
  { label: "부자재 관리", Icon: SquaresFour },
  { label: "문서 관리", Icon: FileText },
  { label: "결제 / 구독", Icon: CreditCard },
];

const productMenu = [
  { label: "프로젝트 관리", Icon: Folder, active: true },
  { label: "대기 중 프로젝트", sub: true, active: true },
  { label: "진행 중 프로젝트", sub: true },
  { label: "완료된 프로젝트", sub: true },
];

const settingsMenu = [
  { label: "프로필 관리" },
  { label: "팀원 / 권한 관리" },
  { label: "보안 설정" },
];

export function ProjectManagementPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const service = useMemo<ManagedService>(
    () =>
      searchParams.get("service") === "regulatory-response"
        ? "regulatory-response"
        : "product-development",
    [searchParams],
  );
  const isProduct = service === "product-development";

  const switchService = (nextService: ManagedService) => {
    setSearchParams({ service: nextService });
  };

  const logout = () => {
    window.localStorage.removeItem("restudio-login-status");
    window.dispatchEvent(new Event("restudio-login-change"));
    navigate(serviceDetailPaths[service]);
  };

  return (
    <main className="project-management-page">
      <aside className="project-management-sidebar">
        <div className="project-management-switch" aria-label="서비스 전환">
          {(Object.keys(serviceLabels) as ManagedService[]).map((item) => (
            <button
              key={item}
              type="button"
              className={service === item ? "is-active" : ""}
              onClick={() => switchService(item)}
            >
              {serviceLabels[item]}
            </button>
          ))}
        </div>

        <Link
          to={serviceDetailPaths[service]}
          className="project-management-brand"
          aria-label={`${serviceLabels[service]} 상세페이지로 이동`}
        >
          <Logo className="h-[15px] w-auto" />
          <strong>{serviceLabels[service]}</strong>
        </Link>

        <nav className="project-management-nav" aria-label="프로젝트 관리 메뉴">
          {(isProduct ? productMenu : ppwrMenu).map((item) => {
            const Icon = "Icon" in item ? item.Icon : null;

            return "sub" in item && item.sub ? (
              <button
                key={item.label}
                type="button"
                className={`project-management-nav__sub${item.active ? " is-active" : ""}`}
              >
                {item.label}
              </button>
            ) : (
              <button
                key={item.label}
                type="button"
                className={item.active ? "is-active" : ""}
              >
                {Icon ? <Icon size={22} weight="regular" aria-hidden="true" /> : null}
                <span>{item.label}</span>
                {isProduct && item.label === "프로젝트 관리" ? (
                  <CaretDown size={18} weight="bold" aria-hidden="true" />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="project-management-settings">
          <button type="button">
            <Gear size={22} weight="regular" aria-hidden="true" />
            <span>설정</span>
            <CaretDown size={18} weight="bold" aria-hidden="true" />
          </button>
          {settingsMenu.map((item) => (
            <button key={item.label} type="button">
              {item.label}
            </button>
          ))}
        </div>

        <div className="project-management-user">
          <div>
            <strong>테스트</strong>
            <span>무료 회원</span>
          </div>
          <p>name@company.com</p>
          <button type="button" onClick={logout}>
            로그아웃
          </button>
        </div>
      </aside>

      <section className="project-management-main">
        <header className="project-management-topbar">
          <div className="project-management-breadcrumb">
            <House size={22} weight="regular" aria-hidden="true" />
            <CaretRight size={20} weight="bold" aria-hidden="true" />
            <span>{isProduct ? "프로젝트 관리" : "대시보드"}</span>
            {isProduct ? (
              <>
                <CaretRight size={20} weight="bold" aria-hidden="true" />
                <span>대기 중 프로젝트</span>
              </>
            ) : null}
          </div>
          <button type="button" aria-label="알림">
            <Bell size={25} weight="regular" aria-hidden="true" />
          </button>
        </header>

        <div className="project-management-content">
          {isProduct ? (
            <>
              <div className="project-management-content__header">
                <div>
                  <h1>
                    대기 중 프로젝트
                    <Info size={21} weight="regular" aria-hidden="true" />
                  </h1>
                  <div className="project-management-search">
                    <MagnifyingGlass size={22} weight="regular" aria-hidden="true" />
                    <input placeholder="프로젝트 번호를 검색해 주세요." />
                  </div>
                  <div className="project-management-filters">
                    {["산업 타입: 전체", "제품 타입: 전체", "소재 타입: 전체"].map((filter) => (
                      <button key={filter} type="button">
                        {filter}
                        <CaretDown size={18} weight="bold" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigate("/project-management/quote?service=product-development")
                  }
                >
                  견적 문의
                </button>
              </div>

              <div className="project-management-actions">
                <button type="button">
                  <XCircle size={28} weight="regular" aria-hidden="true" />
                  필터 초기화
                </button>
                <button type="button">
                  <Trash size={24} weight="regular" aria-hidden="true" />
                  프로젝트 삭제
                </button>
              </div>

              <div className="project-management-empty">
                <Users size={30} weight="regular" aria-hidden="true" />
                <p>프로젝트가 없습니다.</p>
              </div>
            </>
          ) : (
            <div className="project-management-empty project-management-empty--dashboard">
              <WarningCircle size={28} weight="regular" aria-hidden="true" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
