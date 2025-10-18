import React from "react";
import Sidebar from "../../components/Sidebar";

export default function CustomerLayout({ children }) {
  return (
    <div className="flex flex-1">
      <Sidebar section="customer" />
      {children}
    </div>
  );
}
