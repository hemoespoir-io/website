import React from "react";
import backgroundImage from 'C:/Users/cele/hemoespoir.io/website/src/image/fiche_technique_background2.PNG';

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>fiche technique</h1>
      <p style={styles.message}>Bienvenue sur fiche technique !</p>
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
    color: "#ffffff", // White text color for contrast
    fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif", // Professional font
    backgroundBlendMode: "overlay", // Overlay for better readability
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#40E0D0", // Turquoise title color to stand out
  },
  message: {
    fontSize: "18px",
    maxWidth: "600px",
    textAlign: "center",
    lineHeight: "1.6",
    color: "#ffffff", // White message color for readability
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#40E0D0", // Turquoise button color
    border: "none",
    borderRadius: "25px", // Rounded corners
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#32C2B3", // Darker turquoise on hover
    transform: "scale(1.05)",
  }
};

export default Dashboard;
