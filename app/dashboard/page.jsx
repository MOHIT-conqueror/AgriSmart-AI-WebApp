"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Loader,
  Modal
} from "@/components/ui";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-emerald-100 text-center">

        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🚜</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Farmer Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Welcome to the AgriSmart AI coordination center.
          View your active crop cycles, weather alerts,
          and buyer requests here.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-lg border border-emerald-100 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Live analytics active
        </div>

        <div>
          <Button
            variant="primary"
            size="md"
            onClick={() => setOpenModal(true)}
          >
            View Crop Details
          </Button>
        </div>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Crop Details"
        >
          <p className="text-gray-700 dark:text-gray-300">
            Wheat crop is 80% ready for harvest.
            Expected harvest in 7 days.
          </p>
        </Modal>

      </div>
    </div>
  );
}