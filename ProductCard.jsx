import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ p, addToCart, addToWishlist }) {
  // 🛒 Handle Add to Cart with quantity prompt
  const handleAddToCart = () => {
    if (p.stock === 0) return alert("❌ Out of stock!");

    const qty = parseInt(prompt(`Enter quantity (1 - ${p.stock}):`, "1"), 10);

    if (!qty || qty <= 0) return alert("⚠️ Please enter a valid quantity.");
    if (qty > p.stock) return alert(`⚠️ Only ${p.stock} items available.`);

    addToCart({ ...p, quantity: qty });
  };

  return (
    <div className="border border-gray-700 rounded-xl p-4 flex flex-col gap-3 bg-gray-900 shadow-md hover:shadow-xl hover:shadow-gray-800 transition-transform transform hover:scale-[1.02] duration-200">
      
      {/* 🖼 Product Image */}
      <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-500 text-sm">No image</span>
        )}
      </div>

      {/* 📦 Product Details */}
      <div className="text-center">
        <h3 className="font-semibold text-lg text-green-400">{p.name}</h3>
        <p className="text-sm text-gray-400">{p.brand}</p>
        <p className="mt-1 font-bold text-yellow-300">₹{p.price}</p>
        <p
          className={`text-xs mt-1 ${
            p.stock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {p.stock > 0 ? `${p.stock} in stock` : "Out of stock"}
        </p>
      </div>

      {/* 🔘 Action Buttons */}
      <div className="flex justify-center gap-2 mt-2">
        <Link
          to={`/product/${p.id}`}
          className="text-sm px-3 py-1 border border-gray-600 rounded text-blue-300 hover:bg-blue-700 hover:text-white transition"
        >
          View
        </Link>

        <button
          onClick={handleAddToCart}
          disabled={p.stock === 0}
          className={`text-sm px-3 py-1 rounded transition ${
            p.stock === 0
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Add
        </button>

        <button
          onClick={() => addToWishlist && addToWishlist(p)}
          className="text-sm px-3 py-1 rounded border border-pink-600 text-pink-400 hover:bg-pink-700 hover:text-white transition"
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
