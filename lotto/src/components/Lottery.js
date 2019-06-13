import React, { Component } from 'react'
import Ball from './Ball'

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 99
  }
  state = {
    nums: Array.from({ length: this.props.maxBalls })
  }
  // handleClick will call generate
  handleClick = () => {
    this.generate()
  }
  // map over our nums in state, and for each one generate a new random number, build the array and then set state with that array.
  // then going to use this.setState with callback method, rather than object
  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }))
  }
  // iterating over nums array, passing num as a prop to Ball
  render() {
    return (
      <div>
        <section className="Lottery">
          <h1>{this.props.title}</h1>
          <div>
            {this.state.nums.map(n => (
              <Ball num={n} />
            ))}
          </div>
          <button onClick={this.handleClick}>Generate</button>
        </section>
      </div>
    )
  }
}

export default Lottery
