import React, { Component } from 'react'

//initialise state in the constructor
class Game extends Component {
  state = {
    score: 0,
    gameOver: false
  }
  // end of constructor
  render() {
    console.log('this.props: ', this.props)
    console.log('this.state: ', this.state)
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
      </div>
    )
  }
}

export default Game

// we can use this.state and reference it wherever we want, instead of instance methods.
// if using props in the constructor need super(props)
