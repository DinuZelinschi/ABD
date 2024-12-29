const express = require('express');
const { exportCSV, exportXLSX } = require('../controllers/exportController.js');
const router = express.Router();

router.get('/csv/:eveniment_id', exportCSV); 
router.get('/xlsx/:eveniment_id', exportXLSX); 

module.exports = router;
