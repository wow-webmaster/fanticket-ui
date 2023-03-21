import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function UserPopover({ user, logout = () => {} }) {
  const { t } = useTranslation();
  return (
    <div className="dropdown">
      <div className="flex gap-2 px-2 items-center cursor-pointer" tabIndex={0}>
        <div className="avatar indicator  w-16 ">
          <span className="indicator-item badge badge-error">2</span>
          <img
            src={user.avatar}
            alt="user avatar"
            className="rounded-full"
          ></img>
        </div>
        <Icon icon={`ic:outline-keyboard-arrow-down`} />
      </div>
      <ul className="dropdown-content mt-1 menu p-2 shadow bg-base-200 rounded-box w-64">
        <li>
          <div className="flex flex-col gap-1 items-start">
            <label className="font-bold text-lg ">{user?.displayName}</label>
            <label className=" text-left">{user?.email}</label>
          </div>
        </li>
        <div className="divider h-1" />
        <li>
          <a href="/">{t("title.menu.alert")}</a>
        </li>
        <li>
          <a href="/">{t("title.menu.event")}</a>
        </li>
        <li>
          <Link to="/profile">{t("title.menu.profile")}</Link>
        </li>
        <li>
          <a href="/">{t("title.menu.conversation")}</a>
        </li>
        <li>
          <a href="/">{t("title.menu.payout")}</a>
        </li>
        <li>
          <Link to="/profile/notifications">
            {t("title.menu.notification")}
            <span className="badge badge-error">2</span>
          </Link>
        </li>
        <div className="divider h-1" />
        <li onClick={() => logout()}>
          <a href="/">{t("title.menu.logout")}</a>
        </li>
      </ul>
    </div>
  );
}
