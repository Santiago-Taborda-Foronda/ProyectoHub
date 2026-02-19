// src/components/sidebar/Sidebar.tsx
import { MENUS } from "../../config/menus";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  BarChart3,
  FolderOpen,
  BookOpen,
  CheckSquare,
  FileText,
  LogOut,
  Settings,
  Shield,
  ClipboardList,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
  role: "admin" | "instructor" | "aprendiz";
}

// Mapa ampliado de iconos
const iconMap: Record<string, React.ElementType> = {
  home: Home,
  users: Users,
  chart: BarChart3,
  folder: FolderOpen,
  book: BookOpen,
  check: CheckSquare,
  file: FileText,
  settings: Settings,
  shield: Shield,
  clipboard: ClipboardList,
};

export default function Sidebar({ role }: Props) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const menu = MENUS[role];

  const handleSignOut = () => {
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  // Detectar scroll en el sidebar
  const handleSidebarScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled(e.currentTarget.scrollTop > 10);
  };

  return (
    <aside className="w-64 bg-white h-screen border-r flex flex-col relative">
      {/* Header fijo con sombra cuando se hace scroll */}
      <div 
        className={`p-4 sticky top-0 bg-white z-10 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <h2 className="text-xl font-bold text-blue-600">ProyectoHub</h2>
      </div>

      {/* Contenedor con scroll independiente */}
      <div 
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        onScroll={handleSidebarScroll}
      >
        <nav className="p-4 space-y-1">
          {menu.map((item) => {
            const IconComponent = iconMap[item.icon] || Home;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md scale-[1.02]" 
                    : "text-gray-700 hover:bg-blue-50 hover:scale-[1.02] hover:shadow-sm"
                  }
                `}
              >
                <IconComponent 
                  size={20} 
                  className={isActive ? "text-white" : "text-gray-500"} 
                />
                <span className="text-sm font-medium">{item.label}</span>
                
                {/* Indicador de active mejorado */}
                {isActive && (
                  <div className="ml-auto w-1.5 h-8 bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer fijo con Sign out */}
      <div className="p-4 border-t bg-white sticky bottom-0">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 w-full hover:scale-[1.02]"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Sign out</span>
        </button>
      </div>

      {/* Estilos personalizados para el scrollbar */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </aside>
  );
}