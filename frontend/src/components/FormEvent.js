import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography } from '@mui/material'; 
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
  const [cod, setCod] = useState(''); // <--- AICI

  const handleAddEvent = async () => {
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
          variant="h3"
          sx={{
            marginBottom: 6,
            fontWeight: 'bold',
            color: '#5a0080', 
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)', 
            fontFamily: 'Lato, sans-serif',
            marginTop: 20,
            '&:hover': {
              color: '#5a0080',
            },
          }}
        >
          Adăugare eveniment
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
            label="denumire"
            variant="outlined"
            fullWidth
            value={denumire}
            onChange={(e) => setDenumire(e.target.value)}
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
            label="descriere"
            variant="outlined"
            fullWidth
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
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
  
          <DatePicker
            label="data început"
            value={dataInceput}
            onChange={(newValue) => setDataInceput(newValue)}
            sx={{
              marginTop: 2,
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              '& .MuiOutlinedInput-root': {
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
  
          <TimePicker
            label="ora început"
            value={oraInceput}
            onChange={(newValue) => setOraInceput(newValue)}
            sx={{
              marginTop: 2,
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              '& .MuiOutlinedInput-root': {
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
  
          <DatePicker
            label="data sfârșit"
            value={dataSfarsit}
            onChange={(newValue) => setDataSfarsit(newValue)}
            sx={{
              marginTop: 2,
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              '& .MuiOutlinedInput-root': {
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
  
          <TimePicker
            label="ora sfârșit"
            value={oraSfarsit}
            onChange={(newValue) => setOraSfarsit(newValue)}
            sx={{
              marginTop: 2,
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              '& .MuiOutlinedInput-root': {
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
            label="cod acces (ex: ABC123)"
            variant="outlined"
            fullWidth
            value={cod}
            onChange={(e) => setCod(e.target.value)}
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
            onClick={handleAddEvent}
            sx={{
              mt: 3,
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
            }}
          >
            Adaugă
          </Button>
        </Box>
      </Container>
    </LocalizationProvider>
  );
  
};

export default FormEvent;
