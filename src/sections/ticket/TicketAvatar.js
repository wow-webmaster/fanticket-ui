import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { API_TICKET, HOST_API } from "../../config";
import { useUploadForm } from "../../hooks/useUploadForm";
import { setSavedTicket } from "../../redux/slices/ticket";
import { dispatch, useSelector } from "../../redux/store";

export default function TicketAvatar({ setStep }) {
  const { t } = useTranslation();
  const { saved } = useSelector((state) => state.ticket);
  const [file, setFile] = useState(saved?.avatar || "");
  const [disabledForward, setDisabledForward] = useState(true);

  const imageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const [loading, setLoading] = useState(false);
  const { uploadForm, progress, isError, uploadResult } = useUploadForm(
    API_TICKET.uploadTicketAvatar
  );

  useEffect(() => {
    if (saved !==null) {
      setFile(saved?.avatar || "");
    }
  }, [saved]);
  useEffect(() => {
    if (file && file !=="") {
      setDisabledForward(false);
    }
  }, [file]);
  const onPrev = () => {
    setStep(3);
  };
  const onNext = () => {
    const form = new FormData();
 
    if (file && typeof file === "object") {
      setLoading(true);
      form.append("ticketId", saved?._id);
      form.append("file", file);
      uploadForm(form);
    }
    else{
      setStep(5);

    }
  };
  useEffect(() => {
    if (progress === 100) setLoading(false);
    if (progress === 100 && !isError) {
      setDisabledForward(false);
      setStep(5);
    }
  }, [progress, isError]);
  
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.ticket_avatar")}</h3>
        <h6 className="text-stone-400">{t("description.ticket_avatar")}</h6>
      </div>
      <div className="max-w-2xl w-full mb-4 flex flex-col gap-4">
        {/* avatar  */}
        <div className="flex flex-col items-center mb-4">
          <div className="avatar mb-4 w-32 h-32 relative bg-base-200 rounded-full flex justify-center items-center">
            {/* <img src={`${user?.avatar}`} alt="" className=" rounded-full " /> */}
            {(file === "" || !file) && (
              <div className=" p-8">
                <img
                  src="/images/icons/ticket-cover-icon.png"
                  className="w-24 h-24"
                  alt = ""
                ></img>
              </div>
            )}
            {file && file !=="" && (
              <img
                src={
                  typeof file === "string"
                    ? `${HOST_API}${file}`
                    : URL.createObjectURL(file)
                }
                alt=""
                className=" rounded-full "
              />
            )}
            <label
              htmlFor="avatar"
              className="bottom-0 right-0 absolute w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
            >
              <Icon icon="ic:round-edit" className="text-primary" />
            </label>
            <input
              type="file"
              className="hidden"
              id="avatar"
              onChange={imageChange}
            />
          </div>
          <label className="text-sm text-primary" htmlFor="avatar">
            Selecionar foto
          </label>
        </div>
      </div>
      {/* action buttons */}

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
            onClick={onNext}
            disabled={disabledForward}
            className={`btn btn-primary px-8 capitalize ${
              loading ? "loading" : ""
            }`}
          >
            {t("action.continue")}
          </button>
        </div>
      </div>
    </div>
  );
}
