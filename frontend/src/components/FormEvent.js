import React, { useState } from "react";
import { Container, TextField, Button } from '@mui/material'; 
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';

const FormEvent = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [denumire, setDenumire] = useState('');
  const [descriere, setDescriere] = useState('');
  const [dataInceput, setDataInceput] = useState(null);
  const [oraInceput, setOraInceput] = useState(null);
  const [dataSfarsit, setDataSfarsit] = useState(null);
  const [oraSfarsit, setOraSfarsit] = useState(null);
  const [cod, setCod] = useState(''); // <--- AICI

  const handleAddEvent = async () => {
    // Construiți string-urile data+ora
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
      cod  // <--- să trimiți efectiv codul aici
    };

    try {
      const response = await fetch('http://localhost:3001/api/evenimente/create', {
=======

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
>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });
<<<<<<< HEAD
      if (!response.ok) {
        throw new Error('Eroare la adăugarea evenimentului!');
      }
=======

      if (!response.ok) {
        throw new Error('Eroare la adăugarea evenimentului!');
      }

>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3
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
        
<<<<<<< HEAD
        {/* Input pentru cod */}
        <TextField
          label="Cod acces (ex: ABC123)"
=======
        <TextField
          label="Cod"
>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3
          variant="outlined"
          margin="normal"
          fullWidth
          value={cod}
          onChange={(e) => setCod(e.target.value)}
        />
<<<<<<< HEAD

        <Button variant="contained" onClick={handleAddEvent} sx={{ mt: 2 }}>
=======
        
        <Button
          variant="contained"
          onClick={handleAddEvent}
          sx={{ mt: 2 }}
        >
>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3
          Adaugă Eveniment
        </Button>
      </Container>
    </LocalizationProvider>
  );
};

export default FormEvent;
