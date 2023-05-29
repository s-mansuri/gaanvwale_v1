import React from "react";
import BrandLogo from "../../assets/BrandLogo.jpeg";
import { Link } from "react-router-dom";

function BrandContent() {
  return (
    <div className="mainBrand">
      <div className="brandContent">
        <img className="brandImage" src={BrandLogo} />
        <Link to="/" className="brandName">
          GaanvWaale
        </Link>
        <div className="menuItems">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default BrandContent;
