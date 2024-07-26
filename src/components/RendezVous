// pages/RendezVous.js
import React from 'react';
import backgroundImage from 'C:/Users/cele/hemoespoir.io/website/src/image/background.PNG';

function RendezVous() {
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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '400px',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire
  };

  const handleBackClick = () => {
    window.location.href = '/';
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1>Prendre un Rendez-Vous</h1>
          <form style={formStyle} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" style={inputStyle} required />
            <input type="email" placeholder="Email" style={inputStyle} required />
            <input type="date" style={inputStyle} required />
            <input type="time" style={inputStyle} required />
            <button 
              type="submit" 
              style={buttonStyle} 
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut}
            >
              Envoyer
            </button>
          </form>
          <button 
            style={{ ...buttonStyle, marginTop: '20px' }} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            onClick={handleBackClick}
          >
            Retour à la page de connexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default RendezVous;
