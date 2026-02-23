// src/components/aprendiz/ActividadReciente.tsx
import React from "react";
import { Clock, User, FileText, Image, Code, MoreHorizontal } from "lucide-react";

const actividadesData = [
  {
    id: 1,
    usuario: "Hector Rivera",
    iniciales: "HR",
    accion: "Modificación de documento",
    documento: "Información general del sistema",
    tiempo: "Hace 2H",
    tipo: "edit",
  },
  {
    id: 2,
    usuario: "Fernando Alonso",
    iniciales: "FA",
    accion: "Añadido una imagen al módulo de sistema",
    documento: "Información de requisitos funcionales",
    tiempo: "Hace 8H",
    tipo: "image",
  },
  {
    id: 3,
    usuario: "María Guzmán",
    iniciales: "MG",
    accion: "Actualización de documento",
    documento: "Manual de usuario",
    tiempo: "Hace 1D",
    tipo: "edit",
  },
  {
    id: 4,
    usuario: "Alex Perea",
    iniciales: "AP",
    accion: "Subida de nuevo archivo",
    documento: "Prototipado versión 2",
    tiempo: "Hace 2D",
    tipo: "upload",
  },
  {
    id: 5,
    usuario: "Checo Pérez",
    iniciales: "CP",
    accion: "Comentario en documento",
    documento: "Especificación de requisitos",
    tiempo: "Hace 3D",
    tipo: "comment",
  },
];

const getIcono = (tipo: string) => {
  switch (tipo) {
    case "edit": return <FileText size={16} className="text-blue-500" />;
    case "image": return <Image size={16} className="text-purple-500" />;
    case "upload": return <Code size={16} className="text-green-500" />;
    default: return <FileText size={16} className="text-gray-500" />;
  }
};

const ActividadReciente: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Actividad reciente</h3>
      </div>

      <div className="divide-y divide-gray-200">
        {actividadesData.map((act) => (
          <div key={act.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-sm">
                {act.iniciales}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-800">{act.usuario}</span>
                  <span className="text-xs text-gray-500">{act.tiempo}</span>
                </div>
                
                <p className="text-xs text-gray-600 mb-1">
                  {act.accion}
                </p>
                
                <div className="flex items-center gap-2">
                  {getIcono(act.tipo)}
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    {act.documento}
                  </a>
                </div>
              </div>

              <button className="p-1 hover:bg-gray-200 rounded-lg">
                <MoreHorizontal size={14} className="text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 hover:underline">
          Ver toda la actividad
        </button>
      </div>
    </div>
  );
};

export default ActividadReciente;