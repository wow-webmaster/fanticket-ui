import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export default function TicketAvatar() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.ticket_avatar")}</h3>
        <h6 className="text-stone-400">{t("description.ticket_avatar")}</h6>
      </div>
      <div className="max-w-2xl w-full mb-8 flex flex-col gap-4">
        {/* avatar  */}
        <div className="flex flex-col items-center mb-4">
          <div className="avatar mb-4 w-32 h-32 relative bg-base-200 rounded-full flex justify-center items-center p-8">
            {/* <img src={`${user?.avatar}`} alt="" className=" rounded-full " /> */}
            <img
              src="/images/icons/ticket-cover-icon.png"

              className="w-24 h-24"
            ></img>
            <label
              htmlFor="avatar"
              className="bottom-0 right-0 absolute w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
            >
              <Icon icon="ic:round-edit" className="text-primary" />
            </label>
            <input type="file" className="hidden" id="avatar" />
          </div>
          <label className="text-sm text-primary" htmlFor="avatar">Selecionar foto</label>
        </div>
      </div>
    </div>
  );
}
