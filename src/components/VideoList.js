import React from 'react';
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = (props) => {

    const videoItems = props.videos.map(v => 
      <VideoItem
          key={v.id.videoId}
          videoId={v.id.videoId}
          title={v.snippet.title}
          image={v.snippet.thumbnails.medium.url} />
        )

    return (
        <div className="video-list">{videoItems}</div>
    )
}
    
export default VideoList;
