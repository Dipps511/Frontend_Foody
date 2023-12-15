import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./ProductRating.css";

const ProductRating = ({ rating }) => {
  const counter = [1, 2, 3, 4, 5];

  return (
    <div className="start-rating-wrapper">
      {counter.map((count, indx) => {
        return count <= rating ? (
          <FaStar className="start-yellow" key={indx} />
        ) : (
          <FaRegStar className="start-white" key={indx} />
        );
      })}
    </div>
  );
};

export default ProductRating;
