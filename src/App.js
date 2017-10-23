import React from 'react';
import VideoList from './components/VideoList'
import axios from 'axios'

const App = () => {

  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&key=AIzaSyAHVgKILCt2rW4X3BW_deRI4A2Ng3IIVgA"

    

  return <div>not done yet</div>

  /*
  const videos = youtubeApiSample.items
    .filter(v => v.id.kind === "youtube#video")
    
  return (
    <VideoList videos={videos} />
  )
  */
}

export default App;

