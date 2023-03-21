import { Icon } from "@iconify/react";
import TicketCard from "../../components/cards/TicketCard";

export default function WhyUseSection() {
  return (
    <div className="container flex-col flex gap-12">
      <div className="flex gap-4 justify-center items-center">
        <div>
          <img
            src="/images/background/ticket-logo-icon.png"
            alt="ticketlogo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="prose lg:prose-lg">
          <h1>
            {" "}
            <span className="text-yellow-400">3 motivos</span>&nbsp;para usar
          </h1>
        </div>
      </div>
      <div className="container flex flex-col gap-4 md:gap-8 md:flex-row mb-10 justify-center">
        <div>
          <TicketCard className="">
            <div className="rounded-lg border-white border p-3">
              <Icon icon="ri:shield-check-line" />
            </div>
            <label className="text-center">
              Receba seu dinheiro com segurança
              <br /> de compradores verificados
            </label>
          </TicketCard>
        </div>
        <div>
          <TicketCard className="">
            <div className="rounded-lg border-white border p-3">
              <Icon icon="uil:money-withdraw" />
            </div>
            <label className="text-center">
              O comprador confia pois o pagamento é
              <br /> liberado após a realização do evento
            </label>
          </TicketCard>
        </div>
        <div>
          <TicketCard className="">
            <div className="rounded-lg border-white border p-3">
              <Icon icon="mdi:user-multiple" />
            </div>
            <label className="text-center">
              Segurança e conveniência para
              <br /> vendedores e compradores
            </label>
          </TicketCard>
        </div>
      </div>
    </div>
  );
}
