// src/config/menus.ts
export type MenuItem = {
  label: string;
  icon: string;
  path: string;
};

export const MENUS = {
  admin: [
    { label: "Dashboard", icon: "home", path: "/admin" },
    { label: "Gestión de Usuarios", icon: "users", path: "/admin/usuarios" },
    { label: "Banco de Proyectos", icon: "folder", path: "/admin/banco-proyectos" },
    { label: "Gestión de Proyectos", icon: "clipboard", path: "/admin/proyectos" },
    { label: "Gestión Académica", icon: "book", path: "/admin/academica" },
    { label: "Gestión Documental", icon: "file", path: "/admin/documentos" },
    { label: "Reportes y Seguimiento", icon: "chart", path: "/admin/reportes" },
    { label: "Configuración del Sistema", icon: "settings", path: "/admin/configuracion" },
    { label: "Auditoría y Trazabilidad", icon: "shield", path: "/admin/auditoria" },
  ],
  instructor: [
    { label: "Dashboard", icon: "home", path: "/instructor" },
    { label: "Mis Fichas", icon: "users", path: "/instructor/fichas" },
    { label: "Mis Proyectos", icon: "folder", path: "/instructor/proyectos" },
    { label: "Seguimiento Académico", icon: "book", path: "/instructor/seguimiento" },
    { label: "Evaluaciones", icon: "check", path: "/instructor/evaluaciones" },
    { label: "Gestión Documental", icon: "file", path: "/instructor/documentos" },
    { label: "Reportes", icon: "chart", path: "/instructor/reportes" }
  ],
  aprendiz: [
    { label: "Dashboard", icon: "home", path: "/aprendiz" },
    { label: "Solicitud de Proyecto", icon: "folder", path: "/aprendiz/solicitud" },
    { label: "Mis Proyectos", icon: "clipboard", path: "/aprendiz/mis-proyectos" },
    { label: "Entregables", icon: "file", path: "/aprendiz/entregables" },
    { label: "Banco de Proyectos", icon: "folder", path: "/aprendiz/banco-proyectos" },
  ]
};