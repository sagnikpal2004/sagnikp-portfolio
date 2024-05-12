// TODO: add pills for skills

import { 
  useContext,
} from 'react';
import {
  Container,
  AccordionContext,
  useAccordionButton,
} from 'react-bootstrap';
import {
  CICSLogo,
  HomeBackground,
  PanethnicPourovers,
  UMassLogo,
} from '../assets';
import { 
  Accordion,
  Row,
  Col,
} from 'react-bootstrap';
import {
  FaLocationDot,
  FaLink,
  FaAngleDown
} from 'react-icons/fa6';

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: `url(${HomeBackground})`,
    minHeight: '100vh',
    backgroundSize: 'cover',
    padding: '4.5em 0em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
  },
  bgBlur: {
    width: '100vw',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    zIndex: -1,
  },
  title: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '4em',
    color: 'white',
    textShadow: '10px 10px 30px rgba(10, 255, 128, 1)',
    zIndex: 1,
    position: 'relative',
  },
  accordion: {
    width: '70%',
    borderRadius: '5px',
    paddingTop: '2em',
  },
  accItem: {
    marginBottom: '20px',
    borderRadius: '5px',
    backgroundColor: 'rgba(221, 153, 255, 0.2)',
    display: 'flex',
    flexDirection: 'column',
  },
  accHeader: {
    cursor: 'pointer',
    alignItems: 'center',
    borderRadius: '5px',
    zIndex: 0,
    transform: 'translate(1.35%, 0%)', 
    minHeight: '50px',
    maxWidth: '100%',
    // backgroundColor: 'rgba(116, 12, 220, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(221, 153, 255, 0.5)',
    boxShadow: '0px 0px 20px rgba(10, 255, 128, 0.3)',
    paddingLeft: '1em',
  },
  accBody: {
    paddingLeft: '2em',
    backgroundColor: 'rgba(36, 29, 65, 1)',
  },
}

type accContext = {
  eventKey: string,
  children?: React.ReactNode,
}
function AccButton({ eventKey }: accContext) {
  const { activeEventKey } = useContext(AccordionContext);
  const isCurKey = activeEventKey === eventKey;

  return <FaAngleDown
    style = {{
      transform: isCurKey ? 'rotate(180deg) translateY(10%)' : 'rotate(0deg)',
      transition: 'all 0.3s ease-in-out',
    }}
  />
}
function AccHeader({ eventKey, children }: accContext) {
  const { activeEventKey } = useContext(AccordionContext);
  const isCurKey = activeEventKey === eventKey;

  return <Row style={{
    ...styles.accHeader, backgroundColor: isCurKey ? 'rgba(116, 12, 220, 0.5)' : '#330561' }} onClick={useAccordionButton(eventKey)}>
    {children}
  </Row>
}

