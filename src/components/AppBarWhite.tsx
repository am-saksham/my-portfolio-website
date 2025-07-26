import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 
import { FiFileText } from 'react-icons/fi'; 
import { HiMenu, HiX } from "react-icons/hi";

interface AppBarWhiteProps {
  color?: string; // e.g., "#2B2829", "white", "rgba(0,0,0,0.5)"
}

export default function AppBarWhite({ color = "white" }: AppBarWhiteProps) {
  const [isClient, setIsClient] = useState(false);
  const [scrollToWork, setScrollToWork] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    if (scrollToWork) {
      const workSection = document.getElementById("work");
      if (workSection) {
        setTimeout(() => {
          workSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setScrollToWork(false);
    }
  
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [scrollToWork]);

  if (!isClient) return null;

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== "/") {
      setScrollToWork(true);
      router.push("/#work");
    } else {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="app-bar" style={{backgroundColor: color}}>
      <h1>
        <Link
          href="/"
          className="nav-link title-nav-link"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              router.refresh();
            }
            setMenuOpen(false);
          }}
        >
          Saksham Gupta
        </Link>
      </h1>

      {/* Desktop Navigation - shown only on larger screens */}
      {!isMobile && (
        <>
          <div className="nav-links">
            <a href="#" className="nav-link" onClick={handleWorkClick}>
              Work
            </a>
            <Link
              href="/about"
              className={`nav-link ${
                pathname === "/about" ? "active-link" : ""
              }`}
            >
              About
            </Link>
            <Link href="/#photography" className="nav-link">
              Photography
            </Link>
          </div>

          <div className="social-icons">
            <Link
              href="https://drive.google.com/file/d/1i8oyMDxuaLHjrza5ujQz83-zUqjv1TON/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFileText style={{ color: "white" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/am-saksham-gupta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn style={{ color: "white" }} />
            </Link>
            <Link
              href="https://www.instagram.com/am_sakshamgupta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ color: "white" }} />
            </Link>
          </div>
        </>
      )}

      {/* Mobile Menu Button - shown only on mobile */}
      {isMobile && (
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} color='white'/>}
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              <a href="#" className="mobile-nav-link" onClick={handleWorkClick}>
                Work
              </a>
              <Link
                href="/about"
                className={`mobile-nav-link ${
                  pathname === "/about" ? "active-link" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#photography"
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Photography
              </Link>
            </nav>

            <div className="mobile-social-icons">
              <Link
                href="https://drive.google.com/file/d/1i8oyMDxuaLHjrza5ujQz83-zUqjv1TON/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <FiFileText style={{ color: "black" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/am-saksham-gupta/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <FaLinkedinIn style={{ color: "black" }} />
              </Link>
              <Link
                href="https://www.instagram.com/am_sakshamgupta/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <FaInstagram style={{ color: "black" }} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
