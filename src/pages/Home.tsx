import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import LinkBar from '../components/LinkBar';
import NavigationBar from '../components/NavigationBar';

function getTextWidth(text: string, fontSize: number, fontFamily: string): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context!.font = `${fontSize}em ${fontFamily}`; // Set the font and size
  const textWidth = context!.measureText(text).width;
  if (document.body.contains(canvas)) document.body.removeChild(canvas);
  return textWidth;
}
function getScreenWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

interface Styles {
  [key: string]: React.CSSProperties | Styles;
}

const intro: Styles = {
  container0: {
    // background: `url(${HomeBackground})`,
    background: "rgba(5, 10, 15, 1)",
    backgroundAttachment: 'fixed',
    minHeight: '400px',
    height: '90vh',
    // maxHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  container1: {
    flex: 1,
    minHeight: '400px',
    padding: '4em 0em',
    textAlign: 'center',
    display: 'flex',              
    flexDirection: 'column',      
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '7em',
    color: 'white',
    textShadow: '5px 5px 30px rgba(209, 228, 235, 0.4)',
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  titleShadow: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '22em',
    color: 'rgba(235, 226, 208, 0.2)',
    filter: 'blur(20px)',
    position: 'absolute',
    whiteSpace: 'nowrap',
    zIndex: 0,
    left: getTextWidth('Sagnik Pal', 22, "'Maven Pro', sans-serif") - getScreenWidth(),
    userSelect: 'none',
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  greeting: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: '2em',
    position: 'absolute',
    top: 'calc(50% - 3.5em)',
    color: '#eff5f2',
    transform: 'translateY(-50%)',
  },
  headline: {
    fontFamily: "'Roboto Mono', monospace",
    position: 'absolute',
    top: '60%',
  },
  linkBar: {
    position: 'absolute',
    width: '50%',
    top: '75%',
  }
}


function Home() {  
  return <>
    <Container fluid style={intro.container0}>
      <Container fluid style={intro.container1}>
        <Row style={intro.greeting}>
          Hey there! This is...
        </Row>
        <Row style={intro.titleContainer}>
          <p style={intro.title}>Sagnik Pal</p>
          {/* <p style={intro.titleShadow}>Sagnik Pal</p> */}
        </Row>
        <Row style={intro.headline}>
          <span style={{ transform: 'translateX(-38%)', color: 'white', opacity: 0.2}}>type myself = <br /></span>
          <span style={{ fontSize: '1.5em', transform: 'translateX(2%)' }}>
            <span style={{ color: 'white', opacity: 0.2 }}>'</span>
            <span style={{ color: '#dd99ff' }}>Developer</span>
            <span style={{ color: 'white', opacity: 0.2 }}>' | '</span>
            <span style={{ color: '#dd99ff' }}>Engineer</span>
            <span style={{ color: 'white', opacity: 0.2 }}>' | '</span>
            <span style={{ color: '#dd99ff' }}>Problem Solver</span>
            <span style={{ color: 'white', opacity: 0.2 }}>'</span>
          </span>
        </Row>
        <Row style={intro.linkBar}><LinkBar 
          profLinks={["LinkedIn", "GitHub", "Email", "Resume"]} 
          profLinksURL={[
            "https://www.linkedin.com/in/sagnikpal2004",
            "https://www.github.com/sagnikpal2004",
            "mailto:sagnikpal@umass.edu",
            "../assets/resume.pdf"
          ]}
        /></Row>
      </Container>
      {/* <NavigationBar 
        title = ""
        tabState = {{ currentTab: "home", setCurrentTab: () => {} }}
      /> */}
    </Container>
  </>
}

export default Home;