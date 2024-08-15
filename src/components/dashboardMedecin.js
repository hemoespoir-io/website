import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import the image
import backgroundImage from 'C:/Users/cele/hemoespoir.io/backup/website/src/image/rendezvousmedecin.PNG';

const DashboardMedecin = () => {
  const navigate = useNavigate();

  const handleRendezVousClick = () => {
    navigate('/rendezvous');
  };

  return (
    <div 
      style={{ 
        padding: '20px', 
        textAlign: 'center', 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
      }}
    >
      <div 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          padding: '30px', 
          borderRadius: '15px',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(5px)', 
          maxWidth: '500px', 
          textAlign: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.3)';
        }}
      >
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
          Bonjour Médecin, vous avez la possibilité de consulter vos prochains rendez-vous en ligne. Cela vous permettra de rester informé(e) de vos consultations à venir et de mieux organiser votre emploi du temps.
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          Cliquez ici pour voir vos rendez-vous et gérer vos consultations.
        </p>
        <button 
          onClick={handleRendezVousClick} 
          style={{
            padding: '12px 25px', 
            fontSize: '18px', 
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#007BFF',
            color: 'white',
            borderRadius: '50px',
            boxShadow: '0px 5px 10px rgba(0, 123, 255, 0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0px 8px 15px rgba(0, 123, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0px 5px 10px rgba(0, 123, 255, 0.4)';
          }}
        >
          Voir les rendez-vous
        </button>
      </div>
    </div>
  );
};

export default DashboardMedecin;
