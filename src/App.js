import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductManage from "./pages/dashboard/ProductManage";
import ProductDashboard from "./pages/dashboard/ProductDashboard";
import AddProduct from "./pages/dashboard/AddProduct";
import EditProduct from "./pages/dashboard/EditProduct";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<h2>Dashboard</h2>} />
          <Route path="product" element={<ProductManage />}>
            <Route index element={<ProductDashboard />} />
            <Route path="new" element={<AddProduct />} />
            <Route path=":id" element={<EditProduct />} />
          </Route>
          <Route path="settings" element={<h2>settings</h2>} />
          <Route path="logout" element={<h2>logout</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
