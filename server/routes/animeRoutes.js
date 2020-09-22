const express = require('express');
const Anime = require('../models/Anime');

const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const result = await Anime.find();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.post('/', async(req, res) => {
  try {
    const repeatedAnime = await Anime.findOne({anime_id: req.body.anime_id});
    if(repeatedAnime) return res.json({message: 'This anime is already added'});
    const anime = new Anime({
      title: req.body.title,
      score: req.body.score,
      image_url: req.body.image_url,
      anime_id: req.body.anime_id
    });
    const result = await anime.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', async(req, res) => {
  const id = req.params.id;
  const result = await Anime.findByIdAndDelete(id);
  res.send('Anime deleted');
});

module.exports = router;