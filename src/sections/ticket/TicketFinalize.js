import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";

export default function TicketFinalize({onNext, onPrev}) {
  const { t } = useTranslation();
  const onReset = ()=>{
    if(onPrev){
      onPrev();
    }
  }
  const onCreateAD = ()=>{
    if(onNext){
      onNext();
    }
  }
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.ticket_finalize")}</h3>
        <h6 className="text-stone-400">{t("description.ticket_finalize")}</h6>
        <progress
          className="progress progress-success w-full"
          value="100"
          max="100"
        ></progress>
      </div>

      <div className="max-w-2xl w-full mb-8 flex flex-col gap-4">
        <GradientBorderWrapper>
          <div className="flex flex-col sm:flex-row gap-2 justify-between p-4 items-center">
            <p>
              Cada vez que sua lista é criada, fãs serão capazes de <br />
              comprar seus ingressos imediatamente!
            </p>
            <button className="btn btn-primary btn-sm capitalize">
              {t("action.make_ticket")}
            </button>
          </div>
        </GradientBorderWrapper>
      </div>
      <div className="max-w-2xl w-full mb-8 flex flex-col gap-4">
        <GradientBorderWrapper>
          {/* event */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">{t("title.event")}</h5>
              <p className="text-stone-500 text-sm">
                Time Warp Brasil 2022 <br />
                Sábado (Individual)
                <br />
                Seg, 10 de Setembro São Paulo
              </p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
            <Icon
              icon="material-symbols:check-small-rounded"
              className="text-white bg-success rounded-full"
            />
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* ticket */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">{t("title.ticket")}</h5>
              <p className="text-stone-500 text-sm">1 ingresso à venda</p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
            <Icon
              icon="material-symbols:check-small-rounded"
              className="text-white bg-success rounded-full"
            />
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* ticket detail */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">{t("title.ticket_detail")}</h5>
              <p className="text-stone-500 text-sm">
                Informações adicionais: 4º Lote - Meia Entrada Ticket
              </p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
            <Icon
              icon="material-symbols:check-small-rounded"
              className="text-white bg-success rounded-full"
            />
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* sell price */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">{t("title.ticket_detail")}</h5>
              <p className="text-stone-500 text-sm">
                R$264,00 por ingresso (você receberá R$250,80 por ingresso)
              </p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
            <Icon
              icon="material-symbols:check-small-rounded"
              className="text-white bg-success rounded-full"
            />
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* phone number */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">{t("title.phone_number")}</h5>
              <p className="text-stone-500 text-sm">+5551999999999</p>
              <label htmlFor="phone-modal-check" className="text-primary underline cursor-pointer">{t("action.edit")}</label>
            </div>
            <Icon
              icon="material-symbols:check-small-rounded"
              className="text-white bg-success rounded-full"
            />
          </div>

          <div className="divider mx-2 -my-3"></div>
          {/* bank account */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">{t("title.bank_account")}</h5>
              <p className="text-stone-500 text-sm">341 - 9649 - **** 4355</p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
            <Icon
              icon="material-symbols:check-small-rounded"
              className="text-white bg-success rounded-full"
            />
          </div>
        </GradientBorderWrapper>
      </div>
      <div className="max-w-2xl w-full mb-8 flex flex-col gap-4">
        <GradientBorderWrapper>
          {/* validate */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">{t("title.validate")}</h5>
              <p className="text-stone-500 text-sm">Público em FanTicket</p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
            <img src="/images/logo/logo-image.png" className="w-6 h-6" alt= "" />
          </div>
        </GradientBorderWrapper>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-full">
        <div className="max-w-2xl w-full mb-8">
          <div className="w-full flex justify-between">
            <button
              className="btn btn-primary btn-outline px-8 capitalize "
              onClick={onReset}
            >
              {t("action.reset")}
            </button>
            <button
              className="btn btn-primary px-8 capitalize "
              onClick={onCreateAD}
            >
              {t("action.create_ad")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}