/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Slide, Zoom } from "react-awesome-reveal";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({isSidebarOpen, toggleSidebar}) => {
    const navigate = useNavigate();

    useEffect(() => {
      // تطبيق وإزالة النمط من <body>
      if (isSidebarOpen) {
        document.body.classList.add("open");
      } 
  else{
    document.body.classList.remove("open");
  
  }
      // تنظيف عند إزالة المكون
      // return () => {
      //   document.body.classList.remove("popup-active");
      // };
    }, [isSidebarOpen]);
  return (
    <>
      <Zoom direction="left" cascade duration={1500} triggerOnce >
      <header className="header" onClick={(e) => e.stopPropagation()}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
        </button>
          <h1>Items</h1>
          <div className="header-buttons">
              <NotificationsNoneIcon onClick={toggleSidebar} className="sidebar-toggle" />
              <AccountCircleIcon className="sidebar-toggle" htmlColor="#d9534f"/>
          </div>
        </header>
      </Zoom>

     <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()} >           
      <Slide direction="left" cascade damping={0.2} duration={1500} triggerOnce>
      <ul className="sidebar-menu">
          <li><Link to={'/add-item'}>Home</Link></li>
          <li><Link to={'/'}>Categories</Link></li>
          <li><Link to={'/'}>About Us</Link></li>
          <li><Link to={'/'}>Contact</Link></li>
        </ul>
        </Slide>
      </div>
    </>
)
}

export default Navbar