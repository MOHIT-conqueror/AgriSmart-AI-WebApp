"use client";

import { useState } from "react";
import {
  Input,
  Button,
  showSuccess,
  showError
} from "@/components/ui";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      showError("Please fill all fields");
      return;
    }

    showSuccess("Login Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Sign In
        </h1>

        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="primary"
            size="md"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account? Sign up
        </p>
      </div>
    </div>
  );
}