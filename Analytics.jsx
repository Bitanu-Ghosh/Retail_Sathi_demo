import React from "react";

export default function Analytics() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-3">📈 Customer Analytics</h2>
      <ul className="list-disc ml-6 space-y-2 text-amber-100">
        <li>Segmentation: New, Returning, Loyal</li>
        <li>Behavior trends: Top searches and purchases</li>
        <li>Recommendation success rate: 72%</li>
      </ul>
    </div>
  );
}
