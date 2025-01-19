// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material'; 
import { getEvents } from '../api/eventsAPI';
import EventDetails from './EventDetails';

const Dashboard = () => {
  const [evenimente, setEvenimente] = useState([]);

  useEffect(() => {
    const fetchEvenimente = async () => {
      const data = await getEvents();
      setEvenimente(data);
    };

    fetchEvenimente();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography> {/* Opțional: gutterBottom pentru un mic spațiu */}
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
