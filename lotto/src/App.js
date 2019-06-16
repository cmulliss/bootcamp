import React from 'react'
// import Ball from './components/Ball'
import Lottery from './components/Lottery'
// import Test from './components/Test'

import './App.css'

function App () {
  return (
    <div className='App'>
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} numBalls={4} />
    </div>
  )
}

export default App

// <Test />
