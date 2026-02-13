import React from 'react'
import { FaReact, FaServer, FaTools } from 'react-icons/fa'

const cards = [
  { title: 'Frontend', icon: <FaReact size={20} color="#2563eb" />, items: ['React', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'Backend', icon: <FaServer size={20} color="#2563eb" />, items: ['Node.js', 'Express', 'MongoDB'] },
  { title: 'Tools', icon: <FaTools size={20} color="#2563eb" />, items: ['Git', 'GitHub', 'Vercel'] }
]

export default function Skills(){
  return (
    <div className="container">
      <h2 className="mb-4">Skills</h2>
      <div className="row g-4">
        {cards.map(c => (
          <div className="col-md-4" key={c.title} data-aos="zoom-in">
            <div className="p-4 card-skill h-100 d-flex flex-column">
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="p-2" style={{background:'rgba(37,99,235,0.06)',borderRadius:10}}>{c.icon}</div>
                <h5 className="mb-0">{c.title}</h5>
              </div>
              <hr />
              <ul className="list-unstyled mb-0 mt-2">
                {c.items.map(i=> <li key={i} className="py-1">• {i}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
