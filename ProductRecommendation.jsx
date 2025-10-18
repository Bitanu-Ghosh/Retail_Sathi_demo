import React from "react";
import { products } from "../../data/sampleProducts";
import ProductCard from "../../components/ProductCard";

export default function ProductRecommendation({ addToCart, addToWishlist }) {
  return (
    <div className="flex-1 p-6 bg-black text-white">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
        🤖 AI Recommendations
      </h2>
      <p className="text-gray-400 mb-2">
        Based on your preferences, here are some top picks for you:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 3).map((p) => (
          <ProductCard
            key={p.id}
            p={p}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
}
