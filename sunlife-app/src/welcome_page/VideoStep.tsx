import React from "react";

function VideoStep() {
    
    return(
        <div>
            <p>This is the tutorial pics.</p>
            <div>
                <video 
                autoPlay
                controls 
                loop
                src={require('./tutStep1.mp4')} />
            </div>
        </div>
    )
};

export default VideoStep