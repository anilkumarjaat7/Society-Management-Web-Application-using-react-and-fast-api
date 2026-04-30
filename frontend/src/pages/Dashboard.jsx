import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = useMemo(() => {
    const rawUser = localStorage.getItem("user");
    return rawUser ? JSON.parse(rawUser) : null;
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Dashboard
            </h1>
            <p className="mt-2 text-slate-600">
              Welcome, {user?.name || user?.email || "Society Member"}.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-400 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Profile Status</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">Active</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">House Number</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {user?.house_number || "Not available"}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Contact</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {user?.phone || "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
