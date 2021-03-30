import React from "react";
import "./Contact.css";
import phone from "../assets/phone.png";
import RobaButton from "./RobaButton";

const Contact = ()=>{
    return(
        <div id="contact" className="container-fluid roba-section">
            <div className="row">
                <div className="col-sm-6 contact-col">
                <img src={phone} alt="phone" className="contact-img" />
                </div>
                <div className="col-sm-6 contact-col">
                <h2>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed</h2>
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