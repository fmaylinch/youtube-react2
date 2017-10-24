import React from 'react';

const VideoItem = (props) => {

    return (
        <div> 
            <img src={props.image} alt={props.title} />
        </div>
    )
}
    
export default VideoItem;
