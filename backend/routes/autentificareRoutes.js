const express = require('express');
const { logare } = require('../controllers/autentificareController.js');
const { creareUser } = require('../models/user.js'); 
const router = express.Router();

router.post('/login', logare);

router.post('/adauga-utilizator', (req, res) => {
    const { username, parola, rol } = req.body;

    creareUser(username, parola, rol, (err) => {
        if (err) {
            console.error('Eroare la adăugarea utilizatorului:', err);
            res.status(500).json({ message: 'Eroare la adăugarea utilizatorului.' });
        } else {
            res.status(200).json({ message: 'Utilizator adăugat cu succes!' });
        }
    });
});

module.exports = router;
