import React from "react";
import KiChai from "./KiChai";
import KeMasale from "./KeMasale";
import KaBurger from "./KaBurger";

function MainContent() {
  return (
    <div className="mainContent">
      <KiChai />
      <KeMasale />
      <KaBurger />
    </div>
  );
}

export default MainContent;
