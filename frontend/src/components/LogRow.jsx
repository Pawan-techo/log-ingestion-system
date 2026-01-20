const levelStyles = {
  error: "border-red-500 bg-red-100",
  warn: "border-yellow-500 bg-yellow-100",
  info: "border-blue-500 bg-blue-100",
  debug: "border-gray-500 bg-gray-100",
};

export default function LogRow({ log }) {
  return (
    <div
      className={`border-l-4 p-4 rounded shadow-sm mb-3 ${
        levelStyles[log.level] || "border-gray-300 bg-white"
      }`}
    >
      {/* Log header: level badge + message */}
      <div className="flex items-center gap-2 font-medium">
        <span
          className={`text-xs uppercase px-2 py-1 rounded ${
            log.level === "error"
              ? "bg-red-200 text-red-800"
              : log.level === "warn"
              ? "bg-yellow-200 text-yellow-800"
              : log.level === "info"
              ? "bg-blue-200 text-blue-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {log.level}
        </span>
        <span>{log.message}</span>
      </div>

      {/* Log footer: resource, timestamp, spanId, traceId, commit */}
      <div className="text-sm text-gray-900 mt-1">
        Resource ID : {log.resourceId} • {new Date(log.timestamp).toLocaleString()}
      </div>
      <div className="text-xs text-slate-500 mt-1">
        • Span-Id : {log.spanId} • trace-Id: {log.traceId} • commit: {log.commit}
      </div>
    </div>
  );
}
