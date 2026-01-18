// Allowed log levels as per system specification
const LEVELS = ["error", "warn", "info", "debug"];

function validateLog(log) {
  // Fields that must exist in every log entry
  const requiredFields = [
    "level",
    "message",
    "resourceId",
    "timestamp",
    "traceId",
    "spanId",
    "commit",
    "metadata"
  ];

  // Check for missing required fields
  for (const field of requiredFields) {
    if (!log[field]) return `${field} is required`;
  }

  // Validate log level
  if (!LEVELS.includes(log.level)) return "Invalid log level";

  // Validate timestamp format (ISO 8601)
  if (isNaN(Date.parse(log.timestamp)))
    return "Timestamp must be ISO 8601 format";

  return null;
}

export default validateLog;
