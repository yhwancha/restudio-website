import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="min-h-[100dvh] bg-white text-primary-900">
      <Header />
      <Outlet />
    </div>
  );
}
