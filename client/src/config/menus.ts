// src/config/menus.ts

export type MenuItem = {
  label: string;
  icon: string;
  path: string;
};

export const MENUS = {
  admin: [
    { label: "Dashboard", icon: "home", path: "/admin" },
    { label: "Usuarios", icon: "users", path: "/admin/users" },
    { label: "Reportes", icon: "chart", path: "/admin/reports" }
  ],

  instructor: [
    { label: "Instructor", icon: "home", path: "/instructor" },
    { label: "Mis Fichas", icon: "users", path: "/instructor/fichas" },
    { label: "Mis Proyectos", icon: "folder", path: "/instructor/proyectos" },
    { label: "Seguimiento Académico", icon: "book", path: "/instructor/seguimiento" },
    { label: "Evaluaciones", icon: "check", path: "/instructor/evaluaciones" },
    { label: "Gestión Documental", icon: "file", path: "/instructor/documentos" },
    { label: "Reportes", icon: "chart", path: "/instructor/reportes" }
  ],

  aprendiz: [
    { label: "Aprendiz", icon: "home", path: "/aprendiz" },
    { label: "Mis Proyectos", icon: "folder", path: "/aprendiz/proyectos" },
    { label: "Entregables", icon: "file", path: "/aprendiz/entregables" }
  ]
};