// src/pages/aprendiz/AprendizDashboard.tsx
import React from "react";
import AprendizSummaryCards from "../../Components/aprendiz/AprendizSummaryCards";
import ProyectoDesarrollo from "../../Components/aprendiz/ProyectoDesarrollo";
import EntregasPendientes from "../../Components/aprendiz/EntregasPendientes";
import NotificacionesList from "../../Components/aprendiz/NotificacionesList";

const AprendizDashboard: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Bienvenido de nuevo, Aprendiz
        </h1>
        <p className="text-gray-600">
          Aquí tienes un resumen de tu progreso actual.
        </p>
      </div>

      {/* Summary Cards */}
      <AprendizSummaryCards />

      {/* Grid de dos columnas para Proyecto en desarrollo y Entregas pendientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ProyectoDesarrollo />
        <EntregasPendientes />
      </div>

      {/* Lista de notificaciones */}
      <NotificacionesList />
    </div>
  );
};

export default AprendizDashboard;