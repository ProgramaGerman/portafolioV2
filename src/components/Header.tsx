import logo from "../assets/LogoVerde.webp";
import './Header.css';

const Header = ({ theme , toggleTheme}) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo del Portafolio" />
          </a>
        </div>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#redes-sociales">Redes Sociales</a>

        </nav>
        <button onClick={toggleTheme} className="theme-switcher">
          <span>{theme === 'light' ? '🌙' : '☀️'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
