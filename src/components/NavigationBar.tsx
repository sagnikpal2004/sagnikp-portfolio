import { 
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
import { 
  useState 
} from 'react';
import {
  menus
} from '../utils/consts';

type NavigationBarProps = {
  title: string;
  tabState: { 
    currentTab: string;
    setCurrentTab: (tab: string) => void;
  }
}

function NavigationBar({ title, tabState }: NavigationBarProps) {
  const { currentTab, setCurrentTab } = tabState;
  const [hoveredMenu, setHoveredMenu] = useState(-2);

  function clickHandler(index: number) {
    if (menus[index] === currentTab) return;
    setCurrentTab(menus[index]);
  }

  return <Navbar
    expand="lg"
    data-bs-theme="dark"
    style={{
      // height: '100px',
      height: '10vh',
      border: 'none',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      // height: '4em',
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
          backgroundColor: 'rgba(51, 0, 77, 0.1)', 
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