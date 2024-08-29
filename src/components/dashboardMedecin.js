import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Cookies from 'js-cookie';
import backgroundImage from '../image/rendez-vousx.PNG';
import config from '../config'; 

const customStyles = {
  header: {
    color: 'black',
    fontWeight: 'bold',
  },
  timeSlot: {
    color: 'black',
  },
  calendar: {
    color: 'black',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  event: {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    padding: '5px',
    border: 'none',
  },
  eventHover: {
    backgroundColor: '#45a049',
  },
  today: {
    backgroundColor: '#f0f8ff', 
  },
};

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const medecinId = Cookies.get('id_medecin');
    console.log('medecinId:', medecinId);

    if (!medecinId) {
      console.error('Aucun medecinId trouvé dans les cookies.');
      return;
    }

    const fetchAppointments = async () => {
      try {
        console.log("Fetching appointments...");

        const response = await fetch(`${config.BACKEND_URL}/getAppointmentMedecin`, { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            medecinId: medecinId,
            startDate: '2024-08-01',  // Utilisation d'une période plus large
            endDate: '2024-08-31',
          }),
        });

        const data = await response.json();
        console.log('API Response:', data);

        if (!response.ok || !data.appointments) {
          throw new Error('Échec de la récupération des rendez-vous');
        }

        if (data.appointments.length === 0) {
          console.warn('No appointments found for the given period.');
        }

        const formattedEvents = data.appointments.map((appointment) => {
          console.log('Processing appointment:', appointment);
          const start = new Date(appointment.date);
          const [hours, minutes] = convertTimeString(appointment.heure).split(':');
          start.setHours(hours);
          start.setMinutes(minutes);

          const end = new Date(start.getTime() + appointment.duree * 60000);

          return {
            title: appointment.description,
            start: start,
            end: end,
            allDay: false,
          };
        });

        console.log('Formatted Events:', formattedEvents); 
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
      }
    };

    fetchAppointments();
  }, []);

  const convertTimeString = (time) => {
    const hours = Math.floor(time / 100);
    const minutes = time % 100;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Bienvenue ! Comment puis-je vous aider à planifier votre rendez-vous aujourd'hui ?
      </h1>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          padding: '20px',
          width: '80%',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView={Views.WORK_WEEK}
          views={{ work_week: true, month: true }}
          style={{ height: '70vh', backgroundColor: 'transparent', ...customStyles.calendar }}
          min={new Date(2024, 0, 1, 9, 0)} 
          max={new Date(2024, 0, 1, 18, 0)} 
          components={{
            timeSlotWrapper: (props) => <div style={customStyles.timeSlot}>{props.children}</div>,
            dayWrapper: (props) => <div style={customStyles.header}>{props.children}</div>,
            event: (props) => (
              <div
                style={{
                  ...customStyles.event,
                  ...(props.isHovered ? customStyles.eventHover : {}),
                }}
              >
                {props.title}
              </div>
            ),
            today: (props) => (
              <div style={customStyles.today}>
                {props.children}
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
