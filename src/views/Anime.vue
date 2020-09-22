<template lang="pug">
  .anime-div
    .title-text
      p.error-msg(v-if="errorMsg !== ''") {{errorMsg}}
      h1 {{anime.title}}
      h2 {{anime.title_english}}
    .anime-body
      p {{anime.synopsis}}
      p(v-if="anime.score != 0")
        strong Score: {{anime.score}}/10
      img(:src="anime.image_url")
    .anime-footer
      button(v-on:click="addAnime()") Add anime

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      result: '',
      anime: '',
      id: '',
      animeResult: '',
      errorMsg: '',
    }
  },
  async created() {
    this.id = this.$route.params.id;
    this.result = await axios.get(`https://api.jikan.moe/v3/anime/${this.id}`)
    this.anime = this.result.data;
  },
  methods: {
    addAnime: async function() {
      try {
        this.animeResult = await axios.post('http://localhost:3000/anime', {
          title: this.anime.title,
          score: this.anime.score,
          image_url: this.anime.image_url,
          anime_id: this.anime.mal_id
        });
        if(this.animeResult.data.message) {
          this.errorMsg = this.animeResult.data.message;
          return
        }
        console.log(this.animeResult);
        this.$router.push('/profile');
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .anime-div {
    min-height: 100vh;

    .title-text {
      text-align: center;

      .error-msg {
        background-color: #b44b4b;
        width: 50%;
        padding: 10px 15px;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        font-size: 1.2rem;
        border-radius: 12px;
      }
    }

    .anime-body {
      p {
        width: 80%;
        margin: auto;
        margin-bottom: 10px;

        &:last-child {
          text-align: center;
        }
      }

      img {
        position: relative;
        left: 50%;
        transform: translate(-50%);
      }
    }

    .anime-footer {
      button {
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 30px;
        padding: 10px 15px;
        background-color: #ff5722;
        border: none;
        font-size: 1.2rem;
        border-radius: 12px;
        color: #222831;
        transition: 0.3s ease all;
        cursor: pointer;

        &:hover {
          background-color: #222831;
          color: #ff5722;
        }
      }
    }
  }
</style>