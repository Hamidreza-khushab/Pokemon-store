<template>
    <div>
      <b-button @click="showModal = true">Show Caught Pokemon</b-button>
      <b-modal v-model="showModal" title="Caught Pokemon">
        <div v-if="caughtPokemon.length">
          <ul>
            <li v-for="(value, key) in caughtPokemon" :key="key">
              <strong>{{ key }}:</strong> {{ value }}
            </li>
          </ul>
        </div>
        <div v-else>
          No caught Pokemon found in local storage.
        </div>
      </b-modal>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'CaughtPokemonModal',
    setup() {
      const showModal = ref(false);
      const caughtPokemon = ref<Record<string, string>>({});
  
      onMounted(() => {
        console.log('Loading values from local storage...');
        const values: Record<string, string> = { ...localStorage };
        console.log('Loaded values from local storage:', values);
        delete values.__VUE_DEVTOOLS_UID__;
        caughtPokemon.value = Object.entries(values)
          .filter(([key]) => key === 'caughtPokemon')
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {} as Record<string, string>);
        console.log('Assigned values to caughtPokemon ref:', caughtPokemon.value);
      });
  
      return {
        showModal,
        caughtPokemon,
      };
    },
  };
  </script>