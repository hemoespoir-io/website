// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Dashboard from './Dashboard';
import DoctorLogin from './DoctorLogin';
import FicheTechnique from './FicheTechnique';
import rendezvousPatient from './rendezvousPatient';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
      <Route path="/fiche-technique" element={<FicheTechnique />} />
      <Route path="/appointments" element={<rendezvousPatient />} />
      
    </Routes>
  );
}

export default App;
