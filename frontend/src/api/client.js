import axios from "axios";

// Change this value when the backend base URL moves.
export const API_BASE_URL = "https://api.moorabbintyres.com/api";
// export const API_BASE_URL = "http://localhost:5000/api";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" }
});

export default client;
