import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import DelayedPrompt from '../components/DelayedPrompt'
import '../styles/Page.css'

const About = () => {
  return (
    <div className="page-container">
      <DelayedPrompt />
      
      <Navigation />
      
      <header className="page-header">
        <div className="header-gif">
          <span>About</span>
        </div>
      </header>
      
      <div className="page-content">
        <div className="content-placeholder">
          Hi I'm Vaishnav, a Second Year Undergraduate at the Indian Institute of Technology, IIT Guwahati. 
          I like software development in C++, building cool websites, and whatever else I find interesting. 
          I hope you find this website as fun as I did while making it (PS: good luck finding the easter egg)
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default About