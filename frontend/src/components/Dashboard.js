import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material'; 
import { getEvents } from '../api/eventsAPI';
import EventDetails from './EventDetails';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'; // Import pentru navigare
=======
import { useNavigate } from 'react-router-dom';//import pt navigare
>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3

const Dashboard = () => {
  const [evenimente, setEvenimente] = useState([]);
  const navigate = useNavigate(); // Hook-ul pentru navigare

  useEffect(() => {
    const fetchEvenimente = async () => {
      const data = await getEvents();
      setEvenimente(data);
    };

    fetchEvenimente();
  }, []);

<<<<<<< HEAD
  const handleAddEvent = () => {
    navigate('/add-event'); // Navighează către pagina de adăugare eveniment
  };

  const handleScanQR = () => {
    navigate('/scan-qr'); // Navighează către pagina Scan QR
  };
=======
  const handleAddEvent=()=>{
    navigate('/add-event'); // Navighează către pagina de adăugare eveniment
  }
>>>>>>> 526c1d07f0cd91fb53d1c31af4db4de1b64d6df3

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Button variant="contained" onClick={handleAddEvent} style={{ marginRight: '10px' }}>
        Add Event
      </Button>
      <Button variant="contained" onClick={handleScanQR}>
        Scan QR
      </Button>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {evenimente.map((eveniment) => (
          <Grid item xs={12} sm={6} md={4} key={eveniment.id}>
            <EventDetails eveniment={eveniment} />
            <Typography variant="body2">Cod acces: {eveniment.cod}</Typography>
            <Typography variant="body2">
              Începe: {new Date(eveniment.inceput).toLocaleString()}
            </Typography>
            <Typography variant="body2">
              Se termină: {new Date(eveniment.sfarsit).toLocaleString()}
            </Typography>
            <Typography variant="body2">Status: {eveniment.status}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
