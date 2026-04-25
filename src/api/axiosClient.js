// Import axios so we can make HTTP requests to the backend API
import axios from "axios";

// Create one reusable axios instance
// This is better than repeating the base URL everywhere
const axiosClient = axios.create({
  // Change this port later to match your real backend port
  baseURL: "https://localhost:7047/api"
});

// Export it so other files can use it
export default axiosClient;