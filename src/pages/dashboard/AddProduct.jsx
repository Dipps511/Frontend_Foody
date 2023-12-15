import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useProductContext } from "../../contexts/ProductProvider";
import Category from "../../components/category/Category";
import ProductBrand from "../../components/product-brand/ProductBrand";

const AddProduct = () => {
  const { state, addProduct } = useProductContext();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    category: "",
    brand: "",
    image: "",
    price: "",
    rating: 4,
  });

  console.log(state);

  const newProductAsync = async () => {
    try {
      const response = await fetch("http://localhost:8181/api/v1/product/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await response.json();
    } catch (err) {
      console.log(err.message);
    }
  };

  const OnAddProductHandler = async (e) => {
    e.preventDefault();
    console.log(product);
    const dbProduct = await newProductAsync();
    addProduct(product);
    navigate("/admin/product");
  };

  const OnInputValueChange = (e) => {
    setProduct((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const OnCategorySelected = (value) => {
    setProduct((prevData) => ({
      ...prevData,
      category: value,
    }));
  };

  const OnBrandSelected = (value) => {
    setProduct((prevData) => ({
      ...prevData,
      brand: value,
    }));
  };

  useEffect(() => {}, [state]);

  return (
    <div className="container">
      <Link className="nav-link" to="/admin/product">
        <FaArrowLeft /> All Product
      </Link>
      <form className="form-container">
        <h2 className="text-center">Add Product</h2>

        <div className="input-group">
          <label className="input-label">Title</label>
          <input
            className="input-text"
            type="text"
            placeholder="Enter Product Title"
            name="title"
            id="title"
            value={product.title}
            onChange={(e) => OnInputValueChange(e)}
          />
        </div>
        <div className="input-group">
          <Category selectedItem={OnCategorySelected} />
        </div>
        <div className="input-group">
          <ProductBrand selectedItem={OnBrandSelected} />
        </div>
        <div className="input-group">
          <label className="input-label">Image URL</label>
          <input
            className="input-text"
            type="text"
            placeholder="Enter Image URL"
            name="image"
            id="image"
            value={product.image}
            onChange={(e) => OnInputValueChange(e)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Price</label>
          <input
            className="input-text"
            type="number"
            placeholder="Enter Product Price"
            name="price"
            id="price"
            value={product.price}
            onChange={(e) => OnInputValueChange(e)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Rating</label>
          <input
            className="input-text"
            type="number"
            placeholder="Enter Product Rating"
            name="rating"
            id="rating"
            value={product.rating}
            min="1"
            max="5"
            onChange={(e) => OnInputValueChange(e)}
          />
        </div>
        <picture className="image-wrapper-m">
          <img className="image-m" src={product.image} />
        </picture>
        <button
          className="btn btn-primary"
          onClick={(e) => OnAddProductHandler(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
