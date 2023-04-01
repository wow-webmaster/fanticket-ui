import { Icon } from "@iconify/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import { dispatch, useSelector } from "../../redux/store";
import { fNumber } from "../../utils/formatNumber";
import axios from "../../utils/axios";
import { API_TICKET } from "../../config";
import { setSavedTicket } from "../../redux/slices/ticket";

export default function TicketPrice({ setStep }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { saved } = useSelector((state) => state.ticket);
  // const vaildSchema  = Yup.object().shape({
  //   sellPrice:Yup.number().min(0).max(4000).required(t('validation.max',{object:'Sell Price ',value:saved?.originPrice})),
  // });
  const { register, handleSubmit, setValue, watch } = useForm({
    // resolver: yupResolver(vaildSchema),
    defaultValues: useMemo(() => {
      return {
        seat: saved?.seat || "",
        qrcode: saved?.qrcode || "",
        sellPrice: saved?.originPrice || "",
      };
    }, []),
  });
  const sellPrice = watch("sellPrice");
  const onPrev = () => {
    setStep(2);
  };
  const onNext = () => {
    setStep(4);
  };

  const onSubmit = (data) => {
//    console.log(data);
    setLoading(true);
    axios
      .post(API_TICKET.saveTicketPrcie, {
        ticketId: saved?._id,
        ...data,
      })
      .then((res) => {
        // dispatch(setSavedTicket(res.data.data));
        onNext();
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
    
  };
  return (
    <FormProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full justify-center flex flex-col gap-8 items-center ">
          <div className="flex flex-col gap-8 max-w-2xl w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl">{t("title.set_price")}</h3>
              <p>
                {t("description.set_price", {
                  price: fNumber(saved?.originPrice),
                })}
              </p>
            </div>
            {/* seat & date info */}
            <div className="flex gap-2 flex-col md:flex-row w-full">
              <div className="flex-1">
                <GradientBorderWrapper>
                  <div className="flex w-full justify-between px-2 items-center">
                    <Icon icon="ic:twotone-airline-seat-recline-extra"></Icon>

                    <input
                      className="input flex-1"
                      {...register("seat")}
                    ></input>
                  </div>
                </GradientBorderWrapper>
              </div>

              <div className="flex-1">
                <GradientBorderWrapper>
                  <div className="flex w-full justify-between px-2 items-center">
                    <Icon icon="uiw:qrcode"></Icon>
                    <input
                      className="input flex-1"
                      {...register("qrcode")}
                    ></input>
                  </div>
                </GradientBorderWrapper>
              </div>
            </div>
            {/* price input */}
            <div className="flex gap-2 flex-col md:flex-row w-full">
              <div>
                <GradientBorderWrapper>
                  <div className="flex w-full justify-between px-2 items-center">
                    <h6>R$</h6>
                    <input
                      type="number"
                      // min={saved?.originPrice}
                      max={saved?.originPrice * 1.2}
                      className="input "
                      {...register("sellPrice")}
                    ></input>
                    <h6 className="text-stone-400">/ingresso</h6>
                  </div>
                </GradientBorderWrapper>
              </div>

              <button
                className="btn btn-primary capitalize flex flex-col gap-2 flex-1"
                onClick={() => {
                  setValue("sellPrice", saved?.originPrice);
                }}
              >
                <h6>
                  <b>R$ {fNumber(saved?.originPrice)} </b>
                </h6>

                <h6>Original</h6>
              </button>
              <button
                className="btn btn-secondary capitalize flex flex-col gap-2 flex-1"
                onClick={() => {
                  setValue("sellPrice", saved?.originPrice * 1.2);
                }}
              >
                <h6>
                  <b>R$ {fNumber(saved?.originPrice * 1.2)} </b>
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
                <h5 className="text-lg font-bold">
                  R$ {fNumber(sellPrice * 1.05)}
                </h5>
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
                <h5 className="text-lg font-bold">
                  R$ {fNumber(sellPrice * 1.08)}
                </h5>
                <small className="text-stone-400">/ingresso</small>
              </div>
            </div>
          </div>
          {/* action buttons */}

          <div className="max-w-2xl w-full mb-8">
            <div className="h-6"></div>

            <div className="w-full flex justify-between">
              <button
                className={`btn btn-primary px-8 capitalize btn-outline`}
                onClick={onPrev}
              >
                {t("action.back")}
              </button>
              <button
                type="submit"
                // disabled={disabledForward}
                className={`btn btn-primary px-8 capitalize ${
                  loading ? "loading" : ""
                }`}
              >
                {t("action.continue")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
