import { t } from "i18next";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Page from "../../components/Page";
import PageBanner from "../../components/wrappers/PageBanner";
import EventBanner from "../../sections/events/EventBanner";
import EventInformationSection from "../../sections/events/EventInfomationSection";
import EventMoreSection from "../../sections/events/EventMore";
import TicketDetailList from "../../sections/events/TicketDetailList";
import TicketList from "../../sections/events/TicketList";
import { ALL_EVENTS } from "../../_mocks";

export default function EventInformation() {
  const { eventId, tabId } = useParams();
  const [eventTypeId, setEventTypeId] = useState();
  const [tickets, setTickets] = useState([]);
  const [currentEvent, setCurrentEvent] = useState();

  useEffect(() => {
    try {
      const _event = ALL_EVENTS.filter((e) => e._id === eventId)[0];
      setCurrentEvent(_event);
    } catch (err) {
      console.log(err);
    }
  }, [eventId]);

  const onDetailAction = (eventTypeId) => {
    setEventTypeId(eventTypeId);
    if (currentEvent && currentEvent?.tickets && eventTypeId) {
      setTickets(currentEvent.tickets.filter((e) => e.type === eventTypeId));
    }
  };
  return (
    <Page title="Event Detail">
      <PageBanner>
        <div className="container p-4">
          <div className="flex flex-col gap-4 mb-8">
            {currentEvent && (
              <>
                <EventBanner event={currentEvent} />
                <div className="flex flex-col gap-4 md:flex-row justify-between mb-8">
                  <div className="tabs">
                    <Link
                      className={`tab text-lg tab-bordered ${
                        tabId === "basic" ? "tab-active" : ""
                      }`}
                      to={`/event/${eventId}/basic`}
                    >
                      {t("title.ticket")}
                    </Link>
                    <Link
                      to={`/event/${eventId}/infomation`}
                      className={`tab text-lg tab-bordered ${
                        tabId === "infomation" ? "tab-active" : ""
                      }`}
                    >
                      {t("title.infomation")}
                    </Link>
                    <Link
                      to={`/event/${eventId}/more`}
                      className={`tab text-lg tab-bordered ${
                        tabId === "more" ? "tab-active" : ""
                      }`}
                    >
                      {t("title.more")}
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex justify-center flex-col items-center">
                      <h5 className="text-2xl">16</h5>
                      <h6 className="text-stone-400">Disponíveis</h6>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                      <h5 className="text-2xl">6</h5>
                      <h6 className="text-stone-400">Vendidos</h6>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                      <h5 className="text-2xl">25</h5>
                      <h6 className="text-stone-400">Desejados</h6>
                    </div>
                  </div>
                </div>
                {tabId === "basic" && !eventTypeId && (
                  <TicketList
                    event={currentEvent}
                    onDetailAction={onDetailAction}
                  />
                )}
                {tabId === "basic" && eventTypeId && tickets && (
                  <TicketDetailList tickets={tickets} event={currentEvent} />
                )}
                {tabId === "infomation" && <EventInformationSection />}
                {tabId === "more" && <EventMoreSection />}
              </>
            )}
          </div>
        </div>
      </PageBanner>
    </Page>
  );
}
