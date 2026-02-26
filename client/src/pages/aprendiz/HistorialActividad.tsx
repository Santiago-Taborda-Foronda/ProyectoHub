// src/pages/aprendiz/HistorialActividad.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Calendar,
  Download,
  FileText,
  Image,
  Code,
  MessageSquare,
  Upload,
  Edit,
  CheckCircle,
  XCircle,
  Clock,
  User,
  MoreHorizontal
} from "lucide-react";

// Datos completos de actividad
const actividadesData = [
  // Febrero 2026
  {
    id: 1,
    usuario: "Hector Rivera",
    iniciales: "HR",
    avatar: "bg-blue-100 text-blue-600",
    accion: "Modificación de documento",
    documento: "Planteamiento del Problema",
    documentoId: "planteamiento-problema",
    detalle: "Actualización de la descripción del problema y objetivos específicos",
    tiempo: "Hace 2H",
    fecha: "26/02/2026",
    hora: "14:30",
    tipo: "edit",
    version: "1.3",
  },
  {
    id: 2,
    usuario: "Fernando Alonso",
    iniciales: "FA",
    avatar: "bg-green-100 text-green-600",
    accion: "Añadido una imagen",
    documento: "Prototipado del Sistema",
    documentoId: "prototipado",
    detalle: "Se agregaron 3 nuevas imágenes del módulo de autenticación",
    tiempo: "Hace 8H",
    fecha: "26/02/2026",
    hora: "09:15",
    tipo: "image",
  },
  {
    id: 3,
    usuario: "María Guzmán",
    iniciales: "MG",
    avatar: "bg-purple-100 text-purple-600",
    accion: "Actualización de documento",
    documento: "Manual de Usuario",
    documentoId: "manual-usuario",
    detalle: "Revisión y corrección de la sección de instalación",
    tiempo: "Hace 1D",
    fecha: "25/02/2026",
    hora: "16:45",
    tipo: "edit",
    version: "1.2",
  },
  {
    id: 4,
    usuario: "Alex Perea",
    iniciales: "AP",
    avatar: "bg-yellow-100 text-yellow-600",
    accion: "Subida de nuevo archivo",
    documento: "Anexos del Proyecto",
    documentoId: "anexos",
    detalle: "Se agregó el archivo 'Entrevistas usuarios.xlsx'",
    tiempo: "Hace 2D",
    fecha: "24/02/2026",
    hora: "11:20",
    tipo: "upload",
    archivo: "Entrevistas usuarios.xlsx",
    tamaño: "2.4 MB",
  },
  {
    id: 5,
    usuario: "Checo Pérez",
    iniciales: "CP",
    avatar: "bg-red-100 text-red-600",
    accion: "Comentario en documento",
    documento: "Especificación de Requisitos",
    documentoId: "especificacion-requisitos",
    detalle: "Comentó: 'Los RF2.3 y RF2.4 deben revisarse, hay conflicto con la seguridad'",
    tiempo: "Hace 3D",
    fecha: "23/02/2026",
    hora: "10:05",
    tipo: "comment",
  },
  {
    id: 6,
    usuario: "Javier Martínez",
    iniciales: "JM",
    avatar: "bg-indigo-100 text-indigo-600",
    accion: "Aprobación de documento",
    documento: "Planteamiento del Problema",
    documentoId: "planteamiento-problema",
    detalle: "Versión 1.2 aprobada para continuar",
    tiempo: "Hace 4D",
    fecha: "22/02/2026",
    hora: "09:30",
    tipo: "approve",
  },
  {
    id: 7,
    usuario: "Hector Rivera",
    iniciales: "HR",
    avatar: "bg-blue-100 text-blue-600",
    accion: "Creación de documento",
    documento: "Plan de Pruebas",
    documentoId: "plan-pruebas",
    detalle: "Documento creado con estructura inicial",
    tiempo: "Hace 5D",
    fecha: "21/02/2026",
    hora: "15:50",
    tipo: "create",
    version: "1.0",
  },
  {
    id: 8,
    usuario: "María Guzmán",
    iniciales: "MG",
    avatar: "bg-purple-100 text-purple-600",
    accion: "Eliminación de archivo",
    documento: "Anexos del Proyecto",
    documentoId: "anexos",
    detalle: "Archivo 'prototipo_old.png' eliminado por duplicado",
    tiempo: "Hace 6D",
    fecha: "20/02/2026",
    hora: "12:15",
    tipo: "delete",
  },
  {
    id: 9,
    usuario: "Fernando Alonso",
    iniciales: "FA",
    avatar: "bg-green-100 text-green-600",
    accion: "Actualización de documento",
    documento: "Manual Técnico",
    documentoId: "manual-tecnico",
    detalle: "Se actualizó la configuración del entorno de desarrollo",
    tiempo: "Hace 7D",
    fecha: "19/02/2026",
    hora: "17:20",
    tipo: "edit",
    version: "1.1",
  },
  {
    id: 10,
    usuario: "Alex Perea",
    iniciales: "AP",
    avatar: "bg-yellow-100 text-yellow-600",
    accion: "Comentario en documento",
    documento: "Casos de Uso",
    documentoId: "casos-uso",
    detalle: "Comentó: 'El caso de uso CU-05 necesita más detalle en la descripción'",
    tiempo: "Hace 8D",
    fecha: "18/02/2026",
    hora: "08:45",
    tipo: "comment",
  },
  {
    id: 11,
    usuario: "Javier Martínez",
    iniciales: "JM",
    avatar: "bg-indigo-100 text-indigo-600",
    accion: "Revisión de documento",
    documento: "Especificación de Requisitos",
    documentoId: "especificacion-requisitos",
    detalle: "Solicitó cambios en los requisitos no funcionales",
    tiempo: "Hace 9D",
    fecha: "17/02/2026",
    hora: "14:00",
    tipo: "review",
  },
  {
    id: 12,
    usuario: "Checo Pérez",
    iniciales: "CP",
    avatar: "bg-red-100 text-red-600",
    accion: "Subida de nuevo archivo",
    documento: "Anexos del Proyecto",
    documentoId: "anexos",
    detalle: "Se agregó el archivo 'Diagramas base de datos.drawio'",
    tiempo: "Hace 10D",
    fecha: "16/02/2026",
    hora: "11:30",
    tipo: "upload",
    archivo: "Diagramas base de datos.drawio",
    tamaño: "1.8 MB",
  },
];

