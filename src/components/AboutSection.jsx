import React from "react";
import "./AboutSection.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import logo from "../assets/logo.svg"



const AboutSection = () =>{
    return(
       
        <div id="about" className="container-fluid roba-section">

            <div className="row">
            
            <div className="col-sm-6 content-col">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">   <img src={logo} height="85px" alt="roba-con logo" style={{margin: "1rem 0",maxWidth: "300px"}}/> </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">  <p>"Begeisterung ist der nie erlahmende Impuls, der uns beharrlich unser Ziel verfolgen lässt"</p></ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft"><h3> - Norman V. Peale</h3></ScrollAnimation>
                </div>

                
                <div className="col-sm-6">
                </div>
            </div>
        
        </div>
       
    )
}

export default AboutSection;