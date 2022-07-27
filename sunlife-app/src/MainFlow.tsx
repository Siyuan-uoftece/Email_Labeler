import React, { useEffect, useState } from "react";
import Welcome from "./welcome_page/Welcome";
import Label from "./label_page/Label";
import LearnMore from "./welcome_page/LearnMore"
import Tutorial from "./welcome_page/Tutorial";
import QuickTutorial from "./welcome_page/QuickTutorial";
import StartSurvey from "./selection_page/StartSurvey";
import { Page } from "./common"
import {Header} from "./common"
import Navbar from "./welcome_page/Navbar"
import VideoStep from "./welcome_page/VideoStep"

function MainFlow() {
  //page1: welcome page
  //page2: survey page
  //page3: general email display page
  const [page, setPage] = useState(Page.Welcome);
  const [numEmails, setNumEmails] = useState(1);

  function handlePage2() {
    setPage(Page.Survey);
  }
  // useEffect(() => {
  //   if (page !== Page.Welcome) return;
  //   const fileSelector = document.getElementById('file-selector');
  //   fileSelector && fileSelector.addEventListener("change", (event: any) => {
  //     const reader = new FileReader();
  //     const fileList = event.target.files;

  //     reader.addEventListener('load', function(e: any) {
  //       console.log(e.target.result);
  //     })
  //     reader.readAsBinaryString(fileList[0])
  //   });
  // })
  // function handlePage3() {
  //     setPage(Page.LabelGeneral);
  // }

  if (page === Page.Welcome) {
    return (
      <div>
        <Header />
        <Navbar />
        <Welcome page={page} setPage={setPage}/>
        <button className="sunlife-header-quick-start">
          Get to know more about our project --&gt;
        </button>
        {/* <QuickTutorial/> */}
        <VideoStep />
        {/* <input type="file" id="file-selector" multiple></input> */}
      </div>
    );
  } else if (page === Page.Survey) {
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
