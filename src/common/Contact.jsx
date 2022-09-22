import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = contact;
  const {
    form, formInput, formButton, container, title, formIcon,
  } = styles;

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={container} id="contact">
      <h2 className={title}>Get in touch </h2>
      <form className={form} action="https://formspree.io/f/mbjwoorj" method="post">
        <div className={formInput}>
          <span className={formIcon}>👤</span>
          <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div className={formInput}>
          <span className={formIcon}>📧</span>
          <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div className={formInput}>
          <span className={formIcon}>📝</span>
          <textarea name="message" value={message} onChange={handleChange} placeholder="Message" required />
        </div>
        <button className={formButton} type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
