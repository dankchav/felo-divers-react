import React from 'react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext';

// Importa todos tus componentes de página (descomentando los que necesites)
import Inicio from './components/pages/Inicio';
import Certificaciones from './components/pages/Certificaciones';
import DetallesCertificacion from './components/pages/DetallesCertificacion';
import Campamentos from './components/pages/Campamentos';
import DetallesCampamento from './components/pages/DetallesCampamento';
import Experiencias from './components/pages/Experiencias';
import Viajes from './components/pages/Viajes';
import Equipo from './components/pages/Equipo';
import SignUp from './components/pages/SignUp'; 
import Register from './components/pages/Register';
import SearchResults from './components/pages/SearchResults';
import Politicas from './components/pages/Politicas';
import Admin from './components/pages/Admin';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <FloatingWhatsApp />
          <Routes>
            <Route path='/' element={<Inicio />} /> 
            <Route path='/certificaciones' element={<Certificaciones />} />
            <Route path='/certificacion/:slug' element={<DetallesCertificacion />} />
            <Route path='/campamentos/' element={<Campamentos />} />
            <Route path='/campamento/:slug' element={<DetallesCampamento />} />
            <Route path='/experiencias' element={<Experiencias />} />
            <Route path='/viajes' element={<Viajes />} />
            <Route path='/equipo' element={<Equipo />} />
            <Route path='/sign-up' element={<SignUp />} /> 
            <Route path='/register' element={<Register />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/politicas' element={<Politicas />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;