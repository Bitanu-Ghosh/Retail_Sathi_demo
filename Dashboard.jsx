import React from "react";

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 space-y-4">
      <h2 className="text-xl font-semibold">📊 Manager Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-amber-700 rounded shadow-sm">Sales: ₹1.2L</div>
        <div className="p-4 bg-amber-700 rounded shadow-sm">Revenue: ₹5.8L</div>
        <div className="p-4 bg-amber-700 rounded shadow-sm">Orders: 324</div>
        <div className="p-4 bg-amber-700 rounded shadow-sm">Low Stock: 2</div>
      </div>
    </div>
  );
}
