const db = require('../config/bazaDeDate.js');

const adaugareParticipant = (eveniment_id, nume_participant, callback) => {
  const sql = 'INSERT INTO participanti (eveniment_id, nume_participant) VALUES (?, ?)';
  db.run(sql, [eveniment_id, nume_participant], callback);
};

const getParticipantiDupaEveniment = (eveniment_id, callback) => {
  const sql = 'SELECT * FROM participanti WHERE eveniment_id = ?';
  db.all(sql, [eveniment_id], callback);
};

module.exports = { adaugareParticipant, getParticipantiDupaEveniment };
