import React, { useState, useLayoutEffect } from "react";
import { NumericInput } from "@blueprintjs/core";
import Tutorial from "./Tutorial";
import Header from "./Header";
import StickyHeader from "./StickyHeader";
import WhyItMatters from "./WhyItMatters";
import Wave from "./wave.png"

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
      <p className="welcome-text">WELCOME!</p>
      <img className="welcome-wave" src={Wave} alt="waving emoji"/>
      <p className="welcome-sub-block">
        This is the space where you could help improve 
        the accuracy of our <u>Machine Learning model</u> to identify potential <u>Data Leak</u>.
      </p>
      <Tutorial />
      <WhyItMatters />
    </div>
  )
}

export default Welcome;
