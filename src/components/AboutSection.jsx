import React from "react";
import "./AboutSection.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const AboutSection = () =>{
    return(
       
        <div id="about" className="container-fluid roba-section">

            <div className="row">
            
            <div className="col-sm-6 content-col">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">     <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2> </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">  <p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.</p></ScrollAnimation>
                </div>

                
                <div className="col-sm-6">
                </div>
            </div>
        
        </div>
       
    )
}

export default AboutSection;