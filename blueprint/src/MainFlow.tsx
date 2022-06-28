import React, {useState} from "react"
import Welcome from "./Welcome"
import Label from "./Label"
import Tutorial from "./Tutorial"
import WhyItMatters from "./WhyItMatters"
import StartSurvey from "./StartSurvey"

export enum Page {
    Welcome,
    Survey,
    LabelGeneral,
}
function MainFlow() 
    {
    //page1: welcome page
    //page2: survey page
    //page3: general email display page
    const [page,setPage] = useState(Page.Welcome)
    const [numEmails, setNumEmails] = useState(1);
    
    function handlePage2() {
        setPage(Page.Survey);
    }

    function handlePage3() {
        setPage(Page.LabelGeneral);
    }

    if (page == Page.Welcome) {
    return(
        <>
            <Welcome/>
            <button 
                className="sunlife-header-quick-start"
                onClick={handlePage2}
                >
                QUICK START --&gt;
            </button>
            <Tutorial />
            <WhyItMatters /> 
            <button 
                className="welcome-page-start"
                onClick={handlePage2}>
                START
            </button>
        </>
    )}
    else if (page==Page.Survey) {
        return (
            <StartSurvey numEmails={numEmails} setNumEmails={setNumEmails} page={page} setPage={setPage}/>
        )
    }
    else {
        return (
            <Label numEmails={numEmails} page={page} setPage={setPage}/>
        )
    }
}

export default MainFlow