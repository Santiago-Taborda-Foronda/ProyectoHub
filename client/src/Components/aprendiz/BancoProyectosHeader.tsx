// src/components/aprendiz/BancoProyectosHeader.tsx
import React from "react";
import { BookOpen, TrendingUp } from "lucide-react";

const BancoProyectosHeader: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <span>Dashboard / Inicio</span>
        <span className="text-gray-400">•</span>
        <span className="text-blue-600 font-medium">Banco de Proyectos</span>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Banco de Proyectos</h1>
          <p className="text-gray-600 mt-1">
            Explora proyectos exitosos de generaciones anteriores para inspirarte
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
          <BookOpen className="text-blue-600" size={24} />
          <div>
            <p className="text-sm font-medium text-blue-800">+45 proyectos disponibles</p>
            <p className="text-xs text-blue-600">Actualizado semanalmente</p>
          </div>
        </div>
      </div>

      {/* Stats rápidas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500">Total proyectos</p>
          <p className="text-lg font-bold text-gray-800">45</p>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500">Programas</p>
          <p className="text-lg font-bold text-gray-800">6</p>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500">Tecnologías</p>
          <p className="text-lg font-bold text-gray-800">12</p>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500">Este año</p>
          <p className="text-lg font-bold text-gray-800">8</p>
        </div>
      </div>
    </div>
  );
};

export default BancoProyectosHeader;