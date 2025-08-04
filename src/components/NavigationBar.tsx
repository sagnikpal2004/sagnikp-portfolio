import { 
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
import { 
  useState,
  useEffect
} from 'react';
import {
  menus
} from '../utils/consts';

type NavigationBarProps = {
  title: string;
  tabState: { 
    currentTab: string;
    setCurrentTab: (tab: string) => void;
  };
  sticky?: boolean;
  scrollMode?: boolean;
}

function NavigationBar({ title, tabState, sticky = true, scrollMode = false }: NavigationBarProps) {
  const { currentTab, setCurrentTab } = tabState;
  const [hoveredMenu, setHoveredMenu] = useState(-2);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  function clickHandler(index: number) {
    if (scrollMode) {
      // Scroll to section
      const sectionId = `${menus[index]}-section`;
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setCurrentTab(menus[index]);
      }
    } else {
      // Tab-based navigation
      if (menus[index] === currentTab) return;
      setCurrentTab(menus[index]);
    }
  }

  // Mobile navigation - horizontal scrollable dots with expandable menu
  if (isMobile) {
    return (
      <div style={{
        width: '100%',
        padding: '0.5em 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: sticky ? 'rgba(5, 10, 15, 0.9)' : 'transparent',
        backdropFilter: sticky ? 'blur(20px)' : 'none',
        position: sticky ? 'sticky' : 'static',
        top: 0,
        zIndex: 1000,
      }}>
        {/* Expandable Menu */}

          {/* Dot Navigation */}
          <div style={{
            display: 'flex',
            gap: '0.8em',
            padding: '0.5em 1.5em',
            backgroundColor: 'rgba(5, 10, 15, 0.8)',
            borderRadius: '2em',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {menus.map((menu, index) => 
              currentTab === 'home' && menus[index] === 'home' ? null : (
              <div
                key={index}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: currentTab === menus[index] ? '#dd99ff' : 'rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  boxShadow: currentTab === menus[index] ? '0 0 10px rgba(221, 153, 255, 0.5)' : 'none',
                }}
              />
            ))}
          </div>
          
        {mobileMenuOpen && (
          <div style={{
            position: 'relative',
            // top: '0',
            // bottom: '100%',
            width: '90vw',
            margin: '1em',
            padding: '1em',
            backgroundColor: 'rgba(5, 10, 15, 0.95)',
            borderRadius: '1.5em',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8em',
            minWidth: '200px',
            zIndex: 1001,
            animation: 'slideUp 0.3s ease-out',
          }}>
            {menus.map((menu, index) => 
              currentTab === 'home' && menus[index] === 'home' ? null : (
              <div
                key={index}
                style={{
                  padding: '0.8em 1.2em',
                  borderRadius: '1em',
                  backgroundColor: currentTab === menus[index] ? 'rgba(221, 153, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: currentTab === menus[index] ? '#dd99ff' : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  border: currentTab === menus[index] ? '1px solid rgba(221, 153, 255, 0.3)' : '1px solid transparent',
                }}
                onClick={() => {
                  clickHandler(index);
                  setMobileMenuOpen(false);
                }}
              >
                {menu}
              </div>
            ))}
          </div>
        )}

        
        {/* Add keyframes for animation */}
        <style>
          {`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>
    );
  }

  return <Navbar
    expand="lg"
    data-bs-theme="dark"
    style={{
      height: '10vh',
      border: 'none',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'transparent',
      backdropFilter: 'none',
      position: 'sticky',
    }}
  >
    <Container style={{maxWidth: '50%', justifyContent: 'center'}}>
      {title && (
        <Navbar.Brand 
          href="/" 
          style={{
            fontFamily: "'Maven Pro', sans-serif",
            color: hoveredMenu === -1 ? '#66ffb8' : '#adffd9',
            fontSize: '24px',
            filter: hoveredMenu < 0 ? 'drop-shadow(0px 2px 4px rgba(0, 0, 255, 1))' : '',
            transition: 'filter 0.3s ease, color 0.3s ease'
          }}
          onMouseEnter={() => setHoveredMenu(-1)}
          onMouseLeave={() => setHoveredMenu(-2)}
        >
          {title}
        </Navbar.Brand>
      )}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" 
        style={{
          // boxShadow: '0 0 0.5em rgba(213, 128, 255, 0.3)', 
          backgroundColor: 'rgba(51, 0, 77, 0.2)', 
          backdropFilter: 'blur(10px)',
          borderRadius: '2em', 
          justifyContent: 'center'
        }}>
        <Nav className="mx-auto" style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
          {menus.map((menu, index) => currentTab === 'home' && menus[index] === 'home' ? null : (
            <Nav.Link
              key={index}
              style={{
                color: hoveredMenu === -2 ? 'white' : hoveredMenu === index ? '#b3ffda' : 'gray',
                transition: 'color 0.3s ease, box-shadow ease 0.3s',
                fontFamily: "Roboto Mono, monospace",
                fontWeight: 'bold',
                marginLeft: index > 0 ? '30px' : '0',
                textShadow: currentTab === menus[index] ? '0 0 1em rgba(221, 153, 255, 1)' : undefined,
                justifyContent: 'center',
                boxShadow: hoveredMenu === index ? '0 0 0.1em rgba(213, 128, 255, 0.3)' : undefined,
                paddingLeft: '1em',
                paddingRight: '1em',
                borderRadius: '2em',
              }}
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(-2)}
              onClick={() => setCurrentTab(menu)}
            >
              //{menu}
            </Nav.Link>)
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavigationBar;