import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const RendezvousMedecin = () => {
  const [events, setEvents] = useState([
    {
      title: 'Consultation Dr. Dupont',
      start: new Date(2024, 7, 20, 9, 30), // Date en année, mois (0-indexé), jour, heure, minute
      end: new Date(2024, 7, 20, 10, 30),
    },
    {
      title: 'Consultation Dr. Martin',
      start: new Date(2024, 7, 21, 14, 0),
      end: new Date(2024, 7, 21, 15, 0),
    },
    {
      title: 'Consultation Dr. Bernard',
      start: new Date(2024, 7, 22, 16, 0),
      end: new Date(2024, 7, 22, 17, 0),
    },
  ]);

  return (
    <div className="rendezvous-medecin">
      <h2>Rendez-vous Médecin</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
};

export default RendezvousMedecin;
