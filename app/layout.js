import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata = {
  title: "AgriSmart AI - Smart Farming Platform",
  description:
    "AI-powered crop advisory and logistics coordination for farmers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ThemeProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}