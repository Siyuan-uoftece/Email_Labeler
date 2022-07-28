import React, { useEffect, useState } from "react";
import {Alert } from "@blueprintjs/core";
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
import ModelIllustrate from "./welcome_page/ModelIllustrate";
import Footer from "./welcome_page/Footer";

function MainFlow() {
  //page1: welcome page
  //page2: survey page
  //page3: general email display page
  const [page, setPage] = useState(Page.Welcome);
  const [numEmails, setNumEmails] = useState(1);
  const [submit, setSubmit] = useState(false);

  function handleSubmit() {
    setSubmit(!submit);
  }

  function handlePage2() {
    setPage(Page.Survey);
  }

  if (page === Page.Welcome) {
    return (
      <div>
        <Header />
        <Navbar />
        <Welcome page={page} setPage={setPage}/>
        <button className="sunlife-header-quick-start">
          Get to know more about our project --&gt;
        </button>
        <VideoStep />
        <ModelIllustrate />
        <Footer />
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
    return (
      <div className="label">
        <Label numEmails={numEmails} page={page} setPage={setPage} />
      </div>
    )
  }
}

export default MainFlow;
