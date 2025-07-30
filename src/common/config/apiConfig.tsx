import axios, { CreateAxiosDefaults } from 'axios';
import { BASE_URL } from '.';

export const baseApiConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL, //
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*',
  },
  /* other custom settings */
  timeout: 10000,
};

export const api = axios.create(baseApiConfig);

//
