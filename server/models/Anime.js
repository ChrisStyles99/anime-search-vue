const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  anime_id: {
    type: Number,
    required: true
  }
});

const Anime = mongoose.model('Anime', animeSchema);
module.exports = Anime;