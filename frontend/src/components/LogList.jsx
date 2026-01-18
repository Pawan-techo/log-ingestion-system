import LogRow from "./LogRow";

export default function LogList({ logs = [], loading }) {
  // Show loading spinner when fetching logs
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 mt-35">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mr-2" />
        Loading..
      </div>
    );
  }

  // Show empty state when there are no logs
  if (!loading && logs.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No logs found
      </div>
    );
  }

  // Render log rows
  return (
    <div className="space-y-3">
      {logs.map((log, index) => (
        <LogRow key={index} log={log} />
      ))}
    </div>
  );
}
