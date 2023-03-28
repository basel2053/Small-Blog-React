import axios from 'axios';

// export const baseURL = 'http://localhost:3000/';
export const baseURL = 'https://small-blog-api.onrender.com/';

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true,
});
