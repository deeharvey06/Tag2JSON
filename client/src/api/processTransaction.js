import axios from 'axios';

const API_BASE_URL =
  process.env.API_BASE_URL || 'http://localhost:5001/api/v1';

export const processTransaction = (structuredString) => {
  return axios.post(`${API_BASE_URL}/transaction/processTransaction`, {
    structuredString
  });
};