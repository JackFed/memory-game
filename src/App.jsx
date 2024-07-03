import './styles/App.css'
import Score from './components/Score'
import PokemonList from './components/PokemonList'
import StartScreen from './components/StartScreen';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      {gameOver && (<StartScreen score={count} setScore={setCount} setGameOver={setGameOver} />)}
      {! gameOver && (
        <>
          <div className="game">
            <h1>Select as many different cards as possible!</h1>
            <Score count={count} />
            <PokemonList score={count} setScore={setCount} setGameOver={setGameOver}/> 
          </div>
        </>
      )}
    </>
  )
}

export default App
