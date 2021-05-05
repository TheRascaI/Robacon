import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import "./WorkList.css";
import '../fontello/css/fontello.css';


import memberImage1 from "../assets/member-image-1.png"
import memberImage2 from "../assets/member-image-2.png"



const WorkList = () => {

    const memberCard1BG = {
        width: "100%",
        
    backgroundRepeat: "no-repeat",
        backgroundImage: `url(${memberImage1})`,
        backgroundSize: "cover"
      };
      const memberCard2BG = {
        width: "100%",
        backgroundSize: "cover",

    backgroundRepeat: "no-repeat",
        backgroundImage: `url(${memberImage2})`,
      };

    return(
        <div id="work-list" className="container-fluid roba-section">
            <div className="row roba-list-row">

        
                
                <div className="col-sm-4 roba-list-col">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft">   <div className="roba-card roba-card-blue" style={memberCard1BG}>
                <div className="card-container">
                <h2>Olaf Roßbach</h2>
                <ul>
                    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut"><li className="card-item"><i className="icon-mail-alt icon"/><a href="mailto:info@roba-con.de">info@roba-con.de</a></li>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut"><li className="card-item"><i className="icon-phone icon"/><a href="tel:+49(261)96234610">+49 (261) 9623461-0</a></li>
</ScrollAnimation>

                </ul>
                </div></div></ScrollAnimation>
                </div>
                <div className="col-sm-4 roba-list-col">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">   <div className="roba-card roba-card-blue" style={memberCard2BG}>
                <div className="card-container">
                <h2>Alice Roßbach</h2>
                <ul>
                    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut"><li className="card-item"><i className="icon-mail-alt icon"/><a href="mailto:info@roba-con.de">info@roba-con.de</a></li>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut"><li className="card-item"><i className="icon-phone icon"/><a href="tel:+49(261)96234610">+49 (261) 9623461-0</a></li>
</ScrollAnimation>

                </ul>
                </div></div></ScrollAnimation>
                </div>
                <div className="col-sm-4 roba-list-col">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutRight">   <div className="roba-card roba-card-blue" style={memberCard1BG}>
                <div className="card-container">
                <h2>Andre Schäfer</h2>
                <ul>
                    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut"><li className="card-item"><i className="icon-mail-alt icon"/><a href="mailto:info@roba-con.de">info@roba-con.de</a></li>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut"><li className="card-item"><i className="icon-phone icon"/><a href="tel:+49(261)96234610">+49 (261) 9623461-0</a></li>
</ScrollAnimation>

                </ul>
                </div></div></ScrollAnimation>
                </div>


            </div>
        </div>

    )
}

export default WorkList;