// src/components/instructor/PendingEvaluations.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

const evaluations = [
  {
    id: 1,
    name: "Juan Perez",
    project: "PetConnect",
    limit: "25/01/2026",
  },
  {
    id: 2,
    name: "Carolina Lopez",
    project: "SGFC",
    limit: "28/01/2026",
  },
  {
    id: 3,
    name: "José Gonzales",
    project: "CultivaMarket",
    limit: "01/02/2026",
  },
];

const PendingEvaluations: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Evaluaciones Pendientes
      </h3>
      <div className="space-y-4">
        {evaluations.map((evalItem) => (
          <div
            key={evalItem.id}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-gray-800">{evalItem.name}</p>
              <p className="text-xs text-gray-500">
                {evalItem.project} · Límite: {evalItem.limit}
              </p>
            </div>
            <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
              Evaluar <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingEvaluations;