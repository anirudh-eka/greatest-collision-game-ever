import React, { Component } from 'react';
import Player from './Player.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    }
  }

  onClick = () => {
    this.setState({clicks: this.state.clicks + 1})
  }
  render() {
    console.log(this.state)
    const slide = slideDistance(this.state.clicks)
    return (
      <div className="App">
        <div className="Arena" onClick={this.onClick}>
          <Player slide={slide} collided={slide === MAX_SLIDE} name="B"/>
          <Player slide={slide} second name="S"/>
        </div>
      </div>
    );
  }
}

const MAX_SLIDE = 34.5

const slideDistance = (steps) => steps * 5 > MAX_SLIDE ? MAX_SLIDE : steps * 5;

export default App;
