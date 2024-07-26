import React, { useEffect, useState } from "react";
import backgroundImage from '../image/fiche_technique_background2.PNG'; 
import axios from 'axios'; 
import config from '../config'; 

function Dashboard() {
  const [data, setData] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BACKEND_URL}fichemedical?patientid=9`); 
        setData(response.data); 
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setData(null); 
      }
    };

    fetchData(); 
  }, []); 
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fiche technique</h1>
      {data ? (
        <div style={styles.gridContainer}>
          <div style={styles.gridItem}><strong>Id Patient:</strong> {data.Id_Patient || '-'}</div>
          <div style={styles.gridItem}><strong>Nom Utilisateur:</strong> {data.NomUtilisateur || '-'}</div>
          <div style={styles.gridItem}><strong>Nom complet:</strong> {data.Nomcomplet || '-'}</div>
          <div style={styles.gridItem}><strong>Date de naissance:</strong> {data.DateNaissance || '-'}</div>
          <div style={styles.gridItem}><strong>Email:</strong> {data.Email || '-'}</div>
          <div style={styles.gridItem}><strong>Téléphone:</strong> {data.Telephone || '-'}</div>
          <div style={styles.gridItem}><strong>Adresse:</strong> {data.Adresse || '-'}</div>
          <div style={styles.gridItem}><strong>Mot de passe:</strong> {data.Motdepasse || '-'}</div>
          <div style={styles.gridItem}><strong>Image:</strong> {data.image || '-'}</div>
          <div style={styles.gridItem}><strong>Groupe sanguin:</strong> {data.Groupesanguin || '-'}</div>
          <div style={styles.gridItem}><strong>Taille:</strong> {data.Taille || '-'}</div>
          <div style={styles.gridItem}><strong>Poids:</strong> {data.Poids || '-'}</div>
          <div style={styles.gridItem}><strong>Sexe:</strong> {data.Sexe || '-'}</div>
          <div style={styles.gridItem}><strong>Antécédent Mère:</strong> {data.AntecedentMere || '-'}</div>
          <div style={styles.gridItem}><strong>Antécédent Père:</strong> {data.AntecedentPere || '-'}</div>
          <div style={styles.gridItem}><strong>Type de Maladie:</strong> {data.TypeDeMaladie || '-'}</div>
        </div>
      ) : (
        <p style={styles.message}>Chargement des données...</p>
      )}
      <button style={styles.button}>Suivant</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff", 
    fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif", 
    backgroundBlendMode: "overlay", 
    backgroundColor: "rgba(0, 0, 0, 0.7)", 
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#40E0D0", 
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(8, auto)",
    gap: "10px",
    width: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  gridItem: {
    border: "1px solid #40E0D0",
    padding: "10px",
    textAlign: "left",
    color: "#ffffff",
  },
  message: {
    fontSize: "18px",
    maxWidth: "600px",
    textAlign: "center",
    lineHeight: "1.6",
    color: "#ffffff", 
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#40E0D0", 
    border: "none",
    borderRadius: "25px", 
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  }
};

export default Dashboard;
