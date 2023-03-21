import axios from 'axios';

export const baseURL = 'http://localhost:3000/';

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true,
});
