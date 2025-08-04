import { 
  Card,
  Carousel,
  Col,
  Container, 
  ListGroup, 
  Row
} from "react-bootstrap";
import { 
  HomeBackground 
} from "../utils/assets";

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
  cardGroup: {
    width: '100vh',
    height: '70vh',
    paddingTop: '2em',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  card: {
    
  }
}

function Projects() {
  return <Container fluid style={styles.container} id="projects-section">
    <div style={styles.bgBlur} />
    <p style={styles.title}>Projects</p>

    <ListGroup horizontal style={styles.cardGroup}>
      <ListGroup.Item variant="dark" style={styles.card}><Card style={{ padding: '10em 10em' }}>
        Hi
      </Card></ListGroup.Item>
      <ListGroup.Item style={styles.card}><Card style={{ padding: '10em 10em' }}>
        Hi
      </Card></ListGroup.Item>
    </ListGroup>
  </Container>
}

export default Projects;