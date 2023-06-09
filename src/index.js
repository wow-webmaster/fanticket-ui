import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "simplebar-react/dist/simplebar.min.css";

// i18n
import "./locales/i18n";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

// toastify
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./redux/store";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import ScrollTop from "./components/ScrollTop";
import { AuthProvider } from "./contexts/JWTContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <ScrollTop />
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </HelmetProvider>
  </AuthProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
