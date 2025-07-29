
import React from "react";
import "./Dashboard.css"; 

const Dashboard = () => {
  const benefits = {
    plan: "Gold Plus",
    copay: "$30",
    dental: "Included",
    vision: "Included",
  };

  const appointments = [
    { doctor: "Dr. Smith", date: "2025-08-02", time: "10:00 AM" },
    { doctor: "Lab Work", date: "2025-08-05", time: "2:30 PM" },
  ];

  const reminders = [
    { text: "Take medication", time: "8:00 AM" },
    { text: "Follow-up call", time: "2025-08-01" },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Health Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="card-title">Benefits Summary</h2>
          <ul className="card-list">
            <li><strong>Plan:</strong> {benefits.plan}</li>
            <li><strong>Copay:</strong> {benefits.copay}</li>
            <li><strong>Dental:</strong> {benefits.dental}</li>
            <li><strong>Vision:</strong> {benefits.vision}</li>
          </ul>
        </div>
        <div className="dashboard-card">
          <h2 className="card-title">Upcoming Appointments</h2>
          <ul className="card-list">
            {appointments.map((appt, index) => (
              <li key={index}>
                <strong>{appt.doctor}</strong><br />
                {appt.date} at {appt.time}
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card">
          <h2 className="card-title">Active Reminders</h2>
          <ul className="card-list">
            {reminders.map((reminder, index) => (
              <li key={index}>
                <strong>{reminder.text}</strong><br />
                {reminder.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
