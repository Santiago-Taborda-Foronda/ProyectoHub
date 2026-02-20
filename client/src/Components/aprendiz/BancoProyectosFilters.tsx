// src/components/aprendiz/BancoProyectosFilters.tsx
import React from "react";
import { Search, Filter, Calendar, Code, BookOpen, X } from "lucide-react";

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedFilters: {
    programa: string;
    año: string;
    tecnologia: string;
  };
  onFilterChange: (filters: any) => void;
}

const programas = [
  { value: "todos", label: "Todos los programas" },
  { value: "analisis", label: "Análisis y Desarrollo de Software" },
  { value: "multimedia", label: "Producción Multimedia" },
  { value: "redes", label: "Redes y Telecomunicaciones" },
  { value: "mecatronica", label: "Mecatrónica" },
];

const años = [
  { value: "todos", label: "Todos los años" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
];

const tecnologias = [
  { value: "todos", label: "Todas las tecnologías" },
  { value: "react", label: "React" },
  { value: "node", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "flutter", label: "Flutter" },
  { value: "ionic", label: "Ionic" },
];

const BancoProyectosFilters: React.FC<Props> = ({
  searchTerm,
  onSearchChange,
  selectedFilters,
  onFilterChange,
}) => {
  const [showFilters, setShowFilters] = React.useState(false);

  const clearFilters = () => {
    onFilterChange({
      programa: "todos",
      año: "todos",
      tecnologia: "todos",
    });
    onSearchChange("");
  };

  const hasActiveFilters = 
    selectedFilters.programa !== "todos" || 
    selectedFilters.año !== "todos" || 
    selectedFilters.tecnologia !== "todos" ||
    searchTerm !== "";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
      {/* Barra de búsqueda principal */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre del proyecto, descripción o tecnologías..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-4 py-2.5 border rounded-lg flex items-center gap-2 transition-colors ${
            showFilters || hasActiveFilters
              ? 'bg-blue-50 border-blue-300 text-blue-600'
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Filter size={18} />
          <span>Filtros</span>
          {hasActiveFilters && (
            <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {(selectedFilters.programa !== "todos" ? 1 : 0) +
               (selectedFilters.año !== "todos" ? 1 : 0) +
               (selectedFilters.tecnologia !== "todos" ? 1 : 0) +
               (searchTerm ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Panel de filtros expandible */}
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Filtro por programa */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                <BookOpen size={14} />
                Programa de formación
              </label>
              <select
                value={selectedFilters.programa}
                onChange={(e) => onFilterChange({ ...selectedFilters, programa: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {programas.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Filtro por año */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                <Calendar size={14} />
                Año de ejecución
              </label>
              <select
                value={selectedFilters.año}
                onChange={(e) => onFilterChange({ ...selectedFilters, año: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {años.map((a) => (
                  <option key={a.value} value={a.value}>{a.label}</option>
                ))}
              </select>
            </div>

            {/* Filtro por tecnología */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                <Code size={14} />
                Tecnologías principales
              </label>
              <select
                value={selectedFilters.tecnologia}
                onChange={(e) => onFilterChange({ ...selectedFilters, tecnologia: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {tecnologias.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón para limpiar filtros */}
          {hasActiveFilters && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
              >
                <X size={16} />
                Limpiar todos los filtros
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BancoProyectosFilters;