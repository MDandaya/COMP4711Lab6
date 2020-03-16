const express = require('express');
const artistController = require('../controllers/artist');
const router = express.Router();

router.get('/artists', artistController.getAllArtist);

router.get('/artist/add', artistController.getAddArtist);

router.get('/artists/:search', artistController.getArtist);

router.post('/artists/add', artistController.postAddArtist)

router.post('/artists/delete', artistController.postDeleteArtist);

module.exports = router;
