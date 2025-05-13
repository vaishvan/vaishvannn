import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import DelayedPrompt from '../components/DelayedPrompt'
import '../styles/Page.css'
import spirogif from "../assets/spiro.gif"
import pkmngif from "../assets/pkmn.gif"


const Projects = () => {
  return (
    <div className="page-container">
      <DelayedPrompt />
      
      <Navigation />
      
      <header className="page-header">
        <div className="header-gif">
          <span>Projects</span>
        </div>
      </header>
      
      <div className="page-content">
          <h1>Spirographish</h1>
          <div className='spiro-content'>
          This is Spirographish, a simple little project I built using C++ and SFML
          It draws colorful spirographs—those fancy looping curves based on rotating circles.
          This was my first dive into GUI programming, and SFML made it surprisingly smooth (albeit the learning curve was a bit steep).
          I learned a lot about rendering stuff in real-time, dealing with events, and a whole lot of appreciation for graphics programmers!
          Here's a GIF of it in action:<br></br>
          <img src={spirogif} className='spiro-gif'></img>
          <br></br>
          The whole thing is just some math, a loop, and a bunch of pixels doing their thing lol, 10/10 would recommend<br></br>
          <a href='https://github.com/vaishvan/spirographish' target='blank' rel="noopener noreferrer">Click here for the Github link!</a>
        </div>

        <h1>Pokemon Team Analyzer (name still on the working)</h1>
          <div className='tcp-content'>
            <br></br>
            A website made for comparing different pokemon teams. Uses PokeAPI data fed to Google Gemini
            to determine the best course of moves in a particular match. The idea came to me as I was playing Pokemon Showdown
            and I figured this would be a cool thing to build. I used React to build this website, and the background was made with
            Figma.<br></br>
            I won't bore you by explaining how cool this project is but rather I'll let you see it for yourself: <br></br>
            <img src={pkmngif} className='spiro-gif'></img>
            <br></br><br></br>
            <a href='https://vaishvan.github.io/PKMN_ANALYZER/' target='blank' rel="noopener noreferrer">Click here for the Website link!</a> <br></br><br></br>
            <a href='https://github.com/vaishvan/PKMN_ANALYZER' target='blank' rel="noopener noreferrer">Click here for the Github link!</a>
        </div>

        <h1>tcp-server</h1>
          <div className='tcp-content'>
            <br></br>
            A simple tcp-server I made to understand the workings of Winsock. 
            Built a basic TCP server + client setup using WinSock in C++. 
            You can connect, type messages, and send them across the network—classic socket stuff.
            There's a character limit on what you can send, and right now it's just plain text, one message at a time. 
            No fancy UI, just console-based networking.
            And since it looks so boring, I won't show it to you (build it yourself if you wanna hehe)<br></br>
            Might upgrade it later to handle multiple clients or add proper message framing. 
            But for now, it works (somehow).
            <br></br><br></br>
            <a href='https://github.com/vaishvan/tcp-server' target='blank' rel="noopener noreferrer">Click here for the Github link!</a>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Projects