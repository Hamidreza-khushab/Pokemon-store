<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <form @submit.prevent="submitSearch">
          <div class="input-group mb-3">
            <input
              id="search-input"
              type="text"
              v-model.trim="searchTerm"
              class="form-control"
              placeholder="Search for a Pokemon"
              required
            />
            <button type="submit" class="btn btn-primary" :disabled="loading">
              <span
                v-if="loading"
                class="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>

    <b-modal v-model="showModal" title="Search Result" @hidden="closeModal">
      <template v-if="searchResult">
        <div class="card mx-auto" style="width: 12rem">
          <img
            class="card-img-top"
            :src="searchResult.sprites"
            :alt="searchResult.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ searchResult.name }}</h5>
            <p class="card-text">Height: {{ searchResult.height }}</p>
            <p class="card-text">Weight: {{ searchResult.weight }}</p>
            <p class="card-text">
              Base Experience: {{ searchResult.base_experience }}
            </p>
            <button
              class="btn btn-primary"
              @click="catchPokemon(searchResult)"
              :disabled="searchResult.isCaught"
            >
              {{ searchResult.isCaught ? "Caught" : "Catch" }}
            </button>
          </div>
        </div>
      </template>
      <template v-if="error">
        <p>{{ error }}</p>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from "./pokemon";

const {
  loading,
  searchTerm,
  searchResult,
  error,
  showModal,
  submitSearch,
  closeModal,
  catchPokemon,
} = useSearch();
</script>
