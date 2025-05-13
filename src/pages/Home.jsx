import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import DelayedPrompt from '../components/DelayedPrompt'
import Image from '../assets/photo.png'; 
import namegif from '../assets/withname.gif'; 

import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <DelayedPrompt />

      <header className="home-header">
      <img src={namegif} alt="welcome to my site!" className="header-gif" />
      </header>

      <div className="home-content">
        <img src={Image} alt="Image" className="character-image" />

        <Link to="/about" className="nav-link about-link">about me!</Link>        
        <Link to="/blogs" className="nav-link blogs-link">blogs</Link>
        <Link to="/projects" className="nav-link projects-link">projects</Link>
        <Link to="/case-studies" className="nav-link case-studies-link">case studies</Link>
      </div>

      <Footer />
    </div>
  )
}

export default Home