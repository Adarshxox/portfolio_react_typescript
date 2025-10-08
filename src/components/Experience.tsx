import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>

        <div className="cert-block">
          <h3>Luminar Technolab — Remote</h3>
          <p className="muted">Python Fullstack Intern (Full-time) — Dec 2024 - Present</p>
          <ul>
            <li>Full-Stack Forum Enhancements (Python/Django + React): Refactored legacy forum using Django for backend and React for a modern, responsive frontend, improving scalability and maintainability for large datasets.</li>
            <li>API-First Architecture with DRF: Converted key forum components to a RESTful API using Django REST Framework (DRF) to support a decoupled frontend.</li>
            <li>Real-Time Thread Updates: Integrated Django Channels and WebSockets for live updates on posts and threads with minimal latency.</li>
            <li>Containerized Deployment: Used Docker for consistent local development and production deployment; improved team collaboration and reduced environment issues.</li>
          </ul>
        </div>

        <div className="cert-block">
          <h3>Caadmax Edtech PVT LTD — On-site</h3>
          <p className="muted">Intern (Full-time) — Aug 2023 – Sep 2023</p>
          <ul>
            <li>Full-Stack Development with Java and React: Developed scalable, responsive web applications using Java for backend logic and React.js for an interactive frontend.</li>
            <li>Agile Team Collaboration: Worked in an Agile environment, participating in daily stand-ups, sprint planning, and code reviews to ensure timely delivery.</li>
            <li>Feature Implementation & Bug Fixing: Enhanced core features, optimized performance, and resolved critical issues to improve overall application stability.</li>
            <li>Version Control & Code Management: Used Git and GitHub for collaborative version control, ensuring clear documentation and streamlined code deployment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
