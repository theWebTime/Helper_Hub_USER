import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function login(email: string, password: string) {
  return axios.post(`${API_URL}login`, { email, password });
}