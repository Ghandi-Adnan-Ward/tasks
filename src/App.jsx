/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./App.css";

import Routers from "./routers/Routers";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
      <Routers/>
    );
}

export default App;
