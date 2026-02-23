// src/pages/aprendiz/MisProyectos.tsx
import React, { useState } from "react";
import ProyectoHeader from "../../Components/aprendiz/ProyectoHeader";
import ProyectoStats from "../../Components/aprendiz/ProyectoStats";
import DocumentosList from "../../Components/aprendiz/DocumentosList";
import ActividadReciente from "../../Components/aprendiz/ActividadReciente";
import DocumentoModal from "../../Components/aprendiz/DocumentoModal";

const MisProyectos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocumento, setSelectedDocumento] = useState<any>(null);

  const handleOpenDocumento = (documento: any) => {
    setSelectedDocumento(documento);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDocumento(null);
  };

  // Datos del proyecto (ejemplo)
  const proyectoData = {
    id: 1,
    nombre: "SenaUnity",
    descripcion: "Plataforma educativa gamificada para el SENA",
    fechaCreacion: "12 de diciembre de 2025",
    estado: "En Progreso",
    instructor: "Javier Martínez",
    integrantes: ["Alex Perea", "Checo Pérez", "María Guzmán"],
    ficha: "2545632",
    programa: "Análisis y Desarrollo de Software",
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Dashboard / Inicio</span>
          <span className="text-gray-400">•</span>
          <span className="text-blue-600 font-medium">Mis Proyectos</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Mis Proyectos</h1>
        <p className="text-gray-600 mt-1">
          Gestión documental y seguimiento del proyecto
        </p>
      </div>

      {/* Header del proyecto */}
      <ProyectoHeader proyecto={proyectoData} />

      {/* Stats rápidas */}
      <ProyectoStats />

      {/* Grid de 2 columnas para documentos y actividad */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Lista de documentos (ocupa 2 columnas) */}
        <div className="lg:col-span-2">
          <DocumentosList onOpenDocumento={handleOpenDocumento} />
        </div>

        {/* Actividad reciente (ocupa 1 columna) */}
        <div className="lg:col-span-1">
          <ActividadReciente />
        </div>
      </div>

      {/* Modal de documento */}
      {modalOpen && (
        <DocumentoModal
          documento={selectedDocumento}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MisProyectos;