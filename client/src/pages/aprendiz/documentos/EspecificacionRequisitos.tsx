// src/pages/aprendiz/documentos/EspecificacionRequisitos.tsx
import React, { useState } from "react";
import DocumentoLayout from "../../../Components/aprendiz/documentos/DocumentoLayout";
import { HelpCircle, Search } from "lucide-react";

const EspecificacionRequisitos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(""); // <-- Estado para el buscador

  const [formData, setFormData] = useState({
    // Historial de revisión
    historialRevision: [
      {
        version: "1.0",
        fechaElaboracion: "28/11/2025",
        responsableElaboracion: "Jefferson López",
        fechaAprobacion: "",
        responsableAprobacion: ""
      },
      {
        version: "1.1",
        fechaElaboracion: "15/12/2025",
        responsableElaboracion: "Jefferson López",
        fechaAprobacion: "",
        responsableAprobacion: ""
      }
    ],
    
    // Cambios respecto a versión anterior
    cambiosVersion: [
      {
        version: "1.0",
        modificacion: "Creación del Documento."
      },
      {
        version: "1.1",
        modificacion: "Ajuste del alcance y simplificación de requisitos. Se consolidan funciones, se eliminan roles y descripciones no aplicables y se añaden nuevos requisitos"
      }
    ],

    // Responsables e involucrados
    responsables: [
      {
        nombre: "Jefferson López",
        tipo: "Responsable",
        rol: "Analista de Requisitos",
        cargo: ""
      }
    ],

    // Características del producto
    caracteristicasProducto: `ProjectHub es un sistema integral de gestión y validación de proyectos formativos diseñado para el SENA. Las principales características incluyen:

• Centralización de la documentación de proyectos
• Flujos de trabajo formalizados para solicitud y aprobación
• Banco de proyectos para consulta de trabajos anteriores
• Sistema de roles (Aprendiz, Instructor, Administrador)
• Evaluación y seguimiento continuo por parte de instructores
• Notificaciones automáticas de cambios y actualizaciones
• Repositorio documental con plantillas estandarizadas`,

    // Actores del sistema
    actores: [
      {
        actor: "Aprendiz",
        descripcion: "Usuario en formación responsable de la ejecución del proyecto.",
        interacciones: "• Radicar solicitudes.\n• Diligenciar documentación guiada.\n• Consultar Banco de Proyectos."
      },
      {
        actor: "Instructor",
        descripcion: "Profesional encargado de la orientación y evaluación.",
        interacciones: "• Evaluar solicitudes.\n• Gestionar, revisar y calificar cualquier proyecto activo (Acceso Universal).\n• Asignar plantillas a proyectos.\n• Cerrar proyectos."
      },
      {
        actor: "Administrador",
        descripcion: "Responsable operativo del sistema (Rol Técnico).",
        interacciones: "• Gestión de usuarios (CRUD y Eliminación).\n• Gobierno de plantillas y permisos.\n• Auditoría técnica."
      },
      {
        actor: "Sistema",
        descripcion: "Componente automatizado de reglas de negocio.",
        interacciones: "• Creación automática de proyectos.\n• Gestión de bloqueos por concurrencia.\n• Renderizado de documentos."
      }
    ],

    // Requisitos funcionales
    requisitosFuncionales: [
      // MÓDULO 1: Gestión de inicio y autenticación
      {
        modulo: "MÓDULO 1: Gestión de inicio y autenticación",
        codigo: "RF1.1",
        nombre: "Iniciar Sesión",
        descripcion: "El sistema validará usuario y contraseña, permitiendo el acceso solo a cuentas activas con rol asignado, por medio de un correo y contraseña.",
        roles: "Administrador, Instructor, Aprendiz",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF1.1.1",
        nombre: "Bloquear Cuenta",
        descripcion: "El sistema bloqueará temporalmente la cuenta tras detectar 5 intentos fallidos de inicio de sesión consecutivos.",
        roles: "Sistema",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF1.2",
        nombre: "Recuperar Contraseña",
        descripcion: "El sistema permitirá restablecer la contraseña enviando un token temporal al correo registrado.",
        roles: "Administrador, Instructor, Aprendiz",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF1.3",
        nombre: "Cerrar Sesión",
        descripcion: "El sistema invalidará inmediatamente el token de seguridad al confirmar la acción de cierre de sesión.",
        roles: "Administrador, Instructor, Aprendiz",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF1.4",
        nombre: "Visualizar Dashboard",
        descripcion: "El sistema mostrará un panel principal con información filtrada y exclusiva según el rol del usuario autenticado.",
        roles: "Administrador, Instructor, Aprendiz",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF1.5",
        nombre: "Consultar Ayuda",
        descripcion: "El sistema mostrará guías de ayuda contextual adaptadas al rol del usuario en las secciones críticas.",
        roles: "Aprendiz, Instructor",
        tipo: "Opcional"
      },
      
      // MÓDULO 2: Gestión de usuarios
      {
        modulo: "MÓDULO 2: Gestión de usuarios",
        codigo: "RF2.1",
        nombre: "Registrar Usuario",
        descripcion: "El sistema permitirá registrar nuevos usuarios validando la completitud de campos obligatorios y el formato de correo.",
        roles: "Administrador, Instructor",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF2.1.1",
        nombre: "Validar Unicidad",
        descripcion: "El sistema impedirá el registro si correo electrónico ya se encuentra registrados.",
        roles: "Sistema",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF2.2",
        nombre: "Cargar Usuarios Masivamente",
        descripcion: "El sistema permitirá la importación masiva de usuarios mediante archivo plano o Excel estructurado.",
        roles: "Administrador, Instructor",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF2.3",
        nombre: "Filtrar Usuarios",
        descripcion: "El sistema permitirá buscar y listar usuarios aplicando filtros por Rol, Estado y Ficha de formación.",
        roles: "Administrador, Instructor",
        tipo: "Ideal"
      },
      {
        modulo: "",
        codigo: "RF2.4",
        nombre: "Actualizar Información de Usuario",
        descripcion: "El sistema permitirá la actualización de datos no críticos del usuario (Nombres, Estado y Rol).",
        roles: "Administrador, Instructor",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF2.5",
        nombre: "Eliminar Usuario",
        descripcion: "El sistema permitirá la eliminación permanente de un usuario, validando previamente que no tenga vínculos históricos protegidos.",
        roles: "Administrador",
        tipo: "Esencial"
      },
      {
        modulo: "",
        codigo: "RF2.6",
        nombre: "Validar Rol Académico",
        descripcion: "El sistema validará que únicamente los usuarios con rol 'Instructor' puedan gestionar la parte académica de los proyectos.",
        roles: "Sistema",
        tipo: "Esencial"
      }
    ],

    // Requisitos no funcionales
    requisitosNoFuncionales: [
      {
        categoria: "USABILIDAD",
        codigo: "RNF1",
        descripcion: "El sistema deberá mantener una estructura visual coherente (patrones de diseño, paleta de colores, tipografía) en todos los módulos. Los botones de acción primaria (ej. 'Guardar') siempre deben estar en la misma ubicación relativa."
      },
      {
        categoria: "USABILIDAD",
        codigo: "RNF2",
        descripcion: "El sistema implementará tooltips, modales de ayuda y enlaces a documentación breve en las secciones críticas (ej. formularios de registro), diferenciados por rol."
      },
      {
        categoria: "USABILIDAD",
        codigo: "RNF3",
        descripcion: "La arquitectura de información debe ser plana; cualquier función principal (Consultar Proyecto, Calificar) debe ser accesible en máximo 3 clics desde el Dashboard."
      },
      {
        categoria: "USABILIDAD",
        codigo: "RNF4",
        descripcion: "La interfaz debe adaptarse fluidamente a resoluciones móviles (smartphones/tablets) sin perder funcionalidad crítica."
      },
      {
        categoria: "CONFIABLIDAD",
        codigo: "RNF5",
        descripcion: "El sistema debe garantizar las propiedades ACID en las operaciones de base de datos. No pueden quedar registros 'huérfanos' (ej. un entregable sin proyecto) ante un fallo del servidor."
      },
      {
        categoria: "CONFIABLIDAD",
        codigo: "RNF6",
        descripcion: "El sistema debe contar con mecanismos de backup automático de la base de datos y del repositorio de archivos, permitiendo una restauración del servicio (RTO) menor a 4 horas en caso de falla catastrófica."
      },
      {
        categoria: "CONFIABLIDAD",
        codigo: "RNF7",
        descripcion: "Se exige un tiempo de actividad del 99.9% durante el horario hábil académico (6:00 AM - 10:00 PM), minimizando las ventanas de mantenimiento en estas franjas."
      },
      {
        categoria: "SEGURIDAD",
        codigo: "RNF8",
        descripcion: "El sistema debe implementar un control de acceso estricto en el backend. Cada petición API debe validar que el usuario tenga el rol y el permiso específico para el recurso solicitado (ej. un Aprendiz no puede acceder al endpoint de calificación)."
      },
      {
        categoria: "SEGURIDAD",
        codigo: "RNF9",
        descripcion: "Toda la comunicación cliente-servidor debe ir cifrada sobre HTTPS (TLS 1.2+). Las contraseñas en base de datos deben estar hasheadas con algoritmos robustos (ej. BCrypt)."
      },
      {
        categoria: "SEGURIDAD",
        codigo: "RNF10",
        descripcion: "El sistema debe aplicar filtros de visibilidad automáticos para ocultar datos sensibles (comentarios confidenciales, datos de contacto de clientes) a roles no autorizados."
      },
      {
        categoria: "EFICIENCIA Y RENDIMIENTO",
        codigo: "RNF11",
        descripcion: "El tiempo de carga de las páginas principales y la respuesta a transacciones simples (guardar, consultar) no debe exceder los 2 segundos bajo condiciones normales de red."
      },
      {
        categoria: "EFICIENCIA Y RENDIMIENTO",
        codigo: "RNF12",
        descripcion: "El sistema debe soportar picos de concurrencia (ej. cierre de corte evaluativo) de al menos 500 usuarios simultáneos sin degradación perceptible del servicio."
      },
      {
        categoria: "PORTABILIDAD",
        codigo: "RNF13",
        descripcion: "El sistema debe ser funcional y visualmente correcto en las versiones estables recientes de Chrome, Firefox, Edge y Safari."
      },
      {
        categoria: "MANTENIBILIDAD",
        codigo: "RNF14",
        descripcion: "El código fuente debe estructurarse siguiendo principios de separación de responsabilidades, facilitando la prueba unitaria y la evolución independiente."
      },
      {
        categoria: "MANTENIBILIDAD",
        codigo: "RNF15",
        descripcion: "El sistema debe estar preparado para pipelines de CI/CD, permitiendo desplegar parches de seguridad o mejoras menores sin interrumpir masivamente el servicio (Zero-downtime deployment deseable)."
      },
      {
        categoria: "OPERATIVIDAD",
        codigo: "RNF16",
        descripcion: "El proceso de despliegue en un nuevo entorno debe estar automatizado o documentado paso a paso."
      }
    ],

    // Restricciones del software
    restriccionesSoftware: `**Backend Framework:** El desarrollo del lado del servidor debe realizarse utilizando **Java** con el framework **Spring Boot**.

**Frontend Framework:** La interfaz de usuario debe construirse utilizando **Angular** y **TypeScript**. Esto garantiza un tipado estático robusto y una estructura modular basada en componentes.`,

    // Anexos
    anexos: [
      {
        nombre: "Encuestas Entrevistas, pruebas de campo, entre otros",
        enlace: "https://www.notion.so/Encuestas-Entrevistas-pruebas-de-campo-entre-otros-2c7722a1b27c81239b53e023ebec8daf"
      },
      {
        nombre: "ProyectHub",
        enlace: "https://www.notion.so/ProyectHub-88a0c3e21a8b451a8efd547f5c685ef9"
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
        { nombre: "", tipo: "Responsable", rol: "", cargo: "" }
      ]
    });
  };

  const eliminarResponsable = (index: number) => {
    const nuevosResponsables = formData.responsables.filter((_, i) => i !== index);
    setFormData({ ...formData, responsables: nuevosResponsables });
  };

  const handleActorChange = (index: number, field: string, value: string) => {
    const nuevosActores = [...formData.actores];
    nuevosActores[index] = { ...nuevosActores[index], [field]: value };
    setFormData({ ...formData, actores: nuevosActores });
  };

  const agregarActor = () => {
    setFormData({
      ...formData,
      actores: [
        ...formData.actores,
        { actor: "", descripcion: "", interacciones: "" }
      ]
    });
  };

  const eliminarActor = (index: number) => {
    const nuevosActores = formData.actores.filter((_, i) => i !== index);
    setFormData({ ...formData, actores: nuevosActores });
  };

  const handleRequisitoFuncionalChange = (index: number, field: string, value: string) => {
    const nuevosRequisitos = [...formData.requisitosFuncionales];
    nuevosRequisitos[index] = { ...nuevosRequisitos[index], [field]: value };
    setFormData({ ...formData, requisitosFuncionales: nuevosRequisitos });
  };

  const agregarRequisitoFuncional = () => {
    setFormData({
      ...formData,
      requisitosFuncionales: [
        ...formData.requisitosFuncionales,
        { modulo: "", codigo: "", nombre: "", descripcion: "", roles: "", tipo: "Esencial" }
      ]
    });
  };

  const eliminarRequisitoFuncional = (index: number) => {
    const nuevosRequisitos = formData.requisitosFuncionales.filter((_, i) => i !== index);
    setFormData({ ...formData, requisitosFuncionales: nuevosRequisitos });
  };

  const handleRequisitoNoFuncionalChange = (index: number, field: string, value: string) => {
    const nuevosRequisitos = [...formData.requisitosNoFuncionales];
    nuevosRequisitos[index] = { ...nuevosRequisitos[index], [field]: value };
    setFormData({ ...formData, requisitosNoFuncionales: nuevosRequisitos });
  };

  const agregarRequisitoNoFuncional = () => {
    setFormData({
      ...formData,
      requisitosNoFuncionales: [
        ...formData.requisitosNoFuncionales,
        { categoria: "", codigo: "", descripcion: "" }
      ]
    });
  };

  const eliminarRequisitoNoFuncional = (index: number) => {
    const nuevosRequisitos = formData.requisitosNoFuncionales.filter((_, i) => i !== index);
    setFormData({ ...formData, requisitosNoFuncionales: nuevosRequisitos });
  };

  const handleAnexoChange = (index: number, field: string, value: string) => {
    const nuevosAnexos = [...formData.anexos];
    nuevosAnexos[index] = { ...nuevosAnexos[index], [field]: value };
    setFormData({ ...formData, anexos: nuevosAnexos });
  };

  const agregarAnexo = () => {
    setFormData({
      ...formData,
      anexos: [
        ...formData.anexos,
        { nombre: "", enlace: "" }
      ]
    });
  };

  const eliminarAnexo = (index: number) => {
    const nuevosAnexos = formData.anexos.filter((_, i) => i !== index);
    setFormData({ ...formData, anexos: nuevosAnexos });
  };

  // Filtrar requisitos funcionales basado en el término de búsqueda
  const filteredRequisitos = formData.requisitosFuncionales.filter(req => {
    const searchLower = searchTerm.toLowerCase();
    return (
      req.codigo.toLowerCase().includes(searchLower) ||
      req.nombre.toLowerCase().includes(searchLower) ||
      req.descripcion.toLowerCase().includes(searchLower) ||
      req.roles.toLowerCase().includes(searchLower) ||
      req.modulo.toLowerCase().includes(searchLower)
    );
  });

  // Componente para mensaje de ayuda
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
      titulo="Especificación de Requisitos"
      codigo="PT-ERS-01"
      onSave={handleSave}
    >
      <div className="space-y-8">
        {/* METADATA - Información del proyecto */}
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
                      <textarea
                        value={item.modificacion}
                        onChange={(e) => handleCambiosChange(index, "modificacion", e.target.value)}
                        rows={2}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
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

        {/* 3. INTRODUCCIÓN */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Introducción</h2>
          
          <MensajeAyuda>
            La introducción debe contextualizar el documento de especificación de requisitos, explicar su propósito y alcance dentro del proyecto ProyectoHub.
          </MensajeAyuda>

          <textarea
            value="El presente documento tiene como objetivo especificar los requisitos funcionales y no funcionales del sistema ProyectoHub, una plataforma integral para la gestión y validación de proyectos formativos en el SENA. Este documento servirá como guía para el desarrollo, prueba e implementación del sistema, asegurando que cumpla con las necesidades y expectativas de todos los actores involucrados."
            onChange={() => {}}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />

          {/* Responsables e Involucrados */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Responsables e Involucrados</h3>
            
            <MensajeAyuda>
              Listar todas las personas involucradas en la elaboración y revisión de este documento, especificando su rol y tipo de participación.
            </MensajeAyuda>

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
        </section>

        {/* 4. CARACTERÍSTICAS DEL PRODUCTO */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Características del producto</h2>
          
          <MensajeAyuda>
            Describir las características generales del producto, su propósito y las funcionalidades principales que ofrece a los usuarios.
          </MensajeAyuda>

          <textarea
            value={formData.caracteristicasProducto}
            onChange={(e) => setFormData({ ...formData, caracteristicasProducto: e.target.value })}
            rows={8}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
        </section>

        {/* 5. CARACTERÍSTICAS DEL USUARIO O ACTORES */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Características del usuario o Actores</h2>
          
          <MensajeAyuda>
            Identificar y describir todos los actores que interactuarán con el sistema, especificando sus roles, responsabilidades y las interacciones esperadas.
          </MensajeAyuda>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">ACTOR</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">DESCRIPCIÓN</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">INTERACCIONES ESPERADAS</th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {formData.actores.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={item.actor}
                        onChange={(e) => handleActorChange(index, "actor", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded font-medium"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <textarea
                        value={item.descripcion}
                        onChange={(e) => handleActorChange(index, "descripcion", e.target.value)}
                        rows={2}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <textarea
                        value={item.interacciones}
                        onChange={(e) => handleActorChange(index, "interacciones", e.target.value)}
                        rows={3}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => eliminarActor(index)}
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
            onClick={agregarActor}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            + Agregar actor
          </button>
        </section>

        {/* 6. FUNCIONES DEL PRODUCTO / REQUISITOS FUNCIONALES - MEJORADO CON BUSCADOR */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Funciones del producto / Requisitos funcionales</h2>
            
            {/* Buscador */}
            <div className="relative w-64">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar requisito..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <MensajeAyuda>
            Especificar todos los requisitos funcionales del sistema, organizados por módulos. Cada requisito debe tener un código único, descripción clara, roles asociados y prioridad (Esencial/Ideal/Opcional).
          </MensajeAyuda>

          <div className="overflow-x-auto border border-gray-300 rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">MÓDULO</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">CÓDIGO</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">NOMBRE</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">DESCRIPCIÓN</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">ROLES</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">TIPO</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequisitos.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <input
                        type="text"
                        value={item.modulo}
                        onChange={(e) => handleRequisitoFuncionalChange(index, "modulo", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm font-medium"
                        placeholder="MÓDULO X: Nombre"
                      />
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <input
                        type="text"
                        value={item.codigo}
                        onChange={(e) => handleRequisitoFuncionalChange(index, "codigo", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <input
                        type="text"
                        value={item.nombre}
                        onChange={(e) => handleRequisitoFuncionalChange(index, "nombre", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top min-w-[300px]">
                      <textarea
                        value={item.descripcion}
                        onChange={(e) => handleRequisitoFuncionalChange(index, "descripcion", e.target.value)}
                        rows={3}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <input
                        type="text"
                        value={item.roles}
                        onChange={(e) => handleRequisitoFuncionalChange(index, "roles", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <select
                        value={item.tipo}
                        onChange={(e) => handleRequisitoFuncionalChange(index, "tipo", e.target.value)}
                        className={`w-full px-2 py-1 border rounded text-sm font-medium ${
                          item.tipo === "Esencial" ? "border-green-300 bg-green-50 text-green-700" :
                          item.tipo === "Ideal" ? "border-blue-300 bg-blue-50 text-blue-700" :
                          "border-yellow-300 bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        <option value="Esencial">Esencial</option>
                        <option value="Ideal">Ideal</option>
                        <option value="Opcional">Opcional</option>
                      </select>
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <button
                        onClick={() => eliminarRequisitoFuncional(index)}
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

          {/* Resultados de búsqueda */}
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={agregarRequisitoFuncional}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              + Agregar requisito funcional
            </button>
            {searchTerm && (
              <span className="text-xs text-gray-500">
                {filteredRequisitos.length} resultados encontrados
              </span>
            )}
          </div>
        </section>

        {/* 7. REQUISITOS NO FUNCIONALES - MEJORADO CON MÁS ESPACIO */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Requisitos no funcionales</h2>
          
          <MensajeAyuda>
            Especificar los requisitos no funcionales del sistema, organizados por categorías (Usabilidad, Confiabilidad, Seguridad, Eficiencia, Portabilidad, Mantenibilidad, Operatividad).
          </MensajeAyuda>

          <div className="overflow-x-auto border border-gray-300 rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">CATEGORÍA</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">CÓDIGO</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">DESCRIPCIÓN</th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {formData.requisitosNoFuncionales.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <select
                        value={item.categoria}
                        onChange={(e) => handleRequisitoNoFuncionalChange(index, "categoria", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm font-medium"
                      >
                        <option value="USABILIDAD">USABILIDAD</option>
                        <option value="CONFIABLIDAD">CONFIABLIDAD</option>
                        <option value="SEGURIDAD">SEGURIDAD</option>
                        <option value="EFICIENCIA Y RENDIMIENTO">EFICIENCIA Y RENDIMIENTO</option>
                        <option value="PORTABILIDAD">PORTABILIDAD</option>
                        <option value="MANTENIBILIDAD">MANTENIBILIDAD</option>
                        <option value="OPERATIVIDAD">OPERATIVIDAD</option>
                      </select>
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <input
                        type="text"
                        value={item.codigo}
                        onChange={(e) => handleRequisitoNoFuncionalChange(index, "codigo", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top min-w-[400px]">
                      <textarea
                        value={item.descripcion}
                        onChange={(e) => handleRequisitoNoFuncionalChange(index, "descripcion", e.target.value)}
                        rows={3}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                      />
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 align-top">
                      <button
                        onClick={() => eliminarRequisitoNoFuncional(index)}
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
            onClick={agregarRequisitoNoFuncional}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            + Agregar requisito no funcional
          </button>
        </section>

        {/* 8. RESTRICCIONES DEL SOFTWARE */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Restricciones del software</h2>
          
          <MensajeAyuda>
            Especificar las restricciones tecnológicas impuestas para el desarrollo del proyecto, como frameworks, lenguajes de programación, bases de datos, etc.
          </MensajeAyuda>

          <textarea
            value={formData.restriccionesSoftware}
            onChange={(e) => setFormData({ ...formData, restriccionesSoftware: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
        </section>

        {/* 9. ANEXOS */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Anexos</h2>
          
          <MensajeAyuda>
            Incluir enlaces a documentos adicionales relevantes para la especificación de requisitos, como encuestas, entrevistas, prototipos, etc.
          </MensajeAyuda>

          <div className="space-y-2">
            {formData.anexos.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item.nombre}
                  onChange={(e) => handleAnexoChange(index, "nombre", e.target.value)}
                  placeholder="Nombre del anexo"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  value={item.enlace}
                  onChange={(e) => handleAnexoChange(index, "enlace", e.target.value)}
                  placeholder="URL o enlace"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={() => eliminarAnexo(index)}
                  className="p-2 text-red-600 hover:text-red-800"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={agregarAnexo}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            + Agregar anexo
          </button>
        </section>
      </div>
    </DocumentoLayout>
  );
};

export default EspecificacionRequisitos;