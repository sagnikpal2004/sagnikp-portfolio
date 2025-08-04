import {
  useState,
  useEffect
} from "react";
import {
  menus
} from '../utils/consts';
import React from "react";

const styles: Record<string, React.CSSProperties> = {
  dotNavigation: {
    position: 'fixed',
    right: '2em',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.2em',
    padding: '1.5em 0.8em',
    backgroundColor: 'rgba(5, 10, 15, 0.8)',
    borderRadius: '2em',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all ease 0.3s',
    zIndex: 1000,
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
}

type DotNavigationProps = {
  tabState: { 
    currentTab: string;
    setCurrentTab: (tab: string) => void;
  };
}

function DotNavigation({ tabState }: DotNavigationProps) {
  const { currentTab, setCurrentTab } = tabState;
  const [hoveredDot, setHoveredDot] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [internalCurrentTab, setInternalCurrentTab] = useState(currentTab);

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

      // Auto-update current tab based on scroll position
      const scrolled = document.scrollingElement?.scrollTop || 0;
      const windowHeight = window.innerHeight;
      
      // Get section positions
      const aboutSection = document.querySelector('#about-section');
      const experienceSection = document.querySelector('#experience-section');
      const projectsSection = document.querySelector('#projects-section');
      const contactSection = document.querySelector('#contact-section');
      
      // Helper function to check if section is in view
      const isInView = (element: Element | null) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;
      };
      
      // Check which section is currently in the center of viewport
      let newTab = 'home';
      if (scrolled < windowHeight * 0.5) {
        newTab = 'home';
      } else if (contactSection && isInView(contactSection)) {
        newTab = 'contact';
      } else if (projectsSection && isInView(projectsSection)) {
        newTab = 'projects';
      } else if (experienceSection && isInView(experienceSection)) {
        newTab = 'experience';
      } else if (aboutSection && isInView(aboutSection)) {
        newTab = 'about';
      }

      // Only update internal state
      if (newTab !== internalCurrentTab) {
        setInternalCurrentTab(newTab);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [internalCurrentTab]);

  const isDesktop = windowWidth >= 768;

  // Don't render on mobile or when opacity is 0
  if (!isDesktop || scrollOpacity === 0) return null;

  const clickHandler = (index: number) => {
    const sectionId = `${menus[index]}-section`;
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentTab(menus[index]);
    }
  };

  const getDotColor = (index: number): string => {
    if (internalCurrentTab === menus[index]) return '#dd99ff';
    if (hoveredDot === index) return '#b3ffda';
    return 'rgba(255, 255, 255, 0.4)';
  };

  const getDotShadow = (index: number): string => {
    if (internalCurrentTab === menus[index]) return '0 0 15px rgba(221, 153, 255, 0.6)';
    if (hoveredDot === index) return '0 0 10px rgba(179, 255, 218, 0.4)';
    return 'none';
  };

  return (
    <div style={{
      ...styles.dotNavigation,
      opacity: scrollOpacity,
      transition: 'opacity 0.6s ease-out',
    }}>
      {menus.map((menu, index) => 
        menu === 'home' ? null : (
        <div
          key={index}
          style={{
            ...styles.dot,
            backgroundColor: getDotColor(index),
            boxShadow: getDotShadow(index),
            transform: hoveredDot === index ? 'scale(1.3)' : internalCurrentTab === menus[index] ? 'scale(1.2)' : 'scale(1)',
          }}
          onMouseEnter={() => setHoveredDot(index)}
          onMouseLeave={() => setHoveredDot(-1)}
          onClick={() => clickHandler(index)}
        >
          {/* Tooltip */}
          {hoveredDot === index && (
            <div style={{
              position: 'absolute',
              right: '120%',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '0.6em 1.2em',
              backgroundColor: 'rgba(5, 10, 15, 0.95)',
              borderRadius: '0.8em',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '0.9rem',
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              zIndex: 1001,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              textTransform: 'capitalize',
              animation: 'fadeInLeft 0.2s ease-out',
            }}>
              {menu}
              <div style={{
                position: 'absolute',
                left: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '6px solid rgba(5, 10, 15, 0.95)',
              }} />
            </div>
          )}
        </div>
      ))}
      
      {/* Add keyframes for tooltip animation */}
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateY(-50%) translateX(10px);
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

export default DotNavigation;
