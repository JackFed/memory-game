import './styles/App.css'
import Score from './components/Score'
import PokemonList from './components/PokemonList'
import StartScreen from './components/StartScreen';
import { useState } from 'react';

const LIMIT = 12;

function App() {

  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      {gameOver && (<StartScreen maxScore={LIMIT} score={count} setScore={setCount} setGameOver={setGameOver} />)}
      {! gameOver && (
        <>
          <div className="game">
            <h1>Select as many different cards as possible!</h1>
            <Score count={count} />
            <PokemonList maxScore={LIMIT} score={count} setScore={setCount} setGameOver={setGameOver}/> 
          </div>
        </>
      )}
    </>
  )
}

export default App
