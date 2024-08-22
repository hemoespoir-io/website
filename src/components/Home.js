import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../image/backgEEEE.jpg";  
import linkedinIcon from "../image/linkedin.png"; 
import emailIcon from "../image/mail.png"; 
import facebookIcon from "../image/facebook.png"; 
import instagramIcon from "../image/instagram.png"; 

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
      
      <div style={styles.contentContainer}>
        <div style={styles.buttonContainer}>
          <button onClick={handleAboutClick} style={styles.button}>
            À propos de nous
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
                  Bienvenue sur HemoCare en collaboration avec ANAPH (ASSOCIATION NATIONALE D'AMIS ET PARENTS D'HEMOPHILES), l'application web dédiée à améliorer la
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
              <div style={styles.contactContainer}>
                <div style={styles.contactItem}>
                  <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} /> hemo_care
                </div>
                <div style={styles.contactItem}>
                  <img src={emailIcon} alt="Email" style={styles.icon} /> hemo.care@gmail.com
                </div>
                <div style={styles.contactItem}>
                  <img src={facebookIcon} alt="Facebook" style={styles.icon} /> ANAPH "compte de l'ASSOCIATION"
                </div>
                <div style={styles.contactItem}>
                  <img src={instagramIcon} alt="Instagram" style={styles.icon} /> hemo_care
                </div>
              </div>
              <h2 style={styles.sectionHeader}>Lancement de l'Application Mobile</h2>
              <p style={styles.description}>
                HemoCare sera lancée le 20 avril 2025, offrant des outils pour mieux gérer l'hémophilie. Suivez-nous pour des mises à jour et des informations exclusives sur nos réseaux sociaux.
              </p>
            </div>
          )}
        </div>
      </div>
      <footer style={styles.footerCopyright}>
        ©2024 HemoEspoir
      </footer>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    fontFamily: "'Roboto', sans-serif",
    color: "#333333",
    overflow: "hidden",
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  contentContainer: {
    position: "relative",
    zIndex: 1,
    width: "100%",
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
    marginTop: "100px",
  },
  textContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "8px",
    color: "#333333",
  },
  headerContainer: {
    marginBottom: "40px",
  },
  header: {
    fontSize: "34px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#4caf50",
  },
  subHeader: {
    fontSize: "22px",
    fontWeight: "500",
    marginBottom: "20px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  sectionHeader: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#4caf50",
  },
  footer: {
    marginTop: "20px",
  },
  footerCopyright: {
    marginTop: "auto",
    padding: "10px 0",
    textAlign: "center",
    color: "#333333",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  '@media (max-width: 768px)': {
    header: {
      fontSize: "28px",
    },
    subHeader: {
      fontSize: "20px",
    },
    description: {
      fontSize: "14px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "16px",
    },
    container: {
      padding: "20px",
    },
  },
  '@media (max-width: 480px)': {
    header: {
      fontSize: "24px",
    },
    subHeader: {
      fontSize: "18px",
    },
    description: {
      fontSize: "14px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "14px",
    },
    container: {
      padding: "10px",
    },
  },
};

export default Home;