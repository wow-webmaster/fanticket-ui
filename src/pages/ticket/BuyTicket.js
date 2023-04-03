import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import CountChooser from "../../components/form/CountChooser";
import Page from "../../components/Page";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import PageBanner from "../../components/wrappers/PageBanner";
import useAuth from "../../hooks/useAuth";
import BuyTicketBanner from "../../sections/ticket/BuyTicketBanner";
import BuyTicketHelp from "../../sections/ticket/BuyTicketHelp";
import { fDescriptionTypeDate } from "../../utils/formatTime";
import { ALL_EVENTS, TICKETS } from "../../_mocks";
import axios from "../../utils/axios";
import { API_TICKET, HOST_API } from "../../config";
import EventBannerSkeleton from "../../components/skeletons/EventBannerSkeleton";
import { fNumber } from "../../utils/formatNumber";

export default function BuyTicket() {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const { t } = useTranslation();
  const [ticket, setTicket] = useState();
  const { user, isAuthenticated } = useAuth();
  const [uploader, setUploader] = useState(null);
  const [loading, setLoading] = useState(false);
  const [eventType, setEventType] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_TICKET.getTicketDetail}/${id}`)
        .then((res) => {
          const _ticket = res.data.data.ticket;
          if (_ticket) {
            setEvent(_ticket?.event);
            const _type = _ticket?.event?.types.filter(
              (t) => t.typeId === _ticket?.eventTypeId
            )[0];
            setEventType(_type);
          }

          const _uploader = res.data.data.uploader;
          setTicket(_ticket);
          setUploader(_uploader);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
      // const _ticket = TICKETS.filter((t) => t._id === id)[0];

      // setTicket(_ticket);
      // const _event = ALL_EVENTS.filter((e) => e._id === _ticket.eventId)[0];
      // setEvent(_event);
    } catch (err) {}
  }, [id]);
  useEffect(() => {
    if (!isAuthenticated) {
      document.querySelector("#auth-modal-check").click();
    }
  }, [isAuthenticated]);
  const onChangeCounter = (amount) => {
    console.log(amount);
    setCount(amount);
  };

  return (
    <Page title="Buy Ticket">
      <PageBanner>
        <div className="container p-4 mb-8">
          <div className="flex w-full flex-col gap-8">
            {loading && <EventBannerSkeleton />}

            {!loading && event && <BuyTicketBanner event={event} />}
            {ticket && event && (
              <div className="w-full flex flex-col gap-8">
                <div className="flex w-full gap-2 items-center">
                  <button className="rounded-lg border-primary/30 p-2 btn-sm text-primary hover:bg-primary/50 btn btn-primary bg-primary/30">
                    <Icon icon="la:undo"></Icon>
                  </button>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-lg">1 Ingresso - {eventType?.name}</h5>
                    <h6 className="text-stone-400 ">
                      • {fDescriptionTypeDate(ticket?.dateTime)} <br />•{" "}
                      {t("title.origin_price")}: {"R$ "}
                      {fNumber(ticket?.originPrice)}
                    </h6>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </PageBanner>
      <div className="container p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <GradientBorderWrapper>
            <div className="w-full flex p-4 flex-col gap-2">
              <div className="flex justify-between gap-4">
                <CountChooser max={1} onChanged={onChangeCounter} />
                <div className="flex-1 flex-col gap-1">
                  <h6>R$ {fNumber(ticket?.sellPrice)}</h6>
                  <h6 className="text-stone-400">
                    {t("description.origin_price", {
                      price: fNumber(ticket?.originPrice),
                    })}
                  </h6>
                </div>
                <button
                  className="btn btn-primary px-8 capitalize "
                  disabled={count === 0}
                >
                  {t("action.compare")}
                </button>
              </div>
              {/* avatar */}
              <div className="flex w-full">
                <GradientBorderWrapper>
                  <div className="p-4 flex gap-2 items-center">
                    <div className="avatar">
                      <div className="rounded-full h-12 w-12">
                        <LazyLoadImage
                          src={`${HOST_API}${ticket?.avatar}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg">
                        Informação adicional do bilhete
                      </h5>
                      <h6 className="text-stone-400 flex items-center gap-2">
                        {t("title.uploaded_file")}
                        {ticket?.uploadedFile ? (
                          <Icon
                            icon="material-symbols:verified-user-rounded"
                            className={`text-success`}
                          ></Icon>
                        ) : (
                          <Icon
                            icon="ic:baseline-not-interested"
                            className={`text-error`}
                          ></Icon>
                        )}
                      </h6>
                      <h6 className="text-stone-400">
                        {ticket?.seat} <br />
                      </h6>
                    </div>
                  </div>
                </GradientBorderWrapper>
              </div>
              <GradientBorderWrapper isMessage>
                <div className="w-full flex p-4 gap-2 items-center">
                  <div className=" text-primary">
                    <Icon
                      icon="mdi:information-variant-circle"
                      width={20}
                    ></Icon>
                  </div>
                  <div>
                    <h5 className="text-lg"> Conta do ingresso necessária</h5>
                    <h6 className="text-stone-400">
                      Para poder acessar isso, você precisa ter uma conta de
                      ingresso
                    </h6>
                  </div>
                </div>
              </GradientBorderWrapper>
            </div>
          </GradientBorderWrapper>
          {/* user info */}
          <div className="flex flex-col gap-2 flex-1 ">
            <GradientBorderWrapper>
              <div className="w-full flex gap-2 p-4 items-center">
                <div className="avatar">
                  <div className="rounded-full h-12 w-12">
                    <LazyLoadImage
                      src={`${HOST_API}${uploader?.avatar}`}
                      alt=""
                    ></LazyLoadImage>
                  </div>
                </div>
                <div className="flex flex-col gap-1 min-w-[300px]">
                  <h5 className="text-lg capitalize">{uploader?.fullName}</h5>

                  <div className="text-stone-400 flex gap-1 items-center">
                    <Icon
                      icon={
                        uploader?.phoneVerification
                          ? `material-symbols:verified-user-rounded`
                          : `ic:baseline-not-interested`
                      }
                      className={`${
                        uploader?.phoneVerification
                          ? "text-success"
                          : "text-error"
                      }`}
                    ></Icon>
                    Telefone verificado
                  </div>

                  <div className="text-stone-400 flex gap-1 items-center">
                    <Icon
                      icon={"ph:ticket-light"}
                      className={`text-success`}
                    ></Icon>
                    {t("description.sold_ticket", {
                      count: uploader?.tickets?.filter(
                        (t) => t.status === "sold"
                      ).length,
                    })}
                  </div>
                </div>
              </div>
            </GradientBorderWrapper>
            <GradientBorderWrapper>
              <div className="w-full flex gap-2 p-4 justify-center min-w-[300px]">
                <div className="flex flex-col">
                  <h5 className="text-lg mb-4">FanSecurity</h5>
                  <h6 className="text-stone-400">
                    Trocaremos o ingresso original por um novo para 100% de
                    segurança.
                  </h6>
                </div>
                <div className="flex items-center">
                  <div className="bg-success/50 flex gap-1 items-center rounded-full p-4 ">
                    <Icon icon="ic:outline-verified-user" width={24}></Icon>
                  </div>
                </div>
              </div>
            </GradientBorderWrapper>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <BuyTicketHelp />
      </div>
    </Page>
  );
}
