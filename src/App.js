import Cookies from "js-cookie";
import React, { useEffect } from "react";
import ScrollTop from "./components/ScrollTop";
import GlobalStyle from "./GlobalStyles";
import useLocales from "./hooks/useLocales";
import Router from "./routes";

export default function App() {
  const {onChangeLang} = useLocales();
  useEffect(()=>{
    const lang = Cookies.get('i18nextLng') || 'pt';
    onChangeLang(lang);
    
  },[]);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
