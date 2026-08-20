import ProjectCard from "./ProjectCard.jsx";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="section__header">
        <h2 className="route-heading">/projects</h2>
      </div>
      <p className="section__hint">
        {projects.length} endpoints registered. Replace every REPLACE_ME field in
        <code> backend/data/projects.json</code> with your real projects.
      </p>

      <div className="endpoint-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
