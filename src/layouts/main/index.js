import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function MainLayout() {
  return (
    <div className="w-full h-full">
      <MainHeader />
      <Outlet />
      <div className="flex-1" />
      <MainFooter />
    </div>
  );
}
