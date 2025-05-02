import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

import './styles.css';


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1">
        <About />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
