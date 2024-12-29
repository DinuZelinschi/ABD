const Eveniment = require('../models/eveniment.js');

// Funcția pentru a crea un eveniment
const creareEveniment = (req, res) => {
  const { denumire, descriere, inceput, sfarsit, cod, status } = req.body;

  Eveniment.creareEveniment(denumire, descriere, inceput, sfarsit, cod, status, (err) => {
    if (err) {
      console.error('Eroare la crearea evenimentului:', err);
      res.status(500).json({ message: 'Eroare la crearea evenimentului.' });
    } else {
      res.status(200).json({ message: 'Eveniment creat cu succes.' });
    }
  });
};

// Funcția pentru a prelua toate evenimentele
const getAllEvenimente = (req, res) => {
  Eveniment.getAllEvenimente((err, evenimente) => {
    if (err) {
      console.error('Eroare la preluarea evenimentelor:', err);
      res.status(500).json({ message: 'Eroare la preluarea evenimentelor.' });
    } else {
      res.status(200).json(evenimente);
    }
  });
};

module.exports = { creareEveniment, getAllEvenimente };
