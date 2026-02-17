// src/components/instructor/AcademicTable.tsx
import React from "react";

const projects = [
  {
    ficha: "4525652",
    proyecto: "SGFC",
    aprendices: 5,
    avance: 50,
    ultimaActividad: "22/12/22",
  },
  {
    ficha: "2535215",
    proyecto: "PetConnect",
    aprendices: 4,
    avance: 50,
    ultimaActividad: "22/12/22",
  },
  {
    ficha: "2545632",
    proyecto: "CultivaMarket",
    aprendices: 5,
    avance: 50,
    ultimaActividad: "22/12/22",
  },
];

const AcademicTable: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Seguimiento Académico
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ficha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Proyecto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nº Aprendices
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Última Actividad
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {project.ficha}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.proyecto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.aprendices}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.avance}%{" "}
                  <span className="ml-1 text-gray-400">☐</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.ultimaActividad}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Aquí podrías poner los botones de paginación (1,2,3... Next) */}
    </div>
  );
};

export default AcademicTable;