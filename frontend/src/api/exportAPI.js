import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; 

export const exportCSV = async (evenimentId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/csv/${evenimentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', 
      }
    );

    const link = document.createElement('a');
    link.href = URL.createObjectURL(response.data);
    link.download = `participanti_eveniment_${evenimentId}.csv`;
    link.click();
  } catch (error) {
    console.error('Eroare la exportul CSV:', error);
  }
};

export const exportXLSX = async (evenimentId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/xlsx/${evenimentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', 
      }
    );

    const link = document.createElement('a');
    link.href = URL.createObjectURL(response.data);
    link.download = `participanti_eveniment_${evenimentId}.xlsx`;
    link.click();
  } catch (error) {
    console.error('Eroare la exportul XLSX:', error);
  }
};
