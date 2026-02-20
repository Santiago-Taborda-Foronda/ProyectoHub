// src/pages/aprendiz/BancoProyectos.tsx
import React, { useState } from "react";
import BancoProyectosHeader from "../../Components/aprendiz/BancoProyectosHeader";
import BancoProyectosFilters from "../../Components/aprendiz/BancoProyectosFilters";
import BancoProyectosGrid from "../../Components/aprendiz/BancoProyectosGrid";
import BancoProyectosModal from "../../Components/aprendiz/BancoProyectosModal";

const BancoProyectos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProyecto, setSelectedProyecto] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    programa: "todos",
    año: "todos",
    tecnologia: "todos",
  });

  const handleOpenModal = (proyecto: any) => {
    setSelectedProyecto(proyecto);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProyecto(null);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <BancoProyectosHeader />

      {/* Filtros y búsqueda */}
      <BancoProyectosFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
      />

      {/* Grid de proyectos */}
      <BancoProyectosGrid
        searchTerm={searchTerm}
        selectedFilters={selectedFilters}
        onViewDetails={handleOpenModal}
      />

      {/* Modal de detalles del proyecto */}
      {modalOpen && (
        <BancoProyectosModal
          proyecto={selectedProyecto}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default BancoProyectos;