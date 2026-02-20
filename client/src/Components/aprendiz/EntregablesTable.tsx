// src/components/aprendiz/EntregablesTable.tsx
import React, { useState } from "react";
import { 
  FileText, 
  Calendar, 
  Eye, 
  Upload, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Filter,
  Download,
  Clock,
  CheckCircle,
  Send,
  AlertCircle,
  RefreshCw
} from "lucide-react";

// Datos de ejemplo actualizados
const entregablesData = [
  {
    id: 1,
    nombre: "Documento de requisitos",
    fechaLimite: "10/11/2025",
    estado: "Pendiente",
    retroalimentacion: null,
  },
  {
    id: 2,
    nombre: "Diagrama base de datos",
    fechaLimite: "04/11/2025",
    estado: "Enviado",
    retroalimentacion: "En revisión por el instructor",
  },
  {
    id: 3,
    nombre: "Propuesta final",
    fechaLimite: "03/10/2025",
    estado: "Aprobado",
    retroalimentacion: "Excelente trabajo, cumple con todos los requisitos",
  },
  {
    id: 4,
    nombre: "Manual de usuario",
    fechaLimite: "15/11/2025",
    estado: "Pendiente",
    retroalimentacion: null,
  },
  {
    id: 5,
    nombre: "Documentación técnica",
    fechaLimite: "18/11/2025",
    estado: "Rechazado",
    retroalimentacion: "Faltan secciones importantes, por favor revisar",
  },
  {
    id: 6,
    nombre: "Presentación final",
    fechaLimite: "20/11/2025",
    estado: "Enviado",
    retroalimentacion: null,
  },
];

// Mapa de estilos según estado
const estadoStyles = {
  Pendiente: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    border: "border-yellow-200",
    icon: Clock,
    iconColor: "text-yellow-600",
    action: "Subir evidencia",
    actionIcon: Upload,
    actionColor: "text-blue-600",
    actionBg: "bg-blue-50 hover:bg-blue-100",
  },
  Enviado: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    border: "border-blue-200",
    icon: Send,
    iconColor: "text-blue-600",
    action: "Ver detalles",
    actionIcon: Eye,
    actionColor: "text-blue-600",
    actionBg: "bg-blue-50 hover:bg-blue-100",
  },
  Aprobado: {
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
    icon: CheckCircle,
    iconColor: "text-green-600",
    action: "Ver detalles",
    actionIcon: Eye,
    actionColor: "text-green-600",
    actionBg: "bg-green-50 hover:bg-green-100",
  },
  Rechazado: {
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-200",
    icon: AlertCircle,
    iconColor: "text-red-600",
    action: "Reintentar",
    actionIcon: RefreshCw,
    actionColor: "text-red-600",
    actionBg: "bg-red-50 hover:bg-red-100",
  },
};

interface Props {
  onViewDetails: (entregable: any) => void;
}

const EntregablesTable: React.FC<Props> = ({ onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEstado, setFilterEstado] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtrar datos
  const filteredData = entregablesData.filter((item) => {
    const matchesSearch = item.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEstado = filterEstado === "todos" || item.estado === filterEstado;
    return matchesSearch && matchesEstado;
  });

  // Paginación
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const estadosUnicos = ["todos", ...new Set(entregablesData.map((item) => item.estado))];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header con búsqueda y filtros */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Mis Entregables</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Buscador */}
            <div className="relative flex-1 sm:flex-initial">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar entregable..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filtro por estado */}
            <select
              value={filterEstado}
              onChange={(e) => setFilterEstado(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {estadosUnicos.map((estado) => (
                <option key={estado} value={estado}>
                  {estado === "todos" ? "Todos los estados" : estado}
                </option>
              ))}
            </select>

            {/* Botón exportar */}
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Download size={18} className="text-gray-500" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre del entregable
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha límite
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acción
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((item) => {
              const estilo = estadoStyles[item.estado as keyof typeof estadoStyles] || estadoStyles.Pendiente;
              const IconoEstado = estilo.icon;
              const AccionIcon = estilo.actionIcon;

              return (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText size={18} className="text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.nombre}
                        </div>
                        {item.retroalimentacion && item.estado === "Rechazado" && (
                          <div className="text-xs text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle size={12} />
                            <span>Requiere cambios</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {item.fechaLimite}
                      {new Date(item.fechaLimite) < new Date() && item.estado === "Pendiente" && (
                        <span className="ml-2 text-xs text-red-500 font-medium">
                          (Vencido)
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`${estilo.bg} ${estilo.text} text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                        <IconoEstado size={12} className={estilo.iconColor} />
                        {item.estado}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => onViewDetails(item)}
                      className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg ${estilo.actionBg} ${estilo.actionColor} transition-colors`}
                    >
                      <AccionIcon size={16} />
                      {estilo.action}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Mostrando {((currentPage - 1) * itemsPerPage) + 1} a {Math.min(currentPage * itemsPerPage, filteredData.length)} de {filteredData.length} entregables
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg border ${
              currentPage === 1 
                ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg border ${
              currentPage === totalPages 
                ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntregablesTable;