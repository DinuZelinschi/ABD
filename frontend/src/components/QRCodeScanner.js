import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import QrScanner from 'react-qr-scanner'; // npm install react-qr-scanner
import axios from 'axios';

const QRCodeScannerComponent = () => {
  const [scanResult, setScanResult] = useState('');
  const [manualCod, setManualCod] = useState('');
  const [numeParticipant, setNumeParticipant] = useState('');
  const [message, setMessage] = useState('');
  const [isCameraSupported] = useState(
    !!navigator.mediaDevices?.getUserMedia
  );

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error('Eroare la scanare QR:', err);
  };

  const handleCheckIn = async (codAcces) => {
    try {
      const response = await axios.post('http://localhost:3001/api/participanti/checkin', {
        codAcces,
        nume_participant: numeParticipant,
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Eroare la check-in.');
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '0 20px', 
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: 6,
          fontWeight: 'bold',
          color: '#5a0080',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
          fontFamily: 'Lato, sans-serif',
          marginTop: 8,
        }}
      >
        Scanează codul QR și introdu codul
      </Typography>
  
      {isCameraSupported ? (
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '300px', 
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', }}
        />
      ) : (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          Camera nu este suportată pe acest browser. Te rugăm să introduci codul manual.
        </Typography>
      )}
  
      <Typography variant="body2" sx={{ marginBottom: 6, marginTop: 1 }}>
        Cod detectat: {scanResult}
      </Typography>
  
      <Box
        component="form"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="cod"
          value={manualCod}
          onChange={(e) => setManualCod(e.target.value)}
          fullWidth
          sx={{
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              '&:hover fieldset': {
                borderColor: '#5a0080',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#5a0080',
              },
            },
            '& .MuiInputLabel-root': {
              '&.Mui-focused': {
                color: '#5a0080',
              },
            },
          }}
        />
        
        <TextField
          label="nume participant"
          value={numeParticipant}
          onChange={(e) => setNumeParticipant(e.target.value)}
          fullWidth
          sx={{
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              '&:hover fieldset': {
                borderColor: '#5a0080',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#5a0080',
              },
            },
            '& .MuiInputLabel-root': {
              '&.Mui-focused': {
                color: '#5a0080',
              },
            },
          }}
        />
        
        <Button
          variant="contained"
          onClick={() => handleCheckIn(scanResult || manualCod)}
          sx={{
            padding: '8px 32px',
            fontSize: '1rem',
            marginBottom: '30px',
            textTransform: 'none',
            backgroundColor: '#5a0080',
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#460066',
            },
            alignSelf: 'center',
            marginTop: 3,
          }}
        >
          Confirmă prezența
        </Button>
      </Box>
  
      {message && (
        <Typography color="primary" sx={{ marginTop: 2 }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default QRCodeScannerComponent;
