const express = require('express');
const { logare } = require('../controllers/autentificareController.js');
// const db = require('../config/bazaDeDate.js'); 
const router = express.Router();

router.post('/login', logare);
// router.post('/adauga-utilizator', async (req, res) => {
//     const { username, parola, rol } = req.body;

//     const sql = 'INSERT INTO users (username, parola, rol) VALUES (?, ?, ?)';
//     db.run(sql, [username, parola, rol], (err) => {
//       if (err) {
//         console.error('Eroare la adăugarea utilizatorului:', err);
//         return res.status(500).json({ message: 'Eroare la inserarea utilizatorului.' });
//       }
//       res.status(200).json({ message: 'Utilizator adăugat cu succes.' });
//     });
// });

module.exports = router;
