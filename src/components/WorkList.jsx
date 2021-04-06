import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import "./WorkList.css";
import calendar from "../assets/calendar-icon.svg";


const WorkList = () => {
    return(
        <div id="work-list" className="container-fluid roba-section">
            <div className="row roba-list-row">

            
            <div className="col-sm-4 roba-list-col">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft">    <div className="roba-card">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">    <h2>Lorem ipsum dolor sit amet.</h2></ScrollAnimation>
<p>
Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.
</p>
                </div></ScrollAnimation>
           
                </div>

                
<div className="col-sm-4 roba-list-col">
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">  <div className="roba-card">
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">  <h2>Consetetur
sadipscing</h2></ScrollAnimation>
<p>
Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.
</p></div></ScrollAnimation>

</div>
                <div className="col-sm-4 roba-list-col">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutRight">   <div className="roba-card roba-card-blue">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">  <img src={calendar} alt="calendar" className="roba-card-icon"/></ScrollAnimation>
                <h2>Lorem ipsum elitr, sed</h2></div></ScrollAnimation>
                </div>

            </div>
        </div>

    )
}

export default WorkList;