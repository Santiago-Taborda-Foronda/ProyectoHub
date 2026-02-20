// src/components/aprendiz/BancoProyectosCard.tsx
import React from "react";
import { 
  Calendar, 
  Users, 
  Code, 
  BookOpen, 
  Star, 
  FileText,
  ChevronRight,
  Award
} from "lucide-react";

interface Props {
  proyecto: any;
  onViewDetails: (proyecto: any) => void;
}

const BancoProyectosCard: React.FC<Props> = ({ proyecto, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
      {/* Imagen del proyecto (simulada con gradiente) */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Award size={12} className="text-yellow-500" />
          <span>{proyecto.calificacion}</span>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
          {proyecto.año}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
          {proyecto.nombre}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {proyecto.descripcion}
        </p>

        {/* Programa e instructor */}
        <div className="flex items-start gap-2 mb-2">
          <BookOpen size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Programa</p>
            <p className="text-xs font-medium text-gray-700 line-clamp-1">
              {proyecto.programa}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-3">
          <Users size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Instructor</p>
            <p className="text-xs font-medium text-gray-700">
              {proyecto.instructor}
            </p>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1.5">
            <Code size={14} className="text-gray-400" />
            <span className="text-xs text-gray-500">Tecnologías</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {proyecto.tecnologias.slice(0, 3).map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {proyecto.tecnologias.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                +{proyecto.tecnologias.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{proyecto.integrantes} integrantes</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText size={14} />
            <span>{proyecto.documentos} docs</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{proyecto.fechaCreacion}</span>
          </div>
        </div>

        {/* Botón de acción */}
        <button
          onClick={() => onViewDetails(proyecto)}
          className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group/btn"
        >
          <span className="text-sm font-medium text-gray-700 group-hover/btn:text-blue-600">
            Ver proyecto completo
          </span>
          <ChevronRight size={16} className="text-gray-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
};

export default BancoProyectosCard;