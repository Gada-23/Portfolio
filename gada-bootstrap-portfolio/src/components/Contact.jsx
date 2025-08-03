import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
