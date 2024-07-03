import useImageUrls from "../hooks/useImageUrls";
import { useState, useEffect } from "react";

const shuffle = (arr) => {
  let array = [...arr];
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const PokemonList = () => {
  const { pokemonList, error, loading } = useImageUrls();
  const [orderedList, setOrderedList] = useState([]);

  useEffect(() => {
    if (pokemonList) {
      setOrderedList(pokemonList);
    }
  }, [pokemonList]);

  const handlePokeClick = () => {
    console.log()
    console.log(pokemonList);
    setOrderedList((prevList) => shuffle(prevList));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered: {error.message}</p>;

  return (
    <div className="tiles">
      {orderedList.map((pokemon) => (
        <button key={pokemon.id} className="tile" onClick={handlePokeClick}>
          <img src={pokemon.spriteUrl} alt={pokemon.name} />
          <h1>{pokemon.name}</h1>
        </button>
      ))}
    </div>
  );
};

export default PokemonList;
