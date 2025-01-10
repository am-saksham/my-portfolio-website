import Link from 'next/link';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // LinkedIn & Instagram icons
import { FiFileText } from 'react-icons/fi'; // CV icon

export default function AppBar() {
  return (
    <header className="app-bar">
      <h1><Link href="/" className="nav-link title-nav-link">Saksham Gupta</Link></h1>
      <div className="nav-links">
        <Link href="#work"><span className='nav-link'>Work</span></Link>
        <Link href="#about"><span className='nav-link'>About</span></Link>
        <Link href="#photography"><span className='nav-link'>Photography</span></Link>
      </div>
      <div className="social-icons">
        <Link href="https://drive.google.com/file/d/1owo4CiyGMgUpzlyULAZsq00PmlSx2MmM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FiFileText style={{color: 'black'}} />
        </Link>
        <Link href="https://www.linkedin.com/in/am-saksham-gupta/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn style={{color: 'black'}}/>
        </Link>
        <Link href="https://www.instagram.com/am_sakshamgupta/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{color: 'black'}}/>
        </Link>
      </div>
    </header>
  );
}