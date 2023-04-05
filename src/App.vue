<template>
  <b-navbar variant="light" type="light">
    <b-container fluid>
      <b-navbar-brand href="#">Pokemon Store </b-navbar-brand>
      <BallPokemon/>
      <Searchpokomon />
    </b-container>
  </b-navbar>
  <ListPokemon />
</template>

<script setup lang="ts">
import ListPokemon from "./components/ListPokemon.vue";
import Searchpokomon from "./components/SearchPokemon.vue";
import BallPokemon from "./components/BallPokemon.vue"
</script>
