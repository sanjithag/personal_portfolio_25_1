import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects'

import './styles.css';


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
