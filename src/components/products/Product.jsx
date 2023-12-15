import React from "react";
import ProductRating from "../rating/ProductRating";
import { Link } from "react-router-dom";

const Product = ({ product, productLink }) => {
  return (
    <Link to={productLink + product._id} className="product-link-item">
      <div className="product-wrapper">
        <picture className="product-image-wrapper">
          <img className="product-image" src={product.image} />
        </picture>

        <h3 className="title">{product.title}</h3>

        <div className="price-rating">
          <span className="price">${product.price.$numberDecimal}</span>
          <span>
            <ProductRating rating={product.rating} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
