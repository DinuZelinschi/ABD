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
          responseType: 'blob', // primeste fisierul
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
  
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '10px', 
          marginTop: '10px', 
          marginBottom: '10px'

        }}
      >
        <Button
          variant="contained"
          onClick={handleGenerateQRCode}
          sx={{
            padding: '6px 24px',
            fontSize: '0.9rem',
            textTransform: 'none',
            backgroundColor: '#5a0080',
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#460066',
            },
          }}
        >
          Generare QR
        </Button>
  
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleExportCSV(eveniment.id)}
          sx={{
            padding: '6px 24px',
            fontSize: '0.9rem',
            textTransform: 'none',
            backgroundColor: '#5a0080',
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#460066',
            },
          }}
        >
          Participanți
        </Button>
      </div>
  
      {qrCodeData && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <img
            src={qrCodeData}
            alt="QR Code"
            style={{ maxWidth: '100%', width: '150px', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
  
  
};

export default EventDetails;
