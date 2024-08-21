import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import background from '../image/background_med.PNG';

function DoctorLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/loginMedecin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setErrorMessage('Nom complet ou mot de passe incorrect!');
        } else {
          setErrorMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
        return;
      }

      const data = await response.json();
      console.log('API Response data:', data); // Check the entire response data

      // Access the Id_Medecin inside the medecins array
      if (data && data.medecins && data.medecins.length > 0) {
        const medecinId = data.medecins[0].Id_Medecin;  // Access the first medecin's Id_Medecin
        console.log('medecinId:', medecinId);  // Debugging: Check if the medecinId is correctly retrieved

        // Set the cookie if medecinId exists
        if (medecinId) {
          Cookies.set('id_medecin', medecinId, { expires: 30, path: '/' });
          console.log('Cookie set: id_medecin =', Cookies.get('id_medecin')); // Debugging: Check cookie value

          alert('Connexion réussie!');
          navigate('/dashboardMedecin', { state: { medecins: data.medecins } });
        } else {
          setErrorMessage('Erreur: Identifiant du médecin non trouvé.');
        }
      } else {
        setErrorMessage('Erreur: Identifiant du médecin non trouvé dans la réponse du serveur.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to fetch. Please try again later.');
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '400px'
      }}>
        <h1>Connexion Médecin</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <input
              type="text"
              id="username"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px', width: '100%' }}>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
              required
            />
          </div>
          <button type="submit" style={{
            padding: '15px 30px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#28a745',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px'
          }}>Se connecter</button>
        </form>
        {errorMessage && (
          <div style={{ color: 'red', marginTop: '20px' }}>
            {errorMessage}
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          <a href="/forgot-password" style={{ color: '#fff', textDecoration: 'none' }}>Mot de passe oublié ?</a>
        </div>
        <div style={{ marginTop: '10px' }}>
          <a href="/register" style={{ color: '#fff', textDecoration: 'none' }}>Vous ne possédez pas de compte ? Authentification</a>
        </div>
        <div style={{ marginTop: '20px', color: '#bbb' }}>
          ©2024 HemoEspoir
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
