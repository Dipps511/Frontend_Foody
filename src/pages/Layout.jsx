import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { ProductProvider } from "../contexts/ProductProvider";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <ProductProvider>
        <div className="home-container">
          <Outlet />
        </div>
      </ProductProvider>
    </div>
  );
};

export default Layout;
