// src/components/admin/ProyectosRecientes.tsx
import React from "react";
import { MoreHorizontal } from "lucide-react";

const proyectosRecientes = [
  {
    id: 1,
    nombre: "SGFC",
    estado: "En Pausa",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    id: 2,
    nombre: "CultivaMarket",
    estado: "Completado",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    nombre: "PetConnect",
    estado: "En Progreso",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

const ProyectosRecientes: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Gestión de Proyectos Recientes
      </h3>
      <div className="space-y-4">
        {proyectosRecientes.map((proyecto) => (
          <div key={proyecto.id} className="flex items-center justify-between">
            <span className="font-medium text-gray-800">{proyecto.nombre}</span>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${proyecto.bgColor} ${proyecto.color}`}
              >
                {proyecto.estado}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full text-center text-sm text-blue-600 hover:text-blue-800 hover:underline">
        Ver todos los Proyectos
      </button>
    </div>
  );
};

export default ProyectosRecientes;