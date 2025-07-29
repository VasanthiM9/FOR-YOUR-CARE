import React, { useEffect, useState } from 'react';
import './Reminders.css';

const initialReminders = [
  {
    id: 1,
    title: 'Annual Physical',
    service: 'Primary Care Visit',
    date: '2025-08-28',
    location: 'Care Clinic - Dallas',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Dental Cleaning',
    service: 'Oral Checkup',
    date: '2025-08-07',
    location: 'Smile Dental - Plano',
    status: 'upcoming',
  },
];

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reminders'));
    if (saved) {
      setReminders(saved);
    } else {
      localStorage.setItem('reminders', JSON.stringify(initialReminders));
      setReminders(initialReminders);
    }
  }, []);

  const getDaysLeft = (date) => {
    const today = new Date();
    const reminderDate = new Date(date);
    const diffTime = reminderDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const snoozeReminder = (id) => {
    const updated = reminders.map((r) =>
      r.id === id ? { ...r, status: 'snoozed' } : r
    );
    setReminders(updated);
    localStorage.setItem('reminders', JSON.stringify(updated));
  };

  const dismissReminder = (id) => {
    const updated = reminders.map((r) =>
      r.id === id ? { ...r, status: 'dismissed' } : r
    );
    setReminders(updated);
    localStorage.setItem('reminders', JSON.stringify(updated));
  };

  return (
    <div className="reminders-container">
      <h2>Reminders</h2>

      {reminders.length === 0 ? (
        <p>No reminders available.</p>
      ) : (
        <>
          <h3>Upcoming Reminders</h3>
          <ul className="reminder-list">
            {reminders
              .filter((r) => r.status === 'upcoming')
              .map((reminder) => {
                const daysLeft = getDaysLeft(reminder.date);
                const shouldAlert = [30, 7, 1].includes(daysLeft);
                return (
                  <li key={reminder.id} className={`reminder-item ${shouldAlert ? 'alert' : ''}`}>
                    <h4>{reminder.title}</h4>
                    <p>
                      Service: {reminder.service}<br />
                      Date: {reminder.date} ({daysLeft} days left)<br />
                      Location: {reminder.location}
                    </p>
                    <div className="reminder-actions">
                      <button onClick={() => snoozeReminder(reminder.id)}>Snooze</button>
                      <button onClick={() => dismissReminder(reminder.id)}>Dismiss</button>
                    </div>
                  </li>
                );
              })}
          </ul>

          <h3>Reminder History</h3>
          <ul className="reminder-list history">
            {reminders
              .filter((r) => r.status !== 'upcoming')
              .map((r) => (
                <li key={r.id} className={`reminder-item ${r.status}`}>
                  <h4>{r.title}</h4>
                  <p>
                    Service: {r.service}<br />
                    Date: {r.date}<br />
                    Location: {r.location}<br />
                    Status: {r.status}
                  </p>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Reminders;
