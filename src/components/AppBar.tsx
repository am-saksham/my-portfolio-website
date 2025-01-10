import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // LinkedIn & Instagram icons
import { FiFileText } from 'react-icons/fi'; // CV icon

export default function AppBar() {
  return (
    <header className="app-bar">
      <h1><a href="/" className="nav-link title-nav-link">Saksham Gupta</a></h1>
      <div className="nav-links">
        <a href="#work"><span className='nav-link'>Work</span></a>
        <a href="#about"><span className='nav-link'>About</span></a>
        <a href="#photography"><span className='nav-link'>Photography</span></a>
      </div>
      <div className="social-icons">
        <a href="https://drive.google.com/file/d/1owo4CiyGMgUpzlyULAZsq00PmlSx2MmM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FiFileText style={{color: 'black'}} />
        </a>
        <a href="https://www.linkedin.com/in/am-saksham-gupta/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn style={{color: 'black'}}/>
        </a>
        <a href="https://www.instagram.com/am_sakshamgupta/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{color: 'black'}}/>
        </a>
      </div>
    </header>
  );
}