import { 
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
import { 
  useState 
} from 'react';

type NavigationBarProps = {
  title: string;
  menus: string[];
  tabState: { 
    currentTab: string;
    setCurrentTab: (tab: string) => void;
  }
}

function NavigationBar({ title, menus, tabState }: NavigationBarProps) {
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
      border: 'none',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(20px)'
    }}
  >
    <Container>
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {menus.map((menu, index) => (
            <Nav.Link
              key={index}
              style={{
                color: hoveredMenu === -2 ? 'white' : hoveredMenu === index ? '#e6fff3' : 'gray',
                transition: 'color 0.3s ease',
                fontFamily: "Roboto Mono, monospace",
                fontWeight: 'bold',
                marginLeft: '30px',
                textShadow: currentTab === menus[index] ? '0 0 1em rgba(221, 153, 255, 1)' : '',
              }}
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(-2)}
              onClick={() => setCurrentTab(menu)}
            >
              //{menu}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavigationBar;