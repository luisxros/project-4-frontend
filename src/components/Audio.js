import React, { Component } from "react"
import '../App.css'



export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  render() {

    return (
      <div>
        <iframe className="widget" allow="autoplay" width="60%" height="50px" src="https://www.iheart.com/artist/calvin-harris-60352/?embed=true" frameborder="0"></iframe>
      </div>
    )
  }
}

