import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="container about-me">
        <div className="row">
          <div className="col-md-6">
            <div className="about-img">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h1 className="pb-3">ABOUT US</h1>
              <p>
                There are different types of bicycles depending on the age, such
                as one type of bicycle for children and another type for adults.
                So decide what you need. Then set your budget because if the
                budget is set you can make a decision very quickly. Then your
                body composition such as your weight and height depends a lot on
                the rest of your choice which is different for each person.,
              </p>
              <p>
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years
              </p>
              <button className="common-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
