import { Icon } from "@iconify/react";

export default function UserPopover({ user, logout = () => {} }) {
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
          <a href="/">Ticket Alert</a>
        </li>
        <li>
          <a href="/">Saved Events</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">Conversations</a>
        </li>
        <li>
          <a href="/">Payouts</a>
        </li>
        <li>

          <a href="/">Notifications 
          <span className="badge badge-error">2</span>
          </a>
        </li>
        <div className="divider h-1" />
        <li onClick={() => logout()}>
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
  );
}
