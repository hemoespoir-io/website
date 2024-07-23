import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import backgroundImage from "C:/Users/cele/hemoespoir.io/website/src/image/photo_background_page_acceuil.PNG";
import logoImage from "C:/Users/cele/hemoespoir.io/website/src/image/logo_hemoespoir.PNG";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
      if (data.patient) {
        navigate('/dashboard');
      } else {
        setError(new Error("Invalid login details"));
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img src={logoImage} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.welcomeContainer}>
          <h1 style={styles.welcomeText}>Bienvenue 👋</h1>
          <p style={styles.subtitle}>Ensemble, nous prenons soin de votre santé avec dévouement et amour 🌟...</p>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Nom Complet"
            />
          </div>
          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Mot de passe"
            />
          </div>
          <div style={styles.linkContainer}>
            <button type="button" style={styles.linkButton} onClick={() => navigate('/forgot-password')}>
              Mot de passe oublié ?
            </button>
            <button type="button" style={styles.linkButton} onClick={() => navigate('/signup')}>
              Vous ne possédez pas de compte ? Authentification
            </button>
          </div>
          <div>
            <button type="submit" style={styles.button}>Se connecter</button>
          </div>
        </form>
        {loading && <p style={styles.message}>Loading...</p>}
        {error && <p style={styles.message}>Error: {error.message}</p>}
        {data && data.patient ? (
          <p style={styles.message}>{JSON.stringify(data.patient)}</p>
        ) : (
          data && <p style={styles.message}>Invalid login details</p>
        )}
        <p style={styles.footer}>©2024 HemoEspoir</p>
        <a href="/admin" style={styles.adminLink}>En tant que médecin</a>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "'Roboto', sans-serif",
    filter: "brightness(105%) contrast(100%)", // Augmenter légèrement la luminosité
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Réduire l'opacité pour plus de clarté
  },
  container: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    marginBottom: "20px",
  },
  logo: {
    width: "120px",
    height: "120px",
  },
  welcomeContainer: {
    width: "100%",
    textAlign: "center",
    marginBottom: "40px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  welcomeText: {
    fontSize: "26px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  inputGroup: {
    position: "relative",
    marginBottom: "15px",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    color: "#ccc",
  },
  input: {
    width: "100%",
    padding: "12px 12px 12px 40px", // Padding left increased for icon space
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    boxSizing: "border-box",
    background: "rgba(255, 255, 255, 0.85)",
    color: "#000",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#ffffff",
    textDecoration: "underline",
    cursor: "pointer",
    marginBottom: "10px",
    fontSize: "14px",
    "&:hover": {
      color: "#ff4081",
    },
  },
  button: {
    backgroundColor: "#4caf50",
    color: "#ffffff",
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#45a045",
    },
  },
  message: {
    marginTop: "20px",
    textAlign: "center",
    color: "#ff4081",
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
  },
  adminLink: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#ff4081",
    textDecoration: "none",
  },
};

export default Login;
