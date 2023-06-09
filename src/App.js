import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ScrollTop from "./components/ScrollTop";
import GlobalStyle from "./GlobalStyles";
import useLocales from "./hooks/useLocales";

import { dispatch } from "./redux/store";
import { loadAvailableEvents } from "./redux/slices/event";
import Router from "./routes";
import { setAcceptLanguage } from "./utils/jwt";

export default function App() {
  const { onChangeLang } = useLocales();
  useEffect(() => {
    const lang = Cookies.get("i18nextLng") || "pt";
    onChangeLang(lang);
    setAcceptLanguage(lang);

    dispatch(loadAvailableEvents());
  }, []);
  return (
    <>
      <GlobalStyle />
      <ToastContainer hideProgressBar />
      <Router />
    </>
  );
}
