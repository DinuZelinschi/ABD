const express = require('express');
const {
  checkInParticipant,
  getParticipantiDupaEveniment
} = require('../controllers/participantController.js');

const router = express.Router();

router.get('/:eveniment_id', getParticipantiDupaEveniment);

router.post('/checkin', checkInParticipant);

module.exports = router;
