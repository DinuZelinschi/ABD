import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material'; 
import { getEvents } from '../api/eventsAPI';
import EventDetails from './EventDetails';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [evenimente, setEvenimente] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchEvenimente = async () => {
      const data = await getEvents();
      setEvenimente(data);
    };

    fetchEvenimente();
  }, []);

  const handleAddEvent = () => {
    navigate('/add-event');
  };

  const handleScanQR = () => {
    navigate('/scan-qr'); 
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
    }}
  >
    <Typography
      variant="h2"
      sx={{
        marginTop: 8,
        marginBottom: 1,
        fontWeight: 'bold',
        color: '#5a0080', 
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
        fontFamily: 'Lato, sans-serif',
      }}
    >
      Dashboard
    </Typography>

    <Grid container spacing={2} style={{ marginTop: '20px', justifyContent: 'center' }}>
      <Grid item>
        <Button
          variant="contained"
          onClick={handleAddEvent}
          sx={{
            padding: '8px 32px',
            fontSize: '1rem',
            textTransform: 'none',
            backgroundColor: '#5a0080', 
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#460066', 
            },
          }}
        >
          Adaugă eveniment
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={handleScanQR}
          sx={{
            padding: '8px 32px',
            fontSize: '1rem',
            textTransform: 'none',
            backgroundColor: '#5a0080', 
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#460066', 
            },
          }}
        >
          Scanează cod QR
        </Button>
      </Grid>
    </Grid>

    <Grid container spacing={2} style={{ marginTop: '20px', justifyContent: 'center' }}>
      {evenimente.map((eveniment) => (
        <Grid item xs={12} sm={6} md={4} key={eveniment.id}>
          <div
            style={{
              backgroundColor: '#fff', 
              padding: '20px', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <EventDetails eveniment={eveniment} />
            <Typography variant="body2">Cod acces: {eveniment.cod}</Typography>
            <Typography variant="body2">
              Începe: {new Date(eveniment.inceput).toLocaleString()}
            </Typography>
            <Typography variant="body2">
              Se termină: {new Date(eveniment.sfarsit).toLocaleString()}
            </Typography>
            <Typography variant="body2">Status: {eveniment.status}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

};

export default Dashboard;
