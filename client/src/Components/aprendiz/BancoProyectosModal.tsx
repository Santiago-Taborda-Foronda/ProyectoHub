// src/components/aprendiz/BancoProyectosModal.tsx
import React, { useState } from "react";
import {
  X,
  Calendar,
  Users,
  Code,
  BookOpen,
  Star,
  FileText,
  Download,
  Eye,
  Award,
  User,
  ChevronRight,
  Github,
  ExternalLink,
  FileArchive,
  File,
  Image,
  Video
} from "lucide-react";

interface Props {
  proyecto: any;
  onClose: () => void;
}

const BancoProyectosModal: React.FC<Props> = ({ proyecto, onClose }) => {
  const [activeTab, setActiveTab] = useState<"documentos" | "tecnologias" | "equipo">("documentos");

  // Función para obtener el ícono según el tipo de archivo
  const getFileIcon = (tipo: string) => {
    switch (tipo) {
      case "PDF": return <FileText size={18} className="text-red-500" />;
      case "ZIP": return <FileArchive size={18} className="text-yellow-600" />;
      case "EXE": return <File size={18} className="text-purple-500" />;
      case "APK": return <File size={18} className="text-orange-500" />;
      case "FIG": return <Image size={18} className="text-pink-500" />;
      case "SQL": return <FileText size={18} className="text-blue-500" />;
      case "INO": return <Code size={18} className="text-green-500" />;
      default: return <File size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header con imagen de fondo */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
          
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl font-bold text-white mb-2">{proyecto.nombre}</h2>
            <div className="flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                {proyecto.programa}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white flex items-center gap-1">
                <Calendar size={14} />
                {proyecto.año}
              </span>
              <span className="bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white flex items-center gap-1">
                <Star size={14} />
                {proyecto.calificacion}
              </span>
            </div>
          </div>
        </div>

        {/* Contenido con scroll */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
          {/* Descripción */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Descripción del proyecto</h3>
            <p className="text-gray-600">{proyecto.descripcion}</p>
          </div>

          {/* Info rápida en cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Integrantes</p>
              <p className="text-lg font-bold text-gray-800">{proyecto.integrantes}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Documentos</p>
              <p className="text-lg font-bold text-gray-800">{proyecto.documentos}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Instructor</p>
              <p className="text-sm font-medium text-gray-800 truncate">{proyecto.instructor}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Fecha creación</p>
              <p className="text-sm font-medium text-gray-800">{proyecto.fechaCreacion}</p>
            </div>
          </div>

          {/* Tabs de navegación */}
          <div className="border-b border-gray-200 mb-4">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("documentos")}
                className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "documentos"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Documentos y entregables
              </button>
              <button
                onClick={() => setActiveTab("tecnologias")}
                className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "tecnologias"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Tecnologías utilizadas
              </button>
              <button
                onClick={() => setActiveTab("equipo")}
                className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "equipo"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Equipo de trabajo
              </button>
            </div>
          </div>

          {/* Contenido según tab */}
          <div className="min-h-[200px]">
            {/* Tab de Documentos */}
            {activeTab === "documentos" && (
              <div className="space-y-3">
                {proyecto.entregables.map((doc: any, idx: number) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {getFileIcon(doc.tipo)}
                      <div>
                        <p className="text-sm font-medium text-gray-800">{doc.nombre}</p>
                        <p className="text-xs text-gray-500">Tipo: {doc.tipo}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg">
                        <Eye size={18} className="text-gray-500" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg">
                        <Download size={18} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Repositorio (si existe) */}
                <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-gray-700" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Repositorio en GitHub</p>
                      <p className="text-xs text-gray-500">Código fuente completo</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                  >
                    Ver repositorio
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )}

            {/* Tab de Tecnologías */}
            {activeTab === "tecnologias" && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {proyecto.tecnologias.map((tech: string, idx: number) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-3 flex items-center gap-3"
                  >
                    <Code size={18} className="text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab de Equipo */}
            {activeTab === "equipo" && (
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <User size={18} className="text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Instructor líder</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">{proyecto.instructor}</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={18} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Integrantes del equipo</span>
                  </div>
                  <div className="ml-8 space-y-2">
                    {[1, 2, 3, 4].slice(0, proyecto.integrantes).map((_, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        Integrante {idx + 1}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Documentación adicional */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Documentación relacionada</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="text-left p-2 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <FileText size={16} className="text-gray-400" />
                <span className="text-xs text-gray-600">Acta de sustentación</span>
              </button>
              <button className="text-left p-2 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <FileText size={16} className="text-gray-400" />
                <span className="text-xs text-gray-600">Evaluación final</span>
              </button>
              <button className="text-left p-2 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <FileText size={16} className="text-gray-400" />
                <span className="text-xs text-gray-600">Video presentación</span>
              </button>
              <button className="text-left p-2 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <FileText size={16} className="text-gray-400" />
                <span className="text-xs text-gray-600">Poster científico</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cerrar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Download size={18} />
            Descargar todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default BancoProyectosModal;