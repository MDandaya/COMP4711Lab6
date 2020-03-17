const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.post('/login', loginController.postLogin);

router.get('/logout', loginController.getLogout);

module.exports = router;
