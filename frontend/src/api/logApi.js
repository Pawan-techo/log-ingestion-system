import axios from "axios";

// Axios instance for backend API
const API = axios.create({
  baseURL: "http://localhost:3000",
});

// Create a new log
export const createLog = (log) => API.post("/logs", log);

// Fetch logs with optional query parameters (filters)
export const getLogs = (params) => API.get("/logs", { params });
