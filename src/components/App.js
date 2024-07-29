
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";
import DoctorLogin from "./DoctorLogin"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/doctor-login" element={<DoctorLogin />} /> {}
    </Routes>
  );
}

export default App;
