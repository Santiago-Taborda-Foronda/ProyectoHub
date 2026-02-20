// src/pages/aprendiz/SolicitudProyecto.tsx
import React from "react";
import SolicitudProyectoForm from "../../Components/aprendiz/SolicitudProyectoForm";

const SolicitudProyecto: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb / Navegación */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Dashboard / Inicio</span>
          <span className="text-gray-400">•</span>
          <span className="text-blue-600 font-medium">Solicitud de proyecto</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Solicitud de Proyectos</h1>
        <p className="text-gray-600 mt-1">
          Complete el siguiente formulario para proponer un nuevo proyecto.
        </p>
      </div>

      {/* Formulario de Solicitud */}
      <SolicitudProyectoForm />
    </div>
  );
};

export default SolicitudProyecto;