import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import backgroundImage from "../image/photo_background_page_acceuil.PNG";
import logoImage from "../image/logo_hemoespoir.PNG";
import Cookies from 'js-cookie';
import config from '../config';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${config.BACKEND_URL}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok && data.patient && data.patient.length > 0) {
        const patient = data.patient[0];
        console.log("Patient Data:", patient); 
        localStorage.setItem('patient', JSON.stringify(patient));
        Cookies.set('patientId', patient.Id_Patient, { expires: 7 }); 
        Cookies.set('medecinId', patient.medecinId, { expires: 7 }); 
        navigate('/dashboard');
      } else {
        setError(new Error("Nom d'utilisateur ou mot de passe incorrect"));
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
        <p style={styles.footer}>©2024 HemoEspoir</p>
        <button style={styles.adminLink} onClick={() => navigate('/doctor-login')}>En tant que médecin</button>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "'Roboto', sans-serif",
    filter: "brightness(105%) contrast(100%)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
    padding: "12px 12px 12px 40px",
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
    cursor: "pointer",
  },
};

export default Login;