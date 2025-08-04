import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { transform } from 'typescript';
import { FaChevronDown } from 'react-icons/fa';
import NavigationBar from '../components/NavigationBar';
import InlineLinkBar from '../components/InlineLinkBar';

const styles = {
  wrapper: {
    background: "rgba(5, 10, 15, 1)",
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  hero: {
    flex: 1,
    minHeight: '400px',
    padding: '4em 1em',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    color: 'white',
    position: 'relative' as const,
  },
  greeting: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: 'clamp(1rem, 2vw, 2rem)',
    color: '#eff5f2',
    marginBottom: '0.5em',
  },
  name: {
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    fontWeight: 'bold' as const,
    textShadow: '5px 5px 30px rgba(209, 228, 235, 0.4)',
    margin: 0,
    lineHeight: '1.1',
    wordBreak: 'break-word' as const,
  },
  headline: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
    color: '#dd99ff',
    marginTop: '1.5em',
  },
  headlineMoved: {
    display: 'inline-block',
    opacity: 0.2,
    color: 'white',
    transform: 'translate(-200px, 0)',
  },
  headlineFaded: {
    opacity: 0.2,
    color: 'white',
  },
  subline: {
    marginTop: '2em',
    fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
    fontFamily: "'Roboto Mono', monospace",
    color: '#ccc',
  },
  scrollIndicator: {
    position: 'absolute' as const,
    bottom: '2em',
    // left: '50%',
    // transform: 'translateX(-50%)',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'opacity ease 0.3s',
  },
  scrollArrow: {
    fontSize: '1.5rem',
    color: '#ccc',
  },
};

type HomeProps = {
  tabState?: { 
    currentTab: string;
    setCurrentTab: (tab: string) => void;
  }
}

function Home({ tabState }: HomeProps = {}) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          style={styles.greeting}
        >
          Hey there! This is...
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.name}
        >
          Sagnik Pal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.headline}
        >
          {/* <span style={styles.headlineMoved}>type myself = </span><br /> */}
          <span style={styles.headlineFaded}>'</span>
          <span>Developer</span>
          <span style={styles.headlineFaded}>' | '</span>
          <span>Engineer</span>
          <span style={styles.headlineFaded}>' | '</span>
          <span>Researcher</span>
          <span style={styles.headlineFaded}>'</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={styles.subline}
        >
          Undergraduate Student @ UMass<br />
          {/* Quantum Communications Researcher */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <InlineLinkBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{
            ...styles.scrollIndicator,
            opacity: 0.6,
          }}
          whileHover={{ opacity: 1 }}
          onClick={() => {
            const aboutSection = document.querySelector('#about-section');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={styles.scrollArrow}
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>
        {/* <LinkBar />/ */}
      </div>
      
      {/* <NavigationBar 
        title="sagni.jp" 
        tabState={tabState || { currentTab: "home", setCurrentTab: () => {} }} 
        sticky={true}
        scrollMode={true}
      /> */}
    </div>
  );
}

export default Home;
