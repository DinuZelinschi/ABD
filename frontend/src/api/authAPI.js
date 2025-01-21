import axios from 'axios';

const API_URL = 'http://localhost:3001/api/autentificare';

export const login = async (username, parola) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, parola });
    return response.data; 
  } catch (error) {
    throw error.response.data; 
  }
};
