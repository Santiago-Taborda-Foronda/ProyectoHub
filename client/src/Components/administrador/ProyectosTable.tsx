// src/components/admin/ProyectosTable.tsx
import React from "react";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

const proyectos = [
  {
    id: 1,
    nombre: "SGFC",
    lider: "Jonathan León",
    estado: "EN PAUSA",
    fecha: "2023/09/17",
    usuarios: 3,
    colorEstado: "text-yellow-600",
    bgEstado: "bg-yellow-100",
  },
  {
    id: 2,
    nombre: "PetConnect",
    lider: "Juan Jose Hidalgo",
    estado: "COMPLETADO",
    fecha: "2023/09/17",
    usuarios: 3,
    colorEstado: "text-blue-600",
    bgEstado: "bg-blue-100",
  },
  {
    id: 3,
    nombre: "CompuScan",
    lider: "José Gonzales",
    estado: "EN PROGRESO",
    fecha: "2023/09/17",
    usuarios: 3,
    colorEstado: "text-green-600",
    bgEstado: "bg-green-100",
  },
  {
    id: 4,
    nombre: "Ruta Jeep",
    lider: "Franchesca Triviño",
    estado: "COMPLETADO",
    fecha: "2023/09/17",
    usuarios: 3,
    colorEstado: "text-blue-600",
    bgEstado: "bg-blue-100",
  },
  {
    id: 5,
    nombre: "Sena Unity",
    lider: "Michelle Hincapié",
    estado: "CANCELADO",
    fecha: "2023/09/17",
    usuarios: 3,
    colorEstado: "text-red-600",
    bgEstado: "bg-red-100",
  },
  {
    id: 6,
    nombre: "CultivaMarket",
    lider: "Alex Perea",
    estado: "COMPLETADO",
    fecha: "2023/09/17",
    usuarios: 3,
    colorEstado: "text-blue-600",
    bgEstado: "bg-blue-100",
  },
];

const ProyectosTable: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Gestión de Proyectos
      </h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre de Proyecto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Líder de Proyecto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuarios
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {proyectos.map((proyecto) => (
              <tr key={proyecto.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {proyecto.nombre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {proyecto.lider}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${proyecto.bgEstado} ${proyecto.colorEstado}`}
                  >
                    {proyecto.estado}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {proyecto.fecha}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  +{proyecto.usuarios}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            <ChevronLeft size={18} />
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">2</button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">3</button>
          <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            <ChevronRight size={18} />
          </button>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
          Ver todos los Proyectos
        </button>
      </div>
    </div>
  );
};

export default ProyectosTable;