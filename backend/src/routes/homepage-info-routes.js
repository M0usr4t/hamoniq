const express = require('express');
const router = express.Router();
const getHomepageInfo = require('../controllers/homepage-info-controller');
const getSpotifyGenres = require('../middleware/get-spotify-genres');

router.get('/homepage-info', getSpotifyGenres, getHomepageInfo);

module.exports = router;