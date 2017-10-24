// @flow

import React from 'react';

type Video = {
    image: string,
    title: string
};

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
