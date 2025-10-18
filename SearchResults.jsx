import React from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../data/sampleProducts";
import ProductCard from "../../components/ProductCard";

export default function SearchResults({ addToCart }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.desc?.toLowerCase().includes(query)
  );

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-green-400">
        Search Results for "{query}"
      </h2>

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-lg">No products found 😔</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}
 