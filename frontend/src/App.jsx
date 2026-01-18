import Dashboard from "./pages/Dashboard";
export default function App() {
  return (
    <div className="h-[100vh] bg-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-blue-800 text-2xl font-semibold pt-5">
          Log Ingestion Dashboard
        </h1>
        <Dashboard />
      </div>
    </div>
  );
}
