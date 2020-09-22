<template lang="pug">
  .profile
    h1 My animes
    AnimeCard(:animes="animes")
</template>

<script> 
import axios from 'axios';
import AnimeCard from '../components/AnimeCard.vue'

export default {
  components: {
    AnimeCard
  },
  data() {
    return {
      result: '',
      animes: '',
      deletedAnime: ''
    }
  },
  async created() {
    this.result = await axios.get('http://localhost:3000/anime');
    this.animes = this.result.data;
  },
  async updated() {
    this.result = await axios.get('http://localhost:3000/anime');
    this.animes = this.result.data;
  },
}
</script>

<style lang="scss" scoped>
  .profile {
    min-height: 100vh;
    
    h1 {
      text-align: center;
    }
  }
</style>