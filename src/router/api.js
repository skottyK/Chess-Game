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
    // Perform actions before sending the request (e.g., setting auth tokens)
    // You can add authentication headers here if needed
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

// Define functions for specific API calls

// Fetch settings from the API
export const fetchSettings = () => {
  return apiClient.get('/settings');
};

// Update settings by sending data to the API
export const updateSettings = (newSettings) => {
  return apiClient.post('/settings', newSettings);
};

// Fetch leaderboard data from the API
export const fetchLeaderboard = () => {
  return apiClient.get('/leaderboard');
};

// Fetch user data by user ID
export const fetchUserData = (userId) => {
  return apiClient.get(`/user/${userId}`);
};

// Fetch account data from the API
// update account data by sending data to the API
export const fetchAccountData = () => {
  return apiClient.get('/account');
};


export default apiClient;
