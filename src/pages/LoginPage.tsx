import { CheckCircle, GoogleLogo } from "@phosphor-icons/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Logo } from "../components/Logo";

const LOGIN_POINTS = [
  "제품·포장재 정보 한 번 입력으로 진단부터 문서까지",
  "AI 사전진단으로 PPWR 리스크·누락자료 즉시 확인",
  "TD·DoC·EPR 기초자료를 연결된 데이터로 발행",
] as const;

export function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const requestedService =
    searchParams.get("service") === "regulatory-response"
      ? "regulatory-response"
      : "product-development";

  const completeLogin = () => {
    window.localStorage.setItem("restudio-login-status", "authenticated");
    window.dispatchEvent(new Event("restudio-login-change"));
    navigate(`/project-management?service=${requestedService}`);
  };

  return (
    <main className="grid min-h-[100dvh] bg-white text-primary-900 lg:grid-cols-[46%_54%]">
      <section className="relative hidden min-h-[100dvh] overflow-hidden bg-primary-900 px-12 py-12 text-primary-25 lg:flex lg:flex-col xl:px-[48px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(193,210,199,0.14),transparent_32%),linear-gradient(140deg,rgba(67,86,74,0.45),rgba(23,33,27,0.96)_58%)]" />
        <div className="relative z-10">
          <Link to="/" aria-label="RESTUDIO 홈">
            <Logo variant="light" className="h-4 w-auto" />
          </Link>
        </div>

        <div className="relative z-10 mt-auto max-w-[480px] pb-[38vh]">
          <h1 className="text-[30px] font-bold leading-[1.3] text-white xl:text-[34px]">
            EU 포장폐기물 규정(PPWR),
            <br />
            AI로 미리 준비하세요
          </h1>

          <ul className="mt-8 space-y-4 text-[14px] leading-6 text-primary-100/82">
            {LOGIN_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle
                  size={19}
                  weight="fill"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-primary-200/55"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 mt-auto text-[12px] text-primary-200/70">
          © 2026 PPWR AI · Powered by RESTUDIO
        </p>
      </section>

      <section className="flex min-h-[100dvh] items-center justify-center px-5 py-12 md:px-12 lg:px-[80px]">
        <div className="w-full max-w-[460px]">
          <Link to="/" aria-label="RESTUDIO 홈" className="mb-10 block lg:hidden">
            <Logo className="h-4 w-auto" />
          </Link>

          <div className="text-center">
            <h2 className="text-[24px] font-bold leading-tight text-primary-900">로그인</h2>
            <p className="mt-3 text-[14px] leading-6 text-[#6f83a0]">
              RESTUDIO 계정으로 PPWR 진단 서비스에 로그인하세요.
            </p>
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              completeLogin();
            }}
          >
            <label className="block">
              <span className="text-[13px] font-bold text-[#344052]">
                이메일 <span className="text-[#d64545]">*</span>
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@company.com"
                className="mt-2.5 h-[46px] w-full rounded-lg border border-[#c8d4e4] px-4 text-[14px] text-primary-900 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100 placeholder:text-[#8f98a7]"
              />
            </label>

            <label className="block">
              <span className="flex items-center justify-between text-[13px] font-bold text-[#344052]">
                <span>
                  비밀번호 <span className="text-[#d64545]">*</span>
                </span>
                <Link to="/account" className="text-[12px] font-semibold text-[#4b5563]">
                  비밀번호 찾기
                </Link>
              </span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="mt-2.5 h-[46px] w-full rounded-lg border border-[#c8d4e4] px-4 text-[14px] text-primary-900 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100 placeholder:text-[#8f98a7]"
              />
            </label>

            <button
              type="submit"
              className="h-[46px] w-full rounded-lg bg-primary-600 text-[14px] font-bold text-primary-25 transition hover:bg-primary-700 active:scale-[0.99]"
            >
              로그인
            </button>
            <p className="text-center text-[12px] font-semibold leading-5 text-[#6f83a0]">
              로그인 버튼을 누르면 프로젝트 관리페이지로 넘어갈 수 있습니다.
            </p>
          </form>

          <div className="my-8 flex items-center gap-5 text-[13px] font-semibold text-[#8aa0bc]">
            <span className="h-px flex-1 bg-[#e1e7f0]" />
            또는
            <span className="h-px flex-1 bg-[#e1e7f0]" />
          </div>

          <button
            type="button"
            onClick={completeLogin}
            className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-lg border border-[#c8d4e4] bg-white text-[14px] font-bold text-[#344052] transition hover:border-primary-600 hover:bg-primary-25 active:scale-[0.99]"
          >
            <GoogleLogo size={21} weight="bold" aria-hidden="true" className="text-[#4285f4]" />
            Google 계정으로 로그인
          </button>

          <p className="mt-8 text-center text-[14px] text-[#6f83a0]">
            아직 계정이 없으신가요?{" "}
            <Link to="/account" className="font-bold text-primary-700">
              회원가입
            </Link>
          </p>

          <p className="mt-5 rounded-lg bg-[#f7f9fc] px-4 py-3.5 text-center text-[13px] leading-5 text-[#6f83a0]">
            기존 RESTUDIO 회원은 동일한 계정으로 바로 로그인됩니다.
          </p>
        </div>
      </section>
    </main>
  );
}
