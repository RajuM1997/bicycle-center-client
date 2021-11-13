import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not_found">
      <img
        className="img-fluid"
        src="https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"
        alt=""
      />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
