import React from "react";
import { products } from "../../data/sampleProducts";
import ProductCard from "../../components/ProductCard";

export default function CustomerHome({ addToCart, addToWishlist }) {
  return (
    <div className="flex-1 p-6 bg-black text-white space-y-4">
      <h2 className="text-xl font-semibold text-yellow-400">Welcome, Shopper!</h2>
      <p className="text-gray-400">Featured deals for you:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
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
