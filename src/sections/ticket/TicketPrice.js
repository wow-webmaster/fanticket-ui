import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";

export default function TicketPrice() {
  const { t } = useTranslation();

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col gap-8 max-w-2xl w-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl">{t("title.set_price")}</h3>
          <p>{t("description.set_price")}</p>
        </div>
        {/* price input */}
        <div className="flex gap-2 flex-col md:flex-row">
          <div>
            <GradientBorderWrapper>
              <div className="flex w-full justify-between px-2 items-center">
                <h6>R$</h6>
                <input className="input "></input>
                <h6 className="text-stone-400">/ingresso</h6>
              </div>
            </GradientBorderWrapper>
          </div>

          <button className="btn btn-primary capitalize flex flex-col gap-2 flex-1">
            <h6>
              <b>R$256.00</b>
            </h6>

            <h6>Original</h6>
          </button>
          <button className="btn btn-secondary capitalize flex flex-col gap-2 flex-1">
            <h6>
              <b>R$316.80</b>
            </h6>

            <h6>Máximo</h6>
          </button>
        </div>
        <div className="flex gap-2 flex-col md:flex-row w-full justify-between">
          <div className="flex flex-col gap-1">
            <h5 className="text-lg font-bold">{t("title.you_receive")}</h5>
            <p className="text-stone-400 text-sm">
              {t("description.include_commission")}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <h5 className="text-lg font-bold">R$250.80</h5>
            <small className="text-stone-400">/ingresso</small>
          </div>
        </div>
        <div className="divider -my-8"></div>
        <div className="flex gap-2 flex-col md:flex-row w-full justify-between">
          <div className="flex flex-col gap-1">
            <h5 className="text-lg font-bold">{t("title.buyer_pay")}</h5>
            <p className="text-stone-400 text-sm">
              {t("description.include_transaction")}
            </p>
          </div>
          <div className="flex gap-1  items-center">
            <h5 className="text-lg font-bold">R$285,52</h5>
            <small className="text-stone-400">/ingresso</small>
          </div>
        </div>
      </div>
    </div>
  );
}
