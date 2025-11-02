import React from "react";
import LogoGrid from "./components/LogoGrid";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-600 text-white py-4 text-center text-2xl font-semibold shadow-md">
        ✈️ Flight Ticket Services
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
        <LogoGrid />
      </main>

      <footer className="w-full text-center py-4 text-gray-500 text-sm border-t">
        © 2025 FlightFinder | Made with ❤️
      </footer>
    </div>
  );
}
