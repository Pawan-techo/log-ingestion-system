import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to JSON file storing logs
const DB_PATH = path.join(__dirname, "../data/logs.json");


 // Reads logs from JSON file, creates file if it doesn't exist

export function readLogs() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(DB_PATH));
}
 // Writes logs array to JSON file with indentation for readability

export function writeLogs(logs) {
  fs.writeFileSync(DB_PATH, JSON.stringify(logs, null, 2));
}
