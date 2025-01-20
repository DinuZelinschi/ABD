const db = require('../config/bazaDeDate.js'); // Config baza de date

// Funcție pentru check-in participant
const checkInParticipant = (req, res) => {
  const { codAcces, nume_participant } = req.body;

  const sqlEveniment = 'SELECT * FROM evenimente WHERE cod = ? LIMIT 1';
  db.get(sqlEveniment, [codAcces], (err, eveniment) => {
    if (err) {
      console.error('Eroare la căutarea evenimentului:', err);
      return res.status(500).json({ message: 'Eroare internă la verificare eveniment.' });
    }
    if (!eveniment) {
      return res.status(404).json({ message: 'Codul de acces nu corespunde niciunui eveniment.' });
    }
    if (eveniment.status !== 'OPEN') {
      return res.status(400).json({ message: `Evenimentul nu este deschis. Status curent: ${eveniment.status}` });
    }

    const sqlInsert = `
      INSERT INTO participanti (eveniment_id, nume_participant)
      VALUES (?, ?)
    `;
    db.run(sqlInsert, [eveniment.id, nume_participant], function (err2) {
      if (err2) {
        console.error('Eroare la adăugarea participantului:', err2);
        return res.status(500).json({ message: 'Eroare la adăugarea participantului.' });
      }

      return res.status(200).json({
        message: `Participantul ${nume_participant} a fost înregistrat la evenimentul ${eveniment.denumire}.`,
      });
    });
  });
};

// getParticipantiDupaEveniment
const getParticipantiDupaEveniment = (req, res) => {
  const { eveniment_id } = req.params;
  const sql = 'SELECT * FROM participanti WHERE eveniment_id = ?';
  db.all(sql, [eveniment_id], (err, rows) => {
    if (err) {
      console.error('Eroare la preluarea participanților:', err);
      return res.status(500).json({ message: 'Eroare la preluarea participanților.' });
    }
    res.status(200).json(rows);
  });
};


const getListaParticipanti = (req, res) => {
  const { eveniment_id } = req.params;
  const sql = `
    SELECT nume_participant, created_at
    FROM participanti
    WHERE eveniment_id = ?
  `;

  db.all(sql, [eveniment_id], (err, rows) => {
    if (err) {
      console.error('Eroare la preluarea listei participanților:', err);
      return res.status(500).json({ message: 'Eroare la preluarea listei participanților.' });
    }
    res.status(200).json(rows);
  });
};


const alterTable = () => {
  const sql = `
    ALTER TABLE participanti
    ADD COLUMN created_at DATETIME NOT NULL DEFAULT (datetime('now','localtime'))
  `;


  db.run(sql, (err) => {
    if (err) {
      if (err.message.includes('duplicate column name')) {
        console.log('Coloana created_at există deja.');
      } else {
        console.error('Eroare la adăugarea coloanei created_at:', err.message);
      }
    } else {
      console.log('Coloana created_at a fost adăugată cu succes, cu default datetime local.');
    }
  });
};


// Apelează funcția alterTable când serverul pornește
alterTable();


module.exports = {
  checkInParticipant,
  getParticipantiDupaEveniment,
  getListaParticipanti,
};
