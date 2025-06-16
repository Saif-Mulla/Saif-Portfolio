import './index.css';
import Sidebar from './components/Sidebar';
import Intro from './components/IntroSection';
import TechSect from './components/TechSection';
import ProjectSect from './components/ProjectSection';
import { HashRouter as Router } from 'react-router-dom';
import ContactSect from './components/ContactSection';


function App() {
  return (
    <>
      <Router>
          <div className='fixed'>
            <Sidebar/>
          </div>
          <div className="ml-0 md:ml-64">
            <div id="intro"><Intro /></div>
            <div id="tech"><TechSect /></div>
            <div id="project"><ProjectSect /></div>
            <div id="contact"><ContactSect /></div>
          </div>
      </Router>
    </>
  );
}

export default App;
