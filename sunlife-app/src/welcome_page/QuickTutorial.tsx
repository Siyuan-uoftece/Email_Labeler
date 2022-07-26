import React from "react";


function WhyItMatters() {
    return (
        <>
            <div className="tut" id="whyitmatters">
                <div className="tut-connector">
                    <p className="tut-connector-text">Quick Tutorial</p>
                </div>
                <p className="tut-placeholder-text"></p>
            </div>
            <video>
                    <source src="tut_step1.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
        </>
    );
}

export default WhyItMatters;