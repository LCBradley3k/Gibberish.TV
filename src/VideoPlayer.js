import { render } from "@testing-library/react";
import React from "react";
import ReactPlayer from 'react-player/youtube'
import "./VideoPlayer.css"

function VideoPlayer(props) {

    const urls = [
        "https://youtu.be/gNf8Bsu0UYc"
    ];
    
    return(
        <div className="VideoPlayer">
            <ReactPlayer
                className="react-player"
                url={urls}
                controls={false}
                playing={true}
                config={{
                    youtube: {
                        autoplay: 1
                    }
                }}
            />
        </div>
    )
}

export default VideoPlayer;
