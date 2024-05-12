import React, { useState, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import Loader from './components/Loader';

function App() {
  const menus = ["home", "projects", "experience", "contact", "loader"];
  const [currentTab, setCurrentTab] = useState(menus[0]);

  const renderSwitch = (param: string) => {
    switch(param) {
      case "home":
        return React.lazy(() => import('./pages/Home'));
      case "projects":
        return React.lazy(() => import('./pages/Projects'));
      case "experience":
        return React.lazy(() => import('./pages/Experience'));
      case "contact":
        return React.lazy(() => import('./pages/Contact'));
      case "loader":
        return React.lazy(() => import('./components/Loader'));
      default:
        return React.lazy(() => import('./pages/NotFound'));
      }
  }

  const PageComponent = renderSwitch(currentTab);
  return <> 
    <NavigationBar 
      title="sagni.kp" 
      menus={menus}
      tabState={{ currentTab, setCurrentTab }}
    />
    <Suspense fallback={Loader()}><PageComponent/></Suspense>
  </>
}

export default App;
