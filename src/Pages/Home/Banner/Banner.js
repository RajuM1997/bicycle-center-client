import React from "react";
import "./Banner.css";
import "animate.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text animate__animated animate__backInLeft">
        <h1 className="">
          Best <span className="bicycle">Bicycle</span> For You
        </h1>
        <p className="text-center py-3">
          <i> It's heavy. It's slow. It will change the world.</i>
        </p>
        <div className="text-center">
          <button className="common-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
