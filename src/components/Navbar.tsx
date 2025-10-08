import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const sectionIds = ['home','about','skills','projects','experience','education','certifications','contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Theme initialization and persistence
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const next = saved === 'light' || saved === 'dark' ? saved : (prefersLight ? 'light' : 'dark');
    setTheme(next as 'dark' | 'light');
    document.documentElement.classList.toggle('light', next === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('light', next === 'light');
    localStorage.setItem('theme', next);
  };
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home">Adarsh B</a>
        <nav className="nav-links">
          <a className={activeId==='about' ? 'active' : ''} href="#about">About</a>
          <a className={activeId==='skills' ? 'active' : ''} href="#skills">Skills</a>
          <a className={activeId==='projects' ? 'active' : ''} href="#projects">Projects</a>
          <a className={activeId==='experience' ? 'active' : ''} href="#experience">Experience</a>
          <a className={activeId==='education' ? 'active' : ''} href="#education">Education</a>
          <a className={activeId==='certifications' ? 'active' : ''} href="#certifications">Certifications</a>
          <a className={activeId==='contact' ? 'active' : ''} href="#contact">Contact</a>
          <a href="/Adarsh_B_Resume.pdf" target="_blank" rel="noreferrer noopener" download>Resume</a>
          <button className="btn theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
