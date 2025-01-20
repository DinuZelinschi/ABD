import axios from 'axios';

const API_URL = 'http://192.168.31.149:3001/api/qr';

// Funcție pentru generarea unui QR code
export const generateQRCode = async (data, token) => {
  try {
    const response = await axios.post(
      `${API_URL}`,
      { data },
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
