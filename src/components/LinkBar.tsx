import {
  useState
} from "react";
import {
  Row,
  Col,
} from "react-bootstrap";
import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import {
  HiMail
} from "react-icons/hi";
import {
  ResumeIcon,
  ResumePDF
} from "../assets"

type LinkBarProps = {
  profLinks: ("LinkedIn" | "GitHub" | "Email" | "Resume")[];
  profLinksURL: string[];
}
const linkToIcon = {
  "LinkedIn": <FaLinkedin/>,
  "GitHub": <FaGithubSquare/>,
  "Email": <HiMail/>,
  "Resume": <ResumeIcon/>
}

const styles: Record<string, React.CSSProperties> = {
  linkBar: {
    position: 'absolute',
    bottom: '3em',
    padding: '0.5em',
    backgroundColor: 'rgba(0, 102, 48, 0.1)',
    borderRadius: '2em',
    backdropFilter: 'blur(3px)',
    boxShadow: '0 0 0.5em rgba(213, 128, 255, 0.3)',
  },
  icon: {
    color: 'white',
    fill: 'white',
    fontSize: '2em',
    margin: '0.5em',
    cursor: 'pointer',
    transition: 'color ease 0.3s, fill ease 0.3s'
  },
}

function LinkBar({ profLinks, profLinksURL }: LinkBarProps) {
  const [hoveredLink, setHoveredLink] = useState(-1);

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.currentTarget.href.endsWith(".pdf")) {
      e.preventDefault();
      const pdfPath = require("../assets/Resume_SagnikP.pdf");
      window.open(pdfPath);
    }
  }
  const findColor = (index: number): string => {
    if (hoveredLink === -1) return 'white';
    if (hoveredLink === index) return '#e6ffff';
    return 'gray';
  }
  const findShadow = (index: number): string => {
    if (hoveredLink === index) return '0 0 0.5em rgba(213, 128, 255, 0.3)';
    return '';
  }

  return <Row style={styles.linkBar}>{
    profLinks.map((link, index) =>
      <Col><a 
        href={profLinksURL[index]} 
        target="_blank" 
        rel="noreferrer"
        style={{...styles.icon, color: findColor(index), fill: findColor(index)}} 
        onClick={clickHandler}
        onMouseEnter={() => setHoveredLink(index)}
        onMouseLeave={() => setHoveredLink(-1)}
      >
        {linkToIcon[link]}
      </a></Col>
    )
  }
  </Row>
}

export default LinkBar;