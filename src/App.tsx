import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n";
import { Layout } from "./components/Layout";
import { AiChatFloatingButton } from "./components/AiChatFloatingButton";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { ProductQuotePage } from "./pages/ProductQuotePage";
import { ProjectManagementPage } from "./pages/ProjectManagementPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";

const PAGES = [
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
    path: "/resources",
    title: "자료실",
    description: "고객이 참고할 수 있는 자료와 다운로드 콘텐츠를 담을 빈 페이지입니다.",
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
          <Route path="/project-management" element={<ProjectManagementPage />} />
          <Route path="/project-management/quote" element={<ProductQuotePage />} />
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/services/product-development"
              element={<ServiceDetailPage variant="product-development" />}
            />
            <Route
              path="/services/regulatory-response"
              element={<ServiceDetailPage variant="regulatory-response" />}
            />
            {PAGES.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<PlaceholderPage title={page.title} description={page.description} />}
              />
            ))}
          </Route>
        </Routes>
        <AiChatFloatingButton />
      </BrowserRouter>
    </I18nProvider>
  );
}
