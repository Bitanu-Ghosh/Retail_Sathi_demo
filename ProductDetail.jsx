import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/sampleProducts";

export default function ProductDetail({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div className="p-6 text-center text-red-500 text-lg bg-black min-h-screen">
        Product not found.
      </div>
    );

  const handleAddToCart = () => {
    if (product.stock === 0) return;

    const qty = parseInt(
      prompt(`Enter quantity (max ${product.stock}):`, "1")
    );

    if (!qty || qty < 1 || qty > product.stock) {
      alert("Please enter a valid quantity!");
      return;
    }

    addToCart({ ...product, quantity: qty });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-6 gap-8">
      <div className="w-full md:w-1/3 bg-gray-900 rounded-xl p-4 shadow-lg flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2 bg-gray-900 rounded-xl p-6 shadow-lg space-y-4">
        <h2 className="text-3xl font-bold text-green-400">{product.name}</h2>
        <p className="text-sm text-gray-400">Brand: {product.brand}</p>
        <p className="text-yellow-300 font-semibold text-lg">
          Price: ₹{product.price}
        </p>
        <p
          className={`${
            product.stock > 0 ? "text-green-500" : "text-red-500"
          } text-sm`}
        >
          {product.stock > 0
            ? `${product.stock} items available`
            : "Out of stock"}
        </p>
        <p className="text-gray-300">{product.desc}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            className={`px-4 py-2 rounded text-sm font-semibold transition ${
              product.stock === 0
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>

          <button
            className="px-4 py-2 rounded text-sm font-semibold bg-pink-600 hover:bg-pink-700 text-white transition"
            onClick={() => addToWishlist(product)}
          >
             Wishlist
          </button>

          <Link
            to="/"
            className="px-4 py-2 rounded text-sm font-semibold border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
