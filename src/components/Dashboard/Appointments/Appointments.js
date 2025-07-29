import React, { useState, useEffect } from 'react';
import './Appointments.css';

const providersMock = [
  {
    id: 1,
    name: 'Dr. Alice Smith',
    specialty: 'Cardiology',
    location: 'New York, NY',
    availableSlots: {
      '2025-08-10': ['10:00 AM', '11:00 AM', '02:00 PM'],
      '2025-08-11': ['09:00 AM', '01:00 PM', '03:00 PM'],
    },
  },
  {
    id: 2,
    name: 'Dr. Bob Johnson',
    specialty: 'Dermatology',
    location: 'Boston, MA',
    availableSlots: {
      '2025-08-10': ['08:00 AM', '09:30 AM'],
      '2025-08-12': ['10:00 AM', '11:30 AM'],
    },
  },
];

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProviders, setFilteredProviders] = useState(providersMock);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [rescheduling, setRescheduling] = useState(null);

  const [bookedAppointments, setBookedAppointments] = useState(() => {
    const saved = localStorage.getItem('bookedAppointments');
    return saved ? JSON.parse(saved) : [];
  });
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFilteredProviders(providersMock);
      return;
    }
    const filtered = providersMock.filter(
      (prov) =>
        prov.name.toLowerCase().includes(term) ||
        prov.specialty.toLowerCase().includes(term) ||
        prov.location.toLowerCase().includes(term)
    );
    setFilteredProviders(filtered);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('bookedAppointments', JSON.stringify(bookedAppointments));
  }, [bookedAppointments]);

  const hasConflict = (date, time) => {
    return bookedAppointments.some((appt) => appt.date === date && appt.time === time);
  };

  const handleBookAppointment = () => {
    setError('');
    if (!selectedProvider || !selectedDate || !selectedTime) {
      setError('Please select provider, date, and time.');
      return;
    }
    if (hasConflict(selectedDate, selectedTime)) {
      setError('You already have an appointment at this time. Please choose a different slot.');
      return;
    }
    const newAppt = {
      id: Date.now(),
      provider: selectedProvider.name,
      specialty: selectedProvider.specialty,
      location: selectedProvider.location,
      date: selectedDate,
      time: selectedTime,
    };
    setBookedAppointments([...bookedAppointments, newAppt]);
    setConfirmation(newAppt);
    setSelectedProvider(null);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleCancelAppointment = (id) => {
    setBookedAppointments(bookedAppointments.filter((appt) => appt.id !== id));
    if (confirmation && confirmation.id === id) setConfirmation(null);
  };

  const handleReschedule = (id) => {
  if (!selectedDate || !selectedTime) {
    setError('Please select both date and time to reschedule.');
    return;
  }

  if (hasConflict(selectedDate, selectedTime)) {
    setError('You already have an appointment at this time.');
    return;
  }

  const updatedAppointments = bookedAppointments.map((appt) =>
    appt.id === id
      ? { ...appt, date: selectedDate, time: selectedTime }
      : appt
  );

  setBookedAppointments(updatedAppointments);
  setRescheduling(null);
  setSelectedDate('');
  setSelectedTime('');
  alert('Appointment successfully rescheduled!');
};


  return (
    <div className="appointments-container">
      <h2>Book an Appointment</h2>

      <input
        type="text"
        placeholder="Search by provider name, specialty, or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="providers-list">
        <h3>Available Providers</h3>
        {filteredProviders.length === 0 ? (
          <p>No providers found.</p>
        ) : (
          <ul>
            {filteredProviders.map((prov) => (
              <li
                key={prov.id}
                onClick={() => {
                  setSelectedProvider(prov);
                  setSelectedDate('');
                  setSelectedTime('');
                  setError('');
                  setConfirmation(null);
                }}
                className={prov.id === selectedProvider?.id ? 'selected-provider' : ''}
              >
                <strong>{prov.name}</strong> — {prov.specialty} — {prov.location}
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedProvider && (
        <div className="date-time-selection">
          <h3>Choose Date & Time for {selectedProvider.name}</h3>
          <label>
            Select Date:{' '}
            <input
              type="date"
              value={selectedDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedTime('');
                setError('');
              }}
            />
          </label>

          {selectedDate && (
            <div className="available-times">
              <strong>Available Times:</strong>
              <div>
                {(selectedProvider.availableSlots[selectedDate] || []).length === 0 ? (
                  <p>No available times on this date.</p>
                ) : (
                  selectedProvider.availableSlots[selectedDate].map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        setSelectedTime(time);
                        setError('');
                      }}
                      className={time === selectedTime ? 'selected-time' : ''}
                      type="button"
                    >
                      {time}
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {selectedTime && (
        <button className="confirm-button" onClick={handleBookAppointment}>
          Confirm Appointment
        </button>
      )}

      {confirmation && (
        <div className="confirmation-message">
          <h3>Appointment Confirmed!</h3>
          <p>
            <strong>Provider:</strong> {confirmation.provider} ({confirmation.specialty})
          </p>
          <p>
            <strong>Location:</strong> {confirmation.location}
          </p>
          <p>
            <strong>Date:</strong> {confirmation.date}
          </p>
          <p>
            <strong>Time:</strong> {confirmation.time}
          </p>
        </div>
      )}

      <div className="booked-appointments">
        <h3>Your Booked Appointments</h3>
        {bookedAppointments.length === 0 ? (
          <p>No appointments booked.</p>
        ) : (
         <ul>
  {bookedAppointments.map((appt) => (
    <li key={appt.id}>
      <div className="appt-info">
        <strong>{appt.provider}</strong> ({appt.specialty})<br />
        {appt.date} at {appt.time}<br />
        {appt.location}
      </div>

      {rescheduling?.id === appt.id ? (
        <>
          <label>
            New Date:{' '}
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </label>

          {selectedDate && (
            <div className="available-times">
              {(providersMock
                .find((p) => p.name === appt.provider)
                ?.availableSlots[selectedDate] || []
              ).map((time) => (
                <button
                  key={time}
                  className={selectedTime === time ? 'selected-time' : ''}
                  onClick={() => setSelectedTime(time)}
                  type="button"
                >
                  {time}
                </button>
              ))}
            </div>
          )}

          <button
            className="confirm-button"
            onClick={() => handleReschedule(appt.id)}
          >
            Confirm
          </button>
          <button
            className="cancel-button"
            onClick={() => setRescheduling(null)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            className="cancel-button"
            onClick={() => handleCancelAppointment(appt.id)}
          >
            Cancel
          </button>
          <button
            className="confirm-button"
            onClick={() => {
              setRescheduling(appt);
              setSelectedDate('');
              setSelectedTime('');
              setConfirmation(null);
              setError('');
            }}
          >
            Reschedule
          </button>
        </>
      )}
    </li>
  ))}
</ul>

        )}
      </div>
    </div>
  );
};

export default Appointments;
