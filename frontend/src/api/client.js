import axios from "axios";

// Change this value when the backend base URL moves.
export const API_BASE_URL = "api.moorabbintyres.com/api";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" }
});

export default client;
