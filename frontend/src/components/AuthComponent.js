import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { login } from '../api/authAPI';
import { useNavigate } from 'react-router-dom'; 

const AuthComponent = ({ setAuthToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      
      setAuthToken(response.token);

      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Autentificare eșuată.');
    }
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
        variant="h4"
        sx={{
          marginBottom: 6,
          fontWeight: 'bold',
          color: '#5a0080', 
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
          fontFamily: 'Lato, sans-serif',
        }}
      >
        AUTENTIFICARE
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
          label="username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          label="parolă"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          color="primary"
          onClick={handleLogin}
          sx={{
            padding: '8px 32px',
            fontSize: '1rem',
            textTransform: 'none',
            backgroundColor: '#5a0080', 
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            alignSelf: 'center',
            '&:hover': {
              backgroundColor: '#460066', 
            },
            marginTop: 2.5,
          }}
        >
          CONECTARE
        </Button>
      </Box>
      {error && (
        <Typography color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}
    </Container>
  );
};


export default AuthComponent;
