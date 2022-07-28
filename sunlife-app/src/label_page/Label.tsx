import React, { useState, useLayoutEffect, useEffect } from "react";
import { AnchorButton, Button, FormGroup, Alert } from "@blueprintjs/core";
import emailData from "./emailData";
import { Page } from "../common";
import {Header} from "../common";


function Label({ numEmails, page, setPage }:
  {
    numEmails: number,
    page: number,
    setPage: (page: number) => void,
  }) {

  const [alertExitPage, setAlertExitPage] = useState(false);
  const [emails, setEmails] = useState([]);
  const [submit, setSubmit] = useState(false);

  function handleSubmit() {
    setSubmit(!submit);
  }

  // for (let i = 0; i < numEmails; i++) {
  //   emails.push(emailData[i]);
  // }

  useEffect(() => {
    fetch("https://random-data-api.com/api/stripe/random_stripe?size=" + numEmails)
      .then(response => response.json())
      .then(jsonData => setEmails(jsonData));
  }, [numEmails]);

  const mappingFunc = (email: any, index: number) => {
    function handleIsSensitive(index: any) {
      console.log("is sensitive");
    }

    function handleNotSensitive(index: any) {
      console.log("not sensitive");
    }

    return (
      <div className="email-element">
        <div className="email-box-header">
          <p>{"Email " + (index + 1)}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <FormGroup className="email-box-labels" inline={true} style={{ position: "relative", top: -0.5 }}>
            <button 
            className={"label-button"} 
            id={"label-button-" + (index + 1)}
            onClick={() => {
              document.getElementById("label-button-" + (index + 1))!.style.backgroundColor="rgb(182, 59, 59)";
              document.getElementById("label-button-" + (index + 1))!.style.color="rgb(255,255,255)";
            }}>
              Sensitive
            </button>
            <button id={"label-button-non-" + (index + 1)} className={"label-button-non"}>Non-Sensitive</button>
          </FormGroup>
        </div>

        <hr className="separator" />
        <p>{JSON.stringify(email, null, 2)}</p>
      </div>
    );
  };

  const handleExitCancel = () => {
    setAlertExitPage(!alertExitPage);
  };

  const handleExitConfirm = () => {
    setPage(Page.Survey);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="email-grid-big-block">
      {/* <Header /> */}
      <Button
        className="something"
        icon="arrow-left"
        intent="warning"
        text={"Back"}
        onClick={() => {
          setAlertExitPage(!alertExitPage);
        }}
      />
      <Alert
        className="alert-box"
        isOpen={alertExitPage}
        confirmButtonText="Exit"
        cancelButtonText="Cancel"
        icon="undo"
        intent="danger"
        onCancel={handleExitCancel}
        onConfirm={handleExitConfirm}
      >
        <h2 className="alert-header">Are you sure you want to exit?</h2>
        <p className="alert-sub">Your data will be lost.</p>
      </Alert>

      <pre>
        <div className="email-grid">{emails.map(mappingFunc)}</div>
      </pre>
      <button 
          className="submit-button-2"
          onClick={() => {
            console.log("Setting submit true");
            setSubmit(true);
          }}>
          SUBMIT
        </button>
        <Alert
          className="submit-box"
          isOpen={submit}
          icon="clean"
          intent="success"
          confirmButtonText="Submit"
          cancelButtonText="Cancel"
          onConfirm={handleSubmit}
          onCancel={()=>{
            setSubmit(false);
          }}
        >
          <h2 className="submit-header">Are you sure you want to submit?</h2>
          <p className="submit-sub">You can't undo this submit.</p>
          {/* <h2 className="submit-header">You have successfully submit the labelling.</h2>
          <p className="submit-sub">Thank you for your participation.</p> */}
        </Alert>
    </div>
  );
}

export default Label;
