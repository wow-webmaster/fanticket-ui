import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import { API_TICKET } from "../../config";
import { setSavedTicket } from "../../redux/slices/ticket";
import { dispatch, useSelector } from "../../redux/store";
import axios from "../../utils/axios";

export default function TicketNote({setStep}) {
  // const [disabledForward, setDisabledForward] = useState(true);
  const { saved } = useSelector((state) => state.ticket);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(saved?.note);
  const { t } = useTranslation();

  const onNext = () => {
    setLoading(true);
    if (!saved?._id) {
      toast.error(t('error.please select the ticket'));
    }
    axios
      .post(API_TICKET.saveNote, { ticketId: saved?._id, note })
      .then((res) => {
        // dispatch(setSavedTicket(res.data.data));
        setStep(3);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const onPrev = () => {
    setStep(1);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.add_new_ticket")}</h3>
        <h6 className="text-stone-400">{t("description.add_new_ticket")}</h6>
      </div>
      <div className="max-w-2xl w-full mb-8 flex flex-col gap-4">
        <GradientBorderWrapper>
          <div className="w-full p-2">
            <textarea
              className="textarea w-full border-0"
              rows={6}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </GradientBorderWrapper>
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
            // disabled={disabledForward}
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
  );
}
