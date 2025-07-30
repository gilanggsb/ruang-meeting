import axios, { AxiosError, AxiosResponse, CreateAxiosDefaults } from 'axios';
import { BASE_URL } from '.';

export const baseApiConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*',
  },
  timeout: 10000,
};

export const api = axios.create(baseApiConfig);

// Define your logging control variable
// You can make this a global variable, a configuration setting,
// or even pass it dynamically if needed (though global/config is more common for this).
const enableApiLogging: boolean = false; // Set to `true` to enable logging, `false` to disable

// Create API Middleware Log

// Request interceptor
api.interceptors.request.use(
  (config) => {
    if (enableApiLogging) { // <-- Conditional check
      // Log request details
      console.log('API Request Interceptor:');
      console.log(`  Method: ${config.method?.toUpperCase()}`);
      console.log(`  URL: ${config.baseURL}${config.url}`);
      console.log('  Headers:', config.headers);
      if (config.data) {
        console.log('  Request Body:', config.data);
      }
      console.log('--- End Request Interceptor ---');
    }
    return config;
  },
  (error: AxiosError) => {
    if (enableApiLogging) { // <-- Conditional check
      // Log request error
      console.log('API Request Interceptor Error:');
      console.log('  Error Message:', error.message);
      if (error.request) {
        console.log('  Request Data:', error.request);
      }
      console.log('--- End Request Interceptor Error ---');
    }
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (enableApiLogging) { // <-- Conditional check
      // Log successful response details
      console.log('API Response Interceptor:');
      console.log(`  Status: ${response.status} ${response.statusText}`);
      console.log(`  URL: ${response.config.baseURL}${response.config.url}`);
      console.log('  Headers:', response.headers);
      if (response.data) {
        console.log('  Response Data:', response.data);
      }
      console.log('--- End Response Interceptor ---');
    }
    return response;
  },
  (error: AxiosError) => {
    if (enableApiLogging) { // <-- Conditional check
      // Log response error
      console.log('API Response Interceptor Error:');
      console.log('  Error Message:', error.message);
      if (error.response) {
        console.log('  Status:', error.response.status);
        console.log('  Data:', error.response.data);
        console.log('  Headers:', error.response.headers);
      } else if (error.request) {
        console.log('  No response received from server.');
        console.log('  Request:', error.request);
      } else {
        console.log('  Error during request setup:', error.message);
      }
      console.log('--- End Response Interceptor Error ---');
    }
    return Promise.reject(error);
  }
);