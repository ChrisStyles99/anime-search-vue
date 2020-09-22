const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const animeRoutes = require('./routes/animeRoutes');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// DB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  app.listen(port);
  console.log(`Server on port ${port}`);
  console.log('Connected to DB');
})
  .catch(err => console.log(err));

// Routes 
app.use('/anime', animeRoutes);
