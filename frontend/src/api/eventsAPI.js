import axios from 'axios';

const API_URL = 'http://localhost:3001/api/evenimente';

export const getEvents = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
