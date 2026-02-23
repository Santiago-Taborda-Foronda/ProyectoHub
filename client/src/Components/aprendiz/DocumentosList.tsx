// src/components/aprendiz/DocumentosList.tsx
import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Eye, 
  MoreVertical,
  File,
  FileArchive,
  Image,
  Code,
  BookOpen,
  CheckCircle,
  Clock,
  AlertCircle,
  Search,
  Filter
} from "lucide-react";

// Datos de documentos basados en la estructura de Notion
const documentosData = [
  {
    id: 1,
    codigo: "PT-PP-01",
    nombre: "Planteamiento del Problema",
    tipo: "PDF",
    estado: "Aprobado",
    ultimaModificacion: "10/02/2026",
    modificadoPor: "Hector Rivera",
    tamaño: "1.2 MB",
  },
  {
    id: 2,
    codigo: "PT-ERS-01",
    nombre: "Especificación de Requisitos",
    tipo: "PDF",
    estado: "En revisión",
    ultimaModificacion: "08/02/2026",
    modificadoPor: "Fernando Alonso",
    tamaño: "2.5 MB",
  },
  {
    id: 3,
    codigo: "PT-ECU-01",
    nombre: "Especificación Casos de uso del sistema",
    tipo: "PDF",
    estado: "Borrador",
    ultimaModificacion: "05/02/2026",
    modificadoPor: "María Guzmán",
    tamaño: "1.8 MB",
  },
  {
    id: 4,
    codigo: "PT-IGS-01",
    nombre: "Informe General del Sistema",
    tipo: "PDF",
    estado: "Aprobado",
    ultimaModificacion: "01/02/2026",
    modificadoPor: "Hector Rivera",
    tamaño: "3.1 MB",
  },
  {
    id: 5,
    codigo: "PT-PS-01",
    nombre: "Prototipado del Sistema",
    tipo: "PDF",
    estado: "Aprobado",
    ultimaModificacion: "28/01/2026",
    modificadoPor: "Alex Perea",
    tamaño: "4.2 MB",
  },
  {
    id: 6,
    codigo: "PT-PP-01",
    nombre: "Plan de Pruebas",
    tipo: "PDF",
    estado: "Borrador",
    ultimaModificacion: "25/01/2026",
    modificadoPor: "Checo Pérez",
    tamaño: "1.5 MB",
  },
  {
    id: 7,
    codigo: "PT-MCBD-01",
    nombre: "Manual de Configuración BD",
    tipo: "PDF",
    estado: "Pendiente",
    ultimaModificacion: "20/01/2026",
    modificadoPor: "María Guzmán",
    tamaño: "0.9 MB",
  },
  {
    id: 8,
    codigo: "PT-MTC-01",
    nombre: "Manual Técnico de Configuración",
    tipo: "PDF",
    estado: "En revisión",
    ultimaModificacion: "15/01/2026",
    modificadoPor: "Fernando Alonso",
    tamaño: "2.8 MB",
  },
  {
    id: 9,
    codigo: "PT-MU-01",
    nombre: "Manual de Usuario",
    tipo: "PDF",
    estado: "Pendiente",
    ultimaModificacion: "10/01/2026",
    modificadoPor: "Alex Perea",
    tamaño: "3.3 MB",
  },
  {
    id: 10,
    codigo: "ANEXOS",
    nombre: "Anexos del Proyecto",
    tipo: "ZIP",
    estado: "En revisión",
    ultimaModificacion: "05/01/2026",
    modificadoPor: "Hector Rivera",
    tamaño: "8.5 MB",
  },
];

const estadoStyles = {
  "Aprobado": {
    bg: "bg-green-100",
    text: "text-green-700",
    icon: CheckCircle,
    iconColor: "text-green-600",
  },
  "En revisión": {
    bg: "bg-blue-100",
    text: "text-blue-700",
    icon: Clock,
    iconColor: "text-blue-600",
  },
  "Borrador": {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    icon: FileText,
    iconColor: "text-yellow-600",
  },
  "Pendiente": {
    bg: "bg-gray-100",
    text: "text-gray-700",
    icon: AlertCircle,
    iconColor: "text-gray-600",
  },
};

const getFileIcon = (tipo: string) => {
  switch (tipo) {
    case "PDF": return <FileText size={18} className="text-red-500" />;
    case "ZIP": return <FileArchive size={18} className="text-yellow-600" />;
    default: return <File size={18} className="text-gray-500" />;
  }
};

interface Props {
  onOpenDocumento: (documento: any) => void;
}

const DocumentosList: React.FC<Props> = ({ onOpenDocumento }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEstado, setFilterEstado] = useState("todos");

  const filteredDocs = documentosData.filter((doc) => {
    const matchesSearch = 
      doc.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.codigo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEstado = filterEstado === "todos" || doc.estado === filterEstado;
    return matchesSearch && matchesEstado;
  });

  const estadosUnicos = ["todos", ...new Set(documentosData.map((doc) => doc.estado))];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header con búsqueda */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Documentos del Proyecto</h3>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <select
              value={filterEstado}
              onChange={(e) => setFilterEstado(e.target.value)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {estadosUnicos.map((estado) => (
                <option key={estado} value={estado}>
                  {estado === "todos" ? "Todos" : estado}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Lista de documentos */}
      <div className="divide-y divide-gray-200">
        {filteredDocs.map((doc) => {
          const estilo = estadoStyles[doc.estado as keyof typeof estadoStyles] || estadoStyles["Pendiente"];
          const EstadoIcon = estilo.icon;

          return (
            <div
              key={doc.id}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => onOpenDocumento(doc)}
            >
              <div className="flex items-start gap-3">
                {getFileIcon(doc.tipo)}
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-gray-500">{doc.codigo}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${estilo.bg} ${estilo.text}`}>
                      <EstadoIcon size={10} className={estilo.iconColor} />
                      {doc.estado}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-medium text-gray-800 mb-1">{doc.nombre}</h4>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>Modificado: {doc.ultimaModificacion}</span>
                    <span>•</span>
                    <span>Por: {doc.modificadoPor}</span>
                    <span>•</span>
                    <span>{doc.tamaño}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button className="p-1.5 hover:bg-gray-200 rounded-lg">
                    <Eye size={16} className="text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded-lg">
                    <Download size={16} className="text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded-lg">
                    <MoreVertical size={16} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer con total */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 rounded-b-xl">
        Total: {filteredDocs.length} documentos
      </div>
    </div>
  );
};

export default DocumentosList;