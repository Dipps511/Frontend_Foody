import React from "react";
import { Link } from "react-router-dom";
import Products from "../../components/products/Products";

const ProductDashboard = () => {
  return (
    <div className="container">
      <Link to="/admin/product/new" className="btn-add-link">
        Add Product
      </Link>
      <Products productlink="/admin/product/" />
    </div>
  );
};

export default ProductDashboard;
