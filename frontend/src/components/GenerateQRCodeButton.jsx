// src/components/GenerateQRCodeButton.js
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { generateQRCode } from '../api/qrAPI';

const GenerateQRCodeButton = ({ token, codAcces }) => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateQRCode = async () => {
    try {
      const response = await generateQRCode(codAcces, token); 
      setQrCodeData(response.qrImagine); // e base64
    } catch (err) {
      setError('Eroare la generarea codului QR.');
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleGenerateQRCode}>
        Generare QR Code
      </Button>

      {qrCodeData && (
        <div>
          <Typography variant="body1">Cod QR generat:</Typography>
          <img src={qrCodeData} alt="QR Code" />
        </div>
      )}

      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
};

export default GenerateQRCodeButton;
