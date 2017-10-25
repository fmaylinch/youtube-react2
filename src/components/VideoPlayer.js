// @flow

import React, { Component } from 'react';
import type { ContextRouter } from 'react-router-dom'
import axios from 'axios'

type State = {
    videoId: string,
    title: string
};

class VideoPlayer extends Component<ContextRouter, State> {

    constructor(props: ContextRouter) {
        super(props)

        this.state = {
            videoId: props.match.params.id,
            title: ""
        }
        
        const url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + this.state.videoId + "&key=AIzaSyAadYMkvAiefLRUy6H5Or8uOFqyYbl9DcI"
    
        axios.get(url).then(r => {
            const items = r.data.items
            if (items.length > 0) {
                const title = items[0].snippet.title
                this.setState({ title: title})
            }
        })
    
    }

    render() {
        return (
            <div>
                <div>{this.state.title}</div>
                <iframe 
                    title={this.state.videoId}
                    width="560" height="315"
                    src={"https://www.youtube.com/embed/" + this.state.videoId}
                    frameBorder="0" allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default VideoPlayer;