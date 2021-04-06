import React from "react";
import "./Contact.css";
import phone from "../assets/phone.png";
import RobaButton from "./RobaButton";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Contact = ()=>{
    return(
        <div id="contact" className="container-fluid roba-section">
            <div className="row">
                <div className="col-sm-6 contact-col">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">  <img src={phone} alt="phone" className="contact-img" /> </ScrollAnimation>
                </div>
                <div className="col-sm-6 contact-col">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutDown">   <h2>Noch fragen?</h2> </ScrollAnimation>
<p>
Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.
</p>
<RobaButton />
                </div>
            </div>
        </div>
    )
}

export default Contact;