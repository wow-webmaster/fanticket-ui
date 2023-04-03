import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import EventTicketCard from "../../components/cards/EventTicketCard";
import EventTicketDetailCard from "../../components/cards/EventTicketDetailCard";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";

export default function TicketDetailList({ tickets, event, eventType }) {
  console.log(event, tickets);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const availableTickets = tickets.filter((t) => t.status === "inprogress");
  const soldTickets = tickets.filter((t) => t.status === "sold");
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex w-full justify-between">
        <button className="btn btn-primary btn-outline px-4 capitalize">
          Todos os ingressos
        </button>
        <button className="btn btn-primary px-4 capitalize">
          {t("action.sell_ticket")}
        </button>
      </div>
      <div className="flex flex-col mb-8">
        <GradientBorderWrapper>
          <div className="w-full p-4 flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="rounded-lg bg-secondary p-2">
                <Icon
                  icon="basil:notification-on-outline"
                  className="text-primary"
                ></Icon>
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h5 className="text-xl">Alerta de ingressos</h5>
                <h6 className="text-stone-400">
                  Seja notificado quando um ingresso estiver disponível
                </h6>
              </div>
            </div>
            <div>
              <input
                type={"checkbox"}
                className={"toggle toggle-md md:toggle-lg toggle-primary  "}
              ></input>
            </div>
          </div>
        </GradientBorderWrapper>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-3xl">
          Disponíveis -{" "}
          <span className="text-primary">{eventType?.name || ""}</span>
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {availableTickets?.map((t, index) => (
            <div key={index}>
              <EventTicketDetailCard eventType={eventType} ticket={t} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-3xl">Vendidos</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {soldTickets?.map((t, index) => (
            <div key={index}>
              <EventTicketDetailCard eventType={eventType} ticket={t} />
            </div>
          ))}
          {soldTickets.length === 0 && <div className="w-full flex">
            {t('description.no_data')}
            </div>}
        </div>
      </div>
    </div>
  );
}
