// @flow

import React from 'react';
import type { Video } from './types'

type Props = {
    video: Video
};

const VideoItem = (props: Props) => {

    return (
        <div> 
            <img src={props.video.image} alt={props.video.title} />
        </div>
    )
}

export default VideoItem;
