// src/components/aprendiz/EntregableModal.tsx
import React, { useState } from "react";
import { X, Upload, FileText, Calendar, User, MessageSquare, Download, Eye, RefreshCw } from "lucide-react";

interface Props {
  entregable: any;
  onClose: () => void;
}

const EntregableModal: React.FC<Props> = ({ entregable, onClose }) => {
  const [archivo, setArchivo] = useState<File | null>(null);
  const [comentario, setComentario] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArchivo(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Aquí iría la lógica de subida
    console.log("Subiendo:", { archivo, comentario });
    onClose();
  };

  const isPendiente = entregable.estado === "Pendiente";
  const isEnviado = entregable.estado === "Enviado";
  const isAprobado = entregable.estado === "Aprobado";
  const isRechazado = entregable.estado === "Rechazado";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h3 className="text-xl font-semibold text-gray-800">
            {isPendiente ? "Subir entregable" : "Detalles del entregable"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-6">
          {/* Información del entregable */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Nombre del entregable</p>
                <p className="font-medium text-gray-800">{entregable.nombre}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Fecha límite</p>
                  <p className="font-medium text-gray-800">{entregable.fechaLimite}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <User size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium text-gray-800">Javier Martínez</p>
                </div>
              </div>
            </div>

            {/* Estado actual */}
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 mt-2 rounded-full ${
                isAprobado ? 'bg-green-500' : 
                isRechazado ? 'bg-red-500' : 
                isEnviado ? 'bg-blue-500' : 
                'bg-yellow-500'
              }`} />
              <div>
                <p className="text-sm text-gray-500">Estado actual</p>
                <p className={`font-medium ${
                  isAprobado ? 'text-green-600' : 
                  isRechazado ? 'text-red-600' : 
                  isEnviado ? 'text-blue-600' : 
                  'text-yellow-600'
                }`}>
                  {entregable.estado}
                </p>
              </div>
            </div>
          </div>

          {/* Retroalimentación (si existe) */}
          {entregable.retroalimentacion && (
            <div className={`p-4 rounded-lg ${
              isAprobado ? 'bg-green-50' : 
              isRechazado ? 'bg-red-50' : 
              'bg-blue-50'
            }`}>
              <div className="flex items-start gap-3">
                <MessageSquare size={20} className={`mt-0.5 ${
                  isAprobado ? 'text-green-600' : 
                  isRechazado ? 'text-red-600' : 
                  'text-blue-600'
                }`} />
                <div>
                  <p className={`text-sm font-medium mb-1 ${
                    isAprobado ? 'text-green-800' : 
                    isRechazado ? 'text-red-800' : 
                    'text-blue-800'
                  }`}>
                    Retroalimentación del instructor
                  </p>
                  <p className={`text-sm ${
                    isAprobado ? 'text-green-600' : 
                    isRechazado ? 'text-red-600' : 
                    'text-blue-600'
                  }`}>
                    {entregable.retroalimentacion}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Archivos adjuntos (si existen) */}
          {(isEnviado || isAprobado || isRechazado) && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Archivos adjuntos</p>
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">entregable_v1.pdf</p>
                    <p className="text-xs text-gray-500">Subido el 05/11/2025 • 2.4 MB</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Eye size={18} className="text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Formulario de subida (solo para pendientes y rechazados) */}
          {(isPendiente || isRechazado) && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRechazado ? "Subir nueva versión" : "Subir archivo"}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload size={32} className="text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">
                      {archivo ? archivo.name : "Haz clic para seleccionar o arrastra un archivo"}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">
                      PDF, DOC, DOCX hasta 10MB
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios adicionales
                </label>
                <textarea
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  rows={3}
                  placeholder={isRechazado 
                    ? "Explica los cambios realizados según la retroalimentación..." 
                    : "Agrega algún comentario sobre tu entrega..."
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer con acciones */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
            {(isPendiente || isRechazado) && (
              <button
                onClick={handleSubmit}
                disabled={!archivo}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  archivo
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isRechazado ? <RefreshCw size={18} /> : <Upload size={18} />}
                {isRechazado ? "Reenviar entregable" : "Subir entregable"}
              </button>
            )}
            {(isEnviado || isAprobado) && (
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Descargar todo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntregableModal;