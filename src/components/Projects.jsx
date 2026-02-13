import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Fake Currency Detection',
    desc: 'ML-based solution to detect counterfeit notes using image features.',
    tech: ['Python', 'TensorFlow', 'Flask']
  },
  {
    title: 'Online Exam System',
    desc: 'Secure, timed online exam platform with automatic grading.',
    tech: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio to showcase projects and contact info.',
    tech: ['React', 'Bootstrap', 'Vite']
  }
]

export default function Projects(){
  return (
    <div className="container">
      <h2 className="mb-4">Projects</h2>
      <div className="row g-4">
        {projects.map(p=> (
          <div className="col-md-4" key={p.title} data-aos="fade-up">
            <div className="p-3 project-card h-100 d-flex flex-column">
              <img src="/assets/placeholder.svg" alt="project" className="project-image" />
              <div className="mt-3">
                <h5>{p.title}</h5>
                <p className="text-muted" style={{fontSize:14}}>{p.desc}</p>
                <div className="d-flex gap-2 flex-wrap mb-3">
                  {p.tech.map(t=> <span key={t} className="badge-tech">{t}</span>)}
                </div>
                <div className="mt-auto d-flex gap-2">
                  <a className="btn btn-outline-secondary" href="https://exam-system-rho.vercel.app/" target="_blank" rel="noreferrer"><FaGithub className="me-1"/> GitHub</a>
                  <a className="btn btn-primary-custom text-white" href="#" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="me-1"/> Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
