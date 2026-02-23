// src/components/aprendiz/ProyectoStats.tsx
import React from "react";
import { FileText, CheckSquare, Clock, AlertCircle } from "lucide-react";

const ProyectoStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <FileText size={20} className="text-blue-500" />
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            Total
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-800">12</p>
        <p className="text-xs text-gray-500">Documentos totales</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <CheckSquare size={20} className="text-green-500" />
          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
            Completados
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-800">8</p>
        <p className="text-xs text-gray-500">Documentos finalizados</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <Clock size={20} className="text-yellow-500" />
          <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
            Pendientes
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-800">3</p>
        <p className="text-xs text-gray-500">En progreso</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <AlertCircle size={20} className="text-red-500" />
          <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
            Revisar
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-800">1</p>
        <p className="text-xs text-gray-500">Requiere atención</p>
      </div>
    </div>
  );
};

export default ProyectoStats;