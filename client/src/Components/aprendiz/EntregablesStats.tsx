// src/components/aprendiz/EntregablesStats.tsx
import React from "react";
import { CheckCircle, Clock, Send, AlertCircle } from "lucide-react";

const statsData = [
  {
    id: 1,
    titulo: "Aprobados",
    valor: "12",
    icono: CheckCircle,
    color: "bg-green-500",
    bgLight: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    titulo: "Pendientes",
    valor: "05",
    icono: Clock,
    color: "bg-yellow-500",
    bgLight: "bg-yellow-50",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-200",
  },
  {
    id: 3,
    titulo: "Enviados",
    valor: "03",
    icono: Send,
    color: "bg-blue-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: 4,
    titulo: "Rechazados",
    valor: "02",
    icono: AlertCircle,
    color: "bg-red-500",
    bgLight: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
  },
];

const EntregablesStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statsData.map((stat) => {
        const Icono = stat.icono;
        return (
          <div
            key={stat.id}
            className={`bg-white p-5 rounded-xl shadow-sm border ${stat.borderColor} hover:shadow-md transition-all duration-300 transform hover:scale-105`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.titulo}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.valor}</p>
              </div>
              <div className={`${stat.bgLight} p-3 rounded-lg`}>
                <Icono className={stat.textColor} size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntregablesStats;