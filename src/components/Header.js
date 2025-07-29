import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import login from '../assets/login.png';


const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
  return (
   <header className='header'>
    <div className='header-left'>
      <div className='brand-wrapper'>
    <img src={logo} alt='logo' className='logo'></img>
    <h1 className='brand-name'>
    For Your Care
    </h1>
    </div>
    </div>

    <nav className='nav-links'>
    <ul>
    <li><Link to='/home'>HOME</Link></li>
    <li><Link to='/about'>ABOUT US</Link></li>
    <li><Link to='/contactus'>CONTACT US</Link></li>
    <li><Link to='/faq'>FAQ's</Link></li>    
    </ul>
    </nav>

    <button className='login-button' onClick={handleLoginClick} aria-label="Login">
        <img src={login} alt='login' className='login-icon'></img>
        Login
    </button>
   </header>
  )
}

export default Header;
