import { useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "../../components/Page";
import PageBanner from "../../components/wrappers/PageBanner";
import TicketNote from "../../sections/ticket/TicketNote";
import TicketPrice from "../../sections/ticket/TicketPrice";
import TicketUpload from "../../sections/ticket/TicketUpload";

export default function AddTicket() {
  const [step, setStep] = useState(0);
  const { t } = useTranslation();
  const onNext = () => {
    if (step < 4) {
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
          {/* actions */}
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
        </div>
      </PageBanner>
    </Page>
  );
}
