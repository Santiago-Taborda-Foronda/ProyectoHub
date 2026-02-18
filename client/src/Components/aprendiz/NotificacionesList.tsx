// src/components/aprendiz/NotificacionesList.tsx
import React from "react";
import { MessageSquare, CheckCircle, Trash2 } from "lucide-react";

const notificaciones = [
  {
    id: 1,
    tipo: "Retroalimentación",
    tiempo: "Hace 13 Horas",
    titulo: "Nueva corrección en 'Manual del usuario'",
    descripcion: "El instructor ha dejado un comentario en el módulo manual de usuario.",
    icono: MessageSquare,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    tipo: "Aprobado",
    tiempo: "Hace 18 Horas",
    titulo: "Entrega 'Aprobada' por el Instructor",
    descripcion: "La entrega fue aprobada por el instructor.",
    icono: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

const NotificacionesList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Notificaciones nuevas
        </h3>
        <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800">
          <Trash2 size={16} />
          Limpiar notificaciones
        </button>
      </div>

      <div className="space-y-4">
        {notificaciones.map((notif) => {
          const Icono = notif.icono;
          return (
            <div key={notif.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
              <div className={`${notif.bgColor} p-2 rounded-full h-fit`}>
                <Icono size={20} className={notif.color} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800">{notif.tipo}</h4>
                  <span className="text-xs text-gray-500">{notif.tiempo}</span>
                </div>
                <p className="font-medium text-gray-700 text-sm mb-1">
                  {notif.titulo}
                </p>
                <p className="text-sm text-gray-600">{notif.descripcion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificacionesList;