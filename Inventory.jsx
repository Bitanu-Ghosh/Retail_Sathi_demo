import React from "react";
import { products } from "../../data/sampleProducts";

export default function Inventory() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-4">📦 Inventory Management</h2>
      <table className="w-full text-sm bg-amber-800 rounded shadow-sm">
        <thead className="bg-amber-700 text-left">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.stock}</td>
              <td className="p-2">₹{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
