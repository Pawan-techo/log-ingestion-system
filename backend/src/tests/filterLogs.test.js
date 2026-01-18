import { filterLogs } from "../services/filterLogs.js";
import { mockLogs } from "./mocks/logs.mock.js";

describe("filterLogs()", () => {
  // Should return all logs if no filters are applied
  test("returns all logs when no filters are applied", () => {
    const result = filterLogs(mockLogs, {});
    expect(result.length).toBe(mockLogs.length);
  });

  // Should filter logs by level
  test("filters by level", () => {
    const result = filterLogs(mockLogs, { level: "error" });
    expect(result.length).toBe(1);
    expect(result[0].level).toBe("error");
  });

  // Should filter logs by message keyword (case-insensitive)
  test("filters by message keyword (case insensitive)", () => {
    const result = filterLogs(mockLogs, { message: "failed" });
    expect(result.length).toBe(1);
    expect(result[0].message).toMatch(/failed/i);
  });

  // Should filter logs by resourceId
  test("filters by resourceId", () => {
    const result = filterLogs(mockLogs, { resourceId: "server-1234" });
    expect(result.length).toBe(2);
  });

  // Should filter logs by timestamp range
  test("filters by timestamp range", () => {
    const result = filterLogs(mockLogs, {
      timestamp_start: "2026-01-18T12:00:00Z",
      timestamp_end: "2026-01-18T13:00:00Z",
    });
    expect(result.length).toBe(2);
  });

  // Should filter logs by multiple conditions together
  test("filters by multiple conditions", () => {
    const result = filterLogs(mockLogs, {
      level: "warn",
      resourceId: "server-1234",
    });
    expect(result.length).toBe(1);
  });

  // Should return empty array if no logs match filters
  test("returns empty array if no logs match", () => {
    const result = filterLogs(mockLogs, {
      level: "error",
      resourceId: "frontend-ui",
    });
    expect(result).toEqual([]);
  });
});
