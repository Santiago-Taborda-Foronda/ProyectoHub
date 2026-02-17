// src/components/instructor/ProjectsList.tsx
import React from "react";
import { MoreHorizontal } from "lucide-react";

// Datos de ejemplo (idealmente vendrían de una API)
const projects = [
  {
    id: 1,
    name: "SGFC",
    lastMovement: "16/01/2026",
    ficha: "5436854",
    status: "En Progreso",
    statusColor: "text-green-600",
    statusBg: "bg-green-100",
  },
  {
    id: 2,
    name: "PetConnect",
    lastMovement: "16/01/2026",
    ficha: "5436854",
    status: "En Pausa",
    statusColor: "text-yellow-600",
    statusBg: "bg-yellow-100",
  },
  {
    id: 3,
    name: "CultivaMarket",
    lastMovement: "16/01/2026",
    ficha: "5436854",
    status: "Completado",
    statusColor: "text-blue-600",
    statusBg: "bg-blue-100",
  },
];

const ProjectsList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Mis Proyectos Asignados
        </h3>
        <button className="text-sm text-blue-600 hover:underline">
          Ver todos
        </button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">{project.name}</h4>
              <p className="text-xs text-gray-500">
                Último movimiento: {project.lastMovement} | Ficha:{" "}
                {project.ficha}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusBg} ${project.statusColor}`}
              >
                {project.status}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;