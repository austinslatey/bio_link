import './App.css';
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import ProfilePicture from "./assets/profile_picture.png";
import ReactIcon from "./assets/react.svg";
import Github from "./assets/github.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import X from "./assets/x.svg";
import Medal from "./assets/medal.png";

function App() {



  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })

  return (
    <>
      <Particles className='particles' options={{
        particles: {
          color: {
            value: "#fff"
          },
          number: {
            value: 80
          },
          opacity: {
            value: { min: 0.1, max: 0.5 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 5 }
          },
          move: {
            direction: "bottom-right",
            enable: true,
            speed: { min: 3, max: 5 },
            straight: true
          }
        }
      }} init={init} />
      <div className="container">
        <div className="profileContainer">
          <div className="profilePicture">
            <img
              className="image"
              src={ProfilePicture}
              alt="Profile"
              role="presentation"
              crossOrigin="anonymous"
            />
          </div>
          <div className="profileTitle">
            <h1 className="username">Austin Slater</h1>
          </div>
          <div className="profileDescription">
            <div>
              <h3 className="header">Full-Stack Developer</h3>
            </div>
            <h2 className="description">
              Innovative Web Solutions, Continuous Learner, Competitive Gamer
            </h2>
          </div>
        </div>
        <div className="linksContainer">

          <div className="link">
            <a href="https://austinslateys-portfolio.netlify.app" target="_blank" rel="noopener" className="linkButton">
              <div className="linkContent">

                <p className="linkText">
                  <img src={ReactIcon} alt="react_icon" className="icon" />
                  My Portfolio
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="socialContainer">
          <a href="https://github.com/austinslatey" target="_blank" rel="noopener" className="socialIcon" aria-label="Github">
            <img className="svgIcon" src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/austin-slater-1141b8225/" target="_blank" rel="noopener" className="socialIcon" aria-label="LinkedIn">
            <img className="svgIcon" src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://x.com/austinslater_" target="_blank" rel="noopener" className="socialIcon" aria-label="X">
            <img className="svgIcon" src={X} alt="X" />
          </a>
          <a href="https://instagram.com/slate_real" target="_blank" rel="noopener" className="socialIcon" aria-label="Instagram">
            <img className="svgIcon" src={Instagram} alt="Instagram" />
          </a>
          <a href="https://medal.tv/u/ayyeslateyy?invite=ur-MSxRdEEsMjEyMzgxMDI1LA" target="_blank" rel="noopener" className="socialIcon" aria-label="Instagram">
            <img className='svgIcon' src={Medal} alt="Medal" />
          </a>
        </div>


      </div>
    </>
  )
}

export default App;
