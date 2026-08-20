export default function About({ profile }) {
  const stats = profile.stats || [];

  return (
    <section id="about" className="section">
      <div className="section__header">
        <h2 className="route-heading">/about</h2>
      </div>

      <div className="about">
        <p className="about__text">
          {profile.summary ||
            "REPLACE_ME: Write 2-4 sentences about your background, what kind of backend problems you enjoy (scale, data modeling, distributed systems, reliability), and what you're looking for next."}
        </p>

        {stats.length > 0 && (
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
