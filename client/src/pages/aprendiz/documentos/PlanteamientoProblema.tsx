// src/pages/aprendiz/documentos/PlanteamientoProblema.tsx
import React, { useState } from "react";
import DocumentoLayout from "../../../Components/aprendiz/documentos/DocumentoLayout";
import { HelpCircle, AlertCircle } from "lucide-react";

const PlanteamientoProblema: React.FC = () => {
  const [formData, setFormData] = useState({
    // Historial de revisión
    historialRevision: [
      {
        version: "1.0",
        fechaElaboracion: "24/11/2025",
        responsableElaboracion: "Juan Garcia",
        fechaAprobacion: "",
        responsableAprobacion: ""
      }
    ],
    
    // Cambios respecto a versión anterior
    cambiosVersion: [
      {
        version: "1.0",
        modificacion: "Creación de documento"
      }
    ],

    // Responsables e involucrados
    responsables: [
      {
        nombre: "Juan Garcia",
        tipo: "Responsable",
        rol: "Scrum Master",
        cargo: ""
      }
    ],

    // Referencias
    referencias: [
      {
        nombre: "",
        descripcion: "",
        link: ""
      }
    ],

    // Contenido del documento
    introduccion: `En el Servicio Nacional de Aprendizaje (SENA), la formación se centra en el desarrollo de proyectos formativos que transformen lo aprendido en clase a soluciones prácticas y funcionales. Sin embargo, la gestión de proyectos resulta ser más tediosa y tiene problemas recurrentes como la poca visibilidad y trazabilidad, además de la repetición de proyectos de manera involuntaria entre diferentes fichas. Esto puede tomarse como una ineficiencia, un desperdicio de potencial y tiempo de aprendices e instructores.`,

    descripcionGeneral: `ProjectHub es un sistema integral de gestión y validación de proyectos formativos, diseñado específicamente para crear un entorno de aprendizaje estructurado y colaborativo. Este software funcionará como un repositorio centralizado donde estudiantes y aprendices podrán registrar, gestionar y seleccionar proyectos que les permitan aplicar sus conocimientos teóricos a situaciones prácticas y reales.

Las características principales de ProjectHub incluyen:

• Registro y Documentación de Proyectos: Los aprendices podrán documentar de manera detallada sus proyectos, incluyendo objetivos, metodologías, cronogramas y resultados esperados. Esto no solo facilitará la organización, sino que también servirá como un recurso de aprendizaje para otros estudiantes.
• Interfaz Intuitiva: La plataforma contará con una interfaz fácil de usar que permitirá a los aprendices y instructores navegar sin complicaciones, asegurando que la tecnología no sea una barrera, sino una herramienta de apoyo.
• Solicitudes de Proyectos: Clientes internos o externos podrán presentar solicitudes de proyectos que respondan a necesidades específicas del mercado. Este mecanismo permitirá a los aprendices trabajar en proyectos relevantes y aplicados, mejorando su empleabilidad.
• Acompañamiento Personalizado: Los instructores podrán supervisar el avance de cada proyecto, ofrecer retroalimentación continua y guiar a los aprendices en la resolución de problemas. Esta interacción mejorará la calidad del aprendizaje y la pertinencia de los proyectos desarrollados.
• Evaluación y Seguimiento: ProjectHub integrará herramientas de evaluación que permitirán a los instructores medir el desempeño de los aprendices de manera objetiva y continua. Esto facilitará la identificación de áreas de mejora y el ajuste de estrategias de enseñanza.
• Historial de Proyectos: La plataforma mantendrá un registro histórico de todos los proyectos desarrollados, lo que permitirá a los aprendices y a los instructores aprender de experiencias pasadas, fomentar la reflexión y enriquecer el proceso de enseñanza-aprendizaje.

Con ProjectHub, se busca transformar la gestión de proyectos formativos en un proceso más eficiente, transparente y enriquecedor, que beneficie tanto a los aprendices como a los instructores, alineando la formación técnica con las demandas del entorno laboral.`,

    situacionActual: `Actualmente, el centro de formación gestiona la documentación de proyectos a través de Notion, utilizando plantillas definidas por el equipo de instructores. Aunque esta herramienta permite un cierto grado de organización, presenta varias limitaciones significativas:

• Gestión Informal: La falta de un proceso estandarizado para la solicitud, aprobación y seguimiento de proyectos resulta en una gestión informal que puede llevar a inconsistencias en la documentación y en la comunicación.
• Dificultades en el Seguimiento: Los instructores enfrentan desafíos al intentar monitorear el progreso de múltiples proyectos, lo que dificulta proporcionar retroalimentación o intervención oportuna.
• Acceso a Información: La dispersión de información en diferentes documentos y plataformas puede provocar que los estudiantes y los instructores tengan dificultades para acceder a proyectos previos, limitando el aprendizaje y la referencia.
• Falta de Interacción: La comunicación entre aprendices e instructores es limitada, lo que puede generar desinterés y falta de claridad sobre los objetivos y expectativas de los proyectos.
    
Esta situación actual no solo afecta la calidad de los proyectos desarrollados, sino que también puede desmotivar a los aprendices y obstaculizar su desarrollo profesional.`,

    situacionEsperada: `Con la implementación de ProjectHub, se anticipa una transformación positiva en la gestión de proyectos formativos. La situación esperada incluye:

• Estructura y Formalidad: ProjectHub establecerá un flujo de trabajo formalizado desde la solicitud hasta la aprobación y ejecución de proyectos, asegurando que cada etapa esté documentada y sea accesible para todos los involucrados.
• Mejora en la Colaboración: La plataforma integrará herramientas de comunicación que permitirán una interacción continua entre aprendices e instructores, facilitando la resolución de dudas y el intercambio de ideas en tiempo real.
• Acceso Centralizado a Información: Todos los proyectos estarán almacenados en un repositorio centralizado, facilitando la consulta de proyectos anteriores y permitiendo que los aprendices aprendan de experiencias pasadas.
• Evaluación Continua y Feedback: Los instructores podrán llevar a cabo evaluaciones continuas y proporcionar retroalimentación estructurada a los aprendices, lo que contribuirá a un aprendizaje más efectivo y a la mejora de la calidad de los proyectos.`,

    justificacion: `La implementación de ProjectHub se justifica por la necesidad urgente de mejorar la calidad y la eficiencia de la gestión de proyectos formativos. Las razones principales para esta iniciativa incluyen:

• Relevancia de los Proyectos: Con un sistema estructurado, los proyectos desarrollados podrán alinearse mejor con las necesidades del entorno laboral, lo que aumentará la pertinencia de la formación y la empleabilidad de los aprendices. ProjectHub facilitará la conexión entre las demandas del mercado y las capacidades formativas del centro.
• Desarrollo Integral de Competencias: La formalización de la gestión de proyectos permitirá a los aprendices desarrollar competencias técnicas y blandas de manera más efectiva, al tener acceso a un proceso de acompañamiento más riguroso y directo.
• Cultura de Aprendizaje Colaborativo: ProjectHub fomentará una cultura de colaboración y aprendizaje entre pares, donde los estudiantes podrán compartir experiencias, retos y soluciones, enriqueciendo su proceso educativo.
• Rendimiento y Motivación: La posibilidad de interactuar de manera continua con los instructores y tener acceso a un sistema que organiza y facilita la gestión de proyectos aumentará la motivación de los aprendices, contribuyendo a un ambiente de aprendizaje más dinámico y comprometido.
• Eficiencia en la Gestión: La implementación de un sistema digital para la gestión de proyectos permitirá optimizar recursos y tiempos, facilitando que los instructores dediquen más tiempo a la enseñanza y menos a la administración de documentos.

Esta justificación resalta la necesidad de un enfoque innovador y estructurado en la gestión de proyectos formativos, que no solo beneficiará a los aprendices, sino también a los instructores y a la institución en su conjunto.`,

    aspectosLegales: [
      {
        norma: "Ley 1581 de 2012",
        descripcion: "Establece disposiciones generales para la protección de datos personales en Colombia. Obliga a las entidades a garantizar la confidencialidad y el manejo adecuado de la información de los usuarios.",
        enlace: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
      },
      {
        norma: "Ley 23 de 1982",
        descripcion: "Regula la protección de los derechos de autor en Colombia, asegurando que los creadores y autores de obras sean reconocidos y se respeten sus derechos sobre sus creaciones.",
        enlace: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3431"
      },
      {
        norma: "Normativas del SENA",
        descripcion: "Directrices que regulan la formación técnica y profesional en Colombia, estableciendo requisitos y lineamientos para la gestión de proyectos en el contexto educativo.",
        enlace: "https://www.sena.edu.co/"
      },
      {
        norma: "Ley 527 de 1999",
        descripcion: "Regula el comercio electrónico y el uso de las tecnologías de información en Colombia, estableciendo pautas para la legalidad de las transacciones y la protección de datos.",
        enlace: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4276"
      },
      {
        norma: "Resolución 2270 de 2018",
        descripcion: "Define lineamientos para la protección de datos personales en el ámbito educativo y establece protocolos de seguridad para la información manejada en instituciones educativas.",
        enlace: "https://www.mineducacion.gov.co/"
      },
      {
        norma: "Ley de Protección de Datos Personales o Ley 1581 de 2012",
        descripcion: "Reconoce y protege el derecho que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos que sean susceptibles de tratamiento por entidades de naturaleza pública o privada.",
        enlace: "https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/"
      }
    ]
  });

  // Funciones para manejar cambios en tablas
  const handleHistorialChange = (index: number, field: string, value: string) => {
    const nuevosHistorial = [...formData.historialRevision];
    nuevosHistorial[index] = { ...nuevosHistorial[index], [field]: value };
    setFormData({ ...formData, historialRevision: nuevosHistorial });
  };

  const agregarHistorial = () => {
    setFormData({
      ...formData,
      historialRevision: [
        ...formData.historialRevision,
        { version: "", fechaElaboracion: "", responsableElaboracion: "", fechaAprobacion: "", responsableAprobacion: "" }
      ]
    });
  };

  const eliminarHistorial = (index: number) => {
    const nuevosHistorial = formData.historialRevision.filter((_, i) => i !== index);
    setFormData({ ...formData, historialRevision: nuevosHistorial });
  };

  const handleCambiosChange = (index: number, field: string, value: string) => {
    const nuevosCambios = [...formData.cambiosVersion];
    nuevosCambios[index] = { ...nuevosCambios[index], [field]: value };
    setFormData({ ...formData, cambiosVersion: nuevosCambios });
  };

  const agregarCambio = () => {
    setFormData({
      ...formData,
      cambiosVersion: [
        ...formData.cambiosVersion,
        { version: "", modificacion: "" }
      ]
    });
  };

  const eliminarCambio = (index: number) => {
    const nuevosCambios = formData.cambiosVersion.filter((_, i) => i !== index);
    setFormData({ ...formData, cambiosVersion: nuevosCambios });
  };

  const handleResponsableChange = (index: number, field: string, value: string) => {
    const nuevosResponsables = [...formData.responsables];
    nuevosResponsables[index] = { ...nuevosResponsables[index], [field]: value };
    setFormData({ ...formData, responsables: nuevosResponsables });
  };

  const agregarResponsable = () => {
    setFormData({
      ...formData,
      responsables: [
        ...formData.responsables,
        { nombre: "", tipo: "", rol: "", cargo: "" }
      ]
    });
  };

  const eliminarResponsable = (index: number) => {
    const nuevosResponsables = formData.responsables.filter((_, i) => i !== index);
    setFormData({ ...formData, responsables: nuevosResponsables });
  };

  const handleReferenciaChange = (index: number, field: string, value: string) => {
    const nuevasReferencias = [...formData.referencias];
    nuevasReferencias[index] = { ...nuevasReferencias[index], [field]: value };
    setFormData({ ...formData, referencias: nuevasReferencias });
  };

  const agregarReferencia = () => {
    setFormData({
      ...formData,
      referencias: [
        ...formData.referencias,
        { nombre: "", descripcion: "", link: "" }
      ]
    });
  };

  const eliminarReferencia = (index: number) => {
    const nuevasReferencias = formData.referencias.filter((_, i) => i !== index);
    setFormData({ ...formData, referencias: nuevasReferencias });
  };

  const handleAspectoLegalChange = (index: number, field: string, value: string) => {
    const nuevosAspectos = [...formData.aspectosLegales];
    nuevosAspectos[index] = { ...nuevosAspectos[index], [field]: value };
    setFormData({ ...formData, aspectosLegales: nuevosAspectos });
  };

  const agregarAspectoLegal = () => {
    setFormData({
      ...formData,
      aspectosLegales: [
        ...formData.aspectosLegales,
        { norma: "", descripcion: "", enlace: "" }
      ]
    });
  };

  const eliminarAspectoLegal = (index: number) => {
    const nuevosAspectos = formData.aspectosLegales.filter((_, i) => i !== index);
    setFormData({ ...formData, aspectosLegales: nuevosAspectos });
  };

  // Componente para mensaje de ayuda (texto explicativo que debe eliminarse)
  const MensajeAyuda = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4 rounded-r-lg flex items-start gap-2">
      <HelpCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-xs text-blue-700 font-medium mb-1">📝 Texto explicativo - Debe ser eliminado y reemplazado con el contenido real</p>
        <p className="text-sm text-blue-600">{children}</p>
      </div>
      <button className="text-blue-500 hover:text-blue-700 text-xs font-medium">
        Eliminar
      </button>
    </div>
  );

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
        {/* METADATA - Información del proyecto (no editable) */}
        <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-500">Proyecto</p>
            <p className="text-sm font-medium text-gray-800">ProyectoHub</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Ficha</p>
            <p className="text-sm font-medium text-gray-800">2545632</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Instructor</p>
            <p className="text-sm font-medium text-gray-800">Javier Martínez</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Última modificación</p>
            <p className="text-sm font-medium text-gray-800">25/02/2026</p>
          </div>
        </div>

        {/* 1. HISTORIAL DE REVISIÓN */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Historial de Revisión</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Versión</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Fecha Elaboración</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Responsable Elaboración</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Fecha Aprobación</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Responsable Aprobación</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {formData.historialRevision.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.version}
                        onChange={(e) => handleHistorialChange(index, "version", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.fechaElaboracion}
                        onChange={(e) => handleHistorialChange(index, "fechaElaboracion", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.responsableElaboracion}
                        onChange={(e) => handleHistorialChange(index, "responsableElaboracion", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.fechaAprobacion}
                        onChange={(e) => handleHistorialChange(index, "fechaAprobacion", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.responsableAprobacion}
                        onChange={(e) => handleHistorialChange(index, "responsableAprobacion", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => eliminarHistorial(index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={agregarHistorial}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            + Agregar fila
          </button>
        </section>

        {/* 2. CAMBIOS RESPECTO A VERSIÓN ANTERIOR */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cambios respecto a la versión anterior</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Versión</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Modificación respecto versión anterior</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {formData.cambiosVersion.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.version}
                        onChange={(e) => handleCambiosChange(index, "version", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.modificacion}
                        onChange={(e) => handleCambiosChange(index, "modificacion", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => eliminarCambio(index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={agregarCambio}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            + Agregar fila
          </button>
        </section>

        {/* 3. TABLA DE CONTENIDO (generada automáticamente) */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Tabla de Contenido</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Introducción</li>
              <li>Descripción General</li>
              <li>Situación Actual</li>
              <li>Situación Esperada</li>
              <li>Justificación</li>
              <li>Aspectos Legales</li>
            </ul>
          </div>
        </section>

        {/* 4. INTRODUCCIÓN */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">1. Introducción</h2>
          
          <MensajeAyuda>
            La introducción debe contextualizar al lector sobre el problema, explicar brevemente el proyecto y su importancia en el contexto del SENA. Debe responder a: ¿Qué problema se aborda? ¿Por qué es importante? ¿Qué se propone?
          </MensajeAyuda>

          <textarea
            value={formData.introduccion}
            onChange={(e) => setFormData({ ...formData, introduccion: e.target.value })}
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />

          {/* 4.1 Responsables e Involucrados */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">1.1 Responsables e Involucrados</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Nombre</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Tipo (Responsable/Involucrado)</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Rol</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Cargo</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.responsables.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={item.nombre}
                          onChange={(e) => handleResponsableChange(index, "nombre", e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <select
                          value={item.tipo}
                          onChange={(e) => handleResponsableChange(index, "tipo", e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded"
                        >
                          <option value="">Seleccionar</option>
                          <option value="Responsable">Responsable</option>
                          <option value="Involucrado">Involucrado</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={item.rol}
                          onChange={(e) => handleResponsableChange(index, "rol", e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={item.cargo}
                          onChange={(e) => handleResponsableChange(index, "cargo", e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => eliminarResponsable(index)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={agregarResponsable}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              + Agregar responsable
            </button>
          </div>

          {/* 4.2 Referencias */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">1.2 Referencias (Bibliografía o web Grafía)</h3>
            
            <MensajeAyuda>
              Incluir todas las fuentes bibliográficas o recursos web consultados para la elaboración de este documento.
            </MensajeAyuda>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Nombre</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Descripción</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Link Referencia</th>
                    <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.referencias.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={item.nombre}
                          onChange={(e) => handleReferenciaChange(index, "nombre", e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={item.descripcion}
                          onChange={(e) => handleReferenciaChange(index, "descripcion", e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={item.link}
                          onChange={(e) => handleReferenciaChange(index, "link", e.target.value)}
                          className="w-full px-2 py-1 border border-gray-200 rounded"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => eliminarReferencia(index)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={agregarReferencia}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              + Agregar referencia
            </button>
          </div>
        </section>

        {/* 5. DESCRIPCIÓN GENERAL */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">2. Descripción General</h2>
          
          <MensajeAyuda>
            Describir el proyecto de manera general: qué es, cuáles son sus características principales, qué funcionalidades tendrá y qué problema resuelve. Incluir los objetivos generales del sistema.
          </MensajeAyuda>

          <textarea
            value={formData.descripcionGeneral}
            onChange={(e) => setFormData({ ...formData, descripcionGeneral: e.target.value })}
            rows={12}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
        </section>

        {/* 6. SITUACIÓN ACTUAL */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">3. Situación Actual</h2>
          
          <MensajeAyuda>
            Describir cómo se gestionan actualmente los proyectos en el centro de formación. Identificar problemas, limitaciones y puntos débiles del proceso actual. Usar datos si es posible.
          </MensajeAyuda>

          <textarea
            value={formData.situacionActual}
            onChange={(e) => setFormData({ ...formData, situacionActual: e.target.value })}
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
        </section>

        {/* 7. SITUACIÓN ESPERADA */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">4. Situación Esperada</h2>
          
          <MensajeAyuda>
            Describir cómo será la gestión de proyectos después de implementar ProjectHub. Qué mejoras se esperan, cómo cambiarán los procesos y qué beneficios traerá.
          </MensajeAyuda>

          <textarea
            value={formData.situacionEsperada}
            onChange={(e) => setFormData({ ...formData, situacionEsperada: e.target.value })}
            rows={8}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
        </section>

        {/* 8. JUSTIFICACIÓN */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">5. Justificación</h2>
          
          <MensajeAyuda>
            Explicar por qué es necesario implementar ProjectHub. Argumentar los beneficios, el impacto esperado y cómo se alinea con las necesidades del SENA y los aprendices.
          </MensajeAyuda>

          <textarea
            value={formData.justificacion}
            onChange={(e) => setFormData({ ...formData, justificacion: e.target.value })}
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
        </section>

        {/* 9. ASPECTOS LEGALES */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">6. Aspectos Legales (normas o leyes)</h2>
          
          <MensajeAyuda>
            Incluir todas las normas, leyes, resoluciones o regulaciones que aplican al proyecto. Para cada una, incluir nombre, descripción y enlace de referencia.
          </MensajeAyuda>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Norma o Ley</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Descripción</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Enlace</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {formData.aspectosLegales.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.norma}
                        onChange={(e) => handleAspectoLegalChange(index, "norma", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.descripcion}
                        onChange={(e) => handleAspectoLegalChange(index, "descripcion", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.enlace}
                        onChange={(e) => handleAspectoLegalChange(index, "enlace", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => eliminarAspectoLegal(index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={agregarAspectoLegal}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            + Agregar norma o ley
          </button>
        </section>
      </div>
    </DocumentoLayout>
  );
};

export default PlanteamientoProblema;