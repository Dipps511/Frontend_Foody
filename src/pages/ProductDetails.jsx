import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style/ProductDetails.css";
import ProductRating from "../components/rating/ProductRating";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(product);

  const getProductAsync = async () => {
    try {
      const response = await fetch(
        "http://localhost:8181/api/v1/product/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const prod = await response.json();
      setProduct(prod);
      console.log(prod);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProductAsync();
  }, []);

  return (
    <div className="product-details-container">
      <Link to="/">All Products</Link>
      <div className="product-details-wrapper">
        <picture className="pd-image-wrapper">
          <img className="pd-image" src={product.image} />
        </picture>
        <div className="pd-wrapper">
          <h2 className="pd-title">{product.title}</h2>
          <ProductRating rating={product.rating} />
          <h3 className="pd-subtitle">
            {product.category} | {product.brand}
          </h3>
          <h2 className="pd-title">
            ${product.price ? product.price.$numberDecimal : ""}
          </h2>
          <Link to="/cart" className="btn-add-to-cart">
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
