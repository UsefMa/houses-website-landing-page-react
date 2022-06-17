import React from "react";
import { Link } from "react-scroll";
import "./HomeStyle.css";

const Home = () => {
  return (
    <>
      <div className="home-container " id="home">
        <div className="home-info">
          <h1 className="h-home">The Best Place To Buy or Sell a <span>House</span> </h1>
          <p className="p-home">
            Our job is to find The best place For You and Your Family
            <br />
          <button className="btn-home"><Link to="prices"
              smooth={true}
              duration={2000}>Go Prices</Link> </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
