import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import {default as LoginModal} from "../../pages/auth/Login";
import {default as RegisterModal} from "../../pages/auth/Register";

export default function MainLayout() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <MainHeader />
      <Outlet />
      <div className="flex-1" />
      <MainFooter />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}
