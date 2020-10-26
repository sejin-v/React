import axios from 'axios';

export const login = ({ id }) => axios.post(`/api/login`, { id });
