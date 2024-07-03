import './styles/App.css'
import TileList from './components/TileList'
import Score from './components/Score'
import PokemonList from './components/PokemonList'

function App() {

  // TODO: get tile icons from external api
  


  return (
    <>
      <h1>Select as many different cards as possible!</h1>
      <div className="game">
        <Score count={0} />
        <PokemonList /> 
      </div>
    </>
  )
}

export default App
