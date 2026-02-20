// src/pages/aprendiz/Entregables.tsx
import React, { useState } from "react";
import EntregablesStats from "../../Components/aprendiz/EntregablesStats";
import EntregablesTable from "../../Components/aprendiz/EntregablesTable";
import EntregableModal from "../../Components/aprendiz/EntregableModal";

const Entregables: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEntregable, setSelectedEntregable] = useState<any>(null);

  const handleOpenModal = (entregable: any) => {
    setSelectedEntregable(entregable);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEntregable(null);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Dashboard / Inicio</span>
          <span className="text-gray-400">•</span>
          <span className="text-blue-600 font-medium">Entregables</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Entregables</h1>
        <p className="text-gray-600 mt-1">
          Gestiona y da seguimiento a tus entregas académicas
        </p>
      </div>

      {/* Stats Cards */}
      <EntregablesStats />

      {/* Tabla de Entregables */}
      <EntregablesTable onViewDetails={handleOpenModal} />

      {/* Modal de detalles/subida */}
      {modalOpen && (
        <EntregableModal
          entregable={selectedEntregable}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Entregables;