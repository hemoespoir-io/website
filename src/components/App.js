import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";
import NextPage from "./NextPage"; // Importez le composant NextPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nextpage" element={<NextPage />} /> {/* Ajoutez la nouvelle route */}
    </Routes>
  );
}

export default App;
