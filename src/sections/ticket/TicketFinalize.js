import { Icon } from "@iconify/react";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "../../redux/store";
import { fNumber } from "../../utils/formatNumber";
import { displayEventTime } from "../../utils/formatTime";
import ResetConfirmModal from "./ResetConfirmModal";
import axios from "../../utils/axios";
import { API_TICKET } from "../../config";

export default function TicketFinalize({ setStep }) {
  const { user } = useAuth();

  const { t } = useTranslation();
  const { saved } = useSelector((state) => state.ticket);
  const [event, setEvent] = useState(saved?.event);
  const onReset = () => {
    document.querySelector("#reset-confirm-modal").click();
  };

  const onCreateAD = () => {
    axios
      .post(API_TICKET.finializeTicket, { ticketId: saved?._id })
      .then((res) => {
        setStep(6);
      })
      .catch((err) => {});
  };
  const onClose = (action) => {
    document.querySelector("#reset-confirm-modal").click();
    if (action !== "cancel") setStep(0);
  };
  useEffect(() => {
    if (saved) {
      console.log(saved);
      const _event = saved?.event;
      const eventType = _event.types?.filter(
        (t) => t.typeId === saved?.eventTypeId
      )[0];
      setEvent({ ..._event, eventType });
    }
  }, [saved]);
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
              <p className="text-stone-400 text-sm">
                {event?.name} <br />
                {event?.eventType?.name}
                <br />
                {displayEventTime({ ...saved, containsTime: true })},{" "}
                {event?.place}
              </p>
              <span
                className="text-primary underline cursor-pointer "
                onClick={() => setStep(0)}
              >
                {t("action.edit")}
              </span>
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
              <p className="text-stone-400 text-sm">1 ingresso à venda</p>
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setStep(1)}
              >
                {t("action.edit")}
              </span>
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
              <p className="text-stone-400 text-sm">
                Informações adicionais: {saved?.seat}
              </p>
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setStep(3)}
              >
                {t("action.edit")}
              </span>
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
              <p className="text-stone-400 text-sm">
                R$ {fNumber(saved?.originPrice * 1.08)} por ingresso (você
                receberá R$ {fNumber(saved?.originPrice * 1.05)} por ingresso)
              </p>
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setStep(3)}
              >
                {t("action.edit")}
              </span>
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
              <p className="text-stone-400 text-sm">{user?.phoneNumber}</p>
              <Link
                // htmlFor="phone-modal-check"
                className="text-primary underline cursor-pointer"
                to={`/profile`}
              >
                {t("action.edit")}
              </Link>
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
              <p className="text-stone-400 text-sm">341 - 9649 - **** 4355</p>
              <Link
                // htmlFor="phone-modal-check"
                className="text-primary underline cursor-pointer"
                to={`/profile`}
              >
                {t("action.edit")}
              </Link>
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
              <p className="text-stone-400 text-sm">Público em FanTicket</p>
              <span className="text-primary underline">{t("action.edit")}</span>
            </div>
            <img src="/images/logo/logo-image.png" className="w-6 h-6" alt="" />
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
      <ResetConfirmModal ticketId={saved?._id} onClose={onClose} />
    </div>
  );
}
