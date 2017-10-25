//@flow

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import type { ContextRouter } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
import type { Video } from './components/types'
import axios from 'axios'

type State = {
  videos: Array<Video>,
  loading: boolean
};

class App extends Component<void, State> {

  constructor(props: void) {
    super(props)

    this.state = {
      videos: [],
      loading: false
    }
  }

  search(query: string) {
    
    const url = "https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=" + query + "&key=AIzaSyAHVgKILCt2rW4X3BW_deRI4A2Ng3IIVgA"
  
    const promise = axios.get(url)

    console.log("Loading videos...")
    this.setState({ loading: true })
  
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

      this.setState({ videos: videos, loading: false })
    })
  
    promise.catch(error => console.log("ERROR!!", error))
  }

  render() {

    console.log("render!")

    return (
      <div>

        <BrowserRouter>
          <div>

            <Route render={ (context: ContextRouter) =>
              <MenuBar onSearch={(value: string) => {
                  this.search(value)
                  context.history.push('/')
                }} />
            } />

            <Switch>
              <Route exact path='/'
                render={() => {

                  if (this.state.loading) {
                    return <div>Loading...</div>
                  } else {
                    return <VideoList videos={this.state.videos}/>
                  }
                  
                }} />
              <Route exact path='/detail/:id' component={VideoPlayer} />
            </Switch>

          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;

