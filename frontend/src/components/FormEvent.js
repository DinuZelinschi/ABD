import React, { useState } from "react";
import { Container, TextField, Button } from '@mui/material'; 
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';

const FormEvent = () => {
  const navigate = useNavigate();

  const [denumire, setDenumire] = useState('');
  const [descriere, setDescriere] = useState('');
  const [dataInceput, setDataInceput] = useState(null);
  const [oraInceput, setOraInceput] = useState(null);
  const [dataSfarsit, setDataSfarsit] = useState(null);
  const [oraSfarsit, setOraSfarsit] = useState(null);
  const [cod, setCod] = useState('');

  const handleAddEvent = async () => {
    try {
      // Construiți string-urile dataInceput + oraInceput sub formă YYYY-MM-DDTHH:MM:SS etc.
      const inceputFinal = dataInceput && oraInceput
        ? `${dataInceput.format('YYYY-MM-DD')}T${oraInceput.format('HH:mm:ss')}`
        : '';
      const sfarsitFinal = dataSfarsit && oraSfarsit
        ? `${dataSfarsit.format('YYYY-MM-DD')}T${oraSfarsit.format('HH:mm:ss')}`
        : '';

      const eventData = {
        denumire,
        descriere,
        inceput: inceputFinal,
        sfarsit: sfarsitFinal,
        cod,
      };

      const response = await fetch('http://127.0.0.1:3001/api/evenimente/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Eroare la adăugarea evenimentului!');
      }

      alert('Eveniment adăugat cu succes!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
      alert('Eroare la adăugarea evenimentului!');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <TextField
          label="Denumire"
          variant="outlined"
          margin="normal"
          fullWidth
          value={denumire}
          onChange={(e) => setDenumire(e.target.value)}
        />
        <TextField
          label="Descriere"
          variant="outlined"
          margin="normal"
          fullWidth
          value={descriere}
          onChange={(e) => setDescriere(e.target.value)}
        />
        
        <DatePicker
          label="Data Început"
          value={dataInceput}
          onChange={(newValue) => setDataInceput(newValue)}
        />
        <TimePicker
          label="Ora Început"
          value={oraInceput}
          onChange={(newValue) => setOraInceput(newValue)}
        />

        <DatePicker
          label="Data Sfârșit"
          value={dataSfarsit}
          onChange={(newValue) => setDataSfarsit(newValue)}
        />
        <TimePicker
          label="Ora Sfârșit"
          value={oraSfarsit}
          onChange={(newValue) => setOraSfarsit(newValue)}
        />
        
        <TextField
          label="Cod"
          variant="outlined"
          margin="normal"
          fullWidth
          value={cod}
          onChange={(e) => setCod(e.target.value)}
        />
        
        <Button
          variant="contained"
          onClick={handleAddEvent}
          sx={{ mt: 2 }}
        >
          Adaugă Eveniment
        </Button>
      </Container>
    </LocalizationProvider>
  );
};

export default FormEvent;
