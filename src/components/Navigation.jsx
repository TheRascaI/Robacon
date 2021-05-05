import React from "react";
import "./Navigation.css"

const Navigation = () =>{
    return(
      
        <nav className="navbar navbar-expand-lg navbar-light m-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="#app"><h1 className="sr-only">Roba-Con</h1><img src="https://vcard.roba-con.de/static/media/mini_logo.8be80214.svg" alt="robacon-logo" height="50" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">Wir</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Leistungen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
          
          
        </div>
      </nav>

    )

}
export default Navigation;