import React, { useEffect, useState } from 'react';
import './Preferences.css';

const defaultPreferences = {
  email: true,
  sms: false,
  inApp: true,
};

const Preferences = () => {
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const savedPrefs = JSON.parse(localStorage.getItem('notificationPreferences'));
    if (savedPrefs) {
      setPreferences(savedPrefs);
    }
  }, []);

  const handleToggle = (key) => {
    const updated = { ...preferences, [key]: !preferences[key] };
    setPreferences(updated);
    localStorage.setItem('notificationPreferences', JSON.stringify(updated));
  };

  const resetToDefaults = () => {
    setPreferences(defaultPreferences);
    localStorage.setItem('notificationPreferences', JSON.stringify(defaultPreferences));
  };

  return (
    <div className="preferences-container">
      <h2>Notification Preferences</h2>

      <div className="preference-item">
        <label>
          <input
            type="checkbox"
            checked={preferences.email}
            onChange={() => handleToggle('email')}
          />
          Email Alerts
        </label>
      </div>

      <div className="preference-item">
        <label>
          <input
            type="checkbox"
            checked={preferences.sms}
            onChange={() => handleToggle('sms')}
          />
          SMS Notifications
        </label>
      </div>

      <div className="preference-item">
        <label>
          <input
            type="checkbox"
            checked={preferences.inApp}
            onChange={() => handleToggle('inApp')}
          />
          In-App Notifications
        </label>
      </div>

      <button className="reset-btn" onClick={resetToDefaults}>
        Reset to Default
      </button>
    </div>
  );
};

export default Preferences;
