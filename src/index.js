import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider} from "react-i18next";
import i18next from 'i18next';


import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interporlation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <I18nextProvider i18n={i18next}>
      <App />
 </I18nextProvider>
 </BrowserRouter>
   
 
);
