import { createLogService, getLogsService } from "../services/log.service.js";
import validateLog from "../utils/validateLog.js";

// Handle POST /logs - validate and create a new log
export const createLog = (req, res) => {
  try {
    const error = validateLog(req.body);
    if (error) {
      return res.status(400).json({ error });
    }

    const createdLog = createLogService(req.body);
    res.status(201).json(createdLog);
  } catch (err) {
    console.error("CREATE LOG ERROR:", err);
    res.status(500).json({ error: "Failed to ingest log" });
  }
};

// Handle GET /logs - fetch logs with optional filters
export const getLogs = (req, res) => {
  try {
    const logs = getLogsService(req.query);
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch logs" });
  }
};
