// Filters logs based on multiple optional criteria
export function filterLogs(logs, filters) {
  let result = [...logs];

  const {
    level,
    message,
    resourceId,
    timestamp_start,
    timestamp_end,
    traceId,
    spanId,
    commit
  } = filters;

  // Filter by log level
  if (level)
    result = result.filter(l => l.level === level);

  // Filter by message keyword (case-insensitive)
  if (message)
    result = result.filter(l =>
      l.message.toLowerCase().includes(message.toLowerCase())
    );

  // Filter by resource ID (case-insensitive)
  if (resourceId)
    result = result.filter(l =>
      l.resourceId.toLowerCase().includes(resourceId.toLowerCase())
    );

  // Filter by trace ID
  if (traceId)
    result = result.filter(l => l.traceId === traceId);

  // Filter by span ID
  if (spanId)
    result = result.filter(l => l.spanId === spanId);

  // Filter by commit hash
  if (commit)
    result = result.filter(l => l.commit === commit);

  // Filter by start timestamp
  if (timestamp_start)
    result = result.filter(l =>
      new Date(l.timestamp) >= new Date(timestamp_start)
    );

  // Filter by end timestamp
  if (timestamp_end)
    result = result.filter(l =>
      new Date(l.timestamp) <= new Date(timestamp_end)
    );

  // Sort logs in descending order of timestamp
  return result.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
}
