import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import DropzoneFileUpload from "../../components/form/DropzoneFileUpload";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";

export default function TicketUpload() {
  const { t } = useTranslation();
  const selectedFile = "Ingresso-warburg.pdf";

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.add_new_ticket")}</h3>
        <h3 className="text-stone-400">{t("description.add_new_ticket")}</h3>
      </div>

      <div className="max-w-2xl w-full mb-8">
        <GradientBorderWrapper>
          <div className="p-2 flex gap-2 justify-between flex-col sm:flex-row py-4">
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-9 h-9 bg-secondary border-primary border flex items-center justify-center">
                <Icon
                  icon="ic:outline-cloud-upload"
                  width={24}
                  className={"text-primary"}
                />
              </div>
              <p>{selectedFile}</p>
            </div>
            <div className="flex justify-center items-center">
              <button className="btn  btn-circle btn-sm " style={{backgroundColor:'rgba(253, 54, 77, 0.3)'}}>
                <Icon icon="tabler:trash" className="text-error"/>
              </button>
            </div>
          </div>
        </GradientBorderWrapper>
        <div className="h-6">

        </div>
        <DropzoneFileUpload />
        
      </div>
    </div>
  );
}
