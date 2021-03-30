import React from "react";
import logo from "../assets/logo.svg"
import "./Navigation.css"

const Navigation = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light m-auto">
        <div class="container-fluid">
          <a class="navbar-brand" href="#app"><h1 className="sr-only">Roba-Con</h1><img src={logo} height="35px" alt="roba-con logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="m-auto navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#work">Work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#partner">Partner</a>
              </li>
            </ul>
          </div>
          
          
        </div>
      </nav>

    )

}
export default Navigation;