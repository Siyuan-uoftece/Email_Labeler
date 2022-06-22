import React, {useState} from "react";
import { AnchorButton, Button, FormGroup} from "@blueprintjs/core";
import {Popover2} from "@blueprintjs/popover2";
import emailData from "./emailData";


function Label({
  numEmails,
  setPage2,
}: {
  numEmails: number;
  setPage2: (val: boolean) => void;
}) {
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
  return (
    <div>

      <Popover2 
        interactionKind="click"
        placement="bottom"
        isOpen={pop}
        content={
          <div>
            <h3>Are you sure you want to exit?</h3>
            <AnchorButton icon="delete" text="dismiss" onClick={() => setPage2(false)}/>
          </div>
        }>
            <Button 
              className="something"
              icon="arrow-left"
              intent="warning"
              text={"Back"}
              onClick={() => {
                setPop(!pop);
              }}
            />
        </Popover2>
      <pre>
        <div className="email-grid">{emails.map(mappingFunc)}</div>
      </pre>
    </div>
  );
}

export default Label;