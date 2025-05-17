import './App.css';
import joeyImg from './joey-headshot.jpg';
import joeyResume from './joseph-baran-resume.pdf';
import newLogo from './green-logo.png';
import { Carousel } from './components/Carousel/Carousel';
import carouselData from './data/carouselData.json';
import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";



function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    
    <div className="App">
      <div className="logo">
          <a href="."><img src={newLogo} className="home-button" alt="logo" /></a>
      </div>
      <header className="App-header">
        
        <div className="row">
          <div className="column col-1">
            <img className="personal-photo" src={joeyImg} alt="Joey"/>
          </div>
          <div className="column col-1 paragraph">
            <h1>I'm Joseph Baran</h1>
            <h4>Software Engineer</h4>
            <p>I recently earned my Master’s degree in Computer Science from Michigan State University. This website serves as a platform to showcase my skills and experience as I pursue new opportunities in the field of Software Engineering.</p>
            <a href={joeyResume}><button className="resume-button">⮑ View My Resumé</button></a>
          </div>
        </div>
        
        <div className="row">
          
            <div className="column col-1 carousel">
              <h1 data-aos="fade-up" data-aos-delay={100} className="section-header">About Me</h1>
              <Carousel data={ carouselData["slides"] }/>
            </div>
        </div>

        <div className="row">
          <div className="column col-1">
            <h1 data-aos="fade-up" data-aos-delay={100} className="section-header">Contact Me</h1>
            <div className="social-icons">
              <a href="mailto:baranjo1@msu.edu">
                <img className="icon" src="/icons/email.png" alt="E-mail"></img>
              </a>
              <a href="tel:+12488421048">
                <img className="icon" src="/icons/phone.png" alt="E-mail"></img>
              </a>
              <a href="https://www.linkedin.com/in/joseph-baran-90908121b/">
                <img className="icon" src="/icons/linkedin.png" alt="E-mail"></img>
              </a>
              <a href="https://www.github.com/baranjo">
                <img className="icon" src="/icons/github.png" alt="E-mail"></img>
              </a>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <p className="footer-text">© 2025 Joseph Baran </p>
      </footer>
    </div>
  );
}

export default App;
