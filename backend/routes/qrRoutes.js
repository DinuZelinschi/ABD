const express = require('express');
const { generateQRCode } = require('../controllers/qrController.js'); 

const router = express.Router();
router.post('/', generateQRCode); 

module.exports = router;
