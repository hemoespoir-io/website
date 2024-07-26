import React from 'react';
import backgroundImage from 'C:/Users/cele/hemoespoir.io/website/src/image/background.PNG';

function NextPage() {
  const pageStyle = {
    position: 'relative',
    minHeight: '100vh',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '20px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxWidth: '1000px',
    margin: 'auto',
    backgroundColor: 'transparent',
    color: 'white',
  };

  const textContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    color: 'black', 
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#004080', 
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#002060', 
    transform: 'scale(1.05)',
  };

  const handleMouseOver = (e) => {
    Object.assign(e.currentTarget.style, buttonHoverStyle);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.currentTarget.style, buttonStyle);
  };

  const handleBackClick = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1>Bienvenue dans votre espace utilisateur</h1>
          <p style={{ margin: '20px 0', fontSize: '18px' }}>
            Accédez à vos informations médicales, prenez des rendez-vous et consultez des ressources utiles.
          </p>
        </div>
        <div style={buttonContainerStyle}>
          <button 
            style={buttonStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            onClick={() => window.location.href='/appointments'}
          >
            Prendre / Consulter Rendez-vous
          </button>
          <button 
            style={buttonStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            onClick={() => window.location.href='/medical-records'}
          >
            Dossiers Médicaux
          </button>
          <button 
            style={buttonStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            onClick={() => window.location.href='/rehab-videos'}
          >
            Vidéo de Rééducation
          </button>
          <button 
            style={buttonStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            onClick={() => window.location.href='/documents-conferences'}
          >
            Documents et Conférences
          </button>
          <button 
            style={buttonStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            onClick={() => window.location.href='/disease-updates'}
          >
            Nouveautés dans la Maladie
          </button>
          <button 
            style={buttonStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            onClick={() => window.location.href='/social-communication'}
          >
            Réseaux Sociaux et Communication
          </button>
        </div>
        <button 
          style={{ ...buttonStyle, marginTop: '40px' }} 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut} 
          onClick={handleBackClick}
        >
          Retour au tableau de bord
        </button>
      </div>
    </div>
  );
}

export default NextPage;
