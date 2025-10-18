import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ section }) {
  const items =
    section === "manager"
      ? [
          { name: "Dashboard", path: "/manager" },
          { name: "Inventory", path: "/manager/inventory" },
          { name: "Analytics", path: "/manager/analytics" },
          { name: "Promotions", path: "/manager/promotions" },
          { name: "Agent Logs", path: "/manager/agent-logs" },
        ]
      : [
          { name: "Home", path: "/" },
          { name: "Recommendations", path: "/recommendations" },
          { name: "Cart", path: "/cart" },
          { name: "Wishlist", path: "/wishlist" },
        ];

  return (
    <aside className="w-64 p-4 bg-black shadow-sm">
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.path}>
            <Link to={i.path} className="block hover:text-blue-600 text-blue-200">
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
