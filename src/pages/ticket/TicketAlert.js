import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import EventSearchComponent from "../../components/form/EventSearchComponent";
import Page from "../../components/Page";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import PageBanner from "../../components/wrappers/PageBanner";
import { ALL_EVENTS } from "../../_mocks";

export default function TicketAlert() {
  const { t } = useTranslation();
  const onNavigate = () => {};
  const alertedEvents = ALL_EVENTS.filter((e) => e.alert);
  return (
    <Page title="Ticket Alert">
      <PageBanner>
        <div className="container p-4 mb-8">
          <div className="w-full justify-center items-center flex mb-8">
            <h4 className="text-4xl font-bold">{t("title.menu.alert")}</h4>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-4xl container mb-8">
            {alertedEvents.length === 0 && (
              <>
                <div className="container max-w-2xl mb-4">
                  <EventSearchComponent />
                </div>
                <GradientBorderWrapper isMessage>
                  <div className="flex p-4 w-full">
                    <p>
                      {
                        "There is no subscribed event, If you want to notify from special event, then "
                      }

                      <Link to="/" className=" text-lg">
                        Search Events
                      </Link>
                    </p>
                  </div>
                </GradientBorderWrapper>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              {ALL_EVENTS.filter((e) => e.alert).map((e, index) => (
                <GradientBorderWrapper key={index}>
                  <div
                    className="p-4 w-full flex flex-col gap-2"
                    onClick={onNavigate}
                  >
                    <div className="flex gap-1 items-center text-primary/60 justify-between">
                      <div className="flex gap-1 items-center">
                        <Icon icon="bi:calendar2-date"></Icon>
                        {"Mulitiple Dates"}
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="btn btn-sm btn-circle text-primary btn-primary bg-primary/30 hover:bg-primary/50 border-primary/60">
                          <Icon icon="tabler:trash" width={16}></Icon>
                        </button>
                      </div>
                    </div>
                    <Link to={`/event/${e._id}/basic`}>
                      <h6 className="text-xl text-primary underline">
                        {e?.name}
                      </h6>
                    </Link>

                    <h6 className="text-stone-400">
                      {e?.place},{e?.city}
                    </h6>
                  </div>
                </GradientBorderWrapper>
              ))}
            </div>
          </div>
        </div>
      </PageBanner>
    </Page>
  );
}
