import React from "react";
import UserHeader from "../user/components/UserHeader";
import { Route, Routes } from "react-router-dom";
import Home from "../user/pages/Home";
import Products from "../user/pages/Products";

const LayoutUser = () => {
  return (
    <div>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default LayoutUser;
