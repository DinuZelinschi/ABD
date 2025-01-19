// src/components/EventDetails.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const EventDetails = ({ eveniment }) => {
  const handleGenerareQR =async () => {
    // Logic for updating event status
  };

  const handleSaveCSV=()=>{
    //logica pt salvare csv
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{eveniment.denumire}</Typography>
        <Typography variant="body2">{eveniment.descriere}</Typography>
        <Typography variant="body2">Start: {eveniment.inceput}</Typography>
        <Typography variant="body2">End: {eveniment.sfarsit}</Typography>
        <Typography variant='body2'>{eveniment.status}</Typography>
        <Button variant="contained" onClick={handleGenerareQR}>
          QR code
        </Button>
        <span style={{marginRight:'5px'}}></span>
        <Button variant="contained" onClick={handleSaveCSV}>Save CSV</Button>
      </CardContent>
    </Card>
  );
};

export default EventDetails;
