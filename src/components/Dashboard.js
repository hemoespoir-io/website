import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../image/backgroundfichemedical.PNG';
import axios from 'axios';
import config from '../config';

function Dashboard() {
  const [data, setData] = useState(null);
  const [patient, setPatient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPatient = JSON.parse(localStorage.getItem('patient'));
    setPatient(storedPatient);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BACKEND_URL}fichemedical?patientid=${storedPatient.Id_Patient}`);
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setData({ error: 'Erreur lors de la récupération des données' });
      }
    };

    if (storedPatient) {
      fetchData();
    }
  }, []);

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#1F8A70";
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#40E0D0";
    e.target.style.transform = "scale(1)";
  };

  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>
      <div style={topMenuStyle}>
        <button
          style={topMenuButtonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigation('/')}
        >
          Accueil
        </button>
        <button
          style={topMenuButtonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigation('/account')}
        >
          Compte
        </button>
        <button
          style={topMenuButtonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigation('/logout')}
        >
          Déconnexion
        </button>
      </div>
      <div style={contentContainerStyle}>
        <div style={menuStyle}>
          <button
            style={menuButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleNavigation('/appointments')}
          >
            Prendre / Consulter Rendez-vous
          </button>
          <button
            style={menuButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleNavigation('/medicament')}
          >
            Médicament Date/Dose
          </button>
          <button
            style={menuButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleNavigation('/rehab-videos')}
          >
            Vidéo de Rééducation
          </button>
          <button
            style={menuButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleNavigation('/Dossiers Médicaux')}
          >
            Dossiers Médicaux
          </button>
          <button
            style={menuButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleNavigation('/disease-updates')}
          >
            Nouveautés dans la Maladie
          </button>
          <button
            style={menuButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleNavigation('/social-communication')}
          >
            Réseaux Sociaux et Communication
          </button>
        </div>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Fiche Medicale </h1>
          {data ? (
            data.error ? (
              <p style={messageStyle}>{data.error}</p>
            ) : (
              <table style={tableStyle}>
                <tbody>
                  {data.patient && data.patient.length > 0 ? (
                    <React.Fragment>
                      <tr>
                        <th style={thStyle}>Nom Complet</th>
                        <td style={tdStyle}>{data.patient[0].Nomcomplet}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Date de Naissance</th>
                        <td style={tdStyle}>{new Date(data.patient[0].DateNaissance).toLocaleDateString()}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Email</th>
                        <td style={tdStyle}>{data.patient[0].Email}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Téléphone</th>
                        <td style={tdStyle}>{data.patient[0].Telephone}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Adresse</th>
                        <td style={tdStyle}>{data.patient[0].Adresse}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Groupe Sanguin</th>
                        <td style={tdStyle}>{data.patient[0].Groupesanguin}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Sexe</th>
                        <td style={tdStyle}>{data.patient[0].Sexe}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Poids</th>
                        <td style={tdStyle}>{data.patient[0].Poids}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Taille</th>
                        <td style={tdStyle}>{data.patient[0].Taille}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Type de Maladie</th>
                        <td style={tdStyle}>{data.patient[0].TypeDeMaladie}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Antécédent Mère</th>
                        <td style={tdStyle}>{data.patient[0].AntecedentMere}</td>
                      </tr>
                      <tr>
                        <th style={thStyle}>Antécédent Père</th>
                        <td style={tdStyle}>{data.patient[0].Id_Medecin}</td>
                      </tr>
                    </React.Fragment>
                  ) : (
                    <tr>
                      <td style={tdStyle} colSpan="2">Aucune donnée disponible</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )
          ) : (
            <p style={messageStyle}>Chargement des données...</p>
          )}
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
};

const topMenuStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '10px 0',
  width: '100%',
  position: 'absolute',
  top: 0,
  zIndex: 2,
};

const topMenuButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#ffffff',
  backgroundColor: '#40E0D0',
  border: 'none',
  borderRadius: '15px',
  cursor: 'pointer',
  margin: '0 10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  marginTop: '60px',
};

const menuStyle = {
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '20px',
  width: '300px',
  borderRadius: '15px',
  margin: '20px',
};

const menuButtonStyle = {
  width: '100%',
  padding: '15px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#ffffff',
  backgroundColor: '#40E0D0',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  margin: '10px 0',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
};

const contentStyle = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  color: '#ffffff',
  fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  textAlign: 'center',
  padding: '20px',
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: '#40E0D0',
};

const messageStyle = {
  fontSize: '18px',
  maxWidth: '600px',
  lineHeight: '1.6',
};

const tableStyle = {
  width: '60%', 
  maxWidth: '600px', 
  borderCollapse: 'collapse',
  marginTop: '20px',
  color: '#ffffff',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderRadius: '10px',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const thStyle = {
  backgroundColor: '#333333',
  color: '#ffffff',
  padding: '15px',
  borderBottom: '1px solid #555555',
  textAlign: 'left',
  fontSize: '16px',
};

const tdStyle = {
  padding: '15px',
  borderBottom: '1px solid #555555',
  textAlign: 'left',
  fontSize: '14px',
};

export default Dashboard;