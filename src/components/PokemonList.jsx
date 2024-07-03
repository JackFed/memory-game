import useImageUrls from "../hooks/useImageUrls";
import { useState, useEffect } from "react";
import { shuffle } from "../game-logic/game";
import PropTypes from "prop-types";

const PokemonList = ({ setCount, setGameOver }) => {
  const { pokemonList, error, loading } = useImageUrls();
  const [orderedList, setOrderedList] = useState([]);
  const [seenIds, setSeenIds] = useState([]);

  useEffect(() => {
    if (pokemonList) {
      setOrderedList(pokemonList);
    }
  }, [pokemonList]);

  const handlePokeClick = (id) => {
    if (seenIds.includes(id)) {
        setSeenIds([]);
        setCount(0);
        setGameOver(true);
    } else {
        setSeenIds((prevIds) => [...prevIds, id]);
        setCount(prevCount => prevCount + 1);
    }
    setOrderedList(shuffle([...orderedList]));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered: {error.message}</p>;

  return (
    <div className="tiles">
      {orderedList.map((pokemon) => (
        <button key={pokemon.id} className="tile" onClick={() => handlePokeClick(pokemon.id)}>
          <img src={pokemon.spriteUrl} alt={pokemon.name} />
          <h1>{pokemon.name}</h1>
        </button>
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  setCount: PropTypes.func.isRequired
}

export default PokemonList;
