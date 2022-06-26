import React, { useState, useLayoutEffect } from "react";
import {Link} from "react-router-dom"
import { NumericInput } from "@blueprintjs/core";
import Tutorial from "./Tutorial";
import Label from "./Label"
import Header from "./Header";
import StickyHeader from "./StickyHeader";
import WhyItMatters from "./WhyItMatters";
import Wave from "./wave.png"
import BG1 from "./bg1.jpg"


function Welcome({
  numEmails,
  setNumEmails,
}: {
  numEmails: number;
  setNumEmails: (num: number) => void;
}) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <div className="welcome">
      <Header />
      <StickyHeader />
      {/* <img className="background1" src={BG1} /> */}
      <p className="welcome-text">WELCOME!</p>
      <img className="welcome-wave" src={Wave} alt="waving emoji"/>
      <p className="welcome-sub-block"> <mark className="mark">
        This is the space where you could &nbsp; help improve 
        accuracy of our &nbsp; MACHINE LEARNING MODEL to &nbsp; 
        identify potential DATA LEAK.&nbsp; </mark>
      </p>
      <button className="welcome-learn-ml">
        <a className="welcome-ml-style" href="https://en.wikipedia.org/wiki/Active_learning">
          Learn more about our MACHINE LEARNING MODEL --&gt;
        </a>
      </button>
      <button className="welcome-learn-data">
        <a className="welcome-date-style" href="https://en.wikipedia.org/wiki/Active_learning">
        Learn more about DANGER of DATA LEAK --&gt;
        </a>
      </button>
      <Tutorial />
      <WhyItMatters />
    </div>
  )
}

export default Welcome;
