const express = require('express');
const { adaugareParticipant, getParticipantiDupaEveniment } = require('../controllers/participantController.js');
const router = express.Router();

router.post('/add', adaugareParticipant);
router.get('/:eveniment_id', getParticipantiDupaEveniment);

module.exports = router;
