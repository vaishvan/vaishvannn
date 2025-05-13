import React from 'react'
import GithubIcon from '../assets/Github.svg';
import InstaIcon from '../assets/Instagram.svg';
import LinkedinIcon from '../assets/Linkedin.svg';
import EmailIcon from '../assets/Mail.svg';



const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/vaishvan" target="_blank" rel="noopener noreferrer">
      <img src={GithubIcon} alt="GitHub" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/vaishnav314159/" target="_blank" rel="noopener noreferrer">
      <img src={LinkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="mailto:vaishnav314195@gmail.com">
      <img src={EmailIcon} alt="Mail" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/mottapuffszn/" target="_blank" rel="noopener noreferrer">
      <img src={InstaIcon} alt="Instagram" className="social-icon" />
      </a>
    </footer>
  )
}

export default Footer