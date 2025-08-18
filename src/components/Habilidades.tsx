import './habilidades.css';

const Habilidades = () => {
    return (
        <section id="habilidades" className="habilidades-section">
            <h2>Habilidades</h2>
            <div className="habilidades-container">
                <div className="habilidad-card">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="habilidad-card">
                    <h3>Backend</h3>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className="habilidad-card">
                    <h3>Otras</h3>
                    <ul>
                        <li>Git & GitHub</li>
                        <li>Scrum</li>
                        <li>Extreme-Programming</li>
                    </ul>
                </div>
                <div className='habilidad-card'>
                    <h3>Desarrollo App Escritorio y App Experimental IA</h3>
                    <ul>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Habilidades;
