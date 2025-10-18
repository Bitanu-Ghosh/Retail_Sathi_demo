import React from "react";

export default function Cart({ cart, deleteFromCart }) {
  // 💰 Calculate total amount (price × quantity)
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="flex-1 p-6 bg-black text-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">
          You haven’t added anything yet.
        </p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="border border-gray-700 bg-gray-900 p-4 rounded-xl flex justify-between items-center hover:shadow-md hover:shadow-gray-800 transition"
              >
                <div className="flex items-center gap-4">
                  {/* 🖼 Product Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}

                  <div>
                    <p className="font-semibold text-green-300">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.brand}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      ₹{item.price} × {item.quantity || 1} ={" "}
                      <span className="text-yellow-300 font-semibold">
                        ₹{item.price * (item.quantity || 1)}
                      </span>
                    </p>
                  </div>
                </div>

                {/* ❌ Delete Button */}
                <button
                  className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  onClick={() => deleteFromCart(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {/* 🧾 Total Summary */}
          <div className="mt-6 border-t border-gray-700 pt-4 flex justify-between items-center">
            <p className="text-lg font-bold text-yellow-300">Total:</p>
            <p className="text-lg font-bold text-yellow-400">₹{total}</p>
          </div>
        </>
      )}
    </div>
  );
}
