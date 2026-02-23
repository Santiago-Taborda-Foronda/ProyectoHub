// src/components/aprendiz/ProyectoHeader.tsx
import React from "react";
import { Calendar, Users, BookOpen, Hash, Edit3 } from "lucide-react";

interface Props {
  proyecto: {
    nombre: string;
    descripcion: string;
    fechaCreacion: string;
    estado: string;
    instructor: string;
    integrantes: string[];
    ficha: string;
    programa: string;
  };
}

const ProyectoHeader: React.FC<Props> = ({ proyecto }) => {
  const estadoColors = {
    "Planeado": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "En Progreso": "bg-blue-100 text-blue-700 border-blue-200",
    "En Pausa": "bg-orange-100 text-orange-700 border-orange-200",
    "Completado": "bg-green-100 text-green-700 border-green-200",
    "Cancelado": "bg-red-100 text-red-700 border-red-200",
  };

  const colorEstado = estadoColors[proyecto.estado as keyof typeof estadoColors] || estadoColors["Planeado"];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-800">{proyecto.nombre}</h2>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colorEstado}`}>
              {proyecto.estado}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Calendar size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Creado</p>
                <p className="text-sm font-medium text-gray-800">{proyecto.fechaCreacion}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Users size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Instructor</p>
                <p className="text-sm font-medium text-gray-800">{proyecto.instructor}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Hash size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Ficha</p>
                <p className="text-sm font-medium text-gray-800">{proyecto.ficha}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <BookOpen size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Programa</p>
                <p className="text-sm font-medium text-gray-800">{proyecto.programa}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 md:ml-6">
          <button className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <Edit3 size={18} />
            Editar proyecto
          </button>
        </div>
      </div>

      {/* Integrantes */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2">Integrantes del equipo</p>
        <div className="flex flex-wrap gap-2">
          {proyecto.integrantes.map((integrante, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg"
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                {integrante.charAt(0)}
              </div>
              <span className="text-sm text-gray-700">{integrante}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectoHeader;