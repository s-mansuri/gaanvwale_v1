import React from "react";
import { Link } from "react-router-dom";

function KeMasale() {
  return (
    <div className="keMasaleContent">
      <Link className="subMenuLink" to={"/masaleMenu"}>
        केMasale
      </Link>
    </div>
  );
}

export default KeMasale;
