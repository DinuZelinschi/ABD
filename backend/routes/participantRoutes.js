// routes/participantRoutes.js
const express = require('express');
const {
  checkInParticipant,
  getParticipantiDupaEveniment
} = require('../controllers/participantController.js');

const router = express.Router();

// Ruta pentru listarea participanților
router.get('/:eveniment_id', getParticipantiDupaEveniment);

// Ruta pentru check-in
router.post('/checkin', checkInParticipant);

module.exports = router;
