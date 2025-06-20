// CalendarView.jsx
import { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReservationContext from '../contexts/ReservationContext';

function CalendarView({reservationData}) {

  const [selectedDate, setSelectedDate] = useState(null);

const reservations = reservationData

  // Normalize all arrival dates to YYYY-MM-DD
const bookedDates = reservations.map(r => {
  const date = new Date(r.arrival);
  return date.toISOString().slice(0, 10);
});

  function handleDayClick(date) {
    const formatted = date.toISOString().slice(0, 10);
    setSelectedDate(formatted);
  }

  const todaysReservations = reservations.filter(r => {
    const arrivalDate = new Date(r.arrival).toISOString().slice(0, 10);
    return arrivalDate === selectedDate;
  });

  return (
    <div>
      <Calendar
        onClickDay={handleDayClick}
        tileClassName={({ date }) =>
          bookedDates.includes(date.toISOString().slice(0, 10)) ? 'booked' : null
        }
      />

      {selectedDate && (
        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
          <h2>Reservations for {selectedDate}:</h2>
          {todaysReservations.length === 0 ? (
            <p>No reservations.</p>
          ) : (
            <ul>
              {todaysReservations.map(r => (
                <li key={r.id}>
                  <strong>{r.member}</strong> – {r.guests} guests, {r.room.toUpperCase()}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default CalendarView;
