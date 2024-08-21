import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Dashboard from './Dashboard';
import DoctorLogin from './DoctorLogin';
import FicheTechnique from './FicheTechnique';
import RendezvousPatient from './RendezvousPatient';  // Importation modifiée
import DashboardMedecin from './dashboardMedecin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboardMedecin" element={<DashboardMedecin />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
      <Route path="/fiche-technique" element={<FicheTechnique />} />
      <Route path="/appointments" element={<RendezvousPatient />} />  {/* Composant modifié */}
    </Routes>
  );
}

export default App;
