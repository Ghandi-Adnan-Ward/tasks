/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);
  
  useEffect(() => {
      
        setIsRTL(i18n.language === "ar");

       
  }, [i18n.language])
  
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [isSidebarOpen]);

  return (
    <>
      <Zoom direction="left" cascade duration={1500} triggerOnce>
        <header className="header" onClick={(e) => e.stopPropagation()}>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
          <h1>{t("navbar.items")}</h1>
          <div className="header-buttons">
            <NotificationsNoneIcon onClick={toggleSidebar} className="sidebar-toggle" />
            <AccountCircleIcon className="sidebar-toggle" htmlColor="#d9534f" />
          </div>
        </header>
      </Zoom>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""} ${isRTL ? "rtl" : ""}`} onClick={(e) => e.stopPropagation()}>
        <Slide direction="left" cascade damping={0.2} duration={1500} >
          <ul className="sidebar-menu">
            <li>
              <Link to={"/add-item"}>{t("navbar.home")}</Link> 
            </li>
            <li>
              <Link to={"/"}>{t("navbar.categories")}</Link> 
            </li>
            <li>
              <Link to={"/"}>{t("navbar.about_us")}</Link> 
            </li>
            <li>
              <Link to={"/"}>{t("navbar.contact")}</Link> 
            </li>
          </ul>
        </Slide>
      </div>
    </>
  );
};

export default Navbar;
