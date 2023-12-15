import React from "react";
import { Link, Outlet } from "react-router-dom";
import Products from "../../components/products/Products";
import "./style/ProductManage.css";
import { ProductProvider } from "../../contexts/ProductProvider";

const ProductManage = () => {
  return (
    <div className="product-manag-container">
      <ProductProvider>
        <Outlet />
      </ProductProvider>
    </div>
  );
};

export default ProductManage;
