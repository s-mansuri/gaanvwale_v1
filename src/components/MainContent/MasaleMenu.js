import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

function MasaleMenu() {
  const MasaleItems = [
    { id: 1, name: "Red Mirch Powder", price: 300 },
    { id: 3, name: "Kashmiri Mirch Powder", price: 350 },
    { id: 4, name: "Degee Mirch Powder", price: 320 },
    { id: 5, name: "Haldi Powder", price: 200 },
    { id: 6, name: "Kali Mirch Powder", price: 750 },
    { id: 7, name: "Daal Chini Powder", price: 1000 },
    { id: 8, name: "Garam Masala", price: 1000 },
    { id: 9, name: "Dhaniya Powder", price: 160 },
    { id: 9, name: "Jeera Powder", price: 700 },
  ];
  return (
    <>
      <MainHeader />
      <div className="mainContent">
        <div className="masaleMenuContent">
          <div className="commonMenuContent">
            {MasaleItems.map((i) => (
              <ul style={{ listStyle: "none" }} key={i.id}>
                <li>{`${i.name}: ₹${i.price}/kg`}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default MasaleMenu;
