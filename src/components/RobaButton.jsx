import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./RobaButton.css";


const RobaButton = (props) => {

    const [getHover, setHover] = useState(false);
    const handleClick = () => {

    }
    const handleOver = () =>{
        setHover(true);
    }
    const handleOut = () =>{
        setHover(false);
    }

    return(
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">  <div style={{backgroundColor: getHover && "#2e2a5a"}} onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleClick} className="roba-button">
            <h2><a href="mailto:info@roba-con">{props.content}</a></h2>
        </div></ScrollAnimation>
    )
}
export default RobaButton;