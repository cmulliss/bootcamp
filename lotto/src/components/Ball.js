import React, { Component } from 'react'
import './Ball.css'

class Ball extends Component {
  render () {
    return <div className='Ball'>{this.props.num}</div>
  }
}

export default Ball

// import React from 'react'
// import './Ball.css'

// const Ball = props => {
//   return (
//     <div>
//       <div className='Ball'>{props.num}</div>
//     </div>
//   )
// }
// export default Ball
