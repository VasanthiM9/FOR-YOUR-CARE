import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));
    
    onLogin();
    navigate('/mybenefits');

    // if (
    //   savedUser &&
    //   savedUser.username === userName &&
    //   savedUser.password === password
    // ) {
    //   alert('Login successful!');
    //   onLogin();
    //   navigate('/mybenefits');
    // } else {
    //   alert('Invalid username or password');
    // }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login to Your Account</h2>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          
          />
          <Link to="/forgot-username" className="forgot-link">
            Forgot Username?
          </Link>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword((prev) => !prev)}
            role="button"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="login-button">Login</button>

        <div className="signup-prompt">
          <span>Don't have an account?</span>
          <Link to="/signup" className="signup-link">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
