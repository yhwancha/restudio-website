import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n";
import { Layout } from "./components/Layout";
import { AiChatFloatingButton } from "./components/AiChatFloatingButton";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { IndustryConsultingPage } from "./pages/IndustryConsultingPage";
import { LoginPage } from "./pages/LoginPage";
import { NewsPage } from "./pages/NewsPage";
import { OnestopDevelopmentSystemPage } from "./pages/OnestopDevelopmentSystemPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { ProductQuotePage } from "./pages/ProductQuotePage";
import { ProjectManagementPage } from "./pages/ProjectManagementPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { StoryDetailPage } from "./pages/StoryDetailPage";
import { StoriesListPage } from "./pages/StoriesListPage";

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
              path="/services/product-development/onestop-system"
              element={<OnestopDevelopmentSystemPage />}
            />
            <Route
              path="/services/product-development/industry-consulting"
              element={<IndustryConsultingPage />}
            />
            <Route
              path="/services/regulatory-response"
              element={<ServiceDetailPage variant="regulatory-response" />}
            />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsPage />} />
            <Route path="/stories" element={<StoriesListPage />} />
            <Route path="/stories/muir-hike-reusable-box" element={<StoryDetailPage />} />
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
