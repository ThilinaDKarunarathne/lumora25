import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './mailsent.css';

export const MailSent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bvas7zq', 'template_54w2hwk', form.current, {
        publicKey: '36qJDy6ukbmofqtj9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='sentContent' ref={form} onSubmit={sendEmail}>
      <label>Serial Number</label>
      <input className='inputField' type="text" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};