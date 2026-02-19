// src/components/admin/AdminSummaryCards.tsx
import React from "react";
import { Clock, CheckCircle, Users, } from "lucide-react";

const AdminSummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Card 1: Proyectos Pendientes */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-yellow-100 p-3 rounded-full mr-4">
          <Clock className="text-yellow-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Proyectos Pendientes</p>
          <p className="text-2xl font-bold text-gray-800">7</p>
        </div>
      </div>

      {/* Card 2: Proyectos Activos */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <CheckCircle className="text-green-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Proyectos Activos</p>
          <p className="text-2xl font-bold text-gray-800">25</p>
        </div>
      </div>

      {/* Card 3: Usuarios Activos */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Users className="text-blue-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Usuarios Activos</p>
          <p className="text-2xl font-bold text-gray-800">125</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSummaryCards;