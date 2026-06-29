"use client";

import { useState, useEffect } from "react";
import { Button, Loader } from "@/components/ui";

export default function DashboardPage() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // New States for the Form Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    crop: "",
    variety: "",
    sowingDate: "",
    expectedHarvest: "",
    readiness: 0,
    status: "Good",
  });

  // 1. Fetch all crops from the Node.js backend
  const fetchCrops = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/api/crops");
      if (!response.ok) throw new Error("Failed to pull live crop inventory.");
      
      const data = await response.json();
      setCrops(data);
    } catch (err) {
      setError(err.message || "Could not connect to the backend server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  // 2. Handle Form Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "readiness" ? Number(value) : value });
  };

  // 3. Submit the Form Data via POST request
  const handleAddCrop = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    try {
      const response = await fetch("http://localhost:5000/api/crops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to add new crop data.");

      // Close modal, reset form, and fetch updated list
      setIsModalOpen(false);
      setFormData({ crop: "", variety: "", sowingDate: "", expectedHarvest: "", readiness: 0, status: "Good" });
      fetchCrops();
    } catch (err) {
      alert(`⚠️ Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center relative">
      {/* Dashboard Top Card Header */}
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-emerald-100 dark:border-gray-700 text-center mb-6">
        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-xl">🚜</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          AgriSmart AI Coordination Center
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm max-w-lg mx-auto mb-4">
          Real-time dynamic monitoring of active crop metrics and localized multi-point field cycles.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-lg border border-emerald-100 dark:border-emerald-900">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live Server Analytics Connection Established
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Active Crop Records</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Fetched dynamically via local API pipeline</p>
          </div>
          {/* Changed button to open the modal instead of sending hardcoded data */}
          <Button variant="primary" size="sm" onClick={() => setIsModalOpen(true)}>
            ➕ Add Custom Crop
          </Button>
        </div>

        {/* Error State Banner */}
        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 bg-red-50 dark:bg-red-950/50 dark:text-red-400 rounded-lg border border-red-100 dark:border-red-900">
            ⚠️ <strong>Backend Error:</strong> {error}
          </div>
        )}

        {/* Loading State Spinner */}
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3">
            <Loader />
            <p className="text-sm text-emerald-600 dark:text-emerald-400 animate-pulse font-medium">
              Synchronizing with server data storage...
            </p>
          </div>
        ) : (
          /* Live Data Table Container */
          <div className="overflow-x-auto rounded-lg border border-gray-100 dark:border-gray-700">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700/50 dark:text-gray-300">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Crop Name</th>
                  <th className="px-4 py-3">Variety</th>
                  <th className="px-4 py-3">Sowing Date</th>
                  <th className="px-4 py-3">Expected Harvest</th>
                  <th className="px-4 py-3">Readiness (%)</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {crops.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-4 py-8 text-center text-gray-400">
                      No active crop logs discovered on the backend system.
                    </td>
                  </tr>
                ) : (
                  crops.map((item) => (
                    <tr key={item.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">#{item.id}</td>
                      <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">{item.crop}</td>
                      <td className="px-4 py-3">{item.variety}</td>
                      <td className="px-4 py-3">{item.sowingDate}</td>
                      <td className="px-4 py-3">{item.expectedHarvest}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(item.readiness, 100)}%` }}></div>
                          </div>
                          <span>{item.readiness}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                            item.status === "Good" || item.status === "Ready for Harvest"
                              ? "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900"
                              : "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pop-up Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Crop</h3>
            <form onSubmit={handleAddCrop} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Crop Name</label>
                <input type="text" name="crop" required value={formData.crop} onChange={handleInputChange} className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., Potato" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Variety</label>
                <input type="text" name="variety" required value={formData.variety} onChange={handleInputChange} className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., Kufri Jyoti" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sowing Date</label>
                  <input type="date" name="sowingDate" required value={formData.sowingDate} onChange={handleInputChange} className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Harvest Date</label>
                  <input type="date" name="expectedHarvest" required value={formData.expectedHarvest} onChange={handleInputChange} className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Readiness (%)</label>
                  <input type="number" name="readiness" min="0" max="100" required value={formData.readiness} onChange={handleInputChange} className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
                  <select name="status" value={formData.status} onChange={handleInputChange} className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="Good">Good</option>
                    <option value="Needs Attention">Needs Attention</option>
                    <option value="Ready for Harvest">Ready for Harvest</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors">
                  Submit Data
                </button>
              </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
}