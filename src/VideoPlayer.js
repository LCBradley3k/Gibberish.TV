import { render } from "@testing-library/react";
import React, {Component} from "react";
import ReactPlayer from 'react-player/youtube'
import "./VideoPlayer.css"

class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0
        }
        this.nextVideo = this.nextVideo.bind(this);

    }

    nextVideo() {
        return this.setState(st => {
            let newIndex = st.currentIndex;
            if(newIndex >= this.props.urls.length - 1){
                newIndex = 0;
            } else {
                newIndex = newIndex + 1;
            }
            return {
                currentIndex: newIndex
            }
        });
    }

    render() {
        const urls = this.props.urls;
        //const _currUrl = this.nextVideo(null) // no video played yet.
        let index = this.state.currentIndex;
        
        return(
            <div className="VideoPlayer">
                <ReactPlayer
                    className="react-player"
                    url={urls[index]}
                    playing={true}
                    controls={true}
                    config={{
                        youtube: {
                            playerVars:{
                                modestbranding: 1,
                                controls: 1,
                            }
                        }
                    }}
                />
                <button onClick={this.nextVideo}>next (random) gibberish &#x2192;</button>
            </div>
        )
    }
}

export default VideoPlayer;
