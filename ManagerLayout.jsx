import React from "react";
import Sidebar from "../../components/Sidebar";

export default function ManagerLayout({ children }) {
  return (
    <div className="flex flex-1">
      <Sidebar section="manager" />
      {children}
    </div>
  );
}
