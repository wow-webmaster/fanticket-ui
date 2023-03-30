import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";

export default function TicketNote() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.add_new_ticket")}</h3>
        <h6 className="text-stone-400">{t("description.add_new_ticket")}</h6>
      </div>
      <div className="max-w-2xl w-full mb-8 flex flex-col gap-4">
        <GradientBorderWrapper>
          <div className="w-full p-2">
            <textarea className="textarea w-full border-0" rows={6} />
          </div>
        </GradientBorderWrapper>
      </div>
    </div>
  );
}
