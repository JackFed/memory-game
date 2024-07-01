import { useState, useEffect } from "react";

// Using pokemon api, 
// https://pokeapi.co/api/v2/pokemon?limit=8&offset=60
// Set limit and randomize offset so you can get x amount of pokemon 
// starting from y location in the pokedex.

const useImageUrls = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const LIMIT = 8;
    const TOTAL_POKEMON = 1000;

    useEffect(() => {
        const fetchRandomPokeList =  async (searchAmount) => {
            const offset = Math.floor(Math.random() * (TOTAL_POKEMON - searchAmount + 1));
            try {
                const listResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${searchAmount}&offset=${offset}`);
                if (!listResponse.ok) {
                   throw new Error("Failed to fetch Pokémon list");
                }
                const listData = await listResponse.json();
                const detailedPokemonDataPromises = listData.results.map(async (pokemon) => {
                    const detailedPokemonData = await fetch(pokemon.url);
                    if (!detailedPokemonData.ok) {
                        throw new Error("Failed to fetch Pokémon data");
                      }
                    const pokemonData = await detailedPokemonData.json();
                    return {
                        name: pokemonData.name,
                        spriteUrl: pokemonData.sprites.front_default,
                        id: pokemonData.id
                    }
                })
                const detailedPokemonList = await Promise.all(detailedPokemonDataPromises);
                setPokemonList(detailedPokemonList)

            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
        }

        fetchRandomPokeList(LIMIT);
    }, []);

    return { pokemonList, error, loading };
}

export default useImageUrls;