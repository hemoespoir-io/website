import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Dashboard from './Dashboard';
import DoctorLogin from './DoctorLogin';
import FicheTechnique from './FicheTechnique';
import RendezvousPatient from './rendezvousPatient';  
import DashboardMedecin from './dashboardMedecin';
<<<<<<< HEAD
=======
import AddAppointment from './AddAppointment';
>>>>>>> 017ddfd (feat-15)


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboardMedecin" element={<DashboardMedecin />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
      <Route path="/fiche-technique" element={<FicheTechnique />} />
<<<<<<< HEAD
      <Route path="/appointments" element={<RendezvousPatient />} />  {}
=======
      <Route path="/add-appointment" element={<AddAppointment />} />
      <Route path="/appointments" element={<RendezvousPatient />} />
>>>>>>> 017ddfd (feat-15)
    </Routes>
  );
}

export default App;