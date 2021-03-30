import React from "react";
import "./Footer.css";



const Footer = () => {
    return(
        <footer className="footer">
        <div className="container-fluid">
        <div className="row">
                <div className="col-sm-12 footer-col ">
                    <ul className="footer-ul m-auto">
                        <li className="footer-item">Impressum</li>
                        <li className="footer-item"><img src="https://vcard.roba-con.de/static/media/mini_logo.8be80214.svg" alt="robacon-logo" height="65" /></li>
                        <li className="footer-item">Datenschutz</li>
                    </ul>
                </div>
            </div>
        </div>
            
        </footer>
    )
}

export default Footer;