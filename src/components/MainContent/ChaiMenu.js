import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

function ChaiMenu() {
  const chaiItems = [
    { id: 1, name: "Elaichi Tea", price: 25 },
    { id: 2, name: "Ginger Tea", price: 20 },
    { id: 3, name: "Saffron Tea", price: 30 },
    { id: 4, name: "Paan Tea", price: 30 },
    { id: 5, name: "Jaggery Tea", price: 30 },
    { id: 6, name: "Black Salt Tea", price: 15 },
    { id: 7, name: "Special Kaali Chai", price: 15 },
    { id: 8, name: "Irani Tea", price: 25 },
    { id: 9, name: "Green Tea", price: 20 },
  ];
  return (
    <>
      <MainHeader />
      <div className="mainContent">
        <div className="chaiMenuContent">
          <div className="commonMenuContent">
            {chaiItems.map((i) => (
              <ul style={{ listStyle: "none" }} key={i.id}>
                <li>{`${i.name}: ₹${i.price}`}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default ChaiMenu;
