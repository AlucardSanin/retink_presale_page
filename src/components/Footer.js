import React from "react";
import logo from "./retinkfoot.svg"

function Footer() {
  return(
    <>
      <div id="Footer">
      <div id="gray">
        <div id="grayContainer">
          <img src={logo} alt="Retink Logo" />
          <div id="hs">
            <h4>Product by Retink Media UG</h4>
            <h4>Get Early Access</h4>
            <h4>Bonn, Germany</h4>
            <h4>Provide Feedback</h4>
          </div>
        </div>
      </div>
      <div id="black">
        <p id="b1">Copyright ©2021 Retink</p>
        <p id="b2">Terms of Service</p>
      </div>
      </div>
    </>
  );
}

export default Footer;