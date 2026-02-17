// src/layouts/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

interface Props {
  userRole: 'admin' | 'instructor' | 'aprendiz';
}

export default function DashboardLayout({ userRole }: Props) {
  return (
    <div className="flex h-screen">
      <Sidebar role={userRole} />
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}