// src/components/aprendiz/DocumentoModal.tsx
import React from "react";
import { 
  X, 
  FileText, 
  Download, 
  Eye, 
  Calendar,
  User,
  Clock,
  CheckCircle,
  Tag,
  Info
} from "lucide-react";

interface Props {
  documento: any;
  onClose: () => void;
}

const DocumentoModal: React.FC<Props> = ({ documento, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <div className="flex items-center gap-3">
            <FileText size={24} className="text-red-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{documento.nombre}</h3>
              <p className="text-sm text-gray-500">{documento.codigo}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          {/* Info del documento */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Tag size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">Tipo</span>
              </div>
              <p className="text-sm font-medium text-gray-800">{documento.tipo}</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">Estado</span>
              </div>
              <p className="text-sm font-medium text-gray-800">{documento.estado}</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">Última modificación</span>
              </div>
              <p className="text-sm font-medium text-gray-800">{documento.ultimaModificacion}</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <User size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">Modificado por</span>
              </div>
              <p className="text-sm font-medium text-gray-800">{documento.modificadoPor}</p>
            </div>
          </div>

          {/* Versiones del documento */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Historial de versiones</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Versión 1.2</p>
                    <p className="text-xs text-gray-500">Actualización de contenido • 10/02/2026</p>
                  </div>
                </div>
                <button className="text-sm text-blue-600 hover:underline">Ver</button>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Versión 1.1</p>
                    <p className="text-xs text-gray-500">Correcciones menores • 05/02/2026</p>
                  </div>
                </div>
                <button className="text-sm text-blue-600 hover:underline">Ver</button>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Versión 1.0</p>
                    <p className="text-xs text-gray-500">Versión inicial • 01/02/2026</p>
                  </div>
                </div>
                <button className="text-sm text-blue-600 hover:underline">Ver</button>
              </div>
            </div>
          </div>

          {/* Comentarios */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Comentarios</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-sm">
                  HR
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">Hector Rivera</span>
                      <span className="text-xs text-gray-500">Hace 2 horas</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Revisen la sección 3.2, hay que actualizar los requisitos funcionales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium text-sm">
                  FA
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">Fernando Alonso</span>
                      <span className="text-xs text-gray-500">Hace 5 horas</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ya hice las correcciones, por favor revisar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input de comentario */}
            <div className="mt-4">
              <textarea
                placeholder="Añadir un comentario..."
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="flex justify-end mt-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Comentar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-gray-400" />
            <span className="text-xs text-gray-500">Tamaño: {documento.tamaño}</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm">
              <Eye size={16} />
              Vista previa
            </button>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
              <Download size={16} />
              Descargar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentoModal;