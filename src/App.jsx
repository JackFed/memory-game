import { useState } from 'react'
import './styles/App.css'
import TileList from './components/TileList'

function App() {
  const [count, setCount] = useState(0)

  // TODO: get tile icons from external api



  return (
    <>
      <TileList totalTiles={4}/>
    </>
  )
}

export default App
