import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About For Your Care</h1>
      <p>
        <strong>For Your Care</strong> is an intelligent and user-friendly virtual healthcare assistant designed to empower members with easy access to their healthcare information.
      </p>
      <p>
        Our goal is to help individuals make informed decisions about their care by offering simple tools to:
      </p>
      <ul>
        <li>🔍 Access personalized benefit summaries and cost estimates</li>
        <li>📅 Schedule appointments with in-network providers effortlessly</li>
        <li>⏰ Receive timely care reminders and medication alerts</li>
      </ul>
      <p>
        Built with modern technologies and a focus on intuitive design, our platform puts members in control of their health journey — anytime, anywhere.
      </p>
      <p>
        Whether it's understanding your plan details, finding the right doctor, or staying on top of preventive care, <strong>For Your Care</strong> is here to simplify healthcare — just for you.
      </p>
    </div>
  );
};

export default About;
