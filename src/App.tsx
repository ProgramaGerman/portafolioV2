
import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import './App.css';
import Habilidades from './components/Habilidades';
import Sociales from './components/Sociales';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme + '-mode';
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Habilidades />
        <Sociales />
      </main>
    </>
  );
}

export default App;