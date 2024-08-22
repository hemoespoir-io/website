import React from 'react';
import { useLocation } from 'react-router-dom';

function FicheTechnique() {
  const location = useLocation();
  const { medecins } = location.state || { medecins: [] };

  return (
    <div>
      <h1>Fiche Technique</h1>
      {medecins.length > 0 ? (
        medecins.map((medecin) => (
          <div key={medecin.Id_Medecin}>
            <p>Nom: {medecin.nom}</p>
            <p>Spécialité: {medecin.specialite}</p>
            <p>Numéro d'urgence: {medecin.numero_urgence}</p>
            {}
          </div>
        ))
      ) : (
        <p>Aucune information de médecin disponible.</p>
      )}
    </div>
  );
}

export default FicheTechnique;