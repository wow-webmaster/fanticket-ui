import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import EventSelectedCard from "../../components/cards/EventSelectedCard";
import EventTypeSelectedCard from "../../components/cards/EventTypeSelectedCard";
import EventSearchComponent from "../../components/form/EventSearchComponent";

import useAuth from "../../hooks/useAuth";
import { useSelector } from "../../redux/store";

export default function EventChoose({
  handleSelectedEvent,
  handleDiscardEvent,
}) {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { saved } = useSelector((state) => state.ticket);

  useEffect(() => {
    if (saved != null) {
      console.log(saved);
      const event = saved?.event;
      setSelectedEvent(event);
      if(handleSelectedEvent){
        handleSelectedEvent(event, saved?.eventTypeId )
      }
      
    }
  }, [saved]);

  const onSelected = (evt) => {
    console.log(evt);
    setSelectedEvent(evt);
    if (handleSelectedEvent) handleSelectedEvent(evt, null);
  };
  const onDiscardEvent = () => {
    if (selectedEvent) {
      setSelectedEvent(null);
      if (handleDiscardEvent) {
        handleDiscardEvent();
      }
    }
  };
  const onSelectedType = (eventType) => {
    if (handleSelectedEvent) handleSelectedEvent(selectedEvent, eventType);
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
              handleSelectedType={() => onSelectedType(type.typeId)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
