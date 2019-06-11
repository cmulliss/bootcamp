import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  state = {
    die1: 'one',
    die2: 'one'
  }

  roll = () => {
    // pick 2 new rolls and setState with new rolls
    Math.floor(Math.random() * this.props.sides.length)
  }

  render() {
    return (
      <div>
        <h2>RollDice</h2>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}

export default RollDice
