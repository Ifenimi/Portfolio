import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import { getProfile, getSkills, getProjects } from "./api.js";
import fallbackProfile from "./data/profile.json";
import fallbackSkills from "./data/skills.json";
import fallbackProjects from "./data/projects.json";

export default function App() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [skills, setSkills] = useState(fallbackSkills);
  const [projects, setProjects] = useState(fallbackProjects);
  const [apiConnected, setApiConnected] = useState(false);

  useEffect(() => {
    // The frontend ships with local placeholder data so the site renders
    // instantly and still works if the backend isn't running. If the
    // Express API responds, we swap in its data instead.
    Promise.all([getProfile(), getSkills(), getProjects()])
      .then(([profileData, skillsData, projectsData]) => {
        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
        setApiConnected(true);
      })
      .catch(() => {
        setApiConnected(false);
      });
  }, []);

  return (
    <>
      <Nav profile={profile} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact apiConnected={apiConnected} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
