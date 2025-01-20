// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material'; 
import { getEvents } from '../api/eventsAPI';
import EventDetails from './EventDetails';
import { useNavigate } from 'react-router-dom';//import pt navigare

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

  const handleAddEvent=()=>{
    navigate('/add-event'); // Navighează către pagina de adăugare eveniment
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography> {/* Opțional: gutterBottom pentru un mic spațiu */}
      <Button variant='contained' onClick={handleAddEvent}>Add event</Button>
      <Grid container spacing={2}>
        {evenimente.map((eveniment) => (
          <Grid item xs={12} sm={6} md={4} key={eveniment.id}>
            <EventDetails eveniment={eveniment} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
