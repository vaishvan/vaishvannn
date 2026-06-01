import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Dynamic lazy imports for page-level code splitting
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Blogs = React.lazy(() => import('./pages/Blogs'))
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'))

function App() {
  return (
    <div className="app">
      <React.Suspense fallback={<div className="loading" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: "'Pastel', monospace",
        color: '#ffffff',
        fontSize: '2rem'
      }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </React.Suspense>
    </div>
  )
}

export default App