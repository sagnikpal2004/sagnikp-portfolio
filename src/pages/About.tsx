import { Col, Container } from "react-bootstrap";
import { AboutPic } from '../utils/assets'
import { FaCircleInfo } from "react-icons/fa6";

const styles: Record<string, React.CSSProperties> = {
  container: {
    // backgroundColor: 'rgba(255, 255, 255, 1)',
    background: `url(${AboutPic}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    color: 'white',
    height: '100vh',
    minHeight: '400px',
    display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10px',
    
  },
  title: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '4em',
    color: 'black',
    textShadow: '10px 10px 30px rgba(10, 255, 128, 1)',
    zIndex: 1,
    // position: 'relative',
    paddingBottom: '20px',
  },
  photoCol : {
    background: `url(${AboutPic}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  },
  textCol: {
    fontFamily: "'Maven Pro', sans-serif",
    paddingTop: '10vh',
    textAlign: 'right',
    color: 'black',
    paddingRight: '5em',
  },
  text: {

  }
}

function About() {
  return <Container fluid style={styles.container}>
    <Col /*fluid style={styles.photoCol}*/>{/*<FaCircleInfo style={{color: 'grey'}}/>*/}</Col>
    <Col style={styles.textCol}>
      <p style={styles.title}>About <b>Me</b></p>
      Just a simple guy, who is awe-struck by how 
    </Col>
  </Container>
}

export default About;