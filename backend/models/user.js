const bcrypt = require('bcryptjs');
const db = require('../config/bazaDeDate.js');

//crearea unui utilizator cu parola criptata
const creareUser = (username, parola, rol, callback) => {
  bcrypt.hash(parola, 10, (err, parolaCriptata) => {
    if (err) {
      return callback(err);
    }

    const sql = 'INSERT INTO users (username, parola, rol) VALUES (?, ?, ?)';
    db.run(sql, [username, parolaCriptata, rol], callback);
  });
};

const getUserDupaUsername = (username, callback) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.get(sql, [username], callback);
};

module.exports = { creareUser, getUserDupaUsername };
