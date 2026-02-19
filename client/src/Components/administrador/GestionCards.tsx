// src/components/admin/GestionCards.tsx
import React from "react";
import { Users, FolderOpen, BookOpen, FileText, ChevronRight } from "lucide-react";

const gestionItems = [
  {
    id: 1,
    titulo: "Gestión de usuarios",
    icono: Users,
    color: "bg-blue-500",
    href: "/admin/usuarios"
  },
  {
    id: 2,
    titulo: "Gestión de Proyectos",
    icono: FolderOpen,
    color: "bg-green-500",
    href: "/admin/proyectos"
  },
  {
    id: 3,
    titulo: "Gestión Académica",
    icono: BookOpen,
    color: "bg-purple-500",
    href: "/admin/academica"
  },
  {
    id: 4,
    titulo: "Gestión Documental",
    icono: FileText,
    color: "bg-orange-500",
    href: "/admin/documentos"
  },
  {
    id: 5,
    titulo: "Reportes y Seguimiento",
    icono: FileText,
    color: "bg-red-500",
    href: "/admin/reportes"
  },
];

const GestionCards: React.FC = () => {
  return (
    <>
      {gestionItems.map((item) => {
        const Icono = item.icono;
        return (
          <a
            key={item.id}
            href={item.href}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`${item.color} p-2 rounded-lg`}>
                  <Icono className="text-white" size={20} />
                </div>
                <span className="font-medium text-gray-700">{item.titulo}</span>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors" size={20} />
            </div>
          </a>
        );
      })}
    </>
  );
};

export default GestionCards;