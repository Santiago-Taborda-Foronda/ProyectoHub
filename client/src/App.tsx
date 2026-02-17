import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InitPage from './pages/pageInit/InitPage'
import ForgotPasswordPage from './pages/pageInit/ForgotPasswordPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import InstructorDashboard from './pages/instructor/InstructorDashboard'
import AprendizDashboard from './pages/aprendiz/AprendizDashboard'
import './App.css'

function BrowserApp() {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/instructor" element={<InstructorDashboard />} />
      <Route path="/aprendiz" element={<AprendizDashboard />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <BrowserApp />
    </BrowserRouter>
  )
}

export default App