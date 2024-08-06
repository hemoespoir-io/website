import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../image/homeback.PNG";

function Home() {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.buttonContainer}>
        <button onClick={handleAboutClick} style={styles.button}>
          A propos de nous
        </button>
        <button onClick={handleLoginClick} style={styles.button}>
          Se connecter
        </button>
      </div>
      <div style={styles.container}>
        {!showAbout && (
          <div style={styles.textContainer}>
            <div style={styles.headerContainer}>
              <h1 style={styles.header}>Bienvenue sur HemoCare</h1>
              <p style={styles.subHeader}>Votre Compagnon au Quotidien pour la Gestion de l'Hémophilie</p>
              <p style={styles.description}>
                Bienvenue sur HemoCare, l'application web dédiée à améliorer la
                qualité de vie des personnes atteintes d'hémophilie. Nous
                comprenons les défis uniques que vous rencontrez et nous sommes
                là pour vous offrir un soutien constant et personnalisé.
              </p>
            </div>
            <div style={styles.footer}>
              <p style={styles.description}>
                Merci de faire confiance à HemoCare. Ensemble, nous rendons la
                gestion de l'hémophilie plus simple et plus accessible.
              </p>
            </div>
          </div>
        )}
        {showAbout && (
          <div style={styles.textContainer}>
            <h2 style={styles.sectionHeader}>À Propos de HemoCare</h2>
            <p style={styles.description}>
              HemoCare soutient les hémophiles en améliorant la gestion de la maladie et en offrant des outils pratiques pour une vie plus autonome.
            </p>
            <h2 style={styles.sectionHeader}>À Propos de l'Hémophilie</h2>
            <p style={styles.description}>
              L'hémophilie est un trouble génétique de la coagulation, empêchant la formation efficace de caillots sanguins.
            </p>
            <h2 style={styles.sectionHeader}>Contact</h2>
            <p style={styles.description}>Téléphone: 06 666666</p>
            <p style={styles.description}>Email: hemo.care@gmail.com</p>
            <p style={styles.description}>LinkedIn: hemo_care</p>
            <p style={styles.description}>Facebook: toto</p>
            <h2 style={styles.sectionHeader}>Lancement de l'Application Mobile</h2>
            <p style={styles.description}>
              HemoCare sera lancée le 20 avril 2025, offrant des outils pour mieux gérer l'hémophilie. Suivez-nous pour des mises à jour et des informations exclusives sur nos réseaux sociaux.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "'Roboto', sans-serif",
    color: "#ffffff",
  },
  buttonContainer: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    gap: "10px", 
  },
  button: {
    backgroundColor: "#4caf50",
    color: "#ffffff",
    padding: "16px 32px",
    borderRadius: "4px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  container: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    borderRadius: "8px",
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Subtle black background for better readability
    padding: "20px",
    borderRadius: "8px",
  },
  headerContainer: {
    marginBottom: "40px",
  },
  header: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subHeader: {
    fontSize: "24px",
    fontWeight: "normal",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
  featuresContainer: {
    textAlign: "left",
    marginBottom: "40px",
  },
  sectionHeader: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  featureList: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  aboutContainer: {
    width: "80%",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    margin: "20px auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Subtle black background for better readability
  },
  footer: {
    marginTop: "20px",
  },
};

export default Home;
