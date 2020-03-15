const express = require('express');
const artistController = require('../controllers/artist');
const router = express.Router();

router.get('/artists', artistController.getAllArtist);

router.get('/artist/add', artistController.getAddArtist);

router.get('/artist/:search', artistController.getArtist);

router.post('/artists/add', artistController.postAddArtist)

module.exports = router;
