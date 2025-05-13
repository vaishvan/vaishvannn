import { Link } from 'react-router-dom'
import '../styles/Page.css'

const Navigation = () => {
  return (
    <nav className="page-nav">
      <Link to="/home" className="page-nav-link home-nav">home</Link>
      <Link to="/about" className="page-nav-link about-nav">about me!</Link>
      <Link to="/projects" className="page-nav-link projects-nav">projects</Link>
      <Link to="/blogs" className="page-nav-link blogs-nav">blogs</Link>
      <Link to="/case-studies" className="page-nav-link case-studies-nav">case studies</Link>
    </nav>
  )
}

export default Navigation