import axios from 'axios';

const API_URL = 'http://127.0.0.1:3001/api/evenimente';

// Funcție pentru obținerea evenimentelor
export const getEvents = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // Token-ul JWT pentru autentificare
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
