import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { login } from '../api/authAPI';
import { useNavigate } from 'react-router-dom'; // Importă useNavigate

const AuthComponent = ({ setAuthToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Creează funcția de navigare

  const handleLogin = async () => {
    try {
      // Trimite cererea de login
      const response = await login(username, password);
      
      // Dacă loginul este reușit, setează token-ul
      setAuthToken(response.token);

      // Navighează către Dashboard după logare
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Autentificare</Typography>
      <TextField
        label="username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="parolă"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>Conectare</Button>
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default AuthComponent;
