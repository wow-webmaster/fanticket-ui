import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import EventSelectedCard from "../../components/cards/EventSelectedCard";
import EventTypeSelectedCard from "../../components/cards/EventTypeSelectedCard";
import EventSearchComponent from "../../components/form/EventSearchComponent";
import { API_TICKET } from "../../config";

import useAuth from "../../hooks/useAuth";
import { setSavedTicket } from "../../redux/slices/ticket";
import { dispatch, useSelector } from "../../redux/store";
import axios from "../../utils/axios";

export default function EventChoose({ setStep }) {
  const { user } = useAuth();
  const { saved } = useSelector((state) => state.ticket);
  const { t } = useTranslation();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [disabledForward, setDisabledForward] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (saved && saved !==null) {
  
      const event = saved?.event;
      setSelectedEvent({
        ...event,
        eventTypeId: saved?.eventTypeId,
        selectedDate: saved?.dateTime,
      });
      setDisabledForward(false);
    }
  }, [saved]);

  const onSelected = (evt) => {

    setSelectedEvent(evt);
  };
  const onDiscardEvent = () => {
    if (selectedEvent) {
      setSelectedEvent(null);
    }
  };
  const onSelectedType = (eventTypeId, dateTime) => {
 
    setSelectedEvent({ ...selectedEvent, eventTypeId, selectedDate: dateTime });
    setDisabledForward(false);
  };
  const onNext = () => {
    setLoading(true);
    // save temp
    axios
      .post(API_TICKET.saveTicketEvent, {
        eventId: selectedEvent?._id,
        typeId: selectedEvent?.eventTypeId,
        dateTime: selectedEvent?.selectedDate, // selected date
      })
      .then((res) => {
        console.log(res.data.data, "is saved result");
        console.log(disabledForward, " is saved event");
        setDisabledForward(true);
        setStep(1);
        // dispatch(setSavedTicket(res.data.data));
      })
      .catch((err) => {
        toast.error(err.toString());
        console.log(err, " is next error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full mb-4">
        <h3 className="text-3xl">{t("title.select_event")}</h3>
        <h6 className="text-stone-400">
          {t("description.select_event", { fullName: user?.fullName })}
        </h6>
      </div>
      <div className="max-w-2xl w-full  flex flex-col gap-4">
        <EventSearchComponent handleSelected={(evt) => onSelected(evt)} />
      </div>

      {selectedEvent && (
        <div className="flex flex-col gap-1 max-w-2xl w-full mb-4">
          <EventSelectedCard
            event={selectedEvent}
            handleDiscardEvent={onDiscardEvent}
          />
        </div>
      )}

      {selectedEvent && (
        <div className="flex flex-col gap-2 max-w-2xl w-full">
          <h3 className="text-3xl">{t("title.select_event_type")}</h3>
          <h6 className="text-stone-400 mb-4">
            {t("description.select_event_type")}
          </h6>
          {selectedEvent?.types?.map((type, index) => (
            <EventTypeSelectedCard
              key={index}
              defaultChecked={type?.typeId === saved?.eventTypeId}
              eventType={type}
              handleSelectedType={() =>
                onSelectedType(type.typeId, type?.dateTime)
              }
            />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-8 justify-center items-center w-full">
        <div className="max-w-2xl w-full mb-8">
          <div className="h-6"></div>

          <div className="w-full flex justify-end">
            <button
              disabled={disabledForward}
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
    </div>
  );
}
