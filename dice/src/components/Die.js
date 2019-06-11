import React from 'react'
import './Die.css'

const Die = props => {
  return <i className={`Die fas fa-dice-${props.face} `} />
}
export default Die
