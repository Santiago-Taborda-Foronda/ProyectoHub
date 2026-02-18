// src/config/menus.ts

export type MenuItem = {
  label: string;
  icon: string;
  path: string;
};

export const MENUS = {
  admin: [
    { label: "Administrador Dashboard", icon: "home", path: "/admin" },
    { label: "Gestion de Usuarios", icon: "users", path: "/admin/users" },
    { label: "Banco de Proyectos", icon: "users", path: "/admin/users" },
    { label: "Gestion de Proyectos", icon: "users", path: "/admin/users" },
    { label: "Gestion Academica", icon: "users", path: "/admin/users" },
    { label: "Gestion Documental", icon: "users", path: "/admin/users" },
    { label: "Reportes y Seguimiento", icon: "chart", path: "/admin/reports" },
    { label: "Configuracion del Sistema", icon: "users", path: "/admin/users" },
    { label: "Auditoria y Trazabilidad", icon: "users", path: "/admin/users" },
    
  ],

  instructor: [
    { label: "Instructor Dashboard", icon: "home", path: "/instructor" },
    { label: "Mis Fichas", icon: "users", path: "/instructor/fichas" },
    { label: "Mis Proyectos", icon: "folder", path: "/instructor/proyectos" },
    { label: "Seguimiento Académico", icon: "book", path: "/instructor/seguimiento" },
    { label: "Evaluaciones", icon: "check", path: "/instructor/evaluaciones" },
    { label: "Gestión Documental", icon: "file", path: "/instructor/documentos" },
    { label: "Reportes", icon: "chart", path: "/instructor/reportes" }
  ],

  aprendiz: [
    { label: "Aprendiz Dashboard", icon: "home", path: "/aprendiz" },
    { label: "Solicitud de  Proyecto", icon: "folder", path: "/aprendiz/proyectos" },
    { label: "Mis Proyectos", icon: "file", path: "/aprendiz/entregables" },
    { label: "Entregable", icon: "file", path: "/aprendiz/entregables" },
    { label: "Banco de Proyectos", icon: "file", path: "/aprendiz/entregables" },
  ]
};