// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user.js');

// const logare = (req, res) => {
//   const { username, parola } = req.body;

//   User.getUserDupaUsername(username, (err, user) => {
//     if (err || !user) {
//       return res.status(400).json({ message: 'User negasit.' });
//     }

//     //compara parola introdusa cu parola criptata stocata
//     bcrypt.compare(parola, user.parola, (err, potrivit) => {
//       if (err || !potrivit) {
//         return res.status(400).json({ message: 'Parola invalida.' });
//       }

//       //daca parolele se potrivesc, se genereaza token-ul JWT
//       const token = jwt.sign({ id: user.id, role: user.rol }, 'secret', { expiresIn: '1h' });

//       res.status(200).json({ message: 'Logare realizata cu succes.', token });
//     });
//   });
// };

// module.exports = { logare };


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const logare = (req, res) => {
  const { username, parola } = req.body;

  User.getUserDupaUsername(username, (err, user) => {
    if (err || !user) {
      bcrypt.hash(parola, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: 'Eroare la criptarea parolei.' });
        }

        User.creareUser(username, hashedPassword, 'user', (err) => {
          if (err) {
            return res.status(500).json({ message: 'Eroare la crearea utilizatorului.' });
          }

          const token = jwt.sign({ id: username, role: 'user' }, 'secret', { expiresIn: '1h' });
          return res.status(200).json({ message: 'Contul a fost creat și logat cu succes!', token });
        });
      });
    } else {
      bcrypt.compare(parola, user.parola, (err, potrivit) => {
        if (err || !potrivit) {
          return res.status(400).json({ message: 'Parola invalida.' });
        }

        const token = jwt.sign({ id: user.id, role: user.rol }, 'secret', { expiresIn: '1h' });
        res.status(200).json({ message: 'Logare realizata cu succes.', token });
      });
    }
  });
};

module.exports = { logare };
