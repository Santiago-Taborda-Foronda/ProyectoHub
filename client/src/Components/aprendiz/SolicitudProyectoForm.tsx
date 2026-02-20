// src/components/aprendiz/SolicitudProyectoForm.tsx
import React, { useState } from "react";
import { X, Send, HelpCircle, FileText, Users, Calendar } from "lucide-react";

const SolicitudProyectoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    ficha: "",
    descripcion: "",
    problema: "",
    meta: "",
    integrantes: [""],
    tecnologias: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar la solicitud
    console.log("Formulario enviado:", formData);
    // Mostrar mensaje de éxito o redirigir
  };

  const handleCancel = () => {
    // Limpiar formulario o redirigir
    setFormData({
      titulo: "",
      ficha: "",
      descripcion: "",
      problema: "",
      meta: "",
      integrantes: [""],
      tecnologias: [""],
    });
  };

  const agregarIntegrante = () => {
    setFormData((prev) => ({
      ...prev,
      integrantes: [...prev.integrantes, ""],
    }));
  };

  const agregarTecnologia = () => {
    setFormData((prev) => ({
      ...prev,
      tecnologias: [...prev.tecnologias, ""],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="space-y-6">
          {/* Nombre del proyecto / Título */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre del proyecto / Título <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ingrese el nombre de su proyecto..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Máximo 100 caracteres
            </p>
          </div>

          {/* Grid de 2 columnas para Ficha y Fecha estimada */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Número de Ficha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Ficha <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Users size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="ficha"
                  value={formData.ficha}
                  onChange={handleChange}
                  placeholder="Ej: 1234567"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Fecha estimada de inicio (opcional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha estimada de inicio
              </label>
              <div className="relative">
                <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="fechaInicio"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Descripción del proyecto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción del proyecto <span className="text-red-500">*</span>
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows={4}
              placeholder="Describa brevemente en qué consiste el proyecto, el problema a resolver y el alcance..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Problema del Proyecto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Problema del Proyecto <span className="text-red-500">*</span>
            </label>
            <textarea
              name="problema"
              value={formData.problema}
              onChange={handleChange}
              rows={3}
              placeholder="¿Cuál es el problema específico que busca resolver?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Meta principal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta principal del proyecto <span className="text-red-500">*</span>
            </label>
            <textarea
              name="meta"
              value={formData.meta}
              onChange={handleChange}
              rows={2}
              placeholder="¿Cuál es la meta principal a alcanzar con la ejecución de este proyecto?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Integrantes del equipo (dinámico) */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Integrantes del equipo
              </label>
              <button
                type="button"
                onClick={agregarIntegrante}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                + Agregar integrante
              </button>
            </div>
            <div className="space-y-2">
              {formData.integrantes.map((integrante, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder={`Nombre del integrante ${index + 1}`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      className="px-3 py-2 text-gray-400 hover:text-red-500"
                      onClick={() => {
                        const nuevos = formData.integrantes.filter((_, i) => i !== index);
                        setFormData((prev) => ({ ...prev, integrantes: nuevos }));
                      }}
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologías a utilizar (dinámico) */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Tecnologías a utilizar
              </label>
              <button
                type="button"
                onClick={agregarTecnologia}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                + Agregar tecnología
              </button>
            </div>
            <div className="space-y-2">
              {formData.tecnologias.map((tec, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder={`Tecnología ${index + 1}`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      className="px-3 py-2 text-gray-400 hover:text-red-500"
                      onClick={() => {
                        const nuevos = formData.tecnologias.filter((_, i) => i !== index);
                        setFormData((prev) => ({ ...prev, tecnologias: nuevos }));
                      }}
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Área de ayuda / información adicional */}
          <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
            <HelpCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800 font-medium">Información importante</p>
              <p className="text-sm text-blue-600">
                Tu solicitud será revisada por un instructor. Recibirás una notificación cuando sea aprobada o si se requieren cambios.
              </p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <X size={18} />
              Cancelar solicitud
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Enviar solicitud
            </button>
          </div>
        </div>
      </form>

      {/* Barra de progreso de la solicitud (opcional) */}
      <div className="bg-gray-50 px-6 py-3 rounded-b-lg border-t">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full"
              style={{ 
                width: `${
                  Object.values(formData).filter(v => 
                    typeof v === 'string' ? v.length > 0 : v.some((i: string) => i.length > 0)
                  ).length * 20
                }%` 
              }}
            />
          </div>
          <span className="text-xs text-gray-500">
            Completitud del formulario
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolicitudProyectoForm;