// src/pages/admin/AdminDashboard.tsx
import React from "react";
import AdminSummaryCards from "../../Components/administrador/AdminSummaryCards";
import GestionCards from "../../Components/administrador/GestionCards";
import ProyectosRecientes from "../../Components/administrador/ProyectosRecientes";
import ProyectosTable from "../../Components/administrador/ProyectosTable";
import AddProjectButton from "../../Components/administrador/AddProjectButton";

const AdminDashboard: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Panel Administrativo
        </h1>
        <p className="text-gray-600">
          Resumen general y gestión del sistema
        </p>
      </div>

      {/* Summary Cards */}
      <AdminSummaryCards />

      {/* Grid de 4 columnas para Gestión */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <GestionCards />
      </div>

      {/* Grid de 2 columnas para Proyectos Recientes y Botón Agregar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-3">
          <ProyectosRecientes />
        </div>
        <div className="lg:col-span-1">
          <AddProjectButton />
        </div>
      </div>

      {/* Tabla de Proyectos */}
      <ProyectosTable />
    </div>
  );
};

export default AdminDashboard;