import React, { useEffect } from "react";
import { useProductContext } from "../../contexts/ProductProvider";
import "./Products.css";
import Product from "./Product";

const Products = ({ productlink }) => {
  const { state } = useProductContext();

  return (
    <div className="products-container">
      {state.products.map((p, indx) => {
        return <Product key={indx} product={p} productLink={productlink} />;
      })}
    </div>
  );
};

export default Products;
