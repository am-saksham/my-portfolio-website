import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 
import { FiFileText } from 'react-icons/fi'; 

export default function AppBarWhite() {
  const [isClient, setIsClient] = useState(false);
  const [scrollToWork, setScrollToWork] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    if (scrollToWork) {
      const workSection = document.getElementById("work");
      if (workSection) {
        setTimeout(() => {
          workSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setScrollToWork(false);
    }
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
  };

  return (
    <header className="app-bar">
      <h1>
        <Link
          href="/"
          className="nav-link title-nav-link"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault(); // Prevent default navigation
              router.refresh(); // Force page reload
            }
          }}
        >
          Saksham Gupta
        </Link>
      </h1>
      <div className="nav-links">
        <a href="#" className="nav-link" onClick={handleWorkClick}>
          Work
        </a>
        <Link
          href="/about"
          className={`nav-link ${pathname === "/about" ? "active-link" : ""}`}
        >
          About
        </Link>
        <Link href="/#photography" className="nav-link">
          Photography
        </Link>
      </div>
      <div className="social-icons">
        <Link
          href="https://drive.google.com/file/d/1owo4CiyGMgUpzlyULAZsq00PmlSx2MmM/view?usp=sharing"
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
    </header>
  );
}