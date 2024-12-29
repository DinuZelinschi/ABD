const Eveniment = require('../models/eveniment.js');

const creareEveniment = (req, res) => {
  const { denumire, descriere, inceput, sfarsit, cod, status } = req.body;
  Eveniment.creareEveniment(denumire, descriere, inceput, sfarsit, cod, status, (err) => {
    if (err) {
      res.status(500).json({ message: 'Eroare la crearea evenimentului.' });
    } else {
      res.status(200).json({ message: 'Eveniment creat cu succes.' });
    }
  });
};

const getAllEvenimente = (req, res) => {
  Event.getAllEvenimente((err, evenimente) => {
    if (err) {
      res.status(500).json({ message: 'Eroare la preluarea evenimentelor.' });
    } else {
      res.status(200).json(evenimente);
    }
  });
};

module.exports = { creareEveniment, getAllEvenimente };
