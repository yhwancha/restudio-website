import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { LoginPage } from "./pages/LoginPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

const PAGES = [
  {
    path: "/",
    title: "홈",
    description: "RESTUDIO 홈섹션을 준비하고 있습니다.",
  },
  {
    path: "/company",
    title: "회사 소개",
    description: "브랜드와 팀 이야기를 담을 빈 페이지입니다.",
  },
  {
    path: "/services",
    title: "서비스 이동",
    description: "제품 개발과 규제 대응 서비스를 연결할 빈 페이지입니다.",
  },
  {
    path: "/services/product-development",
    title: "제품 개발",
    description: "브랜드 맞춤 제품 기획과 개발 서비스를 담을 빈 페이지입니다.",
  },
  {
    path: "/services/regulatory-response",
    title: "규제 대응",
    description: "PPWR 등 글로벌 규제 대응 서비스를 담을 빈 페이지입니다.",
  },
  {
    path: "/stories",
    title: "고객 사례",
    description: "브랜드 사례와 포트폴리오를 보여줄 빈 페이지입니다.",
  },
  {
    path: "/news",
    title: "새로운 소식",
    description: "RESTUDIO의 소식과 업데이트를 담을 빈 페이지입니다.",
  },
  {
    path: "/inquiry/product",
    title: "제품 개발 문의",
    description: "제품 개발 상담 플로우가 들어갈 빈 페이지입니다.",
  },
  {
    path: "/inquiry/regulation",
    title: "규제 대응 문의",
    description: "PPWR 등 규제 대응 상담 플로우가 들어갈 빈 페이지입니다.",
  },
] as const;

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/account" element={<LoginPage />} />
          <Route element={<Layout />}>
            {PAGES.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<PlaceholderPage title={page.title} description={page.description} />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}
