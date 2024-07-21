import { Container } from "react-bootstrap";
import { ExperiencePic } from "../utils/assets";

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#0c0f18',
    height: '100vh',
  },
  photoRow: {
    background: `url(${ExperiencePic}) center center fixed`,
  }
}

function Experience() {
  return <Container fluid style={styles.container}>
    <Container></Container>
    <div style={styles.photoRow}/>
  </Container>;
}

export default Experience;