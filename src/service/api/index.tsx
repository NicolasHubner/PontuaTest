const apiBaseURL = 'https://gateway.marvel.com/v1/public';
import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const api = axios.create({
    baseURL: apiBaseURL,
    headers,
});
