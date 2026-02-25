// src/pages/aprendiz/documentos/PlanteamientoProblema.tsx
import React, { useState } from "react";
import DocumentoLayout from "../../../Components/aprendiz/documentos/DocumentoLayout";
import CampoTexto from "../../../Components/aprendiz/documentos/CampoTexto";
import ListaItems from "../../../Components/aprendiz/documentos/ListaItems";

const PlanteamientoProblema: React.FC = () => {
  const [formData, setFormData] = useState({
    // Información básica (no editable, solo metadata)
    proyecto: "SenaUnity",
    ficha: "2545632",
    instructor: "Javier Martínez",
    fechaCreacion: "12 de diciembre de 2025",
    version: "1.2",
    estado: "En revisión",

    // Contenido del documento
    descripcionProblema: `Actualmente en el SENA, los aprendices enfrentan dificultades para gestionar y dar seguimiento a sus proyectos formativos. La información se encuentra dispersa en diferentes medios (documentos locales, correos electrónicos, carpetas compartidas) lo que genera:

• Pérdida de información importante
• Dificultad para hacer seguimiento por parte de los instructores
• Falta de estandarización en la documentación
• Problemas de colaboración entre integrantes del equipo

Esta situación afecta la calidad de los proyectos y el proceso de aprendizaje, ya que los aprendices dedican más tiempo a organizar la información que a desarrollar las soluciones.`,

    preguntaInvestigacion: "¿Cómo mejorar la gestión y validación de proyectos formativos en el SENA mediante una plataforma centralizada que facilite el seguimiento, la colaboración y la estandarización documental?",

    objetivoGeneral: "Desarrollar una plataforma web para la gestión y validación de proyectos formativos que centralice la documentación, facilite el seguimiento por parte de instructores y promueva la colaboración entre aprendices del SENA.",

    objetivosEspecificos: [
      "Diseñar una interfaz intuitiva que permita a los aprendices gestionar la documentación de sus proyectos de manera organizada",
      "Implementar un sistema de roles (aprendiz, instructor, administrador) que controle el acceso y las acciones en la plataforma",
      "Desarrollar un módulo de seguimiento que permita a los instructores evaluar el progreso de los proyectos",
      "Crear un repositorio documental con plantillas estandarizadas para los diferentes entregables del proyecto",
      "Incorporar un sistema de notificaciones para mantener informados a todos los participantes sobre cambios y actualizaciones"
    ],

    justificacion: `La implementación de ProyectoHUB beneficiará significativamente a la comunidad educativa del SENA:

Para los aprendices, proporcionará una herramienta centralizada que facilitará la organización de sus proyectos, permitiéndoles enfocarse en el desarrollo de soluciones en lugar de en la gestión documental.

Para los instructores, ofrecerá visibilidad en tiempo real del progreso de los proyectos, facilitando la retroalimentación oportuna y el seguimiento académico.

Para la institución, permitirá estandarizar los procesos de documentación de proyectos, creando un repositorio de conocimiento que podrá ser consultado por futuras generaciones.

Además, la plataforma fomentará habilidades de trabajo colaborativo, gestión de proyectos y documentación técnica, competencias fundamentales para el desarrollo profesional de los aprendices.`
  });

  const handleSave = () => {
    console.log("Guardando cambios:", formData);
    // Aquí iría la lógica para guardar en backend
  };

  return (
    <DocumentoLayout
      titulo="Planteamiento del Problema"
      codigo="PT-PP-01"
      onSave={handleSave}
    >
      <div className="space-y-8">
        {/* Metadata (información no editable) */}
        <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-500">Proyecto</p>
            <p className="text-sm font-medium text-gray-800">{formData.proyecto}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Ficha</p>
            <p className="text-sm font-medium text-gray-800">{formData.ficha}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Instructor</p>
            <p className="text-sm font-medium text-gray-800">{formData.instructor}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Versión</p>
            <p className="text-sm font-medium text-gray-800">{formData.version}</p>
          </div>
        </div>

        {/* Descripción del problema */}
        <CampoTexto
          label="Descripción del problema"
          value={formData.descripcionProblema}
          onChange={(value) => setFormData({ ...formData, descripcionProblema: value })}
          placeholder="Describe detalladamente el problema que se busca resolver..."
          required
          rows={8}
          helperText="Incluye contexto, causas y consecuencias del problema identificado."
        />

        {/* Pregunta de investigación */}
        <CampoTexto
          label="Pregunta de investigación"
          value={formData.preguntaInvestigacion}
          onChange={(value) => setFormData({ ...formData, preguntaInvestigacion: value })}
          placeholder="Formula la pregunta que guiará la investigación..."
          required
          rows={2}
          helperText="Debe ser clara, específica y orientar el desarrollo del proyecto."
        />

        {/* Objetivo general */}
        <CampoTexto
          label="Objetivo general"
          value={formData.objetivoGeneral}
          onChange={(value) => setFormData({ ...formData, objetivoGeneral: value })}
          placeholder="Define el objetivo principal del proyecto..."
          required
          rows={2}
          helperText="Responde a la pregunta: ¿qué se espera lograr con el proyecto?"
        />

        {/* Objetivos específicos */}
        <ListaItems
          label="Objetivos específicos"
          items={formData.objetivosEspecificos}
          onChange={(items) => setFormData({ ...formData, objetivosEspecificos: items })}
          placeholder="Escribe un objetivo específico"
          required
        />

        {/* Justificación */}
        <CampoTexto
          label="Justificación"
          value={formData.justificacion}
          onChange={(value) => setFormData({ ...formData, justificacion: value })}
          placeholder="Explica por qué es importante realizar este proyecto..."
          required
          rows={8}
          helperText="Argumenta la relevancia, beneficios y aportes del proyecto."
        />

        {/* Sección de comentarios (opcional) */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Comentarios</h3>
          
          <div className="space-y-4">
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
                    El objetivo general debería ser más específico. ¿Podríamos incluir las tecnologías a utilizar?
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <textarea
                placeholder="Añadir un comentario..."
                rows={2}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors self-end">
                Comentar
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocumentoLayout>
  );
};

export default PlanteamientoProblema;