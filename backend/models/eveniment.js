const db = require('../config/bazaDeDate.js');

const creareEveniment = (denumire, descriere, inceput, sfarsit, cod, status, callback) => {
  const sql = 'INSERT INTO evenimente (denumire, descriere, inceput, sfarsit, cod, status) VALUES (?, ?, ?, ?, ?, ?)';
  db.run(sql, [denumire, descriere, inceput, sfarsit, cod, status], callback);
};

const getAllEvenimente = (callback) => {
  const sql = 'SELECT * FROM evenimente';
  db.all(sql, callback);
};

module.exports = { creareEveniment, getAllEvenimente };
