export default function Hero({ profile }) {
  const responseLines = [
    "{",
    `  "name": "${profile.name || "YOUR NAME"}",`,
    `  "title": "${profile.title || "Backend Developer"}",`,
    `  "location": "${profile.location || "YOUR CITY, YOUR COUNTRY"}",`,
    `  "status": "open_to_work",`,
    `  "years_experience": "${profile.yearsExperience || "X"}"`,
    "}",
  ];

  return (
    <section id="top" className="hero">
      <div className="hero__copy">
        <p className="eyebrow">Backend Developer Portfolio</p>
        <h1>
          {profile.tagline || "I build APIs, services and systems that stay up at 3am."}
        </h1>
        <p className="hero__summary">
          {profile.summary ||
            "REPLACE_ME: a couple of sentences about the kind of backend problems you like to solve."}
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View projects
          </a>
          <a className="btn btn--ghost" href={profile.resumeUrl || "#"} download>
            Download resume
          </a>
        </div>
      </div>

      <div className="terminal" aria-hidden="true">
        <div className="terminal__bar">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--yellow" />
          <span className="terminal__dot terminal__dot--green" />
          <span className="terminal__title">curl.sh</span>
        </div>
        <div className="terminal__body">
          <p className="terminal__line">
            <span className="terminal__prompt">$</span> curl https://api.
            {(profile.name || "yourname").toLowerCase().replace(/\s+/g, "")}.dev/v1/me
          </p>
          <p className="terminal__status">
            <span className="status-chip status-chip--200">200 OK</span>
          </p>
          <pre className="terminal__response">{responseLines.join("\n")}</pre>
          <p className="terminal__line">
            <span className="terminal__prompt">$</span>
            <span className="cursor" />
          </p>
        </div>
      </div>
    </section>
  );
}
