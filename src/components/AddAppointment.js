import React, { useState } from 'react';
import backgroundImage from '../image/backaddrdv.jpg';  // Ensure this path is correct

function AddAppointment() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const appointmentData = {
      config: {
        DB_HOST: "localhost",
        DB_USER: "root",
        DB_PASSWD: "",
        DB_DATABASE: "pfe"
      },
     
      date: date,
      heure: time,
      description: description,
      duree: parseInt(duration),
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/rendezvous', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Rendez-vous programmé avec succès!');
        console.log(result);
      } else {
        const errorData = await response.json();
        setMessage(`Erreur: ${errorData.error}`);
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('There was an error scheduling the appointment!', error);
      setMessage('Erreur lors de la programmation du rendez-vous.');
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Programmer un nouveau rendez-vous</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Date:
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Heure:
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Durée (minutes):
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Description:
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            style={textareaStyle}
            required
          />
        </label>
        <button type="submit" style={buttonStyle}>Programmer le rendez-vous</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const labelStyle = {
  marginBottom: '10px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  resize: 'none',
  height: '100px',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#1E90FF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

export default AddAppointment;