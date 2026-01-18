import { useEffect, useState } from "react";
import { getLogs } from "../api/logApi.js";
import LogForm from "../components/LogForm.jsx";
import LogList from "../components/LogList.jsx";
import FilterBar from "../components/FilterBar.jsx";

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp_start: "",
    timestamp_end: "",
  });

  // Fetch logs from backend with applied filters
  const fetchLogs = async () => {
    try {
      setLoading(true); // start loader

      const query = {
        ...filters,
        timestamp_start: filters.timestamp_start
          ? new Date(filters.timestamp_start).toISOString()
          : undefined,
        timestamp_end: filters.timestamp_end
          ? new Date(filters.timestamp_end).toISOString()
          : undefined,
      };

      const res = await getLogs(query);
      setLogs(res.data);
    } catch (err) {
      console.error("Error fetching logs:", err);
    } finally {
      setLoading(false); // stop loader
    }
  };

  // Re-fetch logs whenever filters change
  useEffect(() => {
    fetchLogs();
  }, [filters]);

  return (
    <div className="bg-gray-100 p-6">
      {/* Filter bar */}
      <div className="mb-6">
        <FilterBar filters={filters} setFilters={setFilters} />
      </div>

      {/* Layout: LogForm + scrollable LogList */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <LogForm onLogCreated={fetchLogs} />
        </div>

        <div className="md:col-span-2 h-[70vh] shadow-md bg-white overflow-y-auto p-2">
          <LogList logs={logs} loading={loading} />
        </div>
      </div>
    </div>
  );
}
