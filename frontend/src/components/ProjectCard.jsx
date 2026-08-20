export default function ProjectCard({ project }) {
  return (
    <article className="endpoint-card">
      <div className="endpoint-card__row">
        <span className="endpoint-card__route">{project.route}</span>
        <span className={`status-chip status-chip--${String(project.status)[0]}xx`}>
          {project.status}
        </span>
      </div>

      <h3 className="endpoint-card__title">{project.title}</h3>
      <p className="endpoint-card__summary">{project.summary}</p>
      <p className="endpoint-card__description">{project.description}</p>

      <div className="tag-row">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="endpoint-card__links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--small">
            Source
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--small">
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
