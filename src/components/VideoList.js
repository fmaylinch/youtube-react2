import React from 'react';
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = (props) => {

    const videos = props.videos.map(v => (
        {
            id: v.id.videoId,
            title: v.snippet.title,
            image: v.snippet.thumbnails.medium.url
        }
    ))

    const videoItems = videos.map(v => 
      <VideoItem key={v.id} video={v} />
    )

    return (
        <div className="video-list">{videoItems}</div>
    )
}
    
export default VideoList;
