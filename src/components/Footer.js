import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contactus">Contact Us</Link>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} For Your Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
