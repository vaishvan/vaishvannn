import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import DelayedPrompt from '../components/DelayedPrompt'
import '../styles/Page.css'

const CaseStudies = () => {
  return (
    <div className="page-container">
      <DelayedPrompt />
      
      <Navigation />
      
      <header className="page-header">
        <div className="header-gif">
          <span>Case Studies</span>
        </div>
      </header>
      
      <div className="page-content">
        <div className="content-placeholder">
          looks like you're here a bit early 
          <br></br>
          come back later :0
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default CaseStudies