import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// DO SOMETHING WITH REQUEST BEFORE IT GETS SENT
// API.interceptors.request.use((req) => {

// });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);