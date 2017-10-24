import React from 'react';
import PropTypes from 'prop-types'

const VideoItem = (props) => {

    return (
        <div> 
            <img src={props.video.image} alt={props.video.title} />
        </div>
    )
}

VideoItem.propTypes = {
    video: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string
    })
}

export default VideoItem;
