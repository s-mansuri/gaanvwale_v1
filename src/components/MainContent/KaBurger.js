import React from "react";
import { Link } from "react-router-dom";

function KaBurger() {
  return (
    <div className="kaBurgerContent">
      <Link className="subMenuLink" to={"/burgerMenu"}>
        काBurger
      </Link>
    </div>
  );
}

export default KaBurger;
