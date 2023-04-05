import { describe ,beforeEach,it, expect,  } from 'vitest';
import {fetchPokemonList } from '../src/components/api.servises'
describe('fetchPokemonList', () => {
  it('should return an array of Pokemon objects', async () => {
    const pokemonList = await fetchPokemonList();
    expect(Array.isArray(pokemonList)).toBe(true);
    expect(pokemonList.length).toBeGreaterThan(0);
    expect(pokemonList[0]).toHaveProperty('name');
    expect(pokemonList[0]).toHaveProperty('url');
  });

  it('should set isCaught property to true for caught Pokemon', async () => {
    const caughtPokemon = { id: 1, name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };
    localStorage.setItem('caughtPokemon', JSON.stringify([caughtPokemon]));
    const pokemonList = await fetchPokemonList();
    expect(pokemonList[0].isCaught).toBe(true);
  });

  it('should handle errors and return original Pokemon object', async () => {
    const invalidPokemon = { name: 'invalid', url: 'https://pokeapi.co/api/v2/pokemon/invalid/' };
    const pokemonList = await fetchPokemonList();
    expect(pokemonList.find(pokemon => pokemon.name === invalidPokemon.name)).toEqual(invalidPokemon);
  });
});