import React from "react";
import "./Banner.css";
import "animate.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  // const [state] = useEffect({
  //   title: "Hi",
  //   titleTwo: "I'a",
  //   titleThree: "anything",
  // });
  return (
    <div className="banner">
      <div className="banner-text animate__animated animate__backInLeft">
        <h1 className="text-center">
          Best <span className="bicycle">Bicycle</span>
          <span className="text-center ps-2 me-2">For</span>
          <div className="text-center">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Man", "Woman", "Children"],
              }}
            ></Typewriter>
          </div>
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
