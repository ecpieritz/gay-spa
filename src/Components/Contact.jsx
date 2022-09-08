import React from 'react';

function Contact() {
  return (
    <section id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder='Full Name' required />
            <input type="email" placeholder='Type Your Email' required />
            <textarea placeholder='Write here...' name='message'></textarea>
            <input type="submit" value='Send' />
        </form>
    </section>
  );
}

export default Contact;
