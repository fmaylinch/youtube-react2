// @flow

import React from 'react';
import type { ContextRouter } from 'react-router-dom'

const VideoPlayer = (props: ContextRouter) => {

    const videoId = props.match.params.id

    return (
        <div> 
            <iframe 
                title={videoId}
                width="560" height="315"
                src={"https://www.youtube.com/embed/" + videoId}
                frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoPlayer;