//@flow

import React, { Component } from 'react';
import MenuBar from './components/MenuBar'
import VideoList from './components/VideoList'
import type { Video } from './components/types'
import axios from 'axios'

type State = {
  videos: Array<Video>
};

class App extends Component<void, State> {

  constructor(props: void) {
    super(props)

    this.state = {
      videos: []
    }
  }

  search(query: string) {
    
    const url = "https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=" + query + "&key=AIzaSyAHVgKILCt2rW4X3BW_deRI4A2Ng3IIVgA"
  
    const promise = axios.get(url)

    console.log("Loading videos...")
  
    promise.then(response => {
  
      const items = response.data.items
  
      const videos = items
        .filter(v => v.id.kind === "youtube#video")
        .map(v => (
          {
              id: v.id.videoId,
              title: v.snippet.title,
              image: v.snippet.thumbnails.medium.url
          }
      ))

      console.log("Loaded " + videos.length + " videos")

      this.setState({ videos: videos })
    })
  
    promise.catch(error => console.log("ERROR!!", error))
  }

  render() {

    console.log("render!")

    return (
      <div>
        <MenuBar onSearch={(value: string) => { this.search(value) }} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;

