import useImageUrls from "../hooks/useImageUrls";

const PokemonList = () => {
  const { pokemonList, error, loading } = useImageUrls();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered: {error.message}</p>;

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.spriteUrl} alt={pokemon.name} />
          <h1>{pokemon.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
