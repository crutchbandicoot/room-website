import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div className="img">
            <div className="img--dark"></div>
          </div>
        </div>
        <div style={{ position: "relative" }} className="col-4">
          <div style={{ width: "90%" }} className="container abs-center">
            <h6 className="sub-heading">About our furniture</h6>
            <p className="text">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="img">
            <div className="img--light"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
