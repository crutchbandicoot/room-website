import React from "react";
import "./App.scss";
import arrow from "./assets/icons/icon-arrow.svg";
import left from "./assets/icons/icon-angle-left.svg";
import right from "./assets/icons/icon-angle-right.svg";
import Desktop_Slide_1 from "./assets/img/Desktop_Slide_1.jpg";
import Desktop_Slide_2 from "./assets/img/Desktop_Slide_2.jpg";
import Desktop_Slide_3 from "./assets/img/Desktop_Slide_3.jpg";
import Mobile_Slide_1 from "./assets/img/Mobile_Slide_1.jpg";
import Mobile_Slide_2 from "./assets/img/Mobile_Slide_2.jpg";
import Mobile_Slide_3 from "./assets/img/Mobile_Slide_3.jpg";
import { HeroInfo } from "./interfaces/hero.interface";
import Hero from "./components/Hero/Hero";

function App() {
  const heroData: HeroInfo[] = [
    {
      heading: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      desktopImg: Desktop_Slide_1,
      mobileImg: Mobile_Slide_1,
    },
    {
      heading: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      desktopImg: Desktop_Slide_2,
      mobileImg: Mobile_Slide_2,
    },
    {
      heading: "Manufactured with the best materials",
      text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      desktopImg: Desktop_Slide_3,
      mobileImg: Mobile_Slide_3,
    },
  ];
  return (
    <div>
      {/* Hero section */}
      <Hero
        heading={heroData[0].heading}
        text={heroData[0].text}
        backgroundImage={heroData[0].desktopImg}
      />

      {/* About section */}
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
