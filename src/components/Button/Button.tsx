import React from 'react';
import "./Button.scss";

const Button = (props: any) => {
    return (
        <div onClick={props.handleClick}>
            <div className="slide-btn"><img className="slide-btn__img" src={props.img} alt="arrow" /></div>
        </div>
    )
}

export default Button
