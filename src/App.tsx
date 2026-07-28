import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { OnestopSolutionPage, PpwrSolutionPage } from "./pages/SolutionPage";
import "./App.css";

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="solutions/onestop" element={<OnestopSolutionPage />} />
            <Route path="solutions/ppwr" element={<PpwrSolutionPage />} />
            <Route path="solutions" element={<Navigate to="/solutions/onestop" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}
