"use client";

import { useState } from "react";
import {
  Input,
  Button,
  Loader,
  showSuccess
} from "@/components/ui";

export default function AdvisoryPage() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleAskAI = () => {
    if (!question.trim()) return;

    setLoading(true);
    setResponse("");

    setTimeout(() => {
      setLoading(false);

      const aiReply =
        "Based on current weather and soil conditions, irrigation is recommended for your wheat crop in the next 2 days.";

      setResponse(aiReply);
      showSuccess("AI Advisory Generated");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          AI Advisory Chatbot
        </h1>

        <div className="space-y-4">
          <Input
            label="Ask your crop-related question"
            placeholder="Example: When should I irrigate my wheat crop?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <Button
            variant="primary"
            size="md"
            onClick={handleAskAI}
          >
            Ask AI
          </Button>
        </div>

        <div className="mt-6">
          {loading && <Loader />}
        </div>

        {response && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-gray-700 rounded-lg border border-green-200">
            <h2 className="font-semibold text-green-700 dark:text-green-300 mb-2">
              AI Response:
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              {response}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}