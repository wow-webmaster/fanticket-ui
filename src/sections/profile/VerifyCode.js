import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import { BlurModalBox } from "../../components/StyledComponents";
import { useEffect, useState } from "react";
import OtpInputCompoent from "../../components/form/OtpInputComponent";
import { Icon } from "@iconify/react";

export default function OtpVerifyDialog({
  user,
  method = "email",
  address = "",
  id = "otp-modal-check",
}) {
  const { t } = useTranslation();
  const [otp, setOtp] = useState("");
  const [sending, setSending] = useState(false);
  const onSubmit = () => {};
  const onChangeOtp = (value) => {
    setOtp(value);
  };

  useEffect(() => {
    setSending(true);
    // await call api
    // setSending(false);
  }, [address]);
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <BlurModalBox className="modal-box backdrop-blur-lg">
          <div className="mb-2">
            <label
              htmlFor={id}
              className="btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">{t("title.modal.verify_otp")}</h3>
          </div>
          <hr className="-mx-5 border-stone-500 " />

          <div className="flex flex-col gap-4 p-2 mb-4">
            <label className="text-stone-400 mb-4">
              {t("description.already_sent_otp", {
                address,
              })}
            </label>
            <div className="flex justify-center w-full">
              <Icon
                icon="line-md:loading-twotone-loop"
                className=""
                width={48}
              />
            </div>
            <div className="w-full justify-between gap-2 flex">
              <label className="">{t("description.still_not_receive")}</label>
              <a href="#" className="text-primary">
                {t("action.resend")}
              </a>
            </div>

            <OtpInputCompoent value={otp} onChange={onChangeOtp} />
          </div>
          <div className="flex justify-center gap-2 p-2">
            <button
              className="btn btn-primary px-8 capitalize"
              onClick={onSubmit}
            >
              {t("action.verify")}
            </button>
          </div>
        </BlurModalBox>
      </div>
    </>
  );
}
