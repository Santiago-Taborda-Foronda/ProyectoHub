// src/components/aprendiz/AprendizSummaryCards.tsx
import React from "react";
import { FileText, Clock, Bell } from "lucide-react";

const AprendizSummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Card 1: Proyectos creados */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <FileText className="text-purple-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Proyectos creados</p>
          <p className="text-2xl font-bold text-gray-800">01</p>
        </div>
      </div>

      {/* Card 2: Entregas pendientes */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-orange-100 p-3 rounded-full mr-4">
          <Clock className="text-orange-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Entregas pendientes</p>
          <p className="text-2xl font-bold text-gray-800">02</p>
        </div>
      </div>

      {/* Card 3: Notificaciones nuevas */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-red-100 p-3 rounded-full mr-4">
          <Bell className="text-red-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Notificaciones nuevas</p>
          <p className="text-2xl font-bold text-gray-800">02</p>
        </div>
      </div>
    </div>
  );
};

export default AprendizSummaryCards;