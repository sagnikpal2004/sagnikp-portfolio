import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import LinkBar from '../components/LinkBar';
import {
  HomeBackground
} from '../assets';
import {
  FaAnglesDown,
} from 'react-icons/fa6'

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

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: `url(${HomeBackground})`,
    minHeight: '100vh',
    maxHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '4em 0em',
    textAlign: 'center',
    display: 'flex',              
    flexDirection: 'column',      
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '10em',
    color: 'white',
    textShadow: '10px 10px 30px rgba(10, 255, 128, 1)',
    zIndex: 1,
    position: 'absolute',
  },
  titleShadow: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '22em',
    color: 'rgba(153, 255, 204, 0.2)',
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
    top: '5.4em',
    color: '#eff5f2',
  },
  headline: {
    fontFamily: "'Roboto Mono', monospace",
    position: 'absolute',
    top: '60%',
  },
  icon: {
    color: 'white !important',
    fontSize: '2em',
    margin: '0.5em',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '2em',
  }
}


function Home() {  
  return <Container fluid style={styles.container}>
    <Row style={styles.greeting}>
      Hey there! This is...
    </Row>
    <Row style={styles.titleContainer}>
      <p style={styles.title}>Sagnik Pal</p>
      <p style={styles.titleShadow}>Sagnik Pal</p>
    </Row>
    <Row style={styles.headline}>
      <span style={{ transform: 'translateX(-38%)', color: 'white', opacity: 0.2}}>type myself = <br /></span>
      <span style={{ fontSize: '1.5em', transform: 'translateX(4%)' }}>
        <span style={{ color: 'white', opacity: 0.2 }}>'</span>
        <span style={{ color: '#dd99ff' }}>Developer</span>
        <span style={{ color: 'white', opacity: 0.2 }}>' | '</span>
        <span style={{ color: '#dd99ff' }}>Engineer</span>
        <span style={{ color: 'white', opacity: 0.2 }}>' | '</span>
        <span style={{ color: '#dd99ff' }}>Problem Solver</span>
        <span style={{ color: 'white', opacity: 0.2 }}>'</span>
      </span>
    </Row>
    <LinkBar 
      profLinks={["LinkedIn", "GitHub", "Email", "Resume"]} 
      profLinksURL={[
        "https://www.linkedin.com/in/sagnikpal2004",
        "https://www.github.com/sagnikpal2004",
        "mailto:sagnikpal@umass.edu",
        "../assets/resume.pdf"
      ]}
    />
    {/* <Row style={{ position: 'absolute', bottom: '1em', color: '#33ffff', fontFamily: "'Maven Pro', sans-serif", transform: 'translateX(-0.9em)' }}>
      <Col style={{ opacity: 0.7 }}>About</Col>
      <Col><FaAnglesDown/></Col>
      <Col style={{ opacity: 0.7 }}>Me</Col>
    </Row> */}
  </Container>
}

export default Home;