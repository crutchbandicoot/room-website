import React from "react";

import "./Hero.scss";
import { createUseStyles } from "react-jss";
import { HeroInfo } from "../../interfaces/hero.interface";

import arrow from "../../assets/icons/icon-arrow.svg";
import left from "../../assets/icons/icon-angle-left.svg";
import right from "../../assets/icons/icon-angle-right.svg";
import Desktop_Slide_1 from "../../assets/img/Desktop_Slide_1.jpg";
import Desktop_Slide_2 from "../../assets/img/Desktop_Slide_2.jpg";
import Desktop_Slide_3 from "../../assets/img/Desktop_Slide_3.jpg";
import Mobile_Slide_1 from "../../assets/img/Mobile_Slide_1.jpg";
import Mobile_Slide_2 from "../../assets/img/Mobile_Slide_2.jpg";
import Mobile_Slide_3 from "../../assets/img/Mobile_Slide_3.jpg";

import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

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

interface Hero {
  heroImg: string;
  backgroundImg: any;
  backgroundSize: string;
}

const styles = createUseStyles((theme: any) => ({
  heroImg: {
    height: "70vh",
    backgroundImage: `url(${heroData[0].desktopImg})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  "@media (max-width: 375px)": {
    heroImg: {
      height: "44vh",
    }
  }
}));

const changeSlide = () =>{
  console.log('change slide clicked');
}

const Hero = () => {

  const classes = styles();

  return (
    <div>
      <div className="row g-0">
        <div className="col-sm-7">
          <div className={classes.heroImg}>
            <div className="nav-container">
              <Navbar />
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }} className="col-sm-5">
          <div className="abs-center">
            <h2>{heroData[0].heading}</h2>
            <p>{heroData[0].text}</p>
            <a href="#">
              Shop now
              <span>
                <img src={arrow} alt="" />
              </span>
            </a>
          </div>
          <div className="slider">
            <Button img={left} handleClick={changeSlide}/>
            <Button img={right} handleClick={changeSlide}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
