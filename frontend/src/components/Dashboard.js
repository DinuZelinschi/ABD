import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material'; 
import { getEvents } from '../api/eventsAPI';
import EventDetails from './EventDetails';
import { useNavigate } from 'react-router-dom'; // Import pentru navigare

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

  const handleAddEvent = () => {
    navigate('/add-event'); // Navighează către pagina de adăugare eveniment
  };

  const handleScanQR = () => {
    navigate('/scan-qr'); // Navighează către pagina Scan QR
  };

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
