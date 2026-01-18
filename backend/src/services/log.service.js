import { readLogs, writeLogs } from "../utils/fileDB.js";
import { filterLogs } from "./filterLogs.js";

export function createLogService(log) {
  // 🔒 Force plain JSON object ONLY
  const safeLog = {
    level: log.level,
    message: log.message,
    resourceId: log.resourceId,
    timestamp: log.timestamp,
    traceId: log.traceId,
    spanId: log.spanId,
    commit: log.commit,
    metadata: log.metadata
  };

  const logs = readLogs();
  logs.push(safeLog);
  writeLogs(logs);

  return safeLog;
}

export function getLogsService(filters) {
  const logs = readLogs();
  return filterLogs(logs, filters);
}