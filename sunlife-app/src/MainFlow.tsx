import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import Label from "./Label";
import Tutorial from "./Tutorial";
import WhyItMatters from "./WhyItMatters";
import StartSurvey from "./StartSurvey";

export enum Page {
  Welcome,
  Survey,
  LabelGeneral,
}
function MainFlow() {
  //page1: welcome page
  //page2: survey page
  //page3: general email display page
  const [page, setPage] = useState(Page.Welcome);
  const [numEmails, setNumEmails] = useState(1);

  function handlePage2() {
    setPage(Page.Survey);
  }
  useEffect(() => {
    if (page != Page.Welcome) return;
    const fileSelector = document.getElementById('file-selector');
    fileSelector && fileSelector.addEventListener("change", (event: any) => {
      const reader = new FileReader();
      const fileList = event.target.files;

      reader.addEventListener('load', function(e: any) {
        console.log(e.target.result);
      })
      reader.readAsBinaryString(fileList[0])
    });
  })
  // function handlePage3() {
  //     setPage(Page.LabelGeneral);
  // }

  if (page == Page.Welcome) {
    return (
      <div>
        <Welcome />
        <button className="sunlife-header-quick-start" onClick={handlePage2}>
          QUICK START --&gt;
        </button>
        <Tutorial />
        <WhyItMatters page={page} setPage={setPage} />
        <input type="file" id="file-selector" multiple></input>
      </div>
    );
  } else if (page == Page.Survey) {
    return (
      <StartSurvey
        numEmails={numEmails}
        setNumEmails={setNumEmails}
        page={page}
        setPage={setPage}
      />
    );
  } else {
    return <Label numEmails={numEmails} page={page} setPage={setPage} />;
  }
}

export default MainFlow;
