import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { BlurModalBox } from "../../components/StyledComponents";
import { API_TICKET } from "../../config";
import axios from "../../utils/axios";

export default function ResetConfirmModal({ ticketId, onClose }) {
  const { t } = useTranslation();
  const onSubmit = () => {
    axios
      .post(API_TICKET.resetTicket, { ticketId })
      .then((res) => {
        toast.success(res.data.message);
        onClose();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id={"reset-confirm-modal"}
        className="modal-toggle"
      />
      <div className="modal">
        <BlurModalBox className="modal-box backdrop-blur-lg">
          <div className="mb-2">
            <label
              htmlFor={"reset-confirm-modal"}
              className="btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              {t("title.modal.reset_confirm")}
            </h3>
          </div>
          <hr className="-mx-5 border-stone-500 " />

          <div className="flex flex-col gap-4 p-2 mb-4">
            <label className="text-stone-400 mb-4">
              {t("description.reset_confirm")}
            </label>
          </div>
          <div className="flex justify-between gap-2 p-2">
            <button
              className="btn btn-primary px-8 capitalize btn-outline"
              onClick={()=>onClose('cancel')}
            >
              {t("action.cancel")}
            </button>
            <button
              className="btn btn-primary px-8 capitalize"
              onClick={onSubmit}
            >
              {t("action.continue")}
            </button>
          </div>
        </BlurModalBox>
      </div>
    </>
  );
}
