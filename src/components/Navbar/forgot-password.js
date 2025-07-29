import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgot-password.css';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [stage, setStage] = useState('verify');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleVerify = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username) {
      setStage('reset');
      setError('');
    } else {
      setError('User not found');
    }
  };

  const handleReset = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      const updatedUser = { ...storedUser, password: newPassword };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      alert('Password successfully updated!');
      navigate('/');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>

      {stage === 'verify' ? (
        <>
          <label>Enter your username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button onClick={handleVerify}>Next</button>
          {error && <p className="error">{error}</p>}
        </>
      ) : (
        <>
          <label>Enter new password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <button onClick={handleReset}>Reset Password</button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
