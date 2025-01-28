import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import LearnMore from './components/LearnMore.jsx'
import Thanks from './components/Thanks.jsx'
import Footer from './components/Footer.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Landing />
    <Projects />
    <Experience />
    <LearnMore />
    <Thanks />
    <Footer />
  </React.StrictMode>,
);