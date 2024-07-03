import useImageUrls from "../hooks/useImageUrls";
import { useState, useEffect } from "react";
import { shuffle } from "../game-logic/game";

const PokemonList = () => {
  const { pokemonList, error, loading } = useImageUrls();
  const [orderedList, setOrderedList] = useState([]);
  const [seenIds, setSeenIds] = useState([]);

  useEffect(() => {
    if (pokemonList) {
      setOrderedList(pokemonList);
    }
  }, [pokemonList]);

  const handlePokeClick = (id) => {
    console.log(id);
    if (seenIds.includes(id)) {
        setSeenIds([]);
    } else {
        setSeenIds((prevIds) => [...prevIds, id]);
    }
    setOrderedList(shuffle([...orderedList]));
    
    console.log(seenIds)
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

export default PokemonList;
