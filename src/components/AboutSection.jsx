import React from "react";
import "./AboutSection.css";
import ScrollAnimation from 'react-animate-on-scroll';



const AboutSection = () =>{
    return(
        <div id="about" className="container-fluid roba-section">
<ScrollAnimation animateIn="fadeIn">
            <div className="row">
            
            <div className="col-sm-6 content-col">
                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
                <p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.</p>
                </div>

                
                <div className="col-sm-6">
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default AboutSection;