const { Parser } = require('json2csv');
const ExcelJS = require('exceljs');
const Participant = require('../models/participant.js');

//exportul participantilor in format CSV
exports.exportCSV = async (req, res) => {
  const { evenimentId } = req.params; 
  try {
    const participanti = await Participant.findAll({ where: { eventId }, raw: true });
    const parser = new Parser();
    const csv = parser.parse(participanti);
    res.header('Content-Type', 'text/csv');
    res.attachment(`participanti_eveniment_${evenimentId}.csv`);
    res.send(csv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//exportul participantilor in format XLSX
exports.exportXLSX = async (req, res) => {
  const { evenimentId } = req.params; 
  try {
    const participanti = await Participant.findAll({ where: { evenimentId }, raw: true });

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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
