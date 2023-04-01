import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "../../components/Page";
import useAuth from "../../hooks/useAuth";
import PageBanner from "../../components/wrappers/PageBanner";
import ChangePhoneDialog from "../../sections/profile/ChangePhone";
import TicketAvatar from "../../sections/ticket/TicketAvatar";
import TicketFinalize from "../../sections/ticket/TicketFinalize";
import TicketNote from "../../sections/ticket/TicketNote";
import TicketPrice from "../../sections/ticket/TicketPrice";
import TicketUpload from "../../sections/ticket/TicketUpload";
import TicketShareSocial from "../../sections/ticket/TicketShareSocial";
import TicketAds from "../../sections/ticket/TicketAds";
import EventChoose from "../../sections/ticket/EventChoose";
import { dispatch, useSelector } from "../../redux/store";
import { loadSavedTicket, setSavedTicket } from "../../redux/slices/ticket";
let initialize = false;

export default function AddTicket() {
  const { saved } = useSelector((state) => state.ticket);
  const [step, setStep] = useState(saved?.ticketSavedStep || 0);
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    console.log("...here");
    dispatch(loadSavedTicket());
  }, [step]);

  useEffect(() => {
    console.log("...initialize",saved);
    if (saved && saved?.ticketSavedStep > 0) {
      if (!initialize) setStep(saved?.ticketSavedStep);
      initialize = true;
    }
  }, [saved]);
  return (
    <Page title="Add Ticket">
      <PageBanner>
        <div className="container p-4 mb-8">
          {step === 0 && <EventChoose setStep={setStep} />}
          {step === 1 && <TicketUpload setStep={setStep} />}
          {step === 2 && <TicketNote setStep={setStep} />}
          {step === 3 && <TicketPrice setStep={setStep} />}
          {step === 4 && <TicketAvatar setStep={setStep} />}
          {step === 5 && <TicketFinalize setStep={setStep} />}
          {step === 6 && <TicketShareSocial />}
          {step === 7 && <TicketAds />}
        </div>
      </PageBanner>
      <ChangePhoneDialog user={user} isAdditionalPhone />
    </Page>
  );
}
