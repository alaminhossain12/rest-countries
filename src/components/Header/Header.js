import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Every Country In The World!!!</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/inventory">Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
