import './Habilidades.css';

const skills = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    title: 'Backend',
    items: ['Python', 'Java'],
  },
  {
    title: 'Otras',
    items: ['Git & GitHub', 'Scrum', 'Extreme-Programming'],
  },
  {
    title: 'Desarrollo App Escritorio y App Experimental IA',
    items: ['Python', 'C/C++', 'Java'],
  },
];

const Habilidades = () => {
  const duplicated = [...skills, ...skills]; // Duplicamos para scroll infinito suave

  return (
    <section id="habilidades" className="habilidades-section">
      <h2>Habilidades</h2>

      <div className="habilidades-carousel" aria-label="Carrusel de habilidades" role="region">
        <div className="habilidades-track">
          {duplicated.map((skill, idx) => (
            <div className="habilidad-card" key={`${skill.title}-${idx}`}>
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
