import "./Sociales.css";

const Sociales = () => {
  return (
    <div id="redes-sociales" className="Sociales-section">
      <h2>Redes Sociales</h2>
      <ul className="socials-list">
        <li>
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar LinkedIn"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            <div>
              <span className="label">LinkedIn</span>
              <div className="sub">German Gonzalez (ProgramaGerman)</div>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            <div>
              <span className="label">GitHub</span>
              <div className="sub">Completa tu usuario de GitHub</div>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Instagram"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            <div>
              <span className="label">Instagram</span>
              <div className="sub">Completa tu usuario de Instagram</div>
            </div>
          </a>
        </li>
      </ul>
      {/**
       * Para personalizar tus datos, reemplaza TU_USUARIO en los href de cada tarjeta:
       * - LinkedIn:  https://www.linkedin.com/in/TU_USUARIO
       * - GitHub:    https://github.com/TU_USUARIO
       * - Instagram: https://www.instagram.com/TU_USUARIO
       * Si quieres añadir más redes, copia un <li> y ajusta los colores en Sociales.css
       * usando nth-child o creando una clase específica.
       */}
    </div>
  );
};

export default Sociales;
