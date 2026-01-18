import express from "express";
import { createLog, getLogs } from "../controllers/log.controller.js";

const router = express.Router();

// Create a new log
router.post("/", createLog);

// Get logs with optional filters
router.get("/", getLogs);

export default router;
