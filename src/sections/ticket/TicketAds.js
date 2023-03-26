import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import { IMPORTATNT_TICKET_SELL } from "../../_mocks";

export default function TicketAds() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col mb-8 justify-center items-center">
      <div className="flex flex-col gap-8 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.ticket_ads_finalize")}</h3>

        <GradientBorderWrapper>
          <div className="w-full gap-2 justify-between flex flex-col md:flex-row p-4">
            <h3 className="text-lg font-bold">
              {"1 x DGTL 2022 - São Paulo (Early Bird)"}
            </h3>
            <button className="btn btn-primary btn-sm capitalize">
              {t("action.ads_manage")}
            </button>
          </div>
        </GradientBorderWrapper>

        <GradientBorderWrapper>
          {/* what */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">
                {t("title.ticket_ads_what")}
              </h5>
              <p className="text-stone-400 text-sm">
                1 ingresso para DGTL 2022 - São Paulo (Early Bird)
              </p>
            </div>
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* price */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">
                {t("title.ticket_ads_price")}
              </h5>
              <p className="text-stone-400 text-sm">R$192,50 por ingresso</p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* ticket event */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">
                {t("title.ticket_ads_event_date")}
              </h5>
              <p className="text-stone-400 text-sm">
                Sábado, 9 de Abril de 2022
              </p>
            </div>
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* ticket location */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">
                {t("title.ticket_ads_location")}
              </h5>
              <p className="text-stone-400 text-sm">
                Pavilhão de Exposições do Anhembi, São Paulo, Brasil
              </p>
            </div>
          </div>
          <div className="divider mx-2 -my-3"></div>
          {/* ticket transfer */}
          <div className="flex gap-2 justify-between p-4 items-center">
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold">
                {t("title.ticket_ads_transfer")}
              </h5>
              <p className="text-stone-400 text-sm">341 - 9649 - **** 4355</p>
            </div>
          </div>
        </GradientBorderWrapper>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col gap-8 max-w-2xl w-full">
        <GradientBorderWrapper>
          <div className="p-4 w-full gap-4 flex flex-col">
            <h5 className="text-lg font-bold">Informação importante</h5>

            {IMPORTATNT_TICKET_SELL.map((important, index) => (
              <div className="flex gap-2 p-2 justify-start items-center" key = {index}>
                <div className="bg-secondary text-primary rounded-full flex-1 px-1 h-6 w-6 flex justify-center items-center">
                  <Icon
                    icon="ic:round-arrow-forward"
                    className="text-primary"
                  ></Icon>
                </div>
                <p className="text-stone-400">{important.content}</p>
              </div>
            ))}
          </div>
        </GradientBorderWrapper>
      </div>
    </div>
  );
}
