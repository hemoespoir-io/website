import React, { useEffect, useState } from "react";
import backgroundImage from '../image/background.PNG'; 
import axios from 'axios'; 
import config from '../config'; 

function Dashboard() {
  const [data, setData] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BACKEND_URL}fichemedical?patientid=9`); 
        setData(response.data); 
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setData('Erreur lors de la récupération des données'); 
      }
    };

    fetchData(); 
  }, []); 
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
            onClick={() => handleNavigation('/medical-records')}
          >
            Dossiers Médicaux
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
            onClick={() => handleNavigation('/documents-conferences')}
          >
            Documents et Conférences
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
          <h1 style={titleStyle}>Fiche technique</h1>
          <p style={messageStyle}>{data ? `Bienvenue sur votre fiche technique : ${data}` : 'Chargement des données...'}</p>
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
  marginTop: '60px', // Add margin to avoid overlap with the top menu
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

export default Dashboard;
