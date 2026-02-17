// src/App.tsx (versión mejorada)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './Components/layout/DashboardLayout'
import InitPage from './pages/pageInit/InitPage'
import ForgotPasswordPage from './pages/pageInit/ForgotPasswordPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import InstructorDashboard from './pages/instructor/InstructorDashboard'
import AprendizDashboard from './pages/aprendiz/AprendizDashboard'
import './App.css'

function App() {
  // Simulación de autenticación - en un caso real vendría de un contexto/auth
  // Por ahora, podemos probar cambiando este valor manualmente
  const userRole = 'instructor' // o 'admin', 'aprendiz' según lo que quieras probar

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas sin layout */}
        <Route path="/" element={<InitPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Rutas protegidas con DashboardLayout - pasamos el rol */}
        <Route path="/" element={<DashboardLayout userRole={userRole} />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="instructor" element={<InstructorDashboard />} />
          <Route path="aprendiz" element={<AprendizDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App