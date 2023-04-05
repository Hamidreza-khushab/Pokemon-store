<template>
  <b-container class="justify-content-center">
    <b-spinner v-if="isLoading" label="Loading..."></b-spinner>
    <b-row v-else>
      <b-col
        v-for="(pokemon) in pokemonList"
        :key="pokemon.name"
        sm="3"
      >
        <b-card
          :title="pokemon.name"
          class="text-center my-2"
          style="max-width: 250px"
        >
          <b-card-img
            :src="pokemon.sprites"
            :alt="pokemon.name"
            class="mx-auto"
          />
          <b-card-text>
            <div>Height: {{ pokemon.height }}</div>
            <div>Weight: {{ pokemon.weight }}</div>
            <div>Base experience: {{ pokemon.base_experience }}</div>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-alert v-if="errorMessage" variant="danger">{{ errorMessage }}</b-alert>
  </b-container>
</template>



<script setup lang="ts">
import {usePokemonList} from "./pokemon";

    const {
      isLoading,
      pokemonList,
      errorMessage,
    } = usePokemonList();

</script>

<style scoped>
img {
  width: 80px;
}
</style>

