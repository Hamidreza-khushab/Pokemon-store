import { defineStore } from 'pinia';
import { fetchPokemonList } from './api.servises';
import { onMounted, ref } from "vue";
import { Pokemon } from './values';

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonList = ref([] as Pokemon[]);
  const isLoading = ref(true);
  const errorMessage = ref("");
  const pokemon = ref({} as Pokemon);
  const caughtPokemon = ref([] as Pokemon[]);
  const fetchPokemonListAction = async () => {
    try {
      isLoading.value = false;
      const resolvedPokemonDetails = await fetchPokemonList();
      pokemonList.value = resolvedPokemonDetails;
    } catch (error) {
      console.error('Failed to fetch pokemon list', error);
    }
  };
  const catchPokemon = (pokemon: Pokemon) => {
    pokemon.isCaught = true;
    caughtPokemon.value.push(pokemon);
    const index = pokemonList.value.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      pokemonList.value[index] = pokemon;
    }
    localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon.value));
  };
  return {
    errorMessage,
    pokemonList,
    isLoading,
    pokemon,
    fetchPokemonListAction,
    catchPokemon,
  };
});
export function usePokemonList() {
  const store = usePokemonStore();

  onMounted(async () => {
    try {
      await store.fetchPokemonListAction(); 
      const caughtPokemon = JSON.parse(localStorage.getItem('caughtPokemon') || '[]');
      store.pokemonList = store.pokemonList.map(p => ({ ...p, isCaught: caughtPokemon.some((c: { id: number; }) => c.id === p.id) }));
      store.isLoading = false;
    } catch (error: unknown) {
      store.errorMessage = (error as Error).message;
      store.isLoading = false;
    }
  });

  return {
    isLoading: store.isLoading,
    pokemonList: store.pokemonList,
    errorMessage : store.errorMessage ,
  };
}
export const useSearch = () => {
  const store = usePokemonStore();
  const loading = ref(false);
  const searchTerm = ref('');
  const searchResult = ref<Pokemon | null>(null);
  const error = ref('');
  const showModal = ref(false);

  const submitSearch = async () => {
    loading.value = true;
    error.value = '';
    try {
      const searchTermValue = searchTerm.value.trim();

      if (!searchTermValue) {
        throw new Error('Please enter a search term');
      }

      const normalizedSearchTerm = searchTermValue.toLowerCase();
      let pokemon: Pokemon | undefined;

      if (/^-?\d+(\.\d+)?$/.test(normalizedSearchTerm)) {
        const id = parseFloat(normalizedSearchTerm);
        pokemon = store.pokemonList.find(p => p.id === id);
      } else {
        pokemon = store.pokemonList.find(p => p.name.toLowerCase() === normalizedSearchTerm);
      }

      if (!pokemon) {
        throw new Error(`Pokemon ${searchTermValue} not found`);
      }

      searchResult.value = pokemon;
      
      showSearchResult();
    } catch (err: unknown) {
      showSearchResult();
      error.value = (err as Error).message;
    }
    loading.value = false;
  };

  function showSearchResult() {
    showModal.value = true;
  }

  const closeModal = () => {
    searchResult.value = null;
    error.value = '';
    showModal.value = false;
  };

  const catchPokemon = (pokemon: Pokemon | null) => {
    if (!pokemon) {
      return;
    }
    store.catchPokemon(pokemon);

  };

  return {
    loading,
    searchTerm,
    searchResult,
    error,
    showModal,
    submitSearch,
    closeModal,
    catchPokemon,
  };
};
