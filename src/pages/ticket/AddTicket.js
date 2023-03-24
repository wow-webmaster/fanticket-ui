import { useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "../../components/Page";
import useAuth from '../../hooks/useAuth';
import PageBanner from "../../components/wrappers/PageBanner";
import ChangePhoneDialog from "../../sections/profile/ChangePhone";
import TicketAvatar from "../../sections/ticket/TicketAvatar";
import TicketFinalize from "../../sections/ticket/TicketFinalize";
import TicketNote from "../../sections/ticket/TicketNote";
import TicketPrice from "../../sections/ticket/TicketPrice";
import TicketUpload from "../../sections/ticket/TicketUpload";
import TicketShareSocial from "../../sections/ticket/TicketShareSocial";

export default function AddTicket() {
  const [step, setStep] = useState(0);
  const { t } = useTranslation();
  const {user, isAuthenticated} = useAuth();
  const onNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };
  const onPrev = () => {
    if (step >= 1) setStep(step - 1);
  };
  return (
    <Page title="Add Ticket">
      <PageBanner>
        <div className="container p-4">
          {step === 0 && <TicketUpload />}
          {step === 1 && <TicketNote />}
          {step === 2 && <TicketPrice />}
          {step === 3 && <TicketAvatar />}
          {step === 4 && <TicketFinalize onNext = {onNext} onPrev = {onPrev}/>}
          {step === 5 && <TicketShareSocial />}
          {/* actions */}
          {step !== 4 && (
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="max-w-2xl w-full mb-8">
                <div className="h-6"></div>

                <div className="w-full flex justify-between">
                  <button
                    className="btn btn-primary btn-outline px-8 capitalize "
                    onClick={onPrev}
                  >
                    {t("action.back")}
                  </button>
                  <button
                    className="btn btn-primary px-8 capitalize "
                    onClick={onNext}
                  >
                    {t("action.continue")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageBanner>
      <ChangePhoneDialog user={user} isAdditionalPhone/>
    </Page>
  );
}
