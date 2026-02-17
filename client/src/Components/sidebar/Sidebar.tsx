// src/components/sidebar/Sidebar.tsx
import { MENUS } from "../../config/menus";
import { Link, useLocation } from "react-router-dom";
// Importamos los iconos de lucide-react
import {
  Home,
  Users,
  BarChart3,
  FolderOpen,
  BookOpen,
  CheckSquare,
  FileText,
  LogOut,
} from "lucide-react";

interface Props {
  role: "admin" | "instructor" | "aprendiz";
}

// Mapa para renderizar el icono correcto basado en el string del menú
const iconMap: Record<string, React.ElementType> = {
  home: Home,
  users: Users,
  chart: BarChart3,
  folder: FolderOpen,
  book: BookOpen,
  check: CheckSquare,
  file: FileText,
};

export default function Sidebar({ role }: Props) {
  const location = useLocation(); // Para saber qué ruta está activa
  const menu = MENUS[role];

  const handleSignOut = () => {
    // Aquí iría tu lógica de cierre de sesión (limpiar localStorage, contexto, etc.)
    localStorage.removeItem("role");
    // Redirigir al login
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 bg-white h-screen p-4 border-r flex flex-col justify-between">
      {" "}
      {/* flex-col para que el botón quede al final */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-blue-600">ProyectoHub</h2>

        <nav className="space-y-1">
          {" "}
          {/* space-y-1 para separación más compacta */}
          {menu.map((item) => {
            const IconComponent = iconMap[item.icon] || Home; // Fallback a Home si no encuentra el icono
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <button
        onClick={handleSignOut}
        className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors w-full"
      >
        <LogOut size={20} />
        <span>Sign out</span>
      </button>
    </aside>
  );
}