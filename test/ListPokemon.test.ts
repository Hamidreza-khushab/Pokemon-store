import { mount } from '@vue/test-utils';
import PokemonList from '../src/components/ListPokemon.vue';
import { describe ,it, expect,  } from 'vitest';

describe('PokemonList', () => {
  it('should render a spinner when isLoading is true', () => {
    const wrapper = mount(PokemonList, {
      data() {
        return {
          isLoading: true,
          pokemonList: [],
          errorMessage: '',
        };
      },
    });
    expect(wrapper.findComponent({ name: 'BSpinner' }).exists()).toBe(true);
  });

  it('should render a list of Pokemon cards when pokemonList is not empty', () => {
    const pokemonList = [
      {
        name: 'bulbasaur',
        sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        height: 7,
        weight: 69,
        base_experience: 64,
      },
      {
        name: 'charmander',
        sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        height: 6,
        weight: 85,
        base_experience: 62,
      },
    ];
    const wrapper = mount(PokemonList, {
      data() {
        return {
          isLoading: false,
          pokemonList,
          errorMessage: '',
        };
      },
    });
    expect(wrapper.findAllComponents({ name: 'BCard' }).length).toBe(pokemonList.length);
  });

  it('should render an error message when errorMessage is not empty', () => {
    const errorMessage = 'Failed to fetch Pokemon list';
    const wrapper = mount(PokemonList, {
      data() {
        return {
          isLoading: false,
          pokemonList: [],
          errorMessage,
        };
      },
    });
    expect(wrapper.findComponent({ name: 'BAlert' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'BAlert' }).text()).toBe(errorMessage);
  });
});