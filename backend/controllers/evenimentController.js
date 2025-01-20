const Eveniment = require('../models/eveniment.js');
const db = require('../config/bazaDeDate.js');


// Crearea unui eveniment nou
const creareEveniment = (req, res) => {
  // Adaugă 'cod' aici:
  const { denumire, descriere, inceput, sfarsit, cod } = req.body;

  Eveniment.creareEveniment(denumire, descriere, inceput, sfarsit, cod, (err) => {
    if (err) {
      console.error('Eroare la crearea evenimentului:', err);
      res.status(500).json({ message: 'Eroare la crearea evenimentului.' });
    } else {
      res.status(200).json({ 
        message: 'Eveniment creat cu succes.',
        cod // îl poți returna dacă vrei să-l vezi în front-end
      });
    }
  });
};




// Preluarea tuturor evenimentelor
const getAllEvenimente = (req, res) => {
  const sql = 'SELECT id, denumire, descriere, inceput, sfarsit, cod, status FROM evenimente';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Eroare la preluarea evenimentelor:', err);
      res.status(500).json({ message: 'Eroare la preluarea evenimentelor.' });
    } else {
      res.status(200).json(rows);
    }
  });
};


// Schimbarea stării evenimentului pe baza timpului curent
const actualizareStatusEvenimente = (callback) => {
  const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format compatibil SQLite

  const sql = `
  UPDATE evenimente
  SET status = CASE
    WHEN datetime('now','localtime') < datetime(inceput) THEN 'CLOSED'
    WHEN datetime('now','localtime') >= datetime(inceput) AND datetime('now','localtime') < datetime(sfarsit) THEN 'OPEN'
    ELSE 'CLOSED'
  END
`;

  db.run(sql, function (err) {
    if (err) {
      console.error('Eroare la actualizarea stării evenimentelor:', err);
      if (callback) callback({ success: false, error: err.message });
    } else {
      console.log(`Starea evenimentelor a fost actualizată. Rânduri afectate: ${this.changes}`);
      if (callback) callback({
        success: true,
        message: `Starea evenimentelor a fost actualizată. Rânduri afectate: ${this.changes}`,
      });
    }
  });
};


module.exports = { creareEveniment, getAllEvenimente, actualizareStatusEvenimente };
