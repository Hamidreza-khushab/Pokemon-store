import { Pokemon } from './values';

export async function fetchPokemonList(): Promise<Pokemon[]> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  const data = await response.json();

  // const caughtPokemonIds = JSON.parse(localStorage.getItem('caughtPokemon') || '[]').map((p: Pokemon) => p.id);

  const pokemonDetailsPromises = data.results.map(async (pokemon: Pokemon) => {
    try {
      const detailsResponse = await fetch(pokemon.url);
      if (!detailsResponse.ok) {
        throw new Error(`Failed to fetch details for ${pokemon.name}`);
      }
      const details = await detailsResponse.json();
      return {
        ...pokemon,
        id: details.id,
        height: details.height,
        weight: details.weight,
        base_experience: details.base_experience,
        sprites: details.sprites.front_default,
        // isCaught: caughtPokemonIds.includes(details.id),
      };
    } catch (error) {
      console.error(error);
      return pokemon;
    }
  });

  const resolvedPokemonDetails = await Promise.all(pokemonDetailsPromises);

  return resolvedPokemonDetails;
}

