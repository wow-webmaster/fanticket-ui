import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { trackWindowScroll } from "react-lazy-load-image-component";
import Logo from "../../components/Logo";
import MenuItem from "../../components/MenuItem";
import useOffSetTop from "../../hooks/useOffSetTop";

export default function MainHeader() {
  const isScrolled = useOffSetTop(10);
  return (
    <div className={` w-full fixed top-0 left-0  z-50 ${isScrolled?'bg-base-100/50 backdrop-blur-md':''}`}>
      <div className={`transition-all duration-300 container flex justify-between p-2 ${isScrolled?'py-5':'py-8'} items-center text-xl`}>
        <Logo />
        <button className="btn btn-sm btn-circle btn-outline md:hidden btn-primary">
          <Icon icon="ic:round-menu" />
        </button>
        <div className="md:flex gap-1 items-center hidden">
          <MenuItem href="#">How it works</MenuItem>
          <MenuItem href="#" className="w-20 text-center">
            Login
          </MenuItem>
          <button className="btn btn-outline btn-primary py-1 px-8 text-lg">
            Sell ticket
          </button>
        </div>
      </div>
    </div>
  );
}
