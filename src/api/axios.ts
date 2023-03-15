import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export const axiosPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
