const QRCode = require('qrcode');

//generarea unui QR code bazat pe un cod de acces
exports.generateQRCode = async (req, res) => {
  const { codAcces } = req.body; 
  try {
    const qrImagine = await QRCode.toDataURL(codAcces);
    res.status(200).json({ qrImagine });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
