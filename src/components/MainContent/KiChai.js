import React from "react";
import { Link } from "react-router-dom";

function KiChai() {
  return (
    <div className="kiChaiContent">
      <Link className="subMenuLink" to={"/chaiMenu"}>
        कीChai
      </Link>
    </div>
  );
}

export default KiChai;
