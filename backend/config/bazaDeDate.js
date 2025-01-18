const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.join(__dirname, '../bd/database.sqlite'));

//crearea tabelelor
const createTables = () => {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        parola TEXT NOT NULL,
        rol TEXT NOT NULL
      );
    `, (err) => {
      if (err) {
        console.error("Eroare la crearea tabelei 'users':", err);
      } else {
        console.log("Tabela 'users' a fost creata sau exista deja.");
      }
    });

    db.run(`
      CREATE TABLE IF NOT EXISTS evenimente (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        denumire TEXT NOT NULL,
        descriere TEXT NOT NULL,
        inceput TEXT NOT NULL,
        sfarsit TEXT NOT NULL,
        cod TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'CLOSED'
      );
    `, (err) => {
      if (err) {
        console.error("Eroare la crearea tabelei 'evenimente':", err);
      } else {
        console.log("Tabela 'evenimente' a fost creata sau exista deja.");
      }
    });

    db.run(`
      CREATE TABLE IF NOT EXISTS participanti (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        eveniment_id INTEGER NOT NULL,
        nume_participant TEXT NOT NULL,
        FOREIGN KEY (eveniment_id) REFERENCES evenimente(id)
      );
    `, (err) => {
      if (err) {
        console.error("Eroare la crearea tabelei 'participants':", err);
      } else {
        console.log("Tabela 'participanti' a fost creata sau exista deja.");
      }
    });
  });
};

createTables();

module.exports = db;
