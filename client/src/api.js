import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update if hosted elsewhere

export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const getEvents = () => axios.get(`${API_URL}/events`);
export const purchaseTicket = (ticketData) => axios.post(`${API_URL}/tickets/purchase`, ticketData);
export const redeemTicket = (qrCode) => axios.post(`${API_URL}/tickets/redeem`, { qrCode });

