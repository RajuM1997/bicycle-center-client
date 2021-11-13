import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";
import Product from "../Product/Product";
import Review from "../Review/Review";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Product />
      <Offer />
      <Team />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
