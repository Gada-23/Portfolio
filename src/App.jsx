import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>

        <section id="about" className="section section-muted" data-aos="fade-up">
          <About />
        </section>

        <section id="skills" className="section" data-aos="fade-up">
          <Skills />
        </section>

        <section id="projects" className="section section-muted" data-aos="fade-up">
          <Projects />
        </section>

        <section id="contact" className="section" data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
