// src/pages/aprendiz/MisProyectos.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Importar useNavigate
import ProyectoHeader from "../../Components/aprendiz/ProyectoHeader";
import ProyectoStats from "../../Components/aprendiz/ProyectoStats";
import DocumentosList from "../../Components/aprendiz/DocumentosList";
import ActividadReciente from "../../Components/aprendiz/ActividadReciente";
// Eliminamos la importación del modal que ya no se usa
// import DocumentoModal from "../../Components/aprendiz/DocumentoModal";

const MisProyectos: React.FC = () => {
  const navigate = useNavigate(); // <-- Hook para navegación
  
  // Eliminamos el estado del modal
  // const [modalOpen, setModalOpen] = useState(false);
  // const [selectedDocumento, setSelectedDocumento] = useState<any>(null);

  // Actualizamos la función para navegar a la página del documento
  const handleOpenDocumento = (documento: any) => {
    navigate(`/aprendiz/documento/${documento.ruta}`);
  };

  // Eliminamos la función del modal
  // const handleCloseModal = () => {
  //   setModalOpen(false);
  //   setSelectedDocumento(null);
  // };

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

      {/* Eliminamos el modal que ya no se usa */}
      {/* {modalOpen && (
        <DocumentoModal
          documento={selectedDocumento}
          onClose={handleCloseModal}
        />
      )} */}
    </div>
  );
};

export default MisProyectos;