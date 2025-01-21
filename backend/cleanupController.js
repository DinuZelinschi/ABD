const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bd/database.sqlite'); 

const cleanUpData = () => {
  const sqlEvents = 'DELETE FROM evenimente WHERE id >= 2';
  const sqlParts = 'DELETE FROM participanti WHERE id >= 2';
  const sqlUsers = 'DELETE FROM users WHERE id >= 2';

  db.serialize(() => {
    db.run(sqlEvents, (err) => {
      if (err) {
        console.error('Eroare la ștergerea evenimentelor:', err);
        return;
      }
      console.log('Evenimentele au fost șterse.');
      
      db.run(sqlParts, (err2) => {
        if (err2) {
          console.error('Eroare la ștergerea participanților:', err2);
          return;
        }
        console.log('Participanții au fost șterși.');

        db.run(sqlUsers, (err3) => {
          if (err3) {
            console.error('Eroare la ștergerea userilor:', err3);
            return;
          }
          console.log('Userii au fost șterși.');
          console.log('Curățenie efectuată cu succes! Au rămas doar înregistrările cu id=1.');
        });
      });
    });
  });
};

if (require.main === module) {
  cleanUpData();
}
