import React from "react";

export default function Promotions() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-3">💰 Promotion & Pricing Control</h2>
      <p className="text-gray-600 mb-2">
        Manage discount campaigns and monitor AI pricing adjustments.
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        + New Campaign
      </button>
    </div>
  );
}
