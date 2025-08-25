
import logo_gif from "../assets/Logo.gif";
import './About.css';

const About = () => {
  // Textos completos de cada párrafo
  const fullTexts = [
    "Soy un estudiante de Informática de Venezuela, apasionado por la tecnología y la resolución de problemas a través del software. Mi enfoque principal es el desarrollo de software, pero también tengo interés en el soporte técnico y las soluciones de inteligencia artificial.",
    "Con conocimientos en Python, Java, C/C++, git/github, he desarrollado proyectos básicos y aplicaciones de programación lineal, sistemas expertos, etc... donde aplico conceptos teóricos a soluciones prácticas. También tengo experiencia en desarrollo web con HTML, CSS, JavaScript y TypeScript.",
    "Actualmente, estoy enfocado en expandir mis habilidades en tecnologías modernas como React, Django, FastAPI y desarrollo de programas de Python con uso de librerías para automatización de tareas y solución con IA, buscando siempre aprender y crecer como desarrollador."
  ];

  const [displayedTexts, setDisplayedTexts] = useState(['', '', '']);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const currentFullText = fullTexts[currentTextIndex];
    
    if (charIndex < currentFullText.length) {
      const timer = setTimeout(() => {
        setDisplayedTexts(prev => {
          const newTexts = [...prev];
          newTexts[currentTextIndex] = currentFullText.slice(0, charIndex + 1);
          return newTexts;
        });
        setCharIndex(charIndex + 1);
      }, 50); // Velocidad de escritura
      
      return () => clearTimeout(timer);
    } else {
      // Texto actual completado
      if (currentTextIndex < fullTexts.length - 1) {
        // Pausa antes del siguiente párrafo
        const timer = setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setCharIndex(0);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // Todos los textos completados
        setIsTyping(false);
      }
    }
  }, [charIndex, currentTextIndex, isTyping, fullTexts]);

  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <div className="about-intro">
          <div className="about-text">
            <h2>Sobre Mí</h2>
            <p>{displayedTexts[0]}{currentTextIndex === 0 && <span className="cursor">|</span>}</p>
            <p>{displayedTexts[1]}{currentTextIndex === 1 && <span className="cursor">|</span>}</p>
            <p>{displayedTexts[2]}{currentTextIndex === 2 && <span className="cursor">|</span>}</p>
          </div>
          <div className="about-image">
            <img src={logo_gif} alt="Imagen de perfil" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
