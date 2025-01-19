import React, {useState} from "react";
import { TextField, Button, Container, Typography,DatePicker,TimePicker } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormEvent=()=>{
    const navigate=useNavigate();

    const handleAddEvent=()=>{
        //adaugare in lista de evenimente
    }

    return(
        <Container>
            <TextField label="denumire"
            variant="outlined"
            margin="normal"
            value={denumire}/>
            <TextField label="descriere"
            variant="outlined"
            margin="normal"
            value={descriere}/>
            <DatePicker label="dataInceput"
            value={selectedData}/>
            <TimePicker label="oraInceput"
            value={selectedTime}/>
            <DatePicker label="dataSfarsit"
            value={selectedData}/>
            <TimePicker label="oraSfarsit"
            value={selectedTime}/>
            <TextField label="cod"
            variant="outlined"
            margin="normal"
            value={cod}/>
            <Button variant="contained" onClick={handleAddEvent}>Add event</Button>
        </Container>
    );
}