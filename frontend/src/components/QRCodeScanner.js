import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
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
      const response = await axios.post('http://192.168.31.149:3001/api/participanti/checkin', {
        codAcces,
        nume_participant: numeParticipant,
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Eroare la check-in.');
    }
  };

  return (
    <div>
      <Typography variant="h5">Scanează Codul QR sau Introdu Manual Codul</Typography>

      {isCameraSupported ? (
        <QrScanner delay={300} onError={handleError} onScan={handleScan} style={{ width: '300px' }} />
      ) : (
        <Typography color="error">
          Camera nu este suportată pe acest browser. Te rugăm să introduci codul manual.
        </Typography>
      )}

      <Typography variant="body2">Cod detectat: {scanResult}</Typography>

      <TextField
        label="Cod Manual"
        value={manualCod}
        onChange={(e) => setManualCod(e.target.value)}
        fullWidth
        style={{ margin: '10px 0' }}
      />
      <TextField
        label="Nume Participant"
        value={numeParticipant}
        onChange={(e) => setNumeParticipant(e.target.value)}
        fullWidth
        style={{ margin: '10px 0' }}
      />

      <Button variant="contained" onClick={() => handleCheckIn(scanResult || manualCod)}>
        Confirmă Prezența
      </Button>

      {message && <Typography color="primary">{message}</Typography>}
    </div>
  );
};

export default QRCodeScannerComponent;
