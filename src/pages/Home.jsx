import React from "react";
import { Link } from "react-router-dom";

import "./style/Home.css";
import Category from "../components/category/Category";
import ProductBrand from "../components/product-brand/ProductBrand";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <section className="home-container">
      <section className="filter-section">
        <div className="grid two-column-grid">
          <div className="input-group">
            <Category />
          </div>
          <div className="group-inline">
            <label className="input-label">Name</label>
            <input
              className="input-text"
              type="text"
              placeholder="Search product..."
            />
          </div>
        </div>
        <div className="grid two-column-grid">
          <ProductBrand />
          <div className="group-inline">
            <label className="input-label">Price</label>
            <input type="number" className="input-text" placeholder="Min" />
            <span>-</span>
            <input type="number" className="input-text" placeholder="Max" />

            <button className="btn btn-primary">Apply Filter</button>
            <button className="btn">Clear Filter</button>
          </div>
        </div>
      </section>
      <section className="product-list-section">
        <Products productlink="product/" />
      </section>
    </section>
  );
};

export default Home;
