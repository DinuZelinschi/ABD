const express = require('express');
const { logare } = require('../controllers/autentificareController.js');
const router = express.Router();

router.post('/login', logare);

module.exports = router;
