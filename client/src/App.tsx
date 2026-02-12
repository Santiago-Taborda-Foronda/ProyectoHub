import { BrowserRouter,  Routes, Route } from 'react-router'
import InitPage from './pages/pageInit/InitPage'
import './App.css'



function BrowserApp() {

  return (
    <>
    <Routes>
      <Route path="/" element={<InitPage />} />
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
