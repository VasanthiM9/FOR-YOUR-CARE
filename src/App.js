import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './components/Navbar/Login';
import ForgotPassword from './components/Navbar/forgot-password';
import ForgotUsername from './components/Navbar/forgot-username';
import Signup from './components/Navbar/Signup';

import Sidebar from './components/Sidebar/Sidebar';
import MyBenefits from './components/Dashboard/MyBenefits/MyBenefits';
import Appointments from './components/Dashboard/Appointments/Appointments';
import Notifications from './components/Dashboard/Notifications/Notifications';
import Preferences from './components/Dashboard/Preferences/Preferences';
import Reminders from './components/Dashboard/Reminders/Reminders';

import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import ContactUs from './components/Navbar/Contactus';
import FAQ from './components/Navbar/Faq';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        {isAuthenticated ? (
          <div className="main-dashboard-layout">
            <Sidebar onLogout={handleLogout} />
            <div className="dashboard-content">
              <Routes>
                <Route path="/" element={<Navigate to="/mybenefits" replace />} />
                <Route path="/mybenefits" element={<MyBenefits />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/preferences" element={<Preferences />} />
                <Route path="/reminders" element={<Reminders />} />
                <Route path="/login" element={<Login onLogin={handleLogin}/>} />
                
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-username" element={<ForgotUsername />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
