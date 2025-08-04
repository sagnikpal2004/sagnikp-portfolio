import {
  useEffect,
  useState
} from "react";
import {
  Row,
  Col,
} from "react-bootstrap";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

import {
  IoDocumentAttach
} from "react-icons/io5"
import {
  ResumeIcon,
  ResumePDF
} from "../utils/assets"
import React from "react";

 
const profLinks=["LinkedIn", "GitHub", "Email", "Resume"]
const profLinksURL=[
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
  linkBar: {
    position: 'fixed',
    top: '50%',
    transform: 'translate(0, -30%)',
    zIndex: 1000,
    left: '1em',
    // padding: '0.5em',
    backgroundColor: 'rgba(5, 10, 15, 0.85)',
    borderRadius: '2em',
    backdropFilter: 'blur(3px)',
    // boxShadow: '0 0 0.5em rgba(213, 128, 255, 0.3)',
    // width: '50%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'box-shadow ease 0.3s',
  },
  icon: {
    color: 'white',
    fill: 'white',
    fontSize: '1.25em',
    // margin: 'auto',
    padding: '0.3em',
    cursor: 'pointer',
    transition: 'color ease 0.3s, fill ease 0.3s, boxShadow ease 0.3s',
    justifyContent: 'center',
  },
}

function LinkBar() {
  const [hoveredLink, setHoveredLink] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (windowWidth < 700) return null;

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.currentTarget.href.endsWith(".pdf")) {
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
  const findShadow = (link: String, index: number): string => {
    if (hoveredLink === index) return '0 0 0.5em rgba(213, 128, 255, 0.3)';
    return '';
  }

  return <Row style={{...styles.linkBar, /*boxShadow: hoveredLink >= 0 ? '0 0 0.1em rgba(213, 128, 255, 0.3)' : undefined*/}}>{
    profLinks.map((link, index) =>
      <Col 
        style={{
          margin: 'auto', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '0.25em',
          fill: 'white',
        }}
        onMouseEnter={() => setHoveredLink(index)}
        onMouseLeave={() => setHoveredLink(-1)}
        onClick={clickHandler}>
          <a 
          href={profLinksURL[index]} 
          target="_blank" 
          rel="noreferrer"
          style={{...styles.icon, color: findColor(index), fill: findColor(index), textShadow: findShadow(link, index),}} 
          >
        {React.createElement(linkToIcon[index])}
      </a></Col>
    )
  }
  </Row>
}

export default LinkBar;