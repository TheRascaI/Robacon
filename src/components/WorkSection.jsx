import React from "react";
import "./WorkSection.css";

 import ScrollAnimation from 'react-animate-on-scroll';
 import "animate.css/animate.min.css";

const WorkSection = () =>{
    return(
        <div id="work" className="container-fluid roba-section">

            <div className="row">
                <div className="col-sm-6 content-col">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">    <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2> </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">   <p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.</p> </ScrollAnimation>
                </div>
                <div className="col-sm-6">
                </div>
            </div>
        </div>
    )
}

export default WorkSection;