import React from "react";
import "./PricingStyle.css";
import pricingImage1 from "../../images/pricing1.jpg";

const Pricing = () => {
  return (
    <>
      <div className="pricing-container" id="prices">
        <h1>Choose The Right <span>One</span></h1>

        <div className="pricing-row">
          <div className="first-price-card">
            <p>Basic</p>
            <ul>
              <li>3 Rooms </li>
              <li>Garding</li>
              <li>Much More</li>
              <li>pice:1252£</li>
            </ul>
          </div>
          <div className="first-price-card">
            <p>Popular</p>
            <ul>
              <li>5 Rooms </li>
              <li>Garding</li>
              <li>Much More</li>
              <li>pice:5522£</li>
            </ul>
          </div>
          <div className="first-price-card">
            <p>   </p>
            <ul>
              <li>7 Rooms </li>
              <li>Garding</li>
              <li>Much More</li>
              <li>pice:7822£</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

