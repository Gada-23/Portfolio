import React from 'react'
import profile from '../assets/profile.svg'

export default function Hero(){
  return (
    <div className="container hero-section position-relative">
      <div className="accent-dot" aria-hidden></div>
      <div className="row align-items-center">
        <div className="col-lg-6 hero-intro" data-aos="fade-right">
          <h1 style={{fontWeight:800}}>Gada Solomon</h1>
          <p className="lead text-muted" style={{fontWeight:600}}>Computer Science Student | Web Developer</p>
          <p className="mt-3">
            I build clean, maintainable web applications and explore machine learning solutions for real-world problems. Currently studying at Ambo University and focusing on full-stack web development.
          </p>

          <div className="mt-4 d-flex gap-2">
            <a href="#projects" className="btn btn-primary-custom btn-lg text-white">View Projects</a>
            <a href="/cv.pdf" className="btn btn-outline-secondary btn-lg">Download CV</a>
          </div>
        </div>

        <div className="col-lg-6 text-center" data-aos="fade-left">
          <img alt="Gada Solomon" src="/profile.jpg" className="hero-img" style={{maxWidth:420}} />
        </div>
      </div>
    </div>
  )
}
