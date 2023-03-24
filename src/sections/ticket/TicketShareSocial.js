import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";

export default function TicketShareSocial() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-1 max-w-2xl w-full">
        <h3 className="text-3xl">{t("title.ticket_share")}</h3>
        <h6 className="text-stone-400">{t("description.ticket_share")}</h6>
      </div>

      <div className="max-w-2xl w-full mb-8 flex flex-col gap-4">
        <div className="flex flex-col  gap-2 justify-between items-center w-full">
          <div className="flex justify-between gap-2 w-full mb-2">
            <button className="btn btn-primary flex-1">
              <Icon icon="iconoir:facebook" width={20} />
              Facebook
            </button>
            <button className="btn btn-info flex-1">
              <Icon icon="tabler:brand-twitter" width={20} />
              Twitter
            </button>
          </div>
          <GradientBorderWrapper>
            <div className="w-full flex px-2 items-center justify-between">
              <Icon icon="iconoir:facebook"></Icon>

              <input className="w-full flex-1 input "></input>
              <button className="btn btn-ghost btn-sm btn-circle">
                <Icon
                  icon="ic:round-content-copy"
                  width={20}
                  className={"text-primary"}
                />
              </button>
            </div>
          </GradientBorderWrapper>
          <div className="w-full items-center justify-center flex">
            <a herf = "#" className="text-primary underline" >Ir para o anúncio</a>
          </div>
          <div className="h-6 w-full">

          </div>
          <div className="w-full justify-left gap-2 py-4 items-center flex p-2 bg-secondary/40 rounded-lg">
            <Icon
              icon="mdi:information-variant-circle"
              className="text-primary"
            />
            <p>
              Para acessar os ingressos, os fãs precisam fazer o pagamento deles
              primeiro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
