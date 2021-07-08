import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";
import { createUseStyles } from "react-jss";
import arrow from "../../assets/icons/icon-arrow.svg";
import left from "../../assets/icons/icon-angle-left.svg";
import right from "../../assets/icons/icon-angle-right.svg";

import Button from "../Button/Button";

interface Hero {
  heroImg: string;
  backgroundImg: any;
  backgroundSize: string;
}

const styles = createUseStyles((theme: any) => ({
  heroImg: {
    height: "70vh",
    backgroundImage: (props: any) => `url(${props.backgroundImage})`,
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

const Hero = (props: any) => {

  const classes = styles(props);

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
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
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
