import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import CaseStudies from './pages/CaseStudies'
import './styles/App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../oneko.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </div>
  )
}

export default App