// Mapa de iconos por tipo
const getIcono = (tipo: string) => {
  switch (tipo) {
    case "edit": return <Edit size={16} className="text-blue-500" />;
    case "image": return <Image size={16} className="text-purple-500" />;
    case "upload": return <Upload size={16} className="text-green-500" />;
    case "comment": return <MessageSquare size={16} className="text-yellow-500" />;
    case "create": return <FileText size={16} className="text-indigo-500" />;
    case "delete": return <XCircle size={16} className="text-red-500" />;
    case "approve": return <CheckCircle size={16} className="text-green-600" />;
    case "review": return <Clock size={16} className="text-orange-500" />;
    default: return <FileText size={16} className="text-gray-500" />;
  }
};

// Mapa de colores de fondo por tipo
const getTipoColor = (tipo: string) => {
  switch (tipo) {
    case "edit": return "bg-blue-50 border-blue-200";
    case "image": return "bg-purple-50 border-purple-200";
    case "upload": return "bg-green-50 border-green-200";
    case "comment": return "bg-yellow-50 border-yellow-200";
    case "create": return "bg-indigo-50 border-indigo-200";
    case "delete": return "bg-red-50 border-red-200";
    case "approve": return "bg-emerald-50 border-emerald-200";
    case "review": return "bg-orange-50 border-orange-200";
    default: return "bg-gray-50 border-gray-200";
  }
};

