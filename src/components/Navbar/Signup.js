import React, { useState } from 'react';
import './Signup.css';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !username || !password) {
      alert('Please fill in all fields');
      return;
    }

    const userData = {
    name,
    email,
    username,
    password,
  };

  localStorage.setItem('user', JSON.stringify(userData));

    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <form onSubmit={handleSignup} className="signup-form">
      <h2>Create Account</h2>

      <div className="form-field">
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        />
      </div>

      <div className="form-field">
        <label>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        />
      </div>

      <div className="form-field">
        <label>Username</label>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Choose a username'
        />
      </div>

      <div className="form-field">
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Create a password'
        />
      </div>

      <button type="submit" className="signup-btn">Sign Up</button>

      <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default Signup;
