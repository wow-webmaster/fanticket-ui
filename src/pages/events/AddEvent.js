import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import DateTimePicker from 'react-datetime-picker';

import Page from "../../components/Page";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import PageBanner from "../../components/wrappers/PageBanner";
import CustomDateTimePicker from "../../components/form/CustomDateTimePicker";
import { Icon } from "@iconify/react";

export default function AddEvent() {
  const { t } = useTranslation();
  const [dateTime, setDateTime] = useState(new Date());
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: useMemo(() => {
      return {
        name: "",
        place: "",
        start: new Date(),
        end: new Date(),
        link: "",
      };
    }, []),
  });
  const onChangeDateTime = (value)=>{
    setDateTime(value);
    setValue('start', value);
  }
  const onSubmit = (data) => {};

  return (
    <Page title="Add Event">
      <PageBanner>
        <div className="container mb-8 ">
          <div className="flex justify-center  px-2 ">
            <FormProvider>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4  p-2 max-w-4xl">
                  
                  <h3 className="text-4xl mb-4">{t("title.add_new_event")}</h3>
                  <div className="alert rounded-xl bg-yellow-400/60 flex gap-2 justify-start items-center mb-4">
                    <Icon icon = "mi:warning" color="text-yellow-400"  width={24}/>
                    <p>
                      {t('description.new_event_alert')}
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                      <h6 className="mb-2">{t("title.new_event_name")}</h6>
                      <GradientBorderWrapper>
                        <input
                          className="input input-lg input-ghost rounded-xl w-full"
                          {...register("name")}
                        ></input>
                      </GradientBorderWrapper>
                      <span className="text-stone-400 text-sm ">
                        {t('description.new_event_name_desc')}
                      </span>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                      <h6 className="mb-2">{t("title.new_event_place")}</h6>
                      <GradientBorderWrapper>
                        <input
                          className="input input-lg input-ghost rounded-xl w-full"
                          {...register("place")}
                        ></input>
                      </GradientBorderWrapper>
                    </div>
                    
                    <div className="col-span-12 md:col-span-6">
                      <h6 className="mb-2">{t("title.new_event_place")}</h6>
                      <CustomDateTimePicker value = {dateTime} onChange = {onChangeDateTime} />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <h6 className="mb-2">{t("title.new_event_link")}</h6>
                      <GradientBorderWrapper>
                        <input
                          className="input input-lg input-ghost rounded-xl w-full"
                          {...register("link")}
                        ></input>
                      </GradientBorderWrapper>
                      <span className="text-stone-400 text-sm ">
                        {t('description.new_event_link_desc')}
                      </span>
                    </div>
                    
                  </div>
                  <div className="w-full justify-end flex">
                    <button className="btn btn-primary capitalize px-10">{t('action.send')}</button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </PageBanner>
    </Page>
  );
}