const HistorialActividad: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTipo, setFilterTipo] = useState("todos");
  const [filterUsuario, setFilterUsuario] = useState("todos");
  const [filterFecha, setFilterFecha] = useState("todos");

  // Obtener tipos únicos para filtros
  const tiposUnicos = ["todos", ...new Set(actividadesData.map(a => a.tipo))];
  const usuariosUnicos = ["todos", ...new Set(actividadesData.map(a => a.usuario))];
  
  // Filtrar actividades
  const filteredActividades = actividadesData.filter(act => {
    const matchesSearch = 
      act.accion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      act.documento.toLowerCase().includes(searchTerm.toLowerCase()) ||
      act.detalle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      act.usuario.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTipo = filterTipo === "todos" || act.tipo === filterTipo;
    const matchesUsuario = filterUsuario === "todos" || act.usuario === filterUsuario;
    
    // Filtro de fecha (últimos 7 días, 30 días, etc)
    if (filterFecha !== "todos") {
      const hoy = new Date();
      const fechaAct = new Date(act.fecha.split('/').reverse().join('-'));
      const diffTime = Math.abs(hoy.getTime() - fechaAct.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (filterFecha === "7d" && diffDays > 7) return false;
      if (filterFecha === "30d" && diffDays > 30) return false;
    }
    
    return matchesSearch && matchesTipo && matchesUsuario;
  });

  // Agrupar por fecha
  const groupedByDate = filteredActividades.reduce((groups: any, act) => {
    const date = act.fecha;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(act);
    return groups;
  }, {});

  // Ordenar fechas (más reciente primero)
  const sortedDates = Object.keys(groupedByDate).sort((a, b) => {
    const [dayA, monthA, yearA] = a.split('/');
    const [dayB, monthB, yearB] = b.split('/');
    return new Date(`${yearB}-${monthB}-${dayB}`).getTime() - new Date(`${yearA}-${monthA}-${dayA}`).getTime();
  });

  const handleLimpiarFiltros = () => {
    setSearchTerm("");
    setFilterTipo("todos");
    setFilterUsuario("todos");
    setFilterFecha("todos");
  };

  return (
    <div>
      {/* Header con navegación */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <button
            onClick={() => navigate("/aprendiz/mis-proyectos")}
            className="hover:text-gray-700 flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            <span>Mis Proyectos</span>
          </button>
          <span className="text-gray-400">•</span>
          <span className="text-blue-600 font-medium">Historial de Actividad</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Historial de Actividad</h1>
            <p className="text-gray-600 mt-1">
              Registro completo de todos los cambios y acciones en el proyecto
            </p>
          </div>
          
          <button className="mt-4 md:mt-0 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
            <Download size={16} />
            Exportar historial
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Buscador */}
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar en actividad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Filtro por tipo */}
          <select
            value={filterTipo}
            onChange={(e) => setFilterTipo(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
          >
            <option value="todos">Todos los tipos</option>
            <option value="edit">Ediciones</option>
            <option value="create">Creaciones</option>
            <option value="upload">Subidas</option>
            <option value="comment">Comentarios</option>
            <option value="approve">Aprobaciones</option>
            <option value="review">Revisiones</option>
            <option value="delete">Eliminaciones</option>
            <option value="image">Imágenes</option>
          </select>

          {/* Filtro por usuario */}
          <select
            value={filterUsuario}
            onChange={(e) => setFilterUsuario(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
          >
            <option value="todos">Todos los usuarios</option>
            {usuariosUnicos.filter(u => u !== "todos").map(usuario => (
              <option key={usuario} value={usuario}>{usuario}</option>
            ))}
          </select>

          {/* Filtro por fecha */}
          <select
            value={filterFecha}
            onChange={(e) => setFilterFecha(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
          >
            <option value="todos">Todas las fechas</option>
            <option value="7d">Últimos 7 días</option>
            <option value="30d">Últimos 30 días</option>
          </select>
        </div>

        {/* Botón limpiar filtros (visible si hay filtros activos) */}
        {(searchTerm || filterTipo !== "todos" || filterUsuario !== "todos" || filterFecha !== "todos") && (
          <div className="mt-3 flex justify-end">
            <button
              onClick={handleLimpiarFiltros}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* Lista de actividad */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {filteredActividades.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock size={24} className="text-gray-400" />
            </div>
            <h3 className="text-gray-700 font-medium mb-1">No hay actividad</h3>
            <p className="text-sm text-gray-500">
              No se encontraron registros con los filtros seleccionados
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {sortedDates.map(date => (
              <div key={date} className="p-4">
                {/* Separador de fecha */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-gray-400" />
                  <span className="text-xs font-medium text-gray-500">{date}</span>
                </div>

                {/* Actividades de esa fecha */}
                <div className="space-y-3">
                  {groupedByDate[date].map((act: any) => (
                    <div
                      key={act.id}
                      className={`p-3 rounded-lg border ${getTipoColor(act.tipo)} hover:shadow-sm transition-shadow`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 ${act.avatar} rounded-full flex items-center justify-center font-medium text-sm flex-shrink-0`}>
                          {act.iniciales}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-gray-800">{act.usuario}</span>
                            <span className="text-xs text-gray-500">{act.hora}</span>
                            {act.version && (
                              <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                                v{act.version}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-sm text-gray-800 mb-1">
                            {act.accion}: <span className="font-medium">{act.documento}</span>
                          </p>
                          
                          <p className="text-xs text-gray-600 mb-2">
                            {act.detalle}
                          </p>
                          
                          {act.archivo && (
                            <div className="flex items-center gap-2 text-xs bg-white rounded p-1.5 border border-gray-200">
                              <FileText size={12} className="text-gray-400" />
                              <span className="text-gray-600">{act.archivo}</span>
                              <span className="text-gray-400">({act.tamaño})</span>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2 mt-2">
                            {getIcono(act.tipo)}
                            <a
                              href={`/aprendiz/documento/${act.documentoId}`}
                              className="text-xs text-blue-600 hover:underline"
                            >
                              Ver documento
                            </a>
                          </div>
                        </div>

                        <button className="p-1 hover:bg-gray-200 rounded-lg">
                          <MoreHorizontal size={14} className="text-gray-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer con total */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 rounded-b-xl">
          Mostrando {filteredActividades.length} de {actividadesData.length} actividades
        </div>
      </div>
    </div>
  );
};

export default HistorialActividad;