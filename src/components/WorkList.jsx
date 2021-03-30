import React from "react";

import "./WorkList.css";
import calendar from "../assets/calendar-icon.svg"


const WorkList = () => {
    return(
        <div id="work-list" className="container-fluid roba-section">
            <div className="row">
                <div className="col-sm-4 roba-list-col">
                <div className="roba-card">
                <h2>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed</h2>
<p>
Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.
</p>
                </div>
           
                </div>
<div className="col-sm-4 roba-list-col">
<div className="roba-card"><h2>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed</h2>
<p>
Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna
aliquyam erat, sed diam voluptua.
</p></div>

</div>
                <div className="col-sm-4 roba-list-col">
                <div className="roba-card roba-card-blue">
                <img src={calendar} alt="calendar" className="roba-card-icon"/>
                <h2>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed</h2></div>
                </div>

            </div>
        </div>

    )
}

export default WorkList;