import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import MenuItem from "../../components/MenuItem";
import useAuth from "../../hooks/useAuth";
import useOffSetTop from "../../hooks/useOffSetTop";
import UserPopover from "./UserPopover";

export default function MainHeader() {
  const { user, isAuthenticated, logout } = useAuth();
  const isScrolled = useOffSetTop(10);
  const navigate = useNavigate();

  const _onSellTicket = () => {
    if (isAuthenticated) navigate("/ticket/sell/add");
    else {
      document.querySelector("#auth-modal-check").click();
    }
  };
  return (
    <div
      className={` w-full fixed top-0 left-0  z-50 ${
        isScrolled ? "bg-base-100/50 backdrop-blur-md" : ""
      }`}
    >
      <div
        className={`transition-all duration-300 container flex justify-between p-2 ${
          isScrolled ? "py-5" : "py-8"
        } items-center text-xl`}
      >
        <Logo />
        <button className="btn btn-sm btn-circle btn-outline md:hidden btn-primary">
          <Icon icon="ic:round-menu" />
        </button>
        <div className="md:flex gap-1 items-center hidden">
          <MenuItem href="#">
            {!isAuthenticated && "How it works"}
            {isAuthenticated &&   <Icon width={32} icon="iconoir:headset-help" className="mr-4"></Icon>}
          </MenuItem>
          {isAuthenticated && (
            <>
              <MenuItem className="w-10" href="#">
                <Icon width={32} icon="mdi:cart-outline"></Icon>
              </MenuItem>
            </>
          )}
          {(isAuthenticated && <UserPopover user={user} logout={logout} />) || (
            <MenuItem href="#" className="w-20 text-center">
              <label className="cursor-pointer" htmlFor="auth-modal-check">
                Login
              </label>
            </MenuItem>
          )}

          <button
            className="btn btn-outline btn-primary py-1 px-8 text-lg"
            onClick={_onSellTicket}
          >
            Sell ticket
          </button>
        </div>
      </div>
    </div>
  );
}
