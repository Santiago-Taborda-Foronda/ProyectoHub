// src/components/admin/AddProjectButton.tsx
import React from "react";
import { Plus, Sparkles } from "lucide-react";

const AddProjectButton: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg h-full flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <button className="w-full flex flex-col items-center justify-center gap-3 text-white">
        <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
          <Plus size={32} className="text-white" />
        </div>
        <div className="text-center">
          <span className="text-lg font-semibold block">Crear Nuevo Proyecto</span>
          <span className="text-sm text-blue-100 mt-1 block">
            Inicia un nuevo proyecto académico
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-xs bg-white/10 px-3 py-1.5 rounded-full">
          <Sparkles size={14} />
          <span>Plantillas disponibles</span>
        </div>
      </button>
    </div>
  );
};

export default AddProjectButton;