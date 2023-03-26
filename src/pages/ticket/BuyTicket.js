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

export default function BuyTicket() {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const { t } = useTranslation();
  const [ticket, setTicket] = useState();
  const {user, isAuthenticated} = useAuth();

  useEffect(() => {
    try {
      const _ticket = TICKETS.filter((t) => t._id === id)[0];

      setTicket(_ticket);
      const _event = ALL_EVENTS.filter((e) => e._id === _ticket.eventId)[0];
      setEvent(_event);
    } catch (err) {}
  }, [id]);
  useEffect(()=>{
    if(!isAuthenticated){
        document.querySelector("#auth-modal-check").click();
    }
  },[isAuthenticated])
  return (
    <Page title="Buy Ticket">
      <PageBanner>
        <div className="container p-4 mb-8">
          <div className="flex w-full flex-col gap-8">
            {event && <BuyTicketBanner event={event} />}
            {ticket && event && (
              <div className="w-full flex flex-col gap-8">
                <div className="flex w-full gap-2 items-center">
                  <button className="rounded-lg border-primary/30 p-2 btn-sm text-primary hover:bg-primary/50 btn btn-primary bg-primary/30">
                    <Icon icon="la:undo"></Icon>
                  </button>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-lg">1 Ingresso - {ticket?.type}</h5>
                    <h6 className="text-stone-400 ">
                      {fDescriptionTypeDate(ticket?.date)}{" "}
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
                <CountChooser />
                <div className="flex-1 flex-col gap-1">
                  <h6>R${ticket?.price}</h6>
                  <h6 className="text-stone-400">
                    {t("description.origin_price", { price: ticket?.price })}
                  </h6>
                </div>
                <button className="btn btn-primary px-8 capitalize ">
                  {t("action.compare")}
                </button>
              </div>
              {/* avatar */}
              <div className="flex w-full">
                <GradientBorderWrapper>
                  <div className="p-4 flex gap-2">
                    <div className="avatar">
                      <div className="rounded-full h-12 w-12">
                        <LazyLoadImage src={ticket?.avatar} alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h5 className="text-lg">
                        Informações adicionais de Mariana
                      </h5>
                      <h6 className="text-stone-400">
                        {ticket?.position}, {event?.place}
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
                      src={"/images/clients/customer-1.png"}
                      alt=""
                    ></LazyLoadImage>
                  </div>
                </div>
                <div className="flex flex-col gap-1 min-w-[300px]">
                  <h5 className="text-lg">Mariana</h5>
                  <div className="text-stone-400 flex gap-1 items-center">
                    <Icon
                      icon="material-symbols:verified-user-rounded"
                      className={`text-success`}
                    ></Icon>
                    Telefone verificado
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
