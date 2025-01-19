/* eslint-disable no-unused-vars */
import React from 'react'
import {  Routes, Route } from "react-router-dom";
import ItemsPage from "../pages/Itemspage/ItemsPage";
import AddItemPage from '../pages/AddItempage/AddItemPage';
import Item from "../Components/Items";
const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<ItemsPage />} />
    <Route path="/i" element={<Item />} />
    <Route path="/add-item" element={<AddItemPage />} />
  </Routes>
)
}

export default Routers