import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OtpInputCompoent from "../../components/form/OtpInputComponent";
import useAuth from "../../hooks/useAuth";

export default function OtpVerificationSection({ email, password, fullName }) {
  const { t } = useTranslation();
  const [otp, setOtp] = useState("");
  const { verifyEmailOtp, signup } = useAuth();
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const onChangeOtp = (value) => {
    setOtp(value);
  };
  const onSubmit = async () => {
    const res = await verifyEmailOtp(email, otp);
 
    if (res.status === 200) {
      toast.success(res.message);
    //   document.querySelector("#register-modal-check").click();
    //   navigate("/", { replace: true });
      window.location.reload();
    } else {
      toast.error(res.data.message);
    }
  };

  const handleResent = async () => {
    setSent(true);
    await signup(email, fullName, password);
    setSent(false);
  };
  return (
    <>
      <div className="flex flex-col gap-4 p-2 mb-4">
        <label className="text-stone-400 mb-4">
          {t("description.already_sent_otp", {
            address: email,
          })}
        </label>
        {sent && (
          <div className="flex justify-center w-full">
            <Icon icon="line-md:loading-twotone-loop" className="" width={48} />
          </div>
        )}
        <div className="w-full justify-between gap-2 flex">
          <label className="">{t("description.still_not_receive")}</label>
          <a href="#" className="text-primary" onClick={handleResent}>
            {t("action.resend")}
          </a>
        </div>

        <OtpInputCompoent value={otp} onChange={onChangeOtp} />
      </div>
      <div className="flex justify-center gap-2 p-2">
        <button
          className="btn btn-primary px-8 capitalize"
          onClick={() => onSubmit()}
        >
          {t("action.verify")}
        </button>
      </div>
    </>
  );
}
