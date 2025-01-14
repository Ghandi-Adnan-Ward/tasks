/* eslint-disable no-unused-vars */
import React from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import ItemsPage from "./ItemsPage";
import AddItemPage from "./AddItemPage";
import Item from "./Items";
function App() {
  return (
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/i" element={<Item />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    );
}

export default App;
