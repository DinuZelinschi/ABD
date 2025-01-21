import axios from 'axios';

const API_URL = 'http://localhost:3001/api/participanti';

// adaugarea unui participant
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

// functie pentru a obtine participantii la un eveniment
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
