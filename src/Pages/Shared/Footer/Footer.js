import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="about">
              <p className="mb-3">
                There are many variations of passages of the you available, but
                the majority have suffered.
              </p>
              <p className="mb-3">Address: Your address goes here.</p>
              <p>Phone: +12 2223 2223 22</p>
              <div className="icon text-center py-1">
                <span>
                  <i className="fab fa-facebook facebook"></i>
                </span>
                <span>
                  <i className="fab fa-twitter-square twitter"></i>
                </span>
                <span>
                  <i className="fab fa-youtube youtube"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <h4 className="fotter-title pb-2">Services</h4>
              <h6>Free shipping</h6>
              <h6>Product Delivery</h6>
              <h6>Product Tracking</h6>
              <h6>Online Payment</h6>
              <h6>Discount</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <h4 className="fotter-title pb-2">Support</h4>
              <h6>Quality</h6>
              <h6>Order Details</h6>
              <h6>Order Slips</h6>
              <h6>Shipping</h6>
              <h6>Store Deal</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <h4 className="fotter-title pb-2">Account</h4>
              <h6>My account</h6>
              <h6>Order history</h6>
              <h6>Wisheslist</h6>
              <h6>Cart Details</h6>
              <h6>Compare</h6>
            </div>
          </div>
          <small className="text-center">
            Copyright &copy; 2021 | Built with Exporso by Raju.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
