const express = require('express');
const { adaugareParticipant, getParticipantiDupaEveniment, getAllParticipanti} = require('../controllers/participantController.js');
const router = express.Router();

router.post('/add', adaugareParticipant);
router.get('/:eveniment_id', getParticipantiDupaEveniment);
router.get('/', getAllParticipanti);


module.exports = router; 
