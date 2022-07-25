import React, { useState, useLayoutEffect } from "react";
import { Header } from "../common";
import Navbar from "./Navbar"

function Welcome() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="welcome" id='welcome'>
      <p className="welcome-text">WELCOME!</p>
      <p className="welcome-sub-block"> <mark className="mark">
        &nbsp;This is the space where you could &nbsp; &nbsp;help improve
        accuracy of our &nbsp; &nbsp;MACHINE LEARNING MODEL to &nbsp;
        &nbsp;identify potential DATA BREACH.&nbsp; </mark>
      </p>
      {/* <p className="welcome-learn-ml">
        <a className="welcome-ml-style" href="https://en.wikipedia.org/wiki/Active_learning">
          Learn more about our MACHINE LEARNING MODEL --&gt;
        </a>
      </p> */}
      {/* <button className="welcome-learn-data">
        <a className="welcome-date-style" href="https://en.wikipedia.org/wiki/Data_breach">
          Learn more about DANGER of DATA BREACH --&gt;
        </a>
      </button> */}
    </div>
  );
}

export default Welcome;
