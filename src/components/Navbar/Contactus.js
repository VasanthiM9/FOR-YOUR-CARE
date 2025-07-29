import React, { useState } from 'react';
import './Contactus.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = '';
    const templateID = '';
    const userID = '';

    const templateParams = {
      form_name: name,
      form_email: email,
      form_message: message,
    };

    
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Success:', response);
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
      });
    };

  return (   
    <div className='contact-pane-wrapper'> 
      <form className='contact-form' onSubmit={handleSubmit}>
      <h1 className='contact-title'>Connect with Us</h1>
      <span className='contact-description'>
        Please fill out the below form to get in touch.
      </span>
        <div className='form-name'>
            <input type='text' name='name' id='name' value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='form-email'>
            <input type='email' name='email' id='email' value={email} placeholder='You email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='form-message'>
            <textarea type='text' name='message' id='message' value={message} placeholder='Your message' onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button className='btn'>Send Message</button>
      </form>
      </div>
  )
}

export default Contact;
