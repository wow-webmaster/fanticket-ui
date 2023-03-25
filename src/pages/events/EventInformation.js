import { t } from "i18next";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Page from "../../components/Page";
import PageBanner from "../../components/wrappers/PageBanner";
import EventBanner from "../../sections/events/EventBanner";
import { ALL_EVENTS } from "../../_mocks";

export default function EventInformation() {
  const { eventId, tabId } = useParams();

  const [event, setEvent] = useState();
  useEffect(() => {
    try {
      setEvent(ALL_EVENTS.filter((e) => e._id === eventId)[0]);
    } catch (err) {}
  }, []);
  return (
    <Page title="Event Detail">
      <PageBanner>
        <div className="container p-4">
          <div className="flex flex-col gap-4">
            {event && (
              <>
                <EventBanner event={event} />
                <div className="tabs">
                  <Link className={`tab text-lg tab-bordered ${tabId === "basic"?'tab-active':''}`} to = {`/event/${eventId}/basic`}>
                    {t("title.ticket")}
                  </Link>
                  <Link to = {`/event/${eventId}/infomation`} className={`tab text-lg tab-bordered ${tabId === "infomation"?'tab-active':''}`}>{t("title.infomation")}</Link>
                  <Link to = {`/event/${eventId}/more`} className={`tab text-lg tab-bordered ${tabId === "more"?'tab-active':''}`}>{t("title.more")}</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </PageBanner>
    </Page>
  );
}
