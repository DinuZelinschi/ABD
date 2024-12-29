const express = require('express');
const { creareEveniment, getAllEvenimente } = require('../controllers/evenimentController.js');
const router = express.Router();

router.post('/create', creareEveniment);
router.get('/', getAllEvenimente);

module.exports = router;
