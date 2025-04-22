import api from './api';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (details) => {
  const response = await api.post('/auth/register', details);
  return response.data;
};

export const resetPassword = async (data) => {
  const response = await axios.post(`${API}/api/auth/reset-password`, data);
  return response.data;
};
