import React from "react";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>fiche technique</h1>
      <p style={styles.message}>Bienvenue sur fiche technique  !</p>
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
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  message: {
    fontSize: "18px",
  },
};

export default Dashboard;
