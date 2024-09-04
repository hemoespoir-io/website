import React, { useState } from 'react';
import Cookies from 'js-cookie';
import config from '../config';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../image/supprimer rendez_vous.PNG'; // Update this path

function DeleteAppointment() {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      if (!appointmentDate) {
        alert('Veuillez entrer la date du rendez-vous.');
        return;
      }

      const patientId = Cookies.get('patientId');
      const medecinId = Cookies.get('medecinId');

      if (!medecinId || !patientId) {
        alert('Identifiants du médecin ou du patient manquants.');
        return;
      }

      const response = await fetch(`${config.BACKEND_URL}/delete_rendez_vous`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          medecinId: medecinId,
          patientId: patientId,
          date: appointmentDate,
        }),
      });

      if (!response.ok) {
        setError(new Error('Erreur de réseau lors de la suppression du rendez-vous.'));
        return;
      }

      const data = await response.json();
      if (data.message) {
        alert('Rendez-vous supprimé avec succès.');
        navigate('/rendezvous-patient');
      } else {
        alert('Erreur lors de la suppression du rendez-vous.');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du rendez-vous:', error);
      setError(error);
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Supprimer un Rendez-vous</h1>
      <input
        type="text"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        placeholder="Entrez la date du rendez-vous (ex: 2024-09-24)"
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={handleDelete}>Supprimer</button>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
}

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`, // Use the imported image here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  marginBottom: '20px',
  width: '300px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#FF0000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

export default DeleteAppointment;
