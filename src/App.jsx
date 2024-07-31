import './App.css';

import ProfilePicture from "./assets/profile_picture.png";
import Github from "./assets/github.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import X from "./assets/x.svg";


function App() {
  return (
    <>
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
            <h2 className="description">
              Innovative Web Solutions, Continuous Learner, Competitive Gamer
            </h2>
          </div>
        </div>
        <div className="linksContainer">
          <div>
            <h3 className="header">Full-Stack Developer</h3>
          </div>
          <div className="link">
            <a href="https://austinslateys-portfolio.netlify.app" target="_blank" rel="noopener" className="linkButton">
              <div className="linkContent">
                <p className="linkText">My Portfolio</p>
              </div>
            </a>
          </div>
        </div>
        <div className="socialContainer">
          <a href="https://github.com/austinslatey" target="_blank" rel="noopener" className="socialIcon" aria-label="Github">
            <svg className={Github} viewBox="0 0 24 24">
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/austin-slater-1141b8225/" target="_blank" rel="noopener" className="socialIcon" aria-label="LinkedIn">
            <svg className={LinkedIn} viewBox="0 0 24 24">
            </svg>
          </a>
          <a href="https://instagram.com/slate_real" target="_blank" rel="noopener" className="socialIcon" aria-label="Instagram">
            <svg className={Instagram} viewBox="0 0 24 24">
            </svg>
          </a>
          <a href="https://twitter.com/slate_real" target="_blank" rel="noopener" className="socialIcon" aria-label="X">
            <svg className={X} viewBox="0 0 24 24">
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
