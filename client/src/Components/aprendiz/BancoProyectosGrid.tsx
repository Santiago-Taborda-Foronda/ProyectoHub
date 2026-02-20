// src/components/aprendiz/BancoProyectosGrid.tsx
import React from "react";
import BancoProyectosCard from "./BancoProyectosCard";
import { FolderOpen } from "lucide-react";

// Datos de ejemplo ampliados
const proyectosData = [
  {
    id: 1,
    nombre: "Rutajeep",
    descripcion: "Aplicación móvil para tracking de rutas 4x4 y eventos off-road",
    fechaCreacion: "10/11/2025",
    estado: "Finalizado",
    programa: "Análisis y Desarrollo de Software",
    año: "2025",
    tecnologias: ["React Native", "Node.js", "MongoDB"],
    integrantes: 4,
    instructor: "Carlos Rodríguez",
    documentos: 12,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.8,
    entregables: [
      { nombre: "Documentación técnica", tipo: "PDF" },
      { nombre: "Manual de usuario", tipo: "PDF" },
      { nombre: "Código fuente", tipo: "ZIP" },
    ]
  },
  {
    id: 2,
    nombre: "SenaUnity",
    descripcion: "Plataforma educativa gamificada para el SENA",
    fechaCreacion: "04/09/2025",
    estado: "Finalizado",
    programa: "Producción Multimedia",
    año: "2025",
    tecnologias: ["Unity", "C#", "Firebase"],
    integrantes: 5,
    instructor: "María González",
    documentos: 15,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.9,
    entregables: [
      { nombre: "Ejecutable", tipo: "EXE" },
      { nombre: "Assets", tipo: "ZIP" },
    ]
  },
  {
    id: 3,
    nombre: "FreeMost",
    descripcion: "Sistema de gestión para hostales y pequeñas hospederías",
    fechaCreacion: "05/08/2025",
    estado: "Finalizado",
    programa: "Análisis y Desarrollo de Software",
    año: "2024",
    tecnologias: ["Python", "Django", "PostgreSQL"],
    integrantes: 3,
    instructor: "Javier Martínez",
    documentos: 10,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.5,
    entregables: [
      { nombre: "API Documentation", tipo: "PDF" },
      { nombre: "Base de datos", tipo: "SQL" },
    ]
  },
  {
    id: 4,
    nombre: "MostHot",
    descripcion: "Aplicación web para promoción de eventos locales",
    fechaCreacion: "04/06/2025",
    estado: "Finalizado",
    programa: "Producción Multimedia",
    año: "2024",
    tecnologias: ["Vue.js", "Express", "MySQL"],
    integrantes: 4,
    instructor: "Laura Torres",
    documentos: 8,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.6,
    entregables: [
      { nombre: "Prototipos", tipo: "FIG" },
      { nombre: "Memoria", tipo: "PDF" },
    ]
  },
  {
    id: 5,
    nombre: "EcoTrack",
    descripcion: "Sistema de monitoreo ambiental para empresas",
    fechaCreacion: "15/03/2024",
    estado: "Finalizado",
    programa: "Redes y Telecomunicaciones",
    año: "2024",
    tecnologias: ["IoT", "Arduino", "Python"],
    integrantes: 5,
    instructor: "Roberto Sánchez",
    documentos: 20,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.7,
    entregables: [
      { nombre: "Esquemáticos", tipo: "PDF" },
      { nombre: "Firmware", tipo: "INO" },
    ]
  },
  {
    id: 6,
    nombre: "MediQuick",
    descripcion: "App para gestión de citas médicas",
    fechaCreacion: "20/11/2023",
    estado: "Finalizado",
    programa: "Análisis y Desarrollo de Software",
    año: "2023",
    tecnologias: ["Flutter", "Firebase", "Node.js"],
    integrantes: 4,
    instructor: "Ana Patricia",
    documentos: 14,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.9,
    entregables: [
      { nombre: "APK", tipo: "APK" },
      { nombre: "Backend", tipo: "ZIP" },
    ]
  },
  {
    id: 7,
    nombre: "AgroSense",
    descripcion: "Sistema de monitoreo para cultivos de invernadero",
    fechaCreacion: "10/08/2023",
    estado: "Finalizado",
    programa: "Mecatrónica",
    año: "2023",
    tecnologias: ["Python", "Raspberry Pi", "React"],
    integrantes: 5,
    instructor: "Diego Ramírez",
    documentos: 18,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.8,
    entregables: [
      { nombre: "Planos", tipo: "PDF" },
      { nombre: "Código", tipo: "ZIP" },
    ]
  },
  {
    id: 8,
    nombre: "SkillUp",
    descripcion: "Plataforma de cursos online para el SENA",
    fechaCreacion: "05/05/2022",
    estado: "Finalizado",
    programa: "Análisis y Desarrollo de Software",
    año: "2022",
    tecnologias: ["Angular", "Spring Boot", "MySQL"],
    integrantes: 6,
    instructor: "Patricia Vega",
    documentos: 25,
    imagen: "/api/placeholder/400/200",
    calificacion: 4.5,
    entregables: [
      { nombre: "Frontend", tipo: "ZIP" },
      { nombre: "Backend", tipo: "ZIP" },
      { nombre: "Documentación", tipo: "PDF" },
    ]
  }
];

interface Props {
  searchTerm: string;
  selectedFilters: {
    programa: string;
    año: string;
    tecnologia: string;
  };
  onViewDetails: (proyecto: any) => void;
}

const BancoProyectosGrid: React.FC<Props> = ({
  searchTerm,
  selectedFilters,
  onViewDetails,
}) => {
  // Filtrar proyectos
  const filteredProyectos = proyectosData.filter((proyecto) => {
    // Filtro por búsqueda
    const matchesSearch = 
      proyecto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proyecto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proyecto.tecnologias.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    // Filtro por programa
    const matchesPrograma = 
      selectedFilters.programa === "todos" || 
      proyecto.programa.includes(selectedFilters.programa === "analisis" ? "Análisis" :
                                selectedFilters.programa === "multimedia" ? "Multimedia" :
                                selectedFilters.programa === "redes" ? "Redes" :
                                selectedFilters.programa === "mecatronica" ? "Mecatrónica" : "");

    // Filtro por año
    const matchesAño = 
      selectedFilters.año === "todos" || 
      proyecto.año === selectedFilters.año;

    // Filtro por tecnología
    const matchesTecnologia = 
      selectedFilters.tecnologia === "todos" || 
      proyecto.tecnologias.some(tech => 
        tech.toLowerCase().includes(selectedFilters.tecnologia)
      );

    return matchesSearch && matchesPrograma && matchesAño && matchesTecnologia;
  });

  if (filteredProyectos.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <FolderOpen size={48} className="mx-auto text-gray-300 mb-3" />
        <h3 className="text-lg font-medium text-gray-700 mb-1">No hay proyectos</h3>
        <p className="text-gray-500">
          No se encontraron proyectos con los filtros seleccionados.
        </p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
          Limpiar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredProyectos.map((proyecto) => (
        <BancoProyectosCard
          key={proyecto.id}
          proyecto={proyecto}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default BancoProyectosGrid;