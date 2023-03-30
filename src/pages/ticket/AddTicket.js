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
import axios from "../../utils/axios";
import { API_EVENT, API_TICKET } from "../../config";
import { dispatch, useSelector } from "../../redux/store";
import { loadSavedTicket, setSavedTicket } from "../../redux/slices/ticket";
import { toast } from "react-toastify";

export default function AddTicket() {
  const [step, setStep] = useState(0);

  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(loadSavedTicket());
  }, []);

  const onNext = async () => {
    if (step === 0 && selectedEvent && selectedEvent?.selectedType) {
      setLoading(true);
      // save temp
      axios
        .post(API_TICKET.saveTicketEvent, {
          eventId: selectedEvent?._id,
          typeId: selectedEvent?.selectedType,
        })
        .then((res) => {
          dispatch(setSavedTicket(res.data.data));
          setStep(1);
        })
        .catch((err) => {
          toast.error(err.toString());
          console.log(err, " is next error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // if (step < 7) {
    //   setStep(step + 1);
    // }
  };
  const onPrev = () => {
    // console.log(selectedEvent)
    if (step >= 1) setStep(step - 1);
  };
  const onSelectedEvent = (event, eventTypeId) => {
    if (step === 0) setSelectedEvent({ ...event, selectedType: eventTypeId });
  };
  const onDiscardEvent = () => {
    if (step === 0) setSelectedEvent(null);
  };
  return (
    <Page title="Add Ticket">
      <PageBanner>
        <div className="container p-4 mb-8">
          {step === 0 && (
            <EventChoose
              handleSelectedEvent={onSelectedEvent}
              handleDiscardEvent={onDiscardEvent}
            />
          )}
          {step === 1 && <TicketUpload/>}
          {step === 2 && <TicketNote />}
          {step === 3 && <TicketPrice />}
          {step === 4 && <TicketAvatar />}
          {step === 5 && <TicketFinalize onNext={onNext} onPrev={onPrev} />}
          {step === 6 && <TicketShareSocial />}
          {step === 7 && <TicketAds />}

          {/* actions */}
          {step !== 5 && (
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="max-w-2xl w-full mb-8">
                <div className="h-6"></div>

                <div className="w-full flex justify-between">
                  <button
                    disabled={step === 0}
                    className="btn btn-primary btn-outline px-8 capitalize "
                    onClick={onPrev}
                  >
                    {t("action.back")}
                  </button>
                  <button
                    disabled={
                      step === 0
                        ? selectedEvent === null ||
                          selectedEvent?.selectedType === null
                        : false
                    }
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
          )}
        </div>
      </PageBanner>
      <ChangePhoneDialog user={user} isAdditionalPhone />
    </Page>
  );
}
