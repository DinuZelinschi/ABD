import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { generateQRCode } from '../api/qrAPI'; // Importă funcția pentru generare QR code

const GenerateQRCodeButton = ({ token }) => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateQRCode = async () => {
    try {
      const data = 'Your data here'; // Poți schimba asta cu datele pe care vrei să le encodezi în QR
      const qrCode = await generateQRCode(data, token);
      setQrCodeData(qrCode); // Salvează codul QR generat
    } catch (err) {
      setError('Failed to generate QR code');
      console.error(err);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleGenerateQRCode}>
        Generate QR Code
      </Button>
      {qrCodeData && (
        <div>
          <Typography variant="body1">Generated QR Code:</Typography>
          <img src={`data:image/png;base64,${qrCodeData}`} alt="QR Code" />
        </div>
      )}
      {error && <Typography variant="body2" color="error">{error}</Typography>}
    </div>
  );
};

export default GenerateQRCodeButton;
