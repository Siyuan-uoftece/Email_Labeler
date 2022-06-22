import React, {useState} from "react";
import {NumericInput} from "@blueprintjs/core";
import Header from "./Header"

function Welcome({numEmails, setNumEmails}: 
  {numEmails: number, setNumEmails: (num: number) => void}) {
  
  return (
    <>
      <div className="welcome">
        <p className="welcome-text">WELCOME!</p>
        <div className="survey-Block">
          <div className="survey-Text">
            <p>I want to label&nbsp;</p>
            <NumericInput
              leftIcon="envelope"
              size={2}
              defaultValue={1}
              value={numEmails}
              onValueChange={(val: number) => {
                Number.isFinite(val) &&
                  val >= 0 &&
                  val <= 10 &&
                  setNumEmails(val);
              }}
              large={true}
              intent="warning"
              max={10}
              min={1}
            />
            <p>&nbsp;emails today.&nbsp;</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
