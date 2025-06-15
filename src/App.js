import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} currentTheme={theme} />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;