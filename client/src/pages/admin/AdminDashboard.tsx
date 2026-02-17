// src/pages/instructor/InstructorDashboard.tsx
import React from "react";
import SummaryCards from "../../Components/instructor/SummaryCards";
import ProjectsList from "../../Components/instructor/ProjectsList";
import PendingEvaluations from "../../Components/instructor/PendingEvaluations";
import AcademicTable from "../../Components/instructor/AcademicTable";

const InstructorDashboard: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Panel del Instructor
        </h1>
        <p className="text-gray-600">
          Resumen académico y seguimiento de proyectos asignados
        </p>
      </div>

      {/* Summary Cards */}
      <SummaryCards />

      {/* Grid de dos columnas para Projects y Evaluations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectsList />
        <PendingEvaluations />
      </div>

      {/* Tabla de seguimiento */}
      <AcademicTable />
    </div>
  );
};

export default InstructorDashboard;