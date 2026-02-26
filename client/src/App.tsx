// src/App.tsx (actualizado)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './Components/layout/DashboardLayout'
import InitPage from './pages/pageInit/InitPage'
import ForgotPasswordPage from './pages/pageInit/ForgotPasswordPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import InstructorDashboard from './pages/instructor/InstructorDashboard'
import AprendizDashboard from './pages/aprendiz/AprendizDashboard'
import SolicitudProyecto from './pages/aprendiz/SolicitudProyecto'
import Entregables from './pages/aprendiz/Entregables'
import BancoProyectos from './pages/aprendiz/BancoProyectos'
import MisProyectos from './pages/aprendiz/MisProyectos'
import PlanteamientoProblema from './pages/aprendiz/documentos/PlanteamientoProblema' // <-- Importar
import EspecificacionRequisitos from './pages/aprendiz/documentos/EspecificacionRequisitos';
import HistorialActividad from './pages/aprendiz/HistorialActividad';

function App() {
  const userRole = 'aprendiz'

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<InitPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Rutas protegidas */}
        <Route path="/" element={<DashboardLayout userRole={userRole} />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="instructor" element={<InstructorDashboard />} />
          
          {/* Rutas de Aprendiz */}
          <Route path="aprendiz" element={<AprendizDashboard />} />
          <Route path="aprendiz/solicitud" element={<SolicitudProyecto />} />
          <Route path="aprendiz/mis-proyectos" element={<MisProyectos />} />
          <Route path="aprendiz/entregables" element={<Entregables />} />
          <Route path="aprendiz/banco-proyectos" element={<BancoProyectos />} />
          <Route path="aprendiz/historial-actividad" element={<HistorialActividad />} />
          
          {/* Rutas de documentos */}
          <Route path="aprendiz/documento/planteamiento-problema" element={<PlanteamientoProblema />} />
          <Route path="aprendiz/documento/especificacion-requisitos" element={<EspecificacionRequisitos />} />
          {/* Aquí irán las demás rutas de documentos */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App