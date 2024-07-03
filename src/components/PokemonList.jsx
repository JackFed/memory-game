import useImageUrls from "../hooks/useImageUrls";
import { useState, useEffect } from "react";
import { shuffle } from "../game-logic/game";
import PropTypes from "prop-types";

const PokemonList = ({ maxScore, score, setScore, setGameOver }) => {
  const { pokemonList, error, loading } = useImageUrls();
  const [orderedList, setOrderedList] = useState([]);
  const [seenIds, setSeenIds] = useState([]);

  useEffect(() => {
    if (score >= maxScore) {
      setGameOver(true);
    }
  }, [score, maxScore, setGameOver]);

  useEffect(() => {
    if (pokemonList) {
      setOrderedList(pokemonList);
    }
  }, [pokemonList]);

  const handlePokeClick = (id) => {
    if (seenIds.includes(id)) {
        setSeenIds([]);
        setScore(0);
        setGameOver(true);
    } else {
        setSeenIds((prevIds) => [...prevIds, id]);
        setScore(prevCount => prevCount + 1);
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
  maxScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired
}

export default PokemonList;
