import { render } from "@testing-library/react";
import React, {Component} from "react";
import ReactPlayer from 'react-player/youtube'
import "./VideoPlayer.css"

class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUrl: ""
        }
        this.nextVideo = this.nextVideo.bind(this);

    }

    nextVideo(currentVideo) {
        this.setState({currentUrl: this.props.urls[0]});
    }

    render() {
        const urls = this.props.urls;
        //const _currUrl = this.nextVideo(null) // no video played yet.
        
        return(
            <div className="VideoPlayer">
                <ReactPlayer
                    className="react-player"
                    url={urls}
                    controls={false}
                    playing={true}
                    config={{
                        youtube: {
                            autoplay: 1,
                            modestbranding: 1
                        }
                    }}
                />
                {/*<button>next (random) gibberish &#x2192;</button>*/}
            </div>
        )
    }
}

export default VideoPlayer;
