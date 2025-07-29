import React, { useState } from 'react';
import './Notifications.css';

const initialNotifications = [
  {
    id: 1,
    title: 'Upcoming Appointment',
    message: 'You have an appointment with Dr. Alice Smith tomorrow at 10:00 AM.',
    timestamp: '2025-07-30T10:00:00Z',
    read: false,
  },
  {
    id: 2,
    title: 'New Benefit Plan Available',
    message: 'Your new PPO Plus plan is now active. View your benefits summary.',
    timestamp: '2025-07-27T14:00:00Z',
    read: true,
  },
  {
    id: 3,
    title: 'Reminder: Annual Physical',
    message: 'Time to schedule your annual physical. Book an appointment today!',
    timestamp: '2025-07-25T08:00:00Z',
    read: false,
  },
];

const timeAgo = (timestamp) => {
  const now = new Date();
  const then = new Date(timestamp);
  const diff = Math.floor((now - then) / 1000);

  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
  return then.toLocaleDateString();
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: !n.read } : n
    );
    setNotifications(updated);
  };

  const deleteNotification = (id) => {
    const updated = notifications.filter((n) => n.id !== id);
    setNotifications(updated);
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p className="no-notifications">You're all caught up!</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((n) => (
            <li key={n.id} className={`notification-item ${n.read ? 'read' : 'unread'}`}>
              <div className="notification-content">
                <h4>{n.title}</h4>
                <p>{n.message}</p>
                <span className="timestamp">{timeAgo(n.timestamp)}</span>
              </div>
              <div className="notification-actions">
                <button onClick={() => toggleRead(n.id)}>
                  {n.read ? 'Mark as Unread' : 'Mark as Read'}
                </button>
                <button onClick={() => deleteNotification(n.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
