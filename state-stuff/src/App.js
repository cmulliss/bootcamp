import React from 'react'
import './App.css'
// import Rando from './Rando'
// import Game from './Game'
// import Button from './Button'
// import BrokenClick from './BrokenClick'
import Clicker from './components/Clicker'
import ScoreKeeper from './components/ScoreKeeper'

function App () {
  return (
    <div className='App'>
      <Clicker />
      <ScoreKeeper />
    </div>
  )
}

export default App

// <Rando maxNum={7} />
