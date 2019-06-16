import React, { Component } from 'react'

const numbers = [1, 2, 3, 4, 5, 6]
const doubled = numbers.map(number => number * 2)
console.log(doubled)

const listItems = doubled.map(number => (
  <li key={number.toString()}>{number}</li>
))

class Test extends Component {
  render () {
    return (
      <div>
        {doubled}
        <ul>{listItems}</ul>
      </div>
    )
  }
}

export default Test
