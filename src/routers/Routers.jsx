/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import {  Routes, Route } from "react-router-dom";
import ItemsPage from "../pages/Itemspage/ItemsPage";
import AddItemPage from '../pages/AddItempage/AddItemPage';
import Item from "../Components/Items";
import LanguagePrompt from '../pages/LanguagePrompt/LanguagePrompt ';
const Routers = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/i" element={<Item />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </Fragment>
)
}

export default Routers