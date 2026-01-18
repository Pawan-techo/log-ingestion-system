import { useState } from "react";
import { createLog } from "../api/logApi.js";

export default function LogForm({ onLogCreated }) {
  const [form, setForm] = useState({
    level: "info",
    message: "",
    resourceId: "",
    traceId: "",
    spanId: "",
    commit: "",
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Update form state on input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit log to backend
  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      traceId: form.traceId || "N/A",
      spanId: form.spanId || "N/A",
      commit: form.commit || "N/A",
      timestamp: new Date().toISOString(),
      metadata: { parentResourceId: "frontend-ui" },
    };

    try {
      await createLog(payload);

      // Reset form after successful submission
      setForm({
        level: "info",
        message: "",
        resourceId: "",
        traceId: "",
        spanId: "",
        commit: "",
      });

      // Show success toast
      setToast({ show: true, message: "Log created successfully!", type: "success" });

      // Refresh logs in parent
      onLogCreated();

      // Hide toast after 3 seconds
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
    } catch (err) {
      console.error("Error creating log:", err);
      setToast({ show: true, message: "Failed to create log.", type: "error" });
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
    }
  };

  return (
    <>
      {/* Log creation form */}
      <form
        onSubmit={submit}
        className="bg-white p-4 rounded-lg shadow-md space-y-3 w-full max-w-md"
      >
        <h3 className="text-xl font-bold">Create Log</h3>

        <select
          name="level"
          value={form.level}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        >
          <option value="info">info</option>
          <option value="warn">warn</option>
          <option value="error">error</option>
          <option value="debug">debug</option>
        </select>

        <input
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <input
          name="resourceId"
          placeholder="Resource ID"
          value={form.resourceId}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
        <input
          name="traceId"
          placeholder="Trace ID"
          value={form.traceId}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          name="spanId"
          placeholder="Span ID"
          value={form.spanId}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          name="commit"
          placeholder="Commit"
          value={form.commit}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />

        <button
          type="submit"
          className="text-blue-800 border border-blue-800 font-bold px-4 py-2 rounded hover:text-white hover:bg-green-700"
        >
          Submit Log
        </button>
      </form>

      {/* Toast notification */}
      {toast.show && (
        <div
          className={`fixed bottom-4 left-4 px-4 py-2 rounded shadow-md text-white ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
