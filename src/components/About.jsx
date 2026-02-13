import React from 'react'

export default function About(){
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2>About</h2>
          <p>
            I'm a Computer Science student at Ambo University with a passion for building web applications and exploring machine learning. I enjoy turning ideas into real-world systems and learning modern best practices.
          </p>
          <ul>
            <li>Studying at Ambo University</li>
            <li>Focused on Web Development & Machine Learning</li>
            <li>Building real-world, maintainable systems</li>
          </ul>
        </div>
        <div className="col-lg-6" data-aos="fade-left">
          <div className="card p-4 card-skill">
            <h5>Quick Facts</h5>
            <p className="mb-0">Experience with React, Node.js, Python, and data-driven projects. Comfortable working with teams and shipping features end-to-end.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
