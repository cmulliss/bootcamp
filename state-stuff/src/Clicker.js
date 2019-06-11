import React, { Component } from 'react'

class Clicker extends Component {
  state = {
    number: 1
  }
  genRandom = () => {
    // pick random number 1-10, gos from 0 to 9, so add 1 to get 1 to 10
    let rand = Math.floor(Math.random() * 10) + 1
    //update state with new rand
    this.setState({ num: rand })
  }
  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>YOU WIN!</h2>
        ) : (
          <button onClick={this.genRandom}>Random Number</button>
        )}
      </div>
    )
  }
}

export default Clicker
