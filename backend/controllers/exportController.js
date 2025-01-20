const { Parser } = require('json2csv');
const ExcelJS = require('exceljs');
const Participant = require('../models/participant.js');
const db = require('../config/bazaDeDate.js'); 

//exportul participantilor in format CSV
exports.exportCSV = async (req, res) => {
  const evenimentId = req.params.eveniment_id;
  try {
    db.all(
      'SELECT id, eveniment_id, nume_participant, created_at FROM participanti WHERE eveniment_id = ?',
      [evenimentId],
      (err, participanti) => {
        if (err) {
          return res.status(500).json({ message: 'Eroare la interogarea bazei de date.' });
        }
        if (participanti.length === 0) {
          return res.status(404).json({ message: 'Nu există participanți pentru acest eveniment.' });
        }
        const parser = new Parser();
        const csv = parser.parse(participanti);
        res.header('Content-Type', 'text/csv');
        res.attachment(`participanti_eveniment_${evenimentId}.csv`);
        res.send(csv);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//exportul participantilor in format XLSX
exports.exportXLSX = async (req, res) => {
  const evenimentId = req.params.eveniment_id;
  try {
    db.all(
      'SELECT * FROM participanti WHERE eveniment_id = ?',
      [evenimentId],
      async (err, participanti) => {
        if (err) {
          return res.status(500).json({ message: 'Eroare la interogarea bazei de date.' });
        }
        if (participanti.length === 0) {
          return res.status(404).json({ message: 'Nu există participanți pentru acest eveniment.' });
        }

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Participanti');
        worksheet.columns = [
          { header: 'ID', key: 'id', width: 10 },
          { header: 'Eveniment ID', key: 'eveniment_id', width: 10 },
          { header: 'Name', key: 'nume_participant', width: 25 }
        ];
        worksheet.addRows(participanti);

        res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.attachment(`participanti_eveniment_${evenimentId}.xlsx`);
        await workbook.xlsx.write(res);
        res.end();
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
