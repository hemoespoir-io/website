import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Cookies from 'js-cookie';
import config from '../config';  
import { useNavigate } from 'react-router-dom';  
import backgroundImage from '../image/rendez-vousx.PNG';

const localizer = momentLocalizer(moment);

function RendezvousPatient() {  
  const [events, setEvents] = useState([]);
  const [currentRange, setCurrentRange] = useState({ start: moment().startOf('week'), end: moment().endOf('week') });
  const [error, setError] = useState(null);
  
  const patientId = Cookies.get('patientId');
  const medecinId = Cookies.get('medecinId');
  
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!patientId || !medecinId) {
          console.error('ID du patient ou du médecin non trouvé dans les cookies');
          alert('Aucune donnée de patient ou de médecin trouvée. Veuillez vous reconnecter.');
          return;
        }

        const startDate = currentRange.start.format('YYYY-MM-DD');  
        const endDate = currentRange.end.format('YYYY-MM-DD');     

        const response = await fetch(`${config.BACKEND_URL}getAppointment`, { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            medecinId: medecinId,
            patientId: patientId,
            startDate: startDate,
            endDate: endDate,
          }),
        });

        if (!response.ok) {
          console.error('La réponse du réseau n\'était pas correcte');
          setError(new Error('Erreur de réseau lors de la récupération des rendez-vous.'));
          return;
        }

        const data = await response.json();
        console.log('Réponse de l\'API:', data);

        if (data && data.appointments && data.appointments.length > 0) {
          const events = data.appointments.map((appointment) => {
            const date = new Date(appointment.date);
            const heure = appointment.heure;
            const duree = appointment.duree;

            const start = new Date(date);
            start.setHours(Math.floor(heure / 100));
            start.setMinutes(heure % 100);

            const end = new Date(start);
            end.setMinutes(end.getMinutes() + duree);

            return {
              title: appointment.description || '', 
              start: start,
              end: end,
              allDay: false,
              status: appointment.patient ? 'patient' : 'reserved',
              medecinId: appointment.medecinId,
              hasDescription: !!appointment.description, 
            };
          });

          console.log('Events to display:', events);
          setEvents(events);
        } 
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
        setError(error);
        setEvents([]);
      }
    };

    fetchAppointments();
  }, [currentRange, medecinId, patientId]);

  const handleRangeChange = (range) => {
    if (Array.isArray(range)) {
      setCurrentRange({
        start: moment(range[0]),
        end: moment(range[range.length - 1]),
      });
    } else {
      setCurrentRange({
        start: moment(range.start),
        end: moment(range.end),
      });
    }
  };

  const eventPropGetter = (event) => {
    let backgroundColor = '';
    let borderColor = '';
    let boxShadow = '';

    if (event.hasDescription) {
      backgroundColor = '#1E90FF'; 
      borderColor = '#FF8C00';
      boxShadow = '0 4px 8px 0 rgba(255, 140, 0, 0.2), 0 6px 20px 0 rgba(255, 140, 0, 0.19)';
    }
    else {
      backgroundColor = '#FF0000';
      borderColor = '#1C6EA4';
      boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }

    const style = {
      backgroundColor: backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '10px',
      color: 'white',
      fontSize: '14px',
      padding: '5px',
      boxShadow: boxShadow,
    };
    return { style };
  };

  const handleAddAppointment = () => {
    navigate('/add-appointment');  
  };

  const handleDeleteAppointment = () => {
    navigate('/delete-appointment');
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Bienvenue ! Comment puis-je vous aider à planifier votre rendez-vous aujourd'hui ?</h1>
      {error && <p style={{color: 'red'}}>{error.message}</p>}
      <div style={calendarContainerStyle}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="work_week"
          views={['work_week']}
          min={new Date(2024, 7, 12, 9, 0)}
          max={new Date(2024, 7, 12, 18, 0)}
          style={calendarStyle}
          eventPropGetter={eventPropGetter}
          onRangeChange={handleRangeChange} 
        />
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleAddAppointment}>Ajouter un rendez-vous</button>
        <button style={deleteButtonStyle} onClick={handleDeleteAppointment}>Supprimer un rendez-vous</button>
      </div>
    </div>
  );
}

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: '20px',
};

const calendarContainerStyle = {
  width: '80%',
  height: '70%',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const calendarStyle = {
  height: '100%',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '300px',
  marginTop: '20px',
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

const deleteButtonStyle = {
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

export default RendezvousPatient;
