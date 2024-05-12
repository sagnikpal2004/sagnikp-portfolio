import React from "react";
import { Spinner } from "react-bootstrap";
import { HomeBackground } from "../assets";

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: `url(${HomeBackground})`,
    minHeight: '100vh',
    maxHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '4.5em 0em',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
  },
  bgBlur: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust opacity as needed
    backdropFilter: 'blur(10px)', // Adjust the blur value as needed
    zIndex: -1,
  },
  spinner: {
    width: '5em',
    height: '5em',
  },
};

const Loader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.bgBlur}/>
      <Spinner style={styles.spinner} animation="border" variant="light"/>
    </div>
  );
};

export default Loader;