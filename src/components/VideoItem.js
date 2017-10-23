import React from 'react';

const VideoItem = (props) => {

    console.log("props received", props)

    return (
        <div> 
            <h1>{props.title}</h1>
            <iframe 
                title={props.title}
                width="320" height="180"
                src={"https://www.youtube.com/embed/" + props.videoId}
                frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    )
}
    
export default VideoItem;
