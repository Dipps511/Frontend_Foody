import React from "react";
import Brand from "../brand/Brand";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Brand />
      <nav className="navbar-wrapper">
        <Link>
          <FaShoppingCart className="cart" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
