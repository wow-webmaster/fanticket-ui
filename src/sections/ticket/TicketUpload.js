import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DropzoneFileUpload from "../../components/form/DropzoneFileUpload";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import { API_TICKET } from "../../config";
import { useUploadForm } from "../../hooks/useUploadForm";
import { setSavedTicket } from "../../redux/slices/ticket";
import { dispatch, useSelector } from "../../redux/store";

export default function TicketUpload({ setStep }) {
  const { saved } = useSelector((state) => state.ticket);
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(saved?.originFile);
  const [disabledForward, setDisabledForward] = useState(true);
  const [loading, setLoading] = useState(false);

  const { uploadForm, progress, isError, serverMessage, uploadResult } = useUploadForm(
    API_TICKET.uploadFile
  );
  const handleDropFile = useCallback(async (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]?.path);
    const form = new FormData();
    form.append("file", acceptedFiles[0]);
    form.append("ticketId", saved?._id);
    form.append("originFile", acceptedFiles[0]?.path);

    uploadForm(form);
  }, [saved]);
  useEffect(() => {
    // console.log("***********", progress);
    if (progress === 100 && !isError && setDisabledForward) {
      setDisabledForward(false);
    }
  }, [progress, isError]);
  useEffect(()=>{
    if(uploadResult && uploadResult!=null){
      dispatch(setSavedTicket(uploadResult));
    }
  },[uploadResult])

  useEffect(() => {
    setDisabledForward(saved?.originFile === "");
  }, [saved]);

  const onNext = () => {
    setStep(2);
  };
  const onPrev = () => {
    setStep(0);
  };
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
            {isError && serverMessage !== "" && (
              <div className="w-full p-2">
                <span className="text-error">{serverMessage}</span>
              </div>
            )}
          </div>
        </GradientBorderWrapper>
        <div className="h-6"></div>
        <DropzoneFileUpload onDrop={handleDropFile} />
      </div>

      {/* action buttons */}
      <div className="flex flex-col gap-8 justify-center items-center w-full">
        <div className="max-w-2xl w-full mb-8">
          <div className="h-6"></div>

          <div className="w-full flex justify-between">
            <button
              className={`btn btn-primary px-8 capitalize btn-outline`}
              onClick={onPrev}
            >
              {t("action.back")}
            </button>
            <button
              disabled={disabledForward}
              className={`btn btn-primary px-8 capitalize ${
                loading ? "loading" : ""
              }`}
              onClick={onNext}
            >
              {t("action.continue")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
