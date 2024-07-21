import React, { useState, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import Loader from './components/Loader';
import { menus } from './utils/consts';
import { Container } from 'react-bootstrap';

function App() {
  const [currentTab, setCurrentTab] = useState(menus[0]);

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  const Projects = React.lazy(() => import('./pages/Projects'));
  const Experience = React.lazy(() => import('./pages/Experience'));
  const Contact = React.lazy(() => import('./pages/Contact'));
  const NotFound = React.lazy(() => import('./pages/NotFound'));

  return <div style={{background: 'rgba(5, 10, 15, 1)'}}>
    <Suspense fallback={<Loader />}><Home/></Suspense>
    <NavigationBar title="" tabState={{currentTab, setCurrentTab}}/>
    <Suspense fallback={<Loader />}><About/></Suspense>
    <Suspense fallback={<Loader />}><Projects/></Suspense>
    <Suspense fallback={<Loader />}><Experience/></Suspense>
    <Suspense fallback={<Loader />}><Contact/></Suspense>
  </div>
}

export default App;
