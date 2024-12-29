const Participant = require('../models/participant.js');

const adaugareParticipant = (req, res) => {
  const { eveniment_id, nume_particiant } = req.body;
  Participant.adaugareParticipant(eveniment_id, nume_particiant, (err) => {
    if (err) {
      res.status(500).json({ message: 'Eroare la adaugarea participantului.' });
    } else {
      res.status(200).json({ message: 'Participant adaugat cu succes.' });
    }
  });
};

const getParticipantiDupaEveniment = (req, res) => {
  const evenimentId = req.params.eveniment_id;
  Participant.getParticipantsByEvent(evenimentId, (err, participanti) => {
    if (err) {
      res.status(500).json({ message: 'Eoare la preluarea participantilor.' });
    } else {
      res.status(200).json(participanti);
    }
  });
};

module.exports = { adaugareParticipant, getParticipantiDupaEveniment };
