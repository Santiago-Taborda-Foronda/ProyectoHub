import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import InitPage from './pages/pageInit/InitPage'
import './App.css'
import ForgotPasswordForm from './Components/auth/ForgotPasswordForm'



function BrowserApp() {

  return (
    <>
    <Routes>
      <Route path="/" element={<InitPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordForm />} />
    </Routes>
    </>
  )
}


function App() {

  return (
    <>
    <BrowserRouter>
      <BrowserApp />
    </BrowserRouter>
    </>
  )
}

export default App
