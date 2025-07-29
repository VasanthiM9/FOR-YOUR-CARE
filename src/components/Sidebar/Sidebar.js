import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <nav>
        <NavLink to="/benefits" className="nav-link">My Benefits</NavLink>
        <NavLink to="/appointments" className="nav-link">Appointments</NavLink>
        <NavLink to="/notifications" className="nav-link">Notifications</NavLink>
        <NavLink to="/preferences" className="nav-link">Preferences</NavLink>
        <NavLink to="/reminders" className="nav-link">Reminders</NavLink>
      </nav>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
