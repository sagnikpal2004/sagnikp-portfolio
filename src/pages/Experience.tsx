import { Col, Container, Row } from "react-bootstrap";
import { ExperiencePic } from "../utils/assets";
// @ts-ignore
import { Chrono } from "react-chrono";

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#0c0f18',
    height: '100vh',
    position: 'relative',
    width: '100%',
    // textAlign: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    position: 'absolute',
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '3em',
    color: 'white',
    textShadow: '10px 10px 30px rgba(10, 255, 128, 0.6)',
    zIndex: 1,
    paddingTop: '10vh',
    paddingLeft: '1em',
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    left: 0,
    background: `url(${ExperiencePic}) center center`,
    backgroundRepeat: 'repeat-x',
    // height: 'auto',
    width: '100%',
    backgroundSize: 'auto 4em',
    minHeight: '4em',
    paddingLeft: 0,
    zIndex: 1000,
  },
  expContainer: {
    padding: '0',
    position: 'absolute',
    height: '120%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'right',
    alignItems: 'flex-end',
    paddingTop  : '10vh',
    paddingBottom: '10vh',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  expContainerOuter: {
    // padding: '0',
    // paddingRight: '3em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  }
}

const cardStyles: Record<string, React.CSSProperties> = {
  container: {
    borderRadius: '1em',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    width: '50%',
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '1.2em',
  },
  title: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: '1.2em',
    color: 'white',
  },
}
type ExperienceCardProps = {
  role: string,
  org: string,
  time: string,
  description: string
  link: string,
}
function ExperienceCard(props: ExperienceCardProps) {
  return <Container style={cardStyles.containter}>
    <Row style={cardStyles.title}>
      <Col style={cardStyles.titleText}>{props.role} <p style={cardStyles.org}>@ {props.org}</p></Col>
      <Col style={cardStyles.time}>{props.time}</Col>
    </Row>
    <Row style={cardStyles.description}>
      {props.description}
    </Row>
  </Container>
}

function Experience() {
  return <Container fluid style={styles.container} id="experience-section"> 
    <p style={styles.title}>My <b>Experience</b></p>
    <Container fluid style={styles.expContainerOuter}><Container style={styles.expContainer}>
      <Chrono scrollable={{ scrollbar: false }} disableToolbar='true' mode='VERTICAL' items={[
        {
          title: "May 1900",
          cardTitle: "Software Engineering Intern @ Google",
          cardSubtitle: "May 2021 - August 2021",
          cardDetailedText: "Worked on the Google Cloud Platform team to develop a new feature for the Cloud Console. Developed a new feature to allow users to view and manage their billing accounts.",
        },
        {
          title: "June 1901",
          cardTitle: "Software Engineering Intern @ Google",
          cardSubtitle: "May 2020 - August 2020",
          cardDetailedText: "Worked on the Google Cloud Platform team to develop a new feature for the Cloud Console. Developed a new feature to allow users to view and manage their billing accounts.",
        },
        {
          title: "Software Engineering Intern",
          cardTitle: "Software Engineering Intern @ Google",
          cardSubtitle: "May 2019 - August 2019",
          cardDetailedText: "Worked on the Google Cloud Platform team to develop a new feature for the Cloud Console. Developed a new feature to allow users to view and manage their billing accounts.",
        },
        {
          title: "Software Engineering Intern",
          cardTitle: "Software Engineering Intern @ Google",
          cardSubtitle: "May 2018 - August 2018",
          cardDetailedText: "Worked on the Google Cloud Platform team to develop a new feature for the Cloud Console. Developed a new feature to allow users to view and manage their billing accounts.",
        },
      ]}/>
    </Container></Container>
    <div style={styles.footer}/>
  </Container>;
}

export default Experience;