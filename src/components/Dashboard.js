import React, { useEffect, useState } from "react";
import backgroundImage from '../image/fiche_technique_background2.PNG'; 
import axios from 'axios'; 
<<<<<<< HEAD
import config from '../config'; 

function Dashboard() {
  const [data, setData] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BACKEND_URL}fichemedical?patientid=9`); // Utiliser la configuration ici
=======
const backend_url = 'http://localhost:5000/'; 

function Dashboard() {
  const [data, setData] = useState(''); 
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend_url}fichemedical?patientid=9`);
>>>>>>> 2ed34ed (feat-3)
        setData(response.data); 
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setData('Erreur lors de la récupération des données'); 
      }
    };

    fetchData(); 
  }, []); 
<<<<<<< HEAD

=======
>>>>>>> 2ed34ed (feat-3)
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fiche technique</h1>
      <p style={styles.message}>{data ? `Bienvenue sur votre fiche technique : ${data}` : 'Chargement des données...'}</p>
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
