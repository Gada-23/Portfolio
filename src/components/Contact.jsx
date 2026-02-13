import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact(){
  return (
    <div className="container">
      <h2 className="mb-4">Contact</h2>
      <div className="row">
        <div className="col-md-6" data-aos="fade-right">
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" placeholder="Your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="6" placeholder="Write your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary-custom text-white">Send Message</button>
          </form>
        </div>

        <div className="col-md-6" data-aos="fade-left">
          <div className="card p-4 card-skill h-100 d-flex flex-column justify-content-center">
            <h5>Get in touch</h5>
            <p className="text-muted">Feel free to reach out on social platforms or send an email.</p>
            <div className="d-flex gap-4 mt-3">
              <a href="#" className="text-decoration-none text-dark d-flex align-items-center gap-2"><FaGithub size={20}/> <span>GitHub</span></a>
              <a href="#" className="text-decoration-none text-dark d-flex align-items-center gap-2"><FaLinkedin size={20}/> <span>LinkedIn</span></a>
              <a href="mailto:email@example.com" className="text-decoration-none text-dark d-flex align-items-center gap-2"><FaEnvelope size={20}/> <span>Email</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
