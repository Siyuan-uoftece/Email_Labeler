import React, {useEffect} from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import sun from "../assets/sunlife3.jpg"


function ModelIllustrate() {

    // useEffect(() => {
    //     Aos.init({duration: 2000});
    // }, []);
    
    return(
        <div className="model" id="model">
            <div className="model-connector">
                <p className="model-one-text">ML Model Illustration</p>
            </div>
            <div className="model-illustration">
                <h1>Model</h1>
                <h4>after connecting to AWS database</h4>
            </div>

            <div className="photos">
                <div 
                // data-aos="fade-up" 
                className="pic"><img src="https://tenstorrent.com/app/uploads/2021/04/Group-66.png" /></div>
            </div>

        </div>
    )
}

export default ModelIllustrate