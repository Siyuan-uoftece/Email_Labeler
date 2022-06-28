import React, {useState} from "react"
import {Button, NumericInput} from "@blueprintjs/core";
import Header from "./Header"
import Label from "./Label"
import {Page} from "./MainFlow"

function StartSurvey(
    {numEmails, setNumEmails, page, setPage} :
    {numEmails:number,
    setNumEmails:(num: number) => void,
    page:number,
    setPage: (page: number) => void, }
) {

    function handleStartLabel() {
        setPage(Page.LabelGeneral);
    }

        return ( 
            <div>
                <Header />
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
                                val <= 9 &&
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
                <Button 
                    className="survey-start-button" 
                    icon="confirm" 
                    text="START" 
                    onClick={handleStartLabel}
                />
            </div>
        )
}

export default StartSurvey