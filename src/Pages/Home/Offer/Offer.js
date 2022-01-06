import React, { useEffect, useRef, useState } from "react";
import "./Offer.css";

const Offer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMintes, setTimerMintes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Dec 10 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const dis = countDownDate - now;
      const days = Math.floor(dis / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mintes = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((dis % (1000 * 60)) / 1000);
      if (dis < 0) {
        // time is off
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMintes(mintes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  //   console.log(timerDays);
  return (
    <div className="py-5">
      <div className="container">
        <div className="row mx-auto d-flex justify-content-center align-items-center pb-5">
          <div className="col-md-6">
            <div className="left-side-img">
              <img
                className="img-fluid animatedhover
                bounce"
                src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="offer-img"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-side-text">
              <h1 className="pt-3">OFFER OF THE WEEK</h1>
              <h4 className="pt-5">Welcome To Roadie Bicycles Store 20% off</h4>
              <h3 className="pb-2">Hurry ! Don’t miss it</h3>
              <div className="timer d-flex align-items-center ">
                <div>
                  <p className="number">{timerDays}</p>
                  <p>
                    <small>Day</small>
                  </p>
                </div>
                <span>:</span>
                <div>
                  <p className="number">{timerHours}</p>
                  <p>
                    <small>Hours</small>
                  </p>
                </div>
                <span>:</span>
                <div>
                  <p className="number">{timerMintes}</p>
                  <p>
                    <small>Minutes</small>
                  </p>
                </div>
                <span>:</span>
                <div>
                  <p className="number">{timerSeconds}</p>
                  <p>
                    <small>Seconds</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-offer pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-white text-center">
                <h4>WEEKEND</h4>
                <h1>SPECIAL OFFER</h1>
                <h5>CLICK & COLLECT FIRST DELIVERY FREE OVER $20*</h5>
                <button className="common-btn">Shop Now</button>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
