import React from "react";
import teamImage from "../assets/team-image.png";
import "./TeamSection.css";
import RobaButton from "./RobaButton";

var sectionStyle = {
    width: "100%",
    
backgroundRepeat: "no-repeat",
    backgroundImage: `url(${teamImage})`,
    
  };

const TeamSection = () => {
    return(
        <div id="team" className="container-fluid roba-section team-section">
        <div className="row" style={sectionStyle}>
            <div className="col-sm-6 order-1 content-col">
            <div className="roba-team-card">
            <h2>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed</h2>
<RobaButton />
            </div>
            
            </div>
            <div className="col-sm-6 order-sm-1 order-2">
                
            </div>
        </div>
        </div>
    )
}

export default TeamSection;