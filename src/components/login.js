import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "C:/Users/cele/hemoespoir.io/website/src/image/nabil2.PNG";
import logoImage from "C:/Users/cele/hemoespoir.io/website/src/image/Capture.PNG";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
      setLoading(false);

      if (data.patient) {
        navigate('/dashboard'); // Rediriger vers le tableau de bord après une connexion réussie
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
      <div style={styles.imageContainer}></div>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img src={logoImage} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.welcomeContainer}>
          <h1 style={styles.welcomeText}>Bienvenue 👋</h1>
          <p style={styles.subtitle}>Ici, chaque héros de l'hémophilie trouve soutien, espoir et une communauté compréhensive....</p>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Full name:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div>
            <button type="submit" style={styles.button}>Submit</button>
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
        <a href="/admin" style={styles.adminLink}>Admin</a>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },
  imageContainer: {
    flex: 1,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a", // Fond gris foncé
    color: "#ffffff",
    padding: "20px",
  },
  logoContainer: {
    marginBottom: "20px",
  },
  logo: {
    width: "100px",
    height: "100px",
  },
  welcomeContainer: {
    width: "100%",
    textAlign: "center",
    marginBottom: "40px",
    border: "2px solid #ffffff", 
    padding: "20px",
    borderRadius: "8px",
  },
  welcomeText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#1de9b6",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#ff4081",
    color: "#ffffff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#ff79b0",
  },
  message: {
    marginTop: "20px",
    textAlign: "center",
    color: "#ffffff",
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
  },
  adminLink: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#1de9b6",
    textDecoration: "none",
  },
};

export default Login;
