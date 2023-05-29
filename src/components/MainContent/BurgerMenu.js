import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

function BurgerMenu() {
  const burgerItems = [
    { id: 1, name: "Maska Bun", price: 40 },
    { id: 2, name: "Veg Burger", price: 60 },
    { id: 3, name: "Aaloo Patty", price: 40 },
    { id: 4, name: "Garlic Toast", price: 50 },
    { id: 5, name: "Cheese Garlic Toast", price: 60 },
    { id: 6, name: "Cheese Burger", price: 80 },
    { id: 7, name: "Cheese Maska Bun", price: 50 },
    { id: 8, name: "Cream Roll", price: 30 },
    { id: 9, name: "Kur Kuri Khari", price: 30 },
    { id: 9, name: "Kachcha Sandwich", price: 40 },
    { id: 9, name: "Masala Sandwich", price: 50 },
    { id: 9, name: "Cheese Masala Sandwich", price: 60 },
  ];
  return (
    <>
      <MainHeader />
      <div className="mainContent">
        <div className="burgerMenuContent">
          <div className="commonMenuContent">
            {burgerItems.map((i) => (
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

export default BurgerMenu;
