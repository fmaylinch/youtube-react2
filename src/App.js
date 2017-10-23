import React, { Component } from 'react';
import VideoList from './components/VideoList'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputValue: "",
      videos: []
    }
  }

  search(query) {
    
    const url = "https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=" + query + "&key=AIzaSyAHVgKILCt2rW4X3BW_deRI4A2Ng3IIVgA"
  
    const promise = axios.get(url)

    console.log("Loading videos...")
  
    promise.then(response => {
  
      const items = response.data.items
  
      const videos = items
        .filter(v => v.id.kind === "youtube#video")

      console.log("Loaded " + videos.length + " videos")

      this.setState({ videos: videos })
    })
  
    promise.catch(error => console.log("ERROR!!", error))
  }

  render() {

    console.log("render!")

    return (
      <div>
        <input
          onChange={ (event) => this.setState({inputValue: event.target.value}) }
          value={this.state.inputValue}
          />

        <button
          onClick={ (event) => { this.search(this.state.inputValue) }}>
          Search
        </button>

        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;

