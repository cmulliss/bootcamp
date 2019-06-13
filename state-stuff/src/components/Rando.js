import React, { Component } from 'react'

class Rando extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0
    }
    this.makeTimer()
  }
  //  will be called every 1000 milliseconds
  makeTimer () {
    setInterval(() => {
      // calc a new random number, and floor as will give a decimal
      // will give a random number between 0 and 7
      // then make sure this fn is called
      let rand = Math.floor(Math.random() * this.props.maxNum)
      this.setState({ num: rand })
    }, 1000)
  }

  render () {
    return (
      <div>
        <h1>{this.state.num}</h1>
      </div>
    )
  }
}

export default Rando
