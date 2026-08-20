export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="section__header">
        <h2 className="route-heading">/skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <h3 className="skill-card__title">{group.category}</h3>
            <ul className="skill-card__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
