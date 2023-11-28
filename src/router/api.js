import axios from 'axios';

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Base URL for all API calls
  withCredentials: false, // Indicates whether or not cross-site Access-Control requests should be made using credentials
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor
apiClient.interceptors.request.use(
  config => {
    // Perform actions before sending request (e.g., setting auth tokens)
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  response => {
    // Perform actions on response data
    return response;
  },
  error => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default apiClient;
