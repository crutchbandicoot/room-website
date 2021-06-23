import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import arrow from "./assets/icons/icon-arrow.svg";
import left from "./assets/icons/icon-angle-left.svg";
import right from "./assets/icons/icon-angle-right.svg";

function App() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-7">
          <div className="hero-img">
            <div className="nav-container">
              <Navbar />
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }} className="col-5">
          <div className="abs-center" style={{ width: "80%" }}>
            <h2 className="heading">Discover innovative ways to decorate</h2>
            <p className="text">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            {/* eslint-disable-next-line */}
            <h5 className="shop-now">
              <a href="">
                Shop now
                <span>
                  <img src={arrow} alt="" />
                </span>
              </a>
            </h5>
          </div>
          <div className="slider">
            <div className="slider__wrapper">
              <img className="slider--left" src={left} alt="left arrow" />
            </div>
            <div className="slider__wrapper">
              <img className="slider--right" src={right} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-3">
          <div className="img">
            <div className="img--dark"></div>
          </div>
        </div>
        <div style={{ position: "relative" }} className="col-5">
          <div style={{ width: "70%" }} className="container abs-center">
            <h5 className="sub-heading">About our furniture</h5>
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
}

export default App;
