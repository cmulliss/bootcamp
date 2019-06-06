import React from 'react'
import './App.css'
// import Pokedex from './Pokedex'
import Pokegame from './Pokegame'
function App () {
  return (
    <div className='App'>
      <Pokegame />
    </div>
  )
}

export default App

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// detail, better:
// const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

// for each pokemon, their image src would be:
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// {id: 4, name: 'Charmander', type: 'fire', base_experience: 62}

// return (
//     <div className='App'>
//       <Pokedex />
//     </div>
