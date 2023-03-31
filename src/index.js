import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider} from "react-i18next";
import i18next from 'i18next';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import store from './store';
import Pages from './components/Pages';

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
  <Provider store={store}>
  <Auth0Provider domain='dev-vsxjcjm5m7yponvx.us.auth0.com' clientId='xKxyrIzoBZPjuZd7JOQc5HpOUCklmCsL' redirectUrl={window.location.origin}>
  <BrowserRouter>
 <I18nextProvider i18n={i18next}>

      <App />
 </I18nextProvider>
 </BrowserRouter>
  </Auth0Provider>

  </Provider>
 
   
 
);
