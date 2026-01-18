export default function FilterBar({ filters, setFilters }) {
  // Reset all filters to default values
  const clearFilters = () => {
    setFilters({
      level: "",
      message: "",
      resourceId: "",
      timestamp_start: "",
      timestamp_end: "",
    });
  };

  // Update a specific filter key
  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="sticky top-0 z-10 bg-white p-4 rounded-md shadow-sm mb-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
        {/* Message Search */}
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Message</label>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm"
            placeholder="Search message..."
            value={filters.message || ""}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </div>

        {/* Level Filter */}
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Level</label>
          <select
            className="border rounded px-3 py-2 text-sm"
            value={filters.level || ""}
            onChange={(e) => handleChange("level", e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="error">Error</option>
            <option value="warn">Warn</option>
            <option value="info">Info</option>
            <option value="debug">Debug</option>
          </select>
        </div>

        {/* Resource ID Filter */}
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Resource ID</label>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm"
            placeholder="Resource ID"
            value={filters.resourceId || ""}
            onChange={(e) => handleChange("resourceId", e.target.value)}
          />
        </div>

        {/* Start Date */}
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">Start Time</label>
          <input
            type="datetime-local"
            className="border rounded px-3 py-2 text-sm"
            value={filters.timestamp_start || ""}
            onChange={(e) => handleChange("timestamp_start", e.target.value)}
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-1">End Time</label>
          <input
            type="datetime-local"
            className="border rounded px-3 py-2 text-sm"
            value={filters.timestamp_end || ""}
            onChange={(e) => handleChange("timestamp_end", e.target.value)}
          />
        </div>

        {/* Clear Filters Button */}
        <div className="flex flex-col">
          <button
            onClick={(e) => {
              e.preventDefault();
              clearFilters();
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-sm"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
