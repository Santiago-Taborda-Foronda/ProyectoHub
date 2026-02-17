// src/components/instructor/SummaryCards.tsx
import React from "react";
import { Users, FolderOpen, Clock } from "lucide-react"; // Ejemplo de iconos

const SummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Card 1: Mis Fichas */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Users className="text-blue-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Fichas Asignadas</p>
          <p className="text-2xl font-bold text-gray-800">5</p>
          <p className="text-xs text-gray-400">92 Aprendices</p>
        </div>
      </div>

      {/* Card 2: Mis Proyectos */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <FolderOpen className="text-green-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Proyectos en progreso</p>
          <p className="text-2xl font-bold text-gray-800">15</p>
          {/* Aquí podrías poner algo como "Evaluaciones Pendientes" si tienes el dato */}
        </div>
      </div>

      {/* Card 3: Evaluaciones Pendientes (o algo similar) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
        <div className="bg-yellow-100 p-3 rounded-full mr-4">
          <Clock className="text-yellow-600" size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Evaluaciones Pendientes</p>
          <p className="text-2xl font-bold text-gray-800">3</p>
          {/* <p className="text-xs text-gray-400">Próxima: 25/01</p> */}
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;