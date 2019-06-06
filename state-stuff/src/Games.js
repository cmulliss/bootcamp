import React, { Component } from 'react'

class Game extends Component {
  state = {
    score: 0,
    gameOver: false
  }
  render() {
    return <div>Game</div>
  }
}

export default Game

// we can use this.state and reference it wherever we want, instead of instance methods.
