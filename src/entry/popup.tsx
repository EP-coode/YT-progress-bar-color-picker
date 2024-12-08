/**
 * This is entry file for plugin popup
 * This script is bundled and imported by
 * popup.html
 */

import React from "react";
import ReactDOM from "react-dom/client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import pl from "../locales/pl.json";

import { Popup } from "../Popup";
import "./popup.css";

const clientLang = navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
  lng: clientLang, // default language
  fallbackLng: "en", // fallback language if the current language doesn't have a translation
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
