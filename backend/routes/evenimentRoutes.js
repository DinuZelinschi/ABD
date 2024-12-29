const express = require('express');
const { creareEveniment, getAllEvenimente } = require('../controllers/evenimentController.js');
const router = express.Router();

// Rută pentru a crea un eveniment
router.post('/create', creareEveniment);

// Rută pentru a prelua toate evenimentele
router.get('/', getAllEvenimente);

module.exports = router;
