import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to={"/products"}>
        <h2>Shop Here</h2>
      </Link>
      <Link to={"/products"}>
        <h2>Home</h2>
      </Link>
    </nav>
  );
};

export default Header;
