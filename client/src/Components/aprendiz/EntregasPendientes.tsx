// src/components/aprendiz/EntregasPendientes.tsx
import React from "react";
import { Calendar, Clock, ChevronRight } from "lucide-react";

// Datos de ejemplo
const entregas = [
  {
    id: 1,
    instructor: "Javier Martínez",
    fechaInicio: "10/02/2026",
    fechaFinal: "14/02/2026",
    titulo: "Manual del usuario",
  },
  {
    id: 2,
    instructor: "María González",
    fechaInicio: "12/02/2026",
    fechaFinal: "16/02/2026",
    titulo: "Documentación técnica",
  },
];

const EntregasPendientes: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Entregas pendientes
      </h3>
      
      <div className="space-y-4">
        {entregas.map((entrega) => (
          <div key={entrega.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex items-start mb-2">
              <Clock size={18} className="text-gray-400 mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Instructor</p>
                <p className="font-medium text-gray-800">{entrega.instructor}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 ml-7">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={14} className="mr-1" />
                <span>Inicio: {entrega.fechaInicio}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={14} className="mr-1" />
                <span>Final: {entrega.fechaFinal}</span>
              </div>
            </div>

            <div className="mt-2 ml-7">
              <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
                Ver entrega <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntregasPendientes;