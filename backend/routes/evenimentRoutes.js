const express = require('express');
const { creareEveniment, getAllEvenimente, actualizareStatusEvenimente } = require('../controllers/evenimentController.js');
const router = express.Router();

router.post('/create', creareEveniment);
router.get('/', getAllEvenimente);
router.put('/update-status', actualizareStatusEvenimente); // Rută pentru actualizare status

module.exports = router;
