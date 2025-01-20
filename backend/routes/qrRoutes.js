const express = require('express');
const { generateQRCode } = require('../controllers/qrController.js'); // Import corect

const router = express.Router();
router.post('/', generateQRCode); // Definește ruta pentru generarea QR

module.exports = router;
