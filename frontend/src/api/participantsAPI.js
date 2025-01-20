import axios from 'axios';

const API_URL = 'http://localhost:3001/api/participanti';

// Funcție pentru a adăuga un participant
export const addParticipant = async (evenimentId, numeParticipant, token) => {
  try {
    const response = await axios.post(
      `${API_URL}`,
      { eveniment_id: evenimentId, nume_participant: numeParticipant },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Funcție pentru a obține participanții la un eveniment
export const getParticipants = async (evenimentId, token) => {
  try {
    const response = await axios.get(`${API_URL}/${evenimentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
