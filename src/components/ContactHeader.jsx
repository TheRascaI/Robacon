import React from "react";
import ReactDOM from 'react-dom';

import "./ContactHeader.css";
import '../fontello/css/fontello.css';

const ContactHeader = () => {
    return ReactDOM.createPortal(
        <div id="contact-header" className="container-fluid">

<div className="row">
                <div className="col-sm-12 contact-header-col ">
                <ul className="contact-header-ul m-auto">
                        <li className="contact-header-item"><i className="icon-mail-alt icon"/><a href="mailto:info@roba-con.de">info@roba-con.de</a></li>
                        <li className="contact-header-item"><i className="icon-phone icon"/><a href="tel:+49(261)96234610">+49 (261) 9623461-0</a>
</li>
                    </ul>
                </div>
            </div>


</div>,
        document.getElementById('sticky-nav-hook')
      );
       
};

export default ContactHeader;