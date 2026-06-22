"use client";

import { useEffect } from "react";
import FocusTrap from "focus-trap-react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () =>
      window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-[90%] max-w-md shadow-lg">
          <h2 className="text-xl font-bold mb-4">{title}</h2>

          {children}

          <button
            onClick={onClose}
            className="mt-4 text-red-500"
          >
            Close
          </button>
        </div>
      </div>
    </FocusTrap>
  );
}