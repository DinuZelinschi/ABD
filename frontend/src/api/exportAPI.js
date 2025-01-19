import axios from 'axios';

// URL-ul pentru API-ul de backend
const API_URL = 'http://127.0.0.1:3001/api'; // Asigură-te că URL-ul e corect, în funcție de backend

// Funcție pentru exportul participantilor in format CSV
export const exportCSV = async (evenimentId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/csv/${evenimentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', // Se cere ca răspuns un fișier
      }
    );

    // Creați un link de descărcare pentru fișierul CSV
    const link = document.createElement('a');
    link.href = URL.createObjectURL(response.data);
    link.download = `participanti_eveniment_${evenimentId}.csv`;
    link.click();
  } catch (error) {
    console.error('Eroare la exportul CSV:', error);
  }
};

// Funcție pentru exportul participantilor in format XLSX
export const exportXLSX = async (evenimentId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/xlsx/${evenimentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', // Se cere ca răspuns un fișier
      }
    );

    // Creați un link de descărcare pentru fișierul XLSX
    const link = document.createElement('a');
    link.href = URL.createObjectURL(response.data);
    link.download = `participanti_eveniment_${evenimentId}.xlsx`;
    link.click();
  } catch (error) {
    console.error('Eroare la exportul XLSX:', error);
  }
};
