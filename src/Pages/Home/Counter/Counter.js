import React from "react";
import CountUp from "react-countup";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="bg py-5 mt-5">
      <div className="container">
        <div className="row w-100 mx-auto">
          <div className="counter-main text-center d-flex justify-content-between align-items-center">
            <div className="counter ">
              <h3 className="counter_number mx-auto">
                <CountUp
                  end={200}
                  useEasing={true}
                  duration={3}
                  redraw={true}
                />
              </h3>
              <h3>Total Users</h3>
            </div>
            <div className="counter">
              <h3 className="counter_number mx-auto">
                <CountUp
                  end={200}
                  useEasing={true}
                  duration={3}
                  redraw={true}
                />
              </h3>
              <h3>Premium Quality Products</h3>
            </div>
            <div className="counter">
              <h3 className="counter_number mx-auto">
                <CountUp
                  end={200}
                  useEasing={true}
                  duration={3}
                  redraw={true}
                />
              </h3>
              <h3>Daily Offer Products</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
