<template lang="pug">
  .card-grid
    .card-template(v-for="anime in animes" :key="anime.id")
      .card-header
        img(:src="anime.image_url")
      .card-text
        h1 {{anime.title | truncate(20, '...')}}
        p(v-if="anime.score != 0") Score: {{anime.score}}/10
      .card-footer
        router-link.btn-link(:to="'/anime/'+anime.mal_id" v-if="anime.mal_id") See anime
        button(v-on:click="deleteAnime(anime._id)" v-if="!anime.mal_id") Delete anime
</template>

<script>
import axios from 'axios';

export default {
  name: 'AnimeCard',
  props: ['animes'],
  methods: {
    deleteAnime: async function(id) {
      this.deletedAnime = await axios.delete(`http://localhost:3000/anime/${id}`);
    }
  },
}
</script>

<style lang="scss" scoped>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 20px;

    .card-template {
      display: grid;
      grid-template-rows: 1r 1fr 1fr;
      box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      
      
      transition: 0.5s ease all;

      &:hover {
        box-shadow: none;
      }

      .card-header {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
        }
      }

      .card-text {
        width: 100%;
        height: 100%;
        background-color: #ff5722;

        h1 {
          text-align: center;
        }

        p {
          text-align: center;
        }
      }

      .card-footer {
        width: 100%;
        height: 100%;
        background-color: #ff5722;
        border-radius: 0 0 12px 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        .btn-link {
          padding: 10px 15px;
          background-color: #222831;
          border-radius: 12px;
          color: #eee;
          text-decoration: none;
          font-size: 1.2rem;
          margin-bottom: 10px;
          cursor: pointer;
          transition: 0.3s ease all;

          &:hover {
            background-color: #393e46;
          }
        }

        button {
          padding: 10px 15px;
          background-color: #222831;
          border-radius: 12px;
          color: #eee;
          border: none;
          font-size: 1.2rem;
          margin-bottom: 10px;
          cursor: pointer;
          transition: 0.3s ease all;

          &:hover {
            background-color: #393e46;
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .card-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>