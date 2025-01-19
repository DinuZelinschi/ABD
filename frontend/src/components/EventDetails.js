// src/components/EventDetails.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const EventDetails = ({ eveniment }) => {
  const handleUpdateStatus = () => {
    // Logic for updating event status
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{eveniment.denumire}</Typography>
        <Typography variant="body2">{eveniment.descriere}</Typography>
        <Typography variant="body2">Start: {eveniment.inceput}</Typography>
        <Typography variant="body2">End: {eveniment.sfarsit}</Typography>
        <Button variant="contained" onClick={handleUpdateStatus}>
          Update Status
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventDetails;
