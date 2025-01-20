// src/api/authAPI.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/autentificare';

// Funcție pentru login și creare cont
export const login = async (username, parola) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, parola });
    return response.data; // Returnează atât token-ul cât și mesajul de succes
  } catch (error) {
    throw error.response.data; // Returnează mesajul de eroare
  }
};
