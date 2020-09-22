<template lang="pug">
  .search-div
    .button
      input(type="text" placeholder="Anime name" v-model="searchWord")
      button(v-on:click="searchAnime()") Search
      p(v-if="err") Sorry, we had a problem
    .grid-animes
      AnimeCard(:animes="animes")
</template>

<script>
import axios from 'axios'
import AnimeCard from '../components/AnimeCard.vue'

export default {
  components: {
    AnimeCard
  },
  data() {
    return {
      err: false,
      searchWord: '',
      result: '',
      animes: []
    }
  },
  methods: {
    searchAnime: async function() {
      try {
        this.result = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.searchWord}`);
        this.animes = this.result.data.results;
      } catch (error) {
        console.log(error);
        this.err = true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .search-div {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 80px 1fr;

    .button {
      margin: auto;
      display: flex;
      align-items: center;

      input {
        padding: 15px 10px;
        font-size: 1.2rem;
        border: 1px solid #ff5722;
        border-right: none;
        background: none;
        border-radius: 12px 0 0 12px;
      }

      button {
        padding: 15px;
        border: 1px solid #ff5722;
        color: #ff5722;
        background: none;
        cursor: pointer;
        font-size: 1.2rem;
        transition: 0.3s ease all;
        border-radius: 0 12px 12px 0;

        &:hover {
          background-color: #ff5722;
          color: #fff;
        }
      }
    }
  }
</style>