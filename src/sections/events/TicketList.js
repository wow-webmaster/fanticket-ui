import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import EventTicketCard from "../../components/cards/EventTicketCard";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";

export default function TicketList({ event, onDetailAction }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onAction = (eventTypeId) => {
    if(onDetailAction){
        onDetailAction(eventTypeId);
    }
  };
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex w-full justify-end">
        <button className="btn btn-primary px-4 capitalize">
          {t("action.sell_ticket")}
        </button>
      </div>
      <div className="flex flex-col">
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
      <div className="flex w-full flex-col gap-4 ">
        <h5 className="text-3xl">Ingressos de entrada</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="">
            <EventTicketCard
              eventTypeId="event_type_id"
              count={6}
              date={new Date()}
              onAction={onAction}
              type={"Pista"}
            />
          </div>
          <div className="">
            <EventTicketCard
              eventTypeId="event_type_id"
              count={0}
              date={new Date()}
              onAction={onAction}
              type={"Área VIP"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
