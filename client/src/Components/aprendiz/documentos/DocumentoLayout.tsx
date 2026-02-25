// src/Components/aprendiz/documentos/DocumentoLayout.tsx
import React from "react";
import { Save, Download, History, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  titulo: string;
  codigo: string;
  onSave?: () => void;
}

const DocumentoLayout: React.FC<Props> = ({ children, titulo, codigo, onSave }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fijo */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-6 py-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <button
              onClick={() => navigate("/aprendiz/mis-proyectos")}
              className="hover:text-gray-700 flex items-center gap-1"
            >
              <ArrowLeft size={14} />
              <span>Mis Proyectos</span>
            </button>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{codigo}</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">{titulo}</span>
          </div>

          {/* Título y acciones */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{titulo}</h1>
              <p className="text-sm text-gray-500 mt-1">{codigo}</p>
            </div>

            <div className="flex items-center gap-2">
              {/* Info de colaboradores */}
              <div className="flex items-center -space-x-2 mr-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                  HR
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                  FA
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                  MG
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs font-medium">
                  +2
                </div>
              </div>

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <History size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Download size={20} className="text-gray-600" />
              </button>
              <button
                onClick={onSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save size={18} />
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido con scroll */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DocumentoLayout;