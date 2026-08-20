const LINKS = [
  { method: "GET", route: "/about", href: "#about" },
  { method: "GET", route: "/skills", href: "#skills" },
  { method: "GET", route: "/projects", href: "#projects" },
  { method: "POST", route: "/contact", href: "#contact" },
];

export default function Nav({ profile }) {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand">
        <span className="nav__prompt">$</span> {profile.name || "YOUR NAME"}
      </a>
      <nav className="nav__links">
        {LINKS.map((link) => (
          <a key={link.route} href={link.href} className="nav__link">
            <span className="nav__route">{link.route}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
