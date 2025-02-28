import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { configureStore } from "redux/Store";
import { createBrowserHistory } from "history";
import Layout from 'layouts/Layout';
import enJson from 'locales/en.json';
import jaJson from 'locales/ja.json';


const History = createBrowserHistory({ basename: "/" });

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJson },
    ja: { translation: jaJson },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});


export default class App extends Component {

  render() {
    return (
        <Provider store={configureStore()}>
          <BrowserRouter history={History}>
            <Routes>
              <Route path="*" element={<Layout/>}/>
            </Routes>
          </BrowserRouter>
        </Provider>
    );
  }
}
