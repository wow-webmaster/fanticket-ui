import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DropzoneFileUpload from "../../components/form/DropzoneFileUpload";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import { API_TICKET } from "../../config";
import { useUploadForm } from "../../hooks/useUploadForm";
import { useSelector } from "../../redux/store";

export default function TicketUpload() {
  const { saved } = useSelector((state) => state.ticket);
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(saved?.originFile);
  const { uploadForm, progress, isError } = useUploadForm(
    API_TICKET.uploadFile
  );
  const handleDropFile = useCallback(async (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]?.path);
    const form = new FormData();
    form.append("file", acceptedFiles[0]);
    form.append("ticketId", saved?._id);
    form.append("originFile", acceptedFiles[0]?.path);

    uploadForm(form);
  }, []);
  useEffect(() => {
    // console.log("***********", progress);
  }, [progress]);
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.add_new_ticket")}</h3>
        <h3 className="text-stone-400">{t("description.add_new_ticket")}</h3>
      </div>

      <div className="max-w-2xl w-full mb-8">
        <GradientBorderWrapper>
          <div className="w-full p-2 flex flex-col gap-2">
            <div className="flex gap-2 justify-between w-full p-2">
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-9 h-9 bg-secondary border-primary border flex items-center justify-center  flex-1 min-w-[36px]">
                  <Icon
                    icon="ic:outline-cloud-upload"
                    width={24}
                    className={"text-primary"}
                  />
                </div>
                <p className="overflow-hidden text-ellipsis">{selectedFile}</p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="btn  btn-circle btn-sm "
                  style={{ backgroundColor: "rgba(253, 54, 77, 0.3)" }}
                >
                  <Icon icon="tabler:trash" className="text-error" />
                </button>
              </div>
            </div>
            {progress > 0 && (
              <div className="p-2 flex items-center justify-center w-full">
                <progress
                  className={`progress ${
                    isError ? "progress-error" : "progress-primary"
                  }`}
                  value={progress}
                  max={100}
                ></progress>
              </div>
            )}
          </div>
        </GradientBorderWrapper>
        <div className="h-6"></div>
        <DropzoneFileUpload onDrop={handleDropFile} />
      </div>
    </div>
  );
}
