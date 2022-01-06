import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Offer from "../Offer/Offer";
import Product from "../Product/Product";
import Review from "../Review/Review";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Counter />
      <Product />
      <Offer />
      <Team />
      <Review />
    </div>
  );
};

export default Home;
