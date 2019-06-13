import React, { Component } from 'react'

class ScoreKeeper extends Component {
  state = {
    score: 0
  }
  // can be better to use alternate callback form to increment
  singleKill = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  tripleKill = () => {
    this.setState(currentState => {
      return { score: currentState.score + 3 }
    })
  }
  incrementScore = curState => {
    return { score: curState.score + 1 }
  }

  //   tripleKill = () => {
  //     this.setState(this.incrementScore)
  //     this.setState(this.incrementScore)
  //     this.setState(this.incrementScore)
  //   }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score} </h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    )
  }
}

export default ScoreKeeper
