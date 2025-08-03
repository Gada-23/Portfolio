import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <img src="gada-profile.jpg" alt="Gada" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
        <h1 className="display-4">Hi, I’m Gada Solomon 👋</h1>
        <p className="lead">Computer Science student at Ambo University.</p>
        <a href="#contact" className="btn btn-light mt-3">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
