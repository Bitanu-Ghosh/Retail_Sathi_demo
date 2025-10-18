import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // You can redirect to a search page or handle search here
      navigate(`/search?q=${query.trim()}`);
    }
  };

  return (
    <header className="bg-black shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-green-400">
            🗂 SmartRetail AI
          </Link>
          <nav className="hidden md:flex gap-4 text-sm text-blue-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/recommendations" className="hover:text-white transition">
              Recommendations
            </Link>
            <Link to="/cart" className="hover:text-white transition">Cart</Link>
            <Link to="/wishlist" className="hover:text-white transition">Wishlist</Link>
          </nav>
        </div>

        {/* Right Side */}
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-700 bg-gray-900 text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
          />
          <button
            type="submit"
            className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500 transition"
          >
            Search
          </button>
          <Link
            to="/manager"
            className="text-xs px-3 py-1 border border-amber-700 rounded bg-amber-800 hover:bg-amber-700 transition"
          >
            Manager
          </Link>
        </form>
      </div>
    </header>
  );
}
