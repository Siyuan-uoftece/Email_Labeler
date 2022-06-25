import React from "react"
import {useState} from "react"
import Welcome from "./Welcome"
import Label from "./Label"
import StickyHeader from "./StickyHeader"
import { Button,NumericInput } from "@blueprintjs/core";


function MainFlow() {
    const [page2, setPage2] = useState(false);
    const [numEmails, setNumEmails] = useState(1);
    
    function toLabel() {
        setPage2(true);
    }


    if (!page2) {
    return(
        <>
            <Welcome numEmails={numEmails} setNumEmails={setNumEmails}/>
            {/* <div className="welcome-button">
                <Button 
                    className="start-button" 
                    icon="confirm" 
                    text="START" 
                    onClick={toLabel}
                />
            </div> */}
            
        </>
    )}
    else {
        return (
            <Label numEmails={numEmails} setPage2={setPage2}/>
        )
    }
}

export default MainFlow