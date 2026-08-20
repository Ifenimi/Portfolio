export default function Footer({ profile }) {
  const year = new Date().getFullYear();
  const socials = profile.socials || {};

  return (
    <footer className="footer">
      <p>
        <span className="terminal__prompt">$</span> echo "&copy; {year} {profile.name || "YOUR NAME"}"
      </p>
      <div className="footer__links">
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noreferrer">
            Twitter / X
          </a>
        )}
        {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
      </div>
    </footer>
  );
}
