import logo from "../assets/LogoVerde.webp";
import './Header.css';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
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
        <button
          onClick={toggleTheme}
          className="theme-switcher"
          aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
          title={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
          aria-pressed={theme !== 'light'}
        >
          <i
            className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
