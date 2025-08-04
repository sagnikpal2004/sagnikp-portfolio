import {
  useState,
  useEffect
} from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";
import {
  IoDocumentAttach
} from "react-icons/io5"
import React from "react";

const profLinks = ["LinkedIn", "GitHub", "Email", "Resume"]
const profLinksURL = [
  "https://www.linkedin.com/in/sagnikpal2004",
  "https://www.github.com/sagnikpal2004",
  "mailto:sagnikpal@umass.edu",
  "../assets/resume.pdf"
]
const linkToIcon = [
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  IoDocumentAttach
]

const styles: Record<string, React.CSSProperties> = {
  linkBarDesktop: {
    position: 'fixed',
    left: '2em',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1em',
    padding: '1em 0.5em',
    backgroundColor: 'rgba(5, 10, 15, 0.8)',
    borderRadius: '2em',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.4s ease-out',
    zIndex: 1000,
  },
  icon: {
    color: 'white',
    fill: 'white',
    fontSize: 'clamp(1em, 2vw, 1.2em)',
    padding: '0.4em',
    cursor: 'pointer',
    transition: 'all ease 0.3s',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '36px',
    minHeight: '36px',
  },
}

function FixedLinkBar() {
  const [hoveredLink, setHoveredLink] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const startFade = heroHeight * 0.6; // Start fading at 60%
      const endFade = heroHeight * 0.8; // Fully visible at 80%
      
      if (scrollPosition <= startFade) {
        setScrollOpacity(0);
      } else if (scrollPosition >= endFade) {
        setScrollOpacity(1);
      } else {
        const fadeProgress = (scrollPosition - startFade) / (endFade - startFade);
        setScrollOpacity(fadeProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDesktop = windowWidth >= 768;

  // Don't render on mobile or when opacity is 0
  if (!isDesktop || scrollOpacity === 0) return null;

  const clickHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.currentTarget.querySelector('a');
    if (target && target.href.endsWith(".pdf")) {
      e.preventDefault();
      const pdfPath = require("../assets/Resume_SagnikP.pdf");
      window.open(pdfPath);
    }
  }

  const findColor = (index: number): string => {
    if (hoveredLink === -1)
      switch (profLinks[index]) {
        case "LinkedIn": return '#0077b5';
        case "GitHub": return '#6e5494';
        case "Email": return '#ffcc00';
        case "Resume": return '#ff6666';
        default: return 'gray';
      }
    if (hoveredLink !== index) return '#e6ffff';
    switch (profLinks[index]) {
      case "LinkedIn": return '#0077b5';
      case "GitHub": return '#6e5494';
      case "Email": return '#ffcc00';
      case "Resume": return '#ff6666';
      default: return 'gray';
    }
  }

  const findShadow = (index: number): string => {
    if (hoveredLink === index) return '0 0 20px rgba(213, 128, 255, 0.5)';
    return '0 0 10px rgba(0, 0, 0, 0.3)';
  }

  const findBackgroundColor = (index: number): string => {
    if (hoveredLink === index) {
      switch (profLinks[index]) {
        case "LinkedIn": return 'rgba(0, 119, 181, 0.2)';
        case "GitHub": return 'rgba(110, 84, 148, 0.2)';
        case "Email": return 'rgba(255, 204, 0, 0.2)';
        case "Resume": return 'rgba(255, 102, 102, 0.2)';
        default: return 'rgba(255, 255, 255, 0.1)';
      }
    }
    return 'rgba(255, 255, 255, 0.05)';
  }

  return (
    <div style={{
      ...styles.linkBarDesktop,
      opacity: scrollOpacity,
      transition: 'opacity 0.6s ease-out',
    }}>
      {profLinks.map((link, index) => (
        <div
          key={index}
          style={{
            ...styles.icon,
            color: findColor(index),
            fill: findColor(index),
            boxShadow: findShadow(index),
            backgroundColor: findBackgroundColor(index),
            transform: hoveredLink === index ? 'scale(1.1)' : 'scale(1)',
            position: 'relative',
          }}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(-1)}
          onClick={clickHandler}
        >
          <a 
            href={profLinksURL[index]} 
            target="_blank" 
            rel="noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            {React.createElement(linkToIcon[index])}
          </a>
          
          {/* Tooltip */}
          {hoveredLink === index && (
            <div style={{
              position: 'absolute',
              left: '120%',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '0.5em 1em',
              backgroundColor: 'rgba(5, 10, 15, 0.95)',
              borderRadius: '0.8em',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '0.9rem',
              fontFamily: "'Roboto Mono', monospace",
              whiteSpace: 'nowrap',
              zIndex: 1001,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              animation: 'fadeInRight 0.2s ease-out',
            }}>
              {link}
              <div style={{
                position: 'absolute',
                right: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '6px solid rgba(5, 10, 15, 0.95)',
              }} />
            </div>
          )}
        </div>
      ))}
      
      {/* Add keyframes for tooltip animation */}
      <style>
        {`
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateY(-50%) translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(-50%) translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default FixedLinkBar;
