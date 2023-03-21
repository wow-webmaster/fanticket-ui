import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import { BlurModalBox } from "../../components/StyledComponents";
import { useEffect, useState } from "react";
import OtpInputCompoent from "../../components/form/OtpInputComponent";

export default function ChangePhoneDialog({ user }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const onNext = () => {
    setStep(1);
  };
  const onBack = () => {
    setStep(0);
  };
  const onSubmit = () => {};
  const onChangeOtp = (value) => {
    setOtp(value);
  };

 
  return (
    <>
      <input type="checkbox" id="phone-modal-check" className="modal-toggle" />
      <div className="modal">
        <BlurModalBox className="modal-box backdrop-blur-lg">
          <div className="mb-2">
            <label
              htmlFor="phone-modal-check"
              className="btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              {t("title.modal.change_phone")}
            </h3>
          </div>
          <hr className="-mx-5 border-stone-500 " />
          {step == 0 && (
            <>
              <div className="flex flex-col gap-2 p-2">
                <label className="text-stone-400">
                  {t("description.change_phone")}
                </label>
                <label className="text-lg">{t("title.current_phone")}</label>
                <label className="mb-2 text-stone-400 text-lg">
                  {user?.phoneNumber}
                </label>
                <label className="text-lg">{t("title.new_phone")}</label>
                <GradientBorderWrapper>
                  <input
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    placeholder={t("description.input_your_phone")}
                    className="input input-ghost rounded-xl w-full"
                  />
                </GradientBorderWrapper>
              </div>
              <div className="flex justify-end gap-2 p-2">
                <button
                  className="btn btn-primary px-8 capitalize"
                  onClick={onNext}
                >
                  {t("action.send")}
                </button>
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <div className="flex flex-col gap-4 p-2 mb-4">
                <label className="text-stone-400 mb-4">
                  {t("description.already_sent_otp", { address: newPhoneNumber })}
                </label>
                <a href = "#" className="text-primary">{t("action.resend")}</a>
                <OtpInputCompoent value={otp} onChange={onChangeOtp} />
              </div>
              <div className="flex justify-center gap-2 p-2">
                <button
                  className="btn btn-primary px-8 capitalize"
                  onClick={onBack}
                >
                  {t("action.back")}
                </button>
                <button
                  className="btn btn-primary px-8 capitalize"
                  onClick={onSubmit}
                >
                  {t("action.verify")}
                </button>
              </div>
            </>
          )}
        </BlurModalBox>
      </div>
    </>
  );
}
