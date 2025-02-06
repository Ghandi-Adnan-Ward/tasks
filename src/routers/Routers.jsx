/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import {  Routes, Route } from "react-router-dom";
import ItemsPage from "../pages/Itemspage/ItemsPage";
import AddItemPage from '../pages/AddItempage/AddItemPage';
import Item from "../Components/Items";
import LanguagePrompt from '../pages/LanguagePrompt/LanguagePrompt ';
import CartPage from '../pages/CartPage/CartPage';
const Routers = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/i" element={<Item />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Fragment>
)
}

export default Routers