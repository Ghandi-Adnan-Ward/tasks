/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import './LanguagePrompt .css'
const LanguagePrompt = ({show,languane}) => {
  const { i18n } = useTranslation();
  const [showPrompt, setShowPrompt] = useState(show);

  useEffect(() => {
    const savedLanguage = Cookies.get("language");
    if (show) {
      setShowPrompt(true); 
    } else {
      i18n.changeLanguage(savedLanguage); 
      }
    console.log(savedLanguage)
  }, [i18n,show]);

  const handleSaveLanguage = (languane) => {
    i18n.changeLanguage(languane); 
    Cookies.set("language", languane, { expires: 3 }); 
    setShowPrompt(false); 
  };

  const handleDismiss = () => {
    i18n.changeLanguage("en"); 
    setShowPrompt(false); 
  };

  if (!showPrompt) return null;      

  return (
    <div className="language-prompt">
      <p>هل تريد حفظ بياناتك؟</p>
      <button onClick={() => handleSaveLanguage(languane)}>نعم</button>
      <button onClick={handleDismiss}>لا</button>
    </div>
  );
};

export default LanguagePrompt;
