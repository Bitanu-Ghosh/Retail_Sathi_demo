import React from "react";

export default function AgentLogs() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-3">🤖 AI Agent Logs</h2>
      <p className="text-amber-100 mb-2">
        Track AI decisions, time, and override if needed.
      </p>
      <ul className="text-sm bg-emerald-800 rounded shadow-sm p-3 space-y-2">
        <li>✔ 10:24 AM — Adjusted price of “Organic Rice”</li>
        <li>⚠ 10:26 AM — Suggested reorder of “Eco Fertilizer”</li>
      </ul>
    </div>
  );
}
