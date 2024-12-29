const Participant = require('../models/participant.js');
const db = require('../config/bazaDeDate.js');

const getAllParticipanti = (req, res) => {
  const sql = 'SELECT * FROM participanti';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Eroare la preluarea participanților:', err);
      res.status(500).json({ message: 'Eroare la preluarea participanților.' });
    } else {
      res.status(200).json(rows);
    }
  });
};


const adaugareParticipant = (req, res) => {
  const { eveniment_id, nume_participant } = req.body;
  Participant.adaugareParticipant(eveniment_id, nume_participant, (err) => {
    if (err) {
      res.status(500).json({ message: 'Eroare la adaugarea participantului.' });
    } else {
      res.status(200).json({ message: 'Participant adaugat cu succes.' });
    }
  });
};

const getParticipantiDupaEveniment = (req, res) => {
  const evenimentId = req.params.eveniment_id;
  Participant.getParticipantiDupaEveniment(evenimentId, (err, participanti) => {
    if (err) {
      console.error("Eroare la preluarea participanților:", err);
      res.status(500).json({ message: 'Eroare la preluarea participanților.' });
    } else {
      res.status(200).json(participanti);
    }
  });
};

module.exports = { adaugareParticipant, getParticipantiDupaEveniment, getAllParticipanti };
