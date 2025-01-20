import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const EventDetails = ({ eveniment }) => {
  const [qrCodeData, setQrCodeData] = useState(null);

  if (!eveniment) {
    return (
      <Typography variant="h6" color="error">
        Eroare: Nu s-a găsit niciun eveniment.
      </Typography>
    );
  }

  const handleGenerateQRCode = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/qr', {
        codAcces: eveniment.cod,
      });
      setQrCodeData(response.data.qrImagine);
    } catch (err) {
      console.error('Eroare la generarea QR Code:', err);
    }
  };

  const handleExportCSV = async (evenimentId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/export/csv/${evenimentId}`,
        {
          responseType: 'blob', // primește fișierul
        }
      );
      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `participanti_eveniment_${evenimentId}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Eroare la exportul CSV:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">{eveniment.denumire}</Typography>
      <Typography variant="body2">{eveniment.descriere}</Typography>
      <Button variant="contained" onClick={handleGenerateQRCode}>
        Generare QR Code
      </Button>
      {qrCodeData && <img src={qrCodeData} alt="QR Code" />}
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleExportCSV(eveniment.id)}
        style={{ marginTop: '10px' }}
      >
        Exportă Participanți (CSV)
      </Button>
    </div>
  );
};

export default EventDetails;
