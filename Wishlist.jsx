import React from "react";

export default function Wishlist({ wishlist, deleteFromWishlist }) {
  return (
    <div className="flex-1 p-6 bg-black text-white">
      <h2 className="text-2xl font-semibold mb-3 text-pink-400">❤️ Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-400">No favorites added yet.</p>
      ) : (
        <ul className="space-y-2">
          {wishlist.map((item, idx) => (
            <li
              key={idx}
              className="border border-gray-700 bg-gray-900 p-3 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-green-300">{item.name}</p>
                <p className="text-sm text-gray-400">₹{item.price}</p>
              </div>
              <button
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                onClick={() => deleteFromWishlist(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
