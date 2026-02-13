import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar(){
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } catch(e){ return 'light' }
  })

  useEffect(()=>{
    // apply theme on load
    document.documentElement.setAttribute('data-theme', theme)
    try{ localStorage.setItem('theme', theme) }catch(e){}

    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if(e.isIntersecting){
          setActive(e.target.id)
        }
      })
    },{root:null,threshold:0.55})
    sections.forEach(s => observer.observe(s))
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  },[])

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    try{ localStorage.setItem('theme', theme) }catch(e){}
  },[theme])

  const toggleTheme = () => setTheme(prev=> prev === 'dark' ? 'light' : 'dark')

  return (
    <nav className={`navbar navbar-expand-lg bg-white sticky-top ${scrolled? 'shadow-sm':''}`} style={{borderBottom:'1px solid var(--border)'}}>
      <div className="container">
        <a className="navbar-brand" href="#home">Gada Solomon</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {links.map(l=> (
              <li className="nav-item" key={l.id}>
                <a className={`nav-link ${active===l.id? 'active':''}`} href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
            <li className="nav-item ms-3">
              <button onClick={toggleTheme} className="btn btn-theme-toggle d-flex align-items-center">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                <span className="visually-hidden">Toggle theme</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
