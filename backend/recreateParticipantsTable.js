const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bd/database.sqlite'); 


const recreateParticipantsTable = () => {
    db.serialize(() => {
      db.run('DROP TABLE IF EXISTS participanti', (err) => {
        if (err) {
          console.error('Eroare la ștergerea tabelei `participanti`:', err.message);
        } else {
          console.log('Tabela `participanti` a fost ștearsă cu succes.');
        }
  
        db.run(`
          CREATE TABLE IF NOT EXISTS participanti (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            eveniment_id INTEGER NOT NULL,
            nume_participant TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT (datetime('now','localtime')),
            FOREIGN KEY (eveniment_id) REFERENCES evenimente(id)
          );
        `, (err2) => {
          if (err2) {
            console.error('Eroare la crearea tabelei `participanti`:', err2.message);
          } else {
            console.log('Tabela `participanti` a fost creată cu succes.');
          }
        });
      });
    });
  };
  
  recreateParticipantsTable();
  