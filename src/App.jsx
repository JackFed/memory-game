import './styles/App.css'
import Score from './components/Score'
import PokemonList from './components/PokemonList'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);


  return (
    <>
      <h1>Select as many different cards as possible!</h1>
      <div className="game">
        <Score count={count} />
        <PokemonList setCount={setCount} /> 
      </div>
    </>
  )
}

export default App
