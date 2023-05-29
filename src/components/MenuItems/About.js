import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

function About() {
  return (
    <div>
      <MainHeader />
      <div className="mainContent">
        <div className="aboutContent">
          <div style={{ marginTop: "8rem" }}>
            Welcome to our humble website, where we bring the best of village
            ingredients to you. Our mission is to provide our customers with an
            authentic and unique culinary experience that takes them back to the
            roots of traditional cooking. Our chai is made with hand-picked tea
            leaves and spices that have been carefully selected from the local
            markets. We believe in using only the best ingredients that are
            sourced directly from the farmers to ensure that our customers get a
            true taste of the countryside.
          </div>
          <div>
            Our chai is brewed in small batches, allowing us to infuse the
            flavors of the spices and create a warm and comforting beverage.
          </div>
          <div>
            Our spices are sourced from the heart of rural India, where they are
            grown using traditional farming techniques that have been passed
            down through generations. We believe that using these spices adds a
            unique flavor to our dishes, and we take pride in preserving the
            cultural heritage of our land.
          </div>
          <div>
            Our burgers are made with locally sourced ingredients, including
            fresh vegetables and meat that have been raised in nearby farms. We
            believe in supporting our local farmers and promoting sustainable
            farming practices.
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default About;