function Experience() {
  return <Container fluid style={styles.container}>
    <div style={styles.bgBlur} />
    <p style={styles.title}>Experience</p>

    <Accordion defaultActiveKey="0" style={styles.accordion} flush data-bs-theme="dark">

      <Accordion.Item eventKey="0" style={styles.accItem}>
        <AccHeader eventKey="0">
          <Col style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 'bold' }}>Student @ UMass Amherst</Col>
          <Col style={{ textAlign: 'right', fontFamily: "'Raleway', sans-serif", fontSize: '0.9em' }}>
            <span style={{ paddingRight: '1em' }}>Sep 2022 - present</span>
            <AccButton eventKey="0"/>
          </Col>
        </AccHeader>
        <Accordion.Body style={styles.accBody}>
          <Row style={{ fontSize: '0.85em'}}>
            <Col xs={2} style={{ justifyContent: 'center', }}>
              <FaLocationDot style={{ color: '#bb77ff', transform: 'translateY(-10%)' }} />
              <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>Amherst, MA</span>
            </Col>
            <Col xs={2} style={{ justifyContent: 'center' }}>
              <a href="https://www.umass.edu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <FaLink style={{ color: '#bb77ff' }} />
                <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>umass.edu</span>
              </a>
            </Col>
          </Row>
          <Row style={{ paddingTop: '0.5em', fontFamily: '"Maven Pro", monospace' }}>
            <Col xs={10}  style={{ justifyContent: 'center' }}>
              Major: Computer Science (BS) | Minor: Physics<br/>
              Expected Graduation: May 2026<br/>
              <br/>
              <span style={{ fontSize: '0.95em' }}>
                <b>Distinctions:</b> Chancellor’s Award Scholarship ($16,000 annually), Dean’s List Honors (sem 1 & 2)<br />
                <b>Coursework:</b> Data Structures, Computer Systems Principles, Programming Methodology, Artificial Intelligence, Statistics, Discrete Math, Calculus II, Multivariate Calculus, Linear Algebra<br/>
                <b>Activities:</b> FreshCICS, CICSoft SoftwareDev, ACM Cybersec and ML, Society for Physics Students<br/>
              </span>
            </Col>
            <Col xs={1} style={{ justifyContent: 'center' }}>
              <img src={UMassLogo} width={100}/>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" style={styles.accItem}>
        <AccHeader eventKey="1">
          <Col xs={7} style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 'bold' }}>Software Engineering Co-op @ Panethnic Pourovers</Col>
          <Col style={{ textAlign: 'right', fontFamily: "'Raleway', sans-serif", fontSize: '0.9em' }}>
            <span style={{ paddingRight: '1em' }}>Sep 2023 - present</span>
            <AccButton eventKey="1"/>
          </Col>
        </AccHeader>
        <Accordion.Body style={styles.accBody}>
          <Row style={{ fontSize: '0.85em'}}>
            <Col xs={2} style={{ justifyContent: 'center', }}>
              <FaLocationDot style={{ color: '#bb77ff', transform: 'translateY(-10%)' }} />
              <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>Remote</span>
            </Col>
            <Col xs={10} style={{ justifyContent: 'center' }}>
              <a href="https://panethnicpourovers.org/tech-academy-program/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <FaLink style={{ color: '#bb77ff' }} />
                <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>panethnicpourovers.org</span>
              </a>
            </Col>
          </Row>
          <Row style={{ paddingTop: '0.5em', fontFamily: '"Maven Pro", monospace' }}>
            <Col xs={10}  style={{ justifyContent: 'center' }}>
              • Gained valuable real-world software engineering experience collaborating with cross-functional teams of
              project managers, designers, and engineers<br/>
              • Developed modern web applications using React.js and Next.js, Apollo and GraphQL
            </Col>
            <Col xs={1} style={{ justifyContent: 'center' }}>
              <img src={PanethnicPourovers} width={100} style={{ filter: 'invert(100%)' }}/>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" style={styles.accItem}>
        <AccHeader eventKey="2">
          <Col style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 'bold' }}>Undergraduate Course Assistant @ Manning CICS</Col>
          <Col style={{ textAlign: 'right', fontFamily: "'Raleway', sans-serif", fontSize: '0.9em' }}>
            <span style={{ paddingRight: '1em' }}>Feb 2022 - present</span>
            <AccButton eventKey="2"/>
          </Col>
        </AccHeader>
        <Accordion.Body style={styles.accBody}>
          <Row style={{ fontSize: '0.85em'}}>
            <Col xs={2} style={{ justifyContent: 'center', }}>
              <FaLocationDot style={{ color: '#bb77ff', transform: 'translateY(-10%)' }} />
              <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>Amherst, MA</span>
            </Col>
            <Col style={{ justifyContent: 'center' }}>
              <a href="https://www.cics.umass.edu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <FaLink style={{ color: '#bb77ff' }} />
                <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>cics.umass.edu</span>
              </a>
            </Col>
          </Row>
          <Row style={{ paddingTop: '0.5em', fontFamily: '"Maven Pro", monospace' }}>
            <Col xs={10}  style={{ justifyContent: 'center' }}>
              • Collaborate with instructors and teaching assistants to aid students taking the courses CICS160 Spring’23 (Object-Oriented Programming in Python and Java) and COMPSCI230 Fall’23 (Computer Systems Principles) comprehend the fundamentals of these topics.<br/>
              • Evaluate homework assignments for 300+ students, offering constructive feedback to empower students<br/>
              • Address inquiries from students on Piazza to elucidate core concepts and allay their course-related concerns<br/>
            </Col>
            <Col xs={1} style={{ justifyContent: 'center' }}>
              <img src={CICSLogo} width={100}/>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" style={styles.accItem}>
        <AccHeader eventKey="3">
          <Col xs={9} style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 'bold' }}>Undergraduate Research Volunteer @ Manning CICS</Col>
          <Col style={{ textAlign: 'right', fontFamily: "'Raleway', sans-serif", fontSize: '0.9em' }}>
            <span style={{ paddingRight: '1em' }}>Jun 2022 - Aug 2022</span>
            <AccButton eventKey="3" />
          </Col>
        </AccHeader>
        <Accordion.Body style={styles.accBody}>
          <Row style={{ fontSize: '0.85em' }}>
            <Col xs={2} style={{ justifyContent: 'center', }}>
              <FaLocationDot style={{ color: '#bb77ff', transform: 'translateY(-10%)' }} />
              <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>Remote</span>
            </Col>
            <Col style={{ justifyContent: 'center' }}>
              <a href="https://www.cics.umass.edu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <FaLink style={{ color: '#bb77ff' }} />
                <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>cics.umass.edu</span>
              </a>
            </Col>
          </Row>
          <Row style={{ paddingTop: '0.5em', fontFamily: '"Maven Pro", monospace' }}>
            <Col xs={10} style={{ justifyContent: 'center' }}>
              • Developed and evaluated Quantum Walk algorithms utilizing Qiskit framework<br/>
              • Collaborated within a dynamic team of 5 Undergraduate Research Volunteers (URVs) under the mentorship of PhD student Matheus Andrade<br/>
              • Orchestrated the synthesis of findings into a visually compelling infographic showcased at the UMass FirstFridayFair<br/>
            </Col>
            <Col xs={1} style={{ justifyContent: 'center' }}>
              <img src={CICSLogo} width={100} />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" style={styles.accItem}>
        <AccHeader eventKey="4">
          <Col xs={9} style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 'bold' }}>Resident Assistant @ UMass Amherst</Col>
          <Col style={{ textAlign: 'right', fontFamily: "'Raleway', sans-serif", fontSize: '0.9em' }}>
            <span style={{ paddingRight: '1em' }}>Aug 2022 - present</span>
            <AccButton eventKey="4" />
          </Col>
        </AccHeader>
        <Accordion.Body style={styles.accBody}>
          <Row style={{ fontSize: '0.85em' }}>
            <Col xs={2} style={{ justifyContent: 'center', }}>
              <FaLocationDot style={{ color: '#bb77ff', transform: 'translateY(-10%)' }} />
              <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>Amherst, MA</span>
            </Col>
            <Col style={{ justifyContent: 'center' }}>
              <a href="https://www.umass.edu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <FaLink style={{ color: '#bb77ff' }} />
                <span style={{ paddingLeft: '0.5em', fontFamily: '"Roboto mono", monospace', color: 'rgba(255,255,255,0.8)' }}>umass.edu</span>
              </a>
            </Col>
          </Row>
          <Row style={{ paddingTop: '0.5em', fontFamily: '"Maven Pro", monospace' }}>
            <Col xs={10} style={{ justifyContent: 'center' }}>
              Fostered inclusive community, organized events, and provided mentorship to enhance freshman residents' experience. Demonstrated leadership, crisis management, and effective communication skills while enforcing policies and ensuring a positive living environment.
            </Col>
            <Col xs={1} style={{ justifyContent: 'center' }}>
              <img src={UMassLogo} width={100} />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  </Container>
}

export default Experience;