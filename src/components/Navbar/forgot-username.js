import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgot-username.css';

const ForgotUsername = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFindUsername = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email) {
      setUsername(storedUser.username);
      setError('');
    } else {
      setUsername('');
      setError('No user found with that email.');
    }
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="forgot-username-container">
      <h2>Forgot Username</h2>

      <label>Enter your email:</label>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleFindUsername}>Find Username</button>

      {error && <p className="error">{error}</p>}
      {username && (
        <div className="result">
          <p>Your username is: <strong>{username}</strong></p>
          <button onClick={goToLogin}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default ForgotUsername;
