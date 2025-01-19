const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/bazaDeDate.js');
const autentificareRoutes = require('./routes/autentificareRoutes.js');
const evenimentRoutes = require('./routes/evenimentRoutes.js');
const participantRoutes = require('./routes/participantRoutes.js');
const qrRoutes = require('./routes/qrRoutes.js');
const exportRoutes = require('./routes/exportRoutes.js');
const app = express();
const cron = require('node-cron');
const { actualizareStatusEvenimente } = require('./controllers/evenimentController');

const PORT = process.env.PORT || 3001; 

// Rulează actualizarea statusului evenimentelor la fiecare minut
cron.schedule('* * * * *', () => {
  console.log('Se rulează actualizarea stării evenimentelor...');
  actualizareStatusEvenimente((result) => {
    if (result.success) {
      console.log(result.message);
    } else {
      console.error('Eroare în cron job:', result.error);
    }
  });
});

app.use(cors());

app.use(bodyParser.json()); 

app.use(express.json());
app.use('/api/autentificare', autentificareRoutes);
app.use('/api/evenimente', evenimentRoutes);
app.use('/api/participanti', participantRoutes);
app.use('/api/qr', qrRoutes);
app.use('/api/export', exportRoutes);

app.get('/', (req, res) => {
  res.send('Bine ai venit pe serverul nostru!');
});

//pornirea serverului
app.listen(PORT, () => {
  console.log(`Serverul ruleaza pe portul http://127.0.0.1:${PORT}`);
});
