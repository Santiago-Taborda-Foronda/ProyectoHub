// src/components/aprendiz/ProyectoDesarrollo.tsx
import React from "react";
import { ChevronRight, Users, Calendar } from "lucide-react";

const ProyectoDesarrollo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Proyecto en desarrollo
      </h3>
      
      <div className="space-y-3">
        {/* Instructor */}
        <div className="flex items-start">
          <Users size={18} className="text-gray-400 mt-0.5 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Instructor</p>
            <p className="font-medium text-gray-800">Javier Martinez</p>
          </div>
        </div>

        {/* Integrantes */}
        <div className="flex items-start">
          <Users size={18} className="text-gray-400 mt-0.5 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Integrantes</p>
            <p className="text-sm text-gray-800">Alex Perea, checo Perez, Maria Guzmán</p>
          </div>
        </div>

        {/* Última actualización */}
        <div className="flex items-start">
          <Calendar size={18} className="text-gray-400 mt-0.5 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Última actualización</p>
            <p className="text-sm text-gray-800">12/02/2026</p>
          </div>
        </div>

        {/* Botón Ver detalles */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
          Ver detalles
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProyectoDesarrollo;