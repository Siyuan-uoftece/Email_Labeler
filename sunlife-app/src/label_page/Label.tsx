import React, { useState, useLayoutEffect, useEffect } from "react";
import { AnchorButton, Button, FormGroup, Alert } from "@blueprintjs/core";
import emailData from "./emailData";
import { Page } from "../common";


function Label({ numEmails, page, setPage }:
  {
    numEmails: number,
    page: number,
    setPage: (page: number) => void,
  }) {
  const [alertExitPage, setAlertExitPage] = useState(false);
  const [emails, setEmails] = useState([]);

  // for (let i = 0; i < numEmails; i++) {
  //   emails.push(emailData[i]);
  // }

  useEffect(() => {
    fetch("https://random-data-api.com/api/stripe/random_stripe?size=" + numEmails)
      .then(response => response.json())
      .then(jsonData => setEmails(jsonData));
  }, [numEmails]);

  const mappingFunc = (email: any, index: number) => {
    // const newEmail: any = {};
    // newEmail["mid"] = email["mid"];
    // newEmail["sender"] = email["sender"];
    // newEmail["rcpt"] = email["rcpt"];
    // newEmail["subject"] = email["subject"];
    // newEmail["files"] = email["files"];


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
            <button className="label-button">Sensitive</button>
            <button className="label-button-non">Non-Sensitive</button>
            {/* <AnchorButton
              icon="annotation"
              text="Sensitive"
              small={true}
              onClick={handleIsSensitive}
            />
            <AnchorButton
              icon="annotation"
              text="Not Sensitive"
              small={true}
              onClick={handleNotSensitive}
            /> */}
          </FormGroup>
        </div>

        <hr className="separator" />
        <p>{JSON.stringify(email, null, 2)}</p>
        {/* <p>MailID: {JSON.stringify(newEmail.mid, null, 2)}</p>
        <p>Sender: {JSON.stringify(newEmail.sender, null, 2)}</p>
        <p>Recipient: {JSON.stringify(newEmail.rcpt, null, 2)}</p>
        <p>Subject: {JSON.stringify(newEmail.subject, null, 2)}</p>
        <p>Files: {JSON.stringify(newEmail.files, null, 2)}</p> */}
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
    <div>
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

      <button className="submit-button">SUBMIT</button>
    </div>
  );
}

export default Label;
