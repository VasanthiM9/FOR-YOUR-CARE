import React, { useState } from 'react';
import './Faq.css';

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "After logging in, go to the Appointments section and search for a provider by name, specialty, or location. Then choose a date and time to confirm your booking.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Yes. Go to the Appointments tab, find your appointment, and click 'Modify' or 'Cancel'.",
  },
  {
    question: "How will I receive appointment reminders?",
    answer: "You will receive reminders through your selected notification preferences like email, SMS, or in-app alerts.",
  },
  {
    question: "What kind of benefits can I view?",
    answer: "You can view your plan type, effective dates, deductible, and more under the 'My Benefits' section.",
  },
  {
    question: "How do I manage my notification settings?",
    answer: "Go to Preferences after logging in and choose how you'd like to receive updates (Email, SMS, or In-App).",
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{faq.question}</div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
