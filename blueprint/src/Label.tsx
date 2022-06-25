import React, {useState, useLayoutEffect} from "react";
import { AnchorButton, Button, FormGroup, Alert} from "@blueprintjs/core";
import emailData from "./emailData";


function Label({numEmails,setPage2,}:{
  numEmails: number;
  setPage2: (val: boolean) => void;
}) 
{

  const [pop, setPop] = useState(false);
  const emails = [];

  for (let i = 0; i < numEmails; i++) {
    emails.push(emailData[i]);
  }

  
  const mappingFunc = (email: any, index: number) => {
    const newEmail: any = {};
    newEmail["mid"] = email["mid"];
    newEmail["sender"] = email["sender"];
    newEmail["rcpt"] = email["rcpt"];
    newEmail["subject"] = email["subject"];
    newEmail["files"] = email["files"];

    return (
      <div className="email-element">
        <div className="email-box-header">
          <p>{"Email " + (index + 1)}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <FormGroup inline={true} style={{ position: "relative", top: -0.5 }}>
            <AnchorButton
              icon="annotation"
              text="Label"
              small={true}
              onClick={() => {
                console.log("clicked email" + (index + 1));
              }}
            />
          </FormGroup>
        </div>

        <hr className="separator" />
        <p>MailID: {JSON.stringify(newEmail.mid, null, 2)}</p>
        <p>Sender: {JSON.stringify(newEmail.sender, null, 2)}</p>
        <p>Recipient: {JSON.stringify(newEmail.rcpt, null, 2)}</p>
        <p>Subject: {JSON.stringify(newEmail.subject, null, 2)}</p>
        <p>Files: {JSON.stringify(newEmail.files, null, 2)}</p>
      </div>
    );
  };

  const handleExitCancel= () => {
    setPop(!pop)
  }

  const handleExitConfirm= () => {
    setPage2(false)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <Button 
        className="something"
        icon="arrow-left"
        intent="warning"
        text={"Back"}
        onClick={() => {
          setPop(!pop);
        }}
      />
      <Alert 
        className="alert-box"
        isOpen={pop}
        confirmButtonText="Exit"
        cancelButtonText="Cancel"
        icon="undo"
        intent="danger"
        onCancel={handleExitCancel}
        onConfirm={handleExitConfirm}
      >
        <h2>Are you sure you want to exit?</h2>
        <p className="alert-sub">Your data will be lost.</p>
      </Alert>

      <pre>
        <div className="email-grid">{emails.map(mappingFunc)}</div>
      </pre>
    </div>
  );
}

export default Label;
