import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { useState } from "react";

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: "English",
    value: "en",
    icon: "/icons/flag_england.svg",
    lang: "en-US",
  },
  {
    label: "Português",
    value: "pt",
    icon: "/icons/flag_brazil.svg",
    lang: "pt-BR",
  },
];

export default function useLocales() {
  const { i18n, t } = useTranslation();
  const [currLng, setCurrLng] = useState('pt');
  const handleChangeLanguage = (newlang) => {
    setCurrLng(newlang);
    i18n.changeLanguage(newlang);
    cookies.set("i18nextLng", newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    t,
    currentLanguage:currLng,
    supportLangs: LANGS,
  };
}